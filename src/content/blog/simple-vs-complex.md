---
title: "Simple vs Complex: When to Level Up Your Solutions"
pubDate: 2026-01-05
description: "Navigating the trade-offs between simple implementations and complex systems, illustrated by a real-world SQL Unicode problem."
author: "Juan Rueda"
tags: ["architecture", "complexity", "engineering", "sql"]
---

<figure style="text-align: center;">
    <img src="/pepefeliblu/images/blog/simple_vs_complex.webp" alt="Complexity vs Simplicity" width="500" style="display: block; margin: 0 auto; border-radius: 10px;" />
    <figcaption style="font-size: 0.9em; color: #666; margin-top: 10px;">
        Complexity is like salt, essential in the right amount, but ruinous if you pour the whole shaker.
    </figcaption>
</figure>

I recently came across a dev commentary that sparked an interesting discussion about solution complexity. The scenario involved implementing an internal feature to convert natural language into [SQL](https://en.wikipedia.org/wiki/SQL) queries. A tenured engineer (with what you might call a god-like complex, pun intended) suggested building a complex [RAG](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) system in-house. The alternative? A simpler approach: connect [ChatGPT](https://en.wikipedia.org/wiki/ChatGPT) or [Claude](https://en.wikipedia.org/wiki/Claude_(language_model)) to a read-only database and teach users basic prompting techniques to generate the queries they need.

Both solutions work. But that's not really the question, is it? The real question is: **which solution makes sense for your constraints, your scale, and your team?**

## The Cost-Effectiveness Lens

I believe we need to weigh cost-effectiveness and necessity before jumping to either extreme. Let me share a personal example that illustrates this principle perfectly.

### The Unicode Book Name Problem

In our book catalogue system (names changed to protect the innocent), we encountered an issue with special non-ASCII characters in book names. The problem stemmed from using `VARCHAR` for the name field in our [T-SQL](https://learn.microsoft.com/en-us/sql/t-sql/language-reference) schema, which can't properly handle [Unicode](https://en.wikipedia.org/wiki/Unicode) characters.

The **correct solution from the start** would have been using [`NVARCHAR`](https://learn.microsoft.com/en-us/sql/t-sql/data-types/nchar-and-nvarchar-transact-sql) to support Unicode. But that comes with a cost: double the storage size for that field. It's a tradeoff that should have been made during initial design, but hindsight is 20/20.

That only solves half our problem anyway. We have existing books with malformed characters. The book masters want us to strip these characters out (yes, this will create some weird names temporarily, but there's a post-processing strategy to fix them later, bear with me).

### Iteration 1: The Naive Approach

The simplest solution? A straightforward UPDATE statement:

```sql
UPDATE Library.Books
SET Name = Library.cleanBookNameFn(Name)
WHERE Library.cleanBookNameFn(Name) != Name
```

Simple enough. If our cleaning function produces a different result, update the name. But this is inefficient. We're invoking the function **twice per row**, doubling our processing cost and locking the table longer than necessary.

### Iteration 2: Table Variables

An improvement would be using a [table variable](https://learn.microsoft.com/en-us/sql/t-sql/data-types/table-transact-sql) to separate the computation from the update:

```sql
-- Retrieve all books with dirty names
DECLARE @BooksWithDirtyNames TABLE (IdBook INT, CleanName VARCHAR(MAX))
INSERT INTO @BooksWithDirtyNames (IdBook, CleanName)
SELECT IdBook, Library.cleanBookNameFn(Name) as CleanName
FROM Library.Books WITH (NOLOCK)

-- Update book names in a single sweep
UPDATE Library.Books
SET Name = new.CleanName
FROM Library.Books b
INNER JOIN @BooksWithDirtyNames new ON b.IdBook = new.IdBook
```

Better. We're still calling the function for each affected row, but we're not locking the table during computation, only during the update. This assumes no users are actively updating book names with special characters (an edge case we can probably ignore).

This performs reasonably well for tables with up to a hundred thousand books, especially during off-peak hours. Even then, it might take 10+ minutes to complete.

**But what about larger tables?** What if you have hundreds of thousands (or millions) of records in a highly concurrent table that's central to your business logic? Suddenly, this "simple" solution becomes inefficient and unviable.

### Iteration 3: Batched Processing with Temp Tables

When simple reaches its limits, it's time to be more resourceful. For backfills on huge, highly concurrent tables, we need a different strategy: [batch processing with temporary tables](https://www.mssqltips.com/sqlservertip/5636/optimize-large-sql-server-insert-update-and-delete-processes-by-using-batches/).

```sql
-- Ensure the temporary table doesn't exist
DROP TABLE IF EXISTS #BooksWithDirtyNames

CREATE TABLE #BooksWithDirtyNames (
    IdBook INT PRIMARY KEY,
    CleanName VARCHAR(9000), -- Using MAX may be overkill
    Cleaned BIT DEFAULT 0 
);

INSERT INTO #BooksWithDirtyNames (IdBook, CleanName)
SELECT IdBook, Library.cleanBookNameFn(Name) as CleanName
FROM Library.Books
WHERE Library.cleanBookNameFn(Name) != Name

DECLARE @WindowSize INT = 2000; -- Fine-tune for optimal performance
DECLARE @CleanedRows INT = 1;
DECLARE @CleanedTotal INT = 0;

WHILE @CleanedRows > 0
BEGIN
    UPDATE TOP (@WindowSize) book WITH (ROWLOCK) -- Row-level locking prevents inconsistencies
    SET Name = new.CleanName
    FROM Library.Books book
    INNER JOIN #BooksWithDirtyNames new ON book.IdBook = new.IdBook
    WHERE new.Cleaned = 0;

    SET @CleanedRows = @@ROWCOUNT; -- Iterate until nothing left to update
    SET @CleanedTotal = @CleanedTotal + @CleanedRows 

    UPDATE TOP (@WindowSize) new
    SET Cleaned = 1
    FROM #BooksWithDirtyNames new
    WHERE Cleaned = 0;

    IF @CleanedRows > 0
        WAITFOR DELAY '00:00:00.100' -- Small delay allows other transactions to proceed
END

PRINT 'Total records updated: ' + CAST(@CleanedTotal AS VARCHAR(20));

DROP TABLE #BooksWithDirtyNames
```

Yes, this is definitively more complex. But we gain significant advantages:

- **Performance control**: We can fine-tune the window size for optimal throughput
- **Minimal disruption**: We don't lock a crucial table for extended periods
- **Flexibility**: We can run this during business hours if needed
- **Observability**: We can track progress and adjust on the fly

## The Principle: Iterate Deliberately

There's no universal "rule of thumb" or "one size fits all" solution. But I do believe in **systematic analysis and strategic iteration**.

Here's my approach:

1. **Start small and simple** - Implement the most straightforward solution first
2. **Analyze the impact** - Measure performance, identify bottlenecks, observe real-world behavior
3. **Understand the constraints** - Consider scale, concurrency, business requirements, and team capacity
4. **Have a clear goal** - Know what "good enough" and "excellent" look like for your use case
5. **Iterate deliberately** - Add complexity only when simpler approaches demonstrably fail

This way, solutions unfold organically and, most importantly, **logically and understandably**. You're following a process others can understand and replicate, dramatically reducing the "WTF per minute" metric (assuming we document clearly).

## Back to the RAG vs API Question

Returning to the original natural language to SQL scenario: maybe the simple API integration handles 90% of use cases perfectly. Maybe the complex RAG system is needed for security, offline operation, or specialized domain knowledge. The point isn't which is inherently better. It's understanding your specific context well enough to make an informed choice.

And sometimes, like with our book name cleanup, you start simple and discover you need to level up. That's not failure. That's engineering.

---

*Complexity is a tax you pay every time you touch the code. Make sure the purchase is worth it.*
