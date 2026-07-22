---
title: "Stickers, Ballots, and the Cost of Bad Design"
pubDate: 2026-07-22
description: "From the butterfly ballot to the Panini 2026 World Cup album: how bad design snowballs, and why 'it fits' is never proof you got it right."
author: "Juan Rueda"
tags: ["design", "ux", "world-cup", "everyday-things"]
image: "/pepefeliblu/images/blog/stickers-ballots-bad-design.webp"
published: true
---

<figure style="text-align: center;">
    <img src="/pepefeliblu/images/blog/stickers-ballots-bad-design.webp" alt="Illustration of a worried boy kneeling over a sticker album, holding a sticker and unsure which of two identical slots it belongs to" width="500" style="display: block; max-width: 100%; height: auto; margin: 0 auto; border-radius: 10px;" />
    <figcaption style="font-size: 0.9em; color: #666; margin-top: 10px;">
        It fits. That's the trap.
    </figcaption>
</figure>

Today I saw a video about the impact that a bad design and UX/UI combination can have when critical events are on the line. It talked about the voting ballots in the Bush vs. Gore election, and how bad design caused many people to vote for the wrong candidate, [Pat Buchanan](https://en.wikipedia.org/wiki/2000_United_States_presidential_election_recount_in_Florida), instead of Al Gore. Which, depending on who you ask, led to some very bad events (Iraq and other invasions) happening.

In my case, I haven't gone so nuclear (or so wrong). But I saw this exact phenomenon, at a much smaller scale, in this edition of the FIFA World Cup sticker album.

## A Ballot That Changed History

*Source: [99% Invisible, "Butterfly Effects"](https://99percentinvisible.org/episode/butterfly-effects/)*

The Palm Beach County "butterfly ballot" is the canonical example in design circles. Candidates listed on two facing pages, punch holes running down the middle. Gore was the second name on the left, but his hole was the *third* one. Thousands of people punched the second hole and voted for Buchanan without knowing it. Bush won Florida by 537 votes.

Nobody set out to sabotage an election. Someone just laid out a form, and it *looked* fine. That's the scary part: bad design doesn't announce itself. It fits.

## The 2026 Album: When "It Fits" Is Not Enough

My version of this story involves the [Panini](https://en.wikipedia.org/wiki/Panini_Group) 2026 World Cup album. This time, each sticker is identified by the country's [ISO alpha-3 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) plus an incremental integer per team (CAN 1, MEX 14, and so on). It is worth noting that in this edition, every team gets two pages.

In previous editions, each sticker had a unique identifier, one global incremental integer, and in the back of the album you had a table to keep track of your completion.

Those two differences saved us from so many problems I faced this time around.

### The problems, in order of appearance

- **You need external knowledge to navigate.** To find a team, you first need to know which group it landed in, just to get a rough idea of where it lives in the album.
- **Look-alike pages invite mistakes.** With two nearly identical empty pages per team, you run a real risk of pasting stickers onto the wrong team just because the layouts look alike.
- **The typography doesn't help.** The font choice is generic and hard to skim. It's less legible and less memorable, and that feeds directly into the confusion.

In a quirky way, modular and Bauhaus industrial design would be proud. But the actual experience, the *excitement*, is finding new stickers and pasting them in batches as you buy and trade. In practice, each team page is not memorable, so teams become pretty much indistinguishable, especially early on when the album is mostly empty. You have two blank teams that look alike, and you start pasting in the wrong spot.

And because it "fits", you keep pasting. The error snowballs. That's the butterfly ballot in miniature: no error message, no resistance, just quiet accumulating damage.

## The Root Cause Goes Deeper

The fix isn't cosmetic, because the problem roots in the World Cup's own graphic identity. The 2026 design language is homogeneous, round, and friendly. It looks good. But it is not optimized for information collection, translation, or interpretation.

Compare it to [Mexico 86](https://en.wikipedia.org/wiki/1986_FIFA_World_Cup), whose identity is still one of the most distinctive in World Cup history (and whose Panini album is, for my money, the best-looking one they ever printed). Distinctive, skimmable, memorable. Not a "fancy block of gold" centered brand exercise. Give me that, plus a proper mascot like [Naranjito](https://en.wikipedia.org/wiki/1982_FIFA_World_Cup#Mascot) from Spain 82. And kudos to Spain for winning it [this year](https://en.wikipedia.org/wiki/2026_FIFA_World_Cup_final), by the way.

## How I Would Fix It

- **Make each team visually distinct.** Something memorable, easy to read, easy to skim. Add real identifiers per page beyond a solid color from a monochrome palette. The country's shield would do wonders.
- **Bring back the unique sticker number.** One global index, like previous editions.
- **Put a completion table back in the album.** On the last page, so people don't have to rely on their phones. I have to confess I did: using an app to trade and track was fine. But think about literacy and the inclusion of marginalized economies, people who can't use a smartphone. The album should be self-sufficient. I'd encourage Panini to go back to their roots and ship something that keeps all the good things previous editions already figured out.

Third-party dependency is a common issue I see nowadays, and here even Panini depends on FIFA's design choices. The lesson travels well beyond sticker albums.

## Design Is Everywhere, So Is Bad Design

Anyway, not to bore you with more UX-ed technicalities. I think design is a crucial but overlooked aspect of everyday things. It is so pervasive, in fact, that we diminish its impact. [Don Norman wrote a whole book about it](https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things), and decades later we're still pasting stickers in the wrong slot.

---

*Look out for bad eXperiences.*
