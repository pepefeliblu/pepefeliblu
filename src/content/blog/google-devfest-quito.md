---
title: "Google DevFest Quito: A Journey into Modern Engineering"
pubDate: 2024-12-16
description: "Key takeaways on Data Architecture, Agentic AI, and Domain-Driven Design from GDG DevFest."
author: "Juan Rueda"
tags: ["devfest", "data-engineering", "ai", "ddd", "tech-community"]
---

<figure style="text-align: center;">
    <img src="/pepefeliblu/images/blog/dev_fest_badge.webp" alt="Google DevFest Badge" width="500" style="display: block; margin: 0 auto; border-radius: 10px;" />
    <figcaption style="font-size: 0.9em; color: #666; margin-top: 10px;">The volunteer got a bit nervous and skipped the 'n' in my name, so we had to perform a hot-fix and squish it in.</figcaption>
</figure>

This past month, I attended **[Google DevFest Quito 2025](https://gdg.community.dev/events/details/google-gdg-quito-presents-devfest-ecuador-2025/)** at Universidad San Francisco de Quito. While the event showcased the latest from Google, the real value lay in the architectural discussions that cut through the hype. It wasn't just about tools; it was about strategy.

Here are the key takeaways that are reshaping my perspective on modern engineering.

## 📊 Modern Data Architecture: Actionable vs. Just "Big"

*Speaker: [Erick Andre Naunay](https://www.linkedin.com/in/ericknaunay/)*

The industry definition of "Big Data" is maturing. It's no longer just about hoarding terabytes; it's about shifting from "data without action" to data as a competitive advantage. If your data doesn't drive decisions in minutes, it's just a cost center.

### The Shift to ELT
The classic ETL (Extract, Transform, Load) model is rigid and hard to scale. The modern approach is **ELT** (Extract, Load, Transform), where raw data lands first, and transformations happen within the warehouse.
*   **Transformation Layer**: Tools like [dbt (data build tool)](https://www.getdbt.com/) allow us to version, test, and document transformations like software code.
*   **Orchestration**: [Mage AI](https://www.mage.ai/) was highlighted as a modern alternative for orchestrating pipelines, integrating seamlessly with Spark and monitoring tools.

### The Medallion Architecture
To ensure quality, data should flow through distinct layers:
1.  **Bronze**: Raw data (Data Lake).
2.  **Silver**: Cleaned and filtered data.
3.  **Gold**: Business-level aggregates ready for consumption.

Crucially, **Kimball modeling** remains the gold standard for structuring this "Single Source of Truth," proving that foundational theory often outlasts trend cycles.

## 🧠 Agentic AI & The Local Web

*Speakers: [Braulio Otavalo](https://botavalo.com) & [Erick Wendel](https://ew.academy/)*

We are moving past the era of simple chatbots into **Agentic AI**—systems with memory, reasoning, and tool access. But the most interesting shift isn't in the cloud; it's in the browser.

### The Browser as an AI Runtime
Erick Wendel demonstrated that the web is evolving. With [Chrome's built-in AI APIs](https://developer.chrome.com/docs/ai/built-in), we can run LLMs locally. This solves two massive problems: **Privacy** (data never leaves the device) and **Cost** (no per-token fees).

### Small Language Models (SLMs)
The future is likely **Small Language Models**. They are operational, cost-effective, and fast. While they struggle with the O(n^2) complexity of transformers, for specific tasks, they blow massive models out of the water in terms of ROI.

*Other notables: [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) for standardizing tool access, and [llms.txt](https://llmstxt.org/) as the new `robots.txt` for AI crawlers.*

## ⚙️ Infrastructure as Code: Foundational, Not Optional

*Speakers: [Luis Carlos Reyes Vanegas](https://luisreyesvanegas.com) & [Camilla Martins](https://www.docker.com/captains/camilla-martins/)*

In 2024, "click-ops" is technical debt. Scalability, security, and maintainability must be baked in from day one.

The winning formula presented was **IaC + AI + Google Cloud**:
*   **[Terraform](https://www.terraform.io/)**: Provides the immutability and state management required for team collaboration.
*   **Traceability**: Every change is versioned. If it's not in code, it doesn't exist.
*   **Environment Parity**: Creating exact replicas of Prod in QA and Dev environments becomes trivial, reducing the "it works on my machine" syndrome.

## 🎨 Domain Driven Design: Organization as Code

*Speaker: [Tex Albuja](https://www.thoughtworks.com/profiles/tex-albuja)*

DDD is often treated as abstract theory, but Tex framed it as an organizational necessity. The biggest challenge in product teams isn't coding; it's **communication**.

### Event Storming
The highlight was a practical approach to Event Storming using a standardized color code for sticky notes:
*   **Orange**: Domain Events (Past tense verbs, e.g., `OrderPlaced`).
*   **Pink**: Problems/Risks.
*   **Blue**: Commands (Imperative, e.g., `PlaceOrder`).

This visual language allows the design to "emerge" naturally. By clearly defining **Bounded Contexts**, we ensure that changes in one domain (e.g., Shipping) don't ripple out and break another (e.g., Billing). It’s about keeping systems decoupled and maintainable.

---

*Thanks to the [GDG Quito](https://gdg.community.dev/gdg-quito/) team for hosting such a high-signal event. It’s exciting to see the local community converging on these global best practices.*
