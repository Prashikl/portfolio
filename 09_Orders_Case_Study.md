# Orders Customer Self-Serve (Enterprise Commerce)
**Designing a trusted, scalable self-serve ordering system for Partners, Operations, and Customers**

> *Some details are anonymised or generalised due to NDA and internal tooling.*

---

## 1) Executive Summary

Orders Customer Self-Serve was a multi-phase programme to transform enterprise ordering from **manual, operations-dependent workflows** into a **self-serve, scalable experience**, while preserving the core requirements of enterprise commerce: **trust, compliance, pricing accuracy, and operational auditability**.

Over multiple semesters, I evolved into the **design owner for Orders**, taking responsibility for strategy, end-to-end flow design, partner validation (cogwalks), design-to-dev execution, accessibility readiness, bug-bash/fit-and-finish, and launch success. My Orders work directly supported the organisation's consolidation goals and enabled retirement of legacy tools like **POET** and **VLCT**.

---

## 2) Links & Evidence Pack (Artifacts)

### Core Project Artefacts
- **MSEDS Orders Self-Serve POR (Phase 1):**
  [MSEDS Customer Self-serve Orders on MAC - Phase 1 POR](https://microsoft.sharepoint.com/teams/KaizenSustainmentMSEDSCustomerSelf-serveOrdersonMACPhase1/_layouts/15/Doc.aspx?sourcedoc=%7BECE7A905-650C-4A83-A5AB-D9BBE7B23FE7%7D&file=MSEDS%20Customer%20Self-serve%20Orders%20on%20MAC%20Phase%201%20POR.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1)

- **Design Walkthrough (Owned):**
  [MSEDS Orders Customer self serve - Design walkthrough (mp4)](https://microsoftapc-my.sharepoint.com/personal/planjewar_microsoft_com/Documents/Forms/DispForm.aspx?ID=460&web=1)

### Connected Program Artefacts (Ordering ecosystem)
- **eMSL Retirement to VL Central (spec):**
  [eMSL Build in VLC (docx)](https://microsoftapc-my.sharepoint.com/personal/rohitvarma_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7BC8F1872B-CFED-4111-B54D-1DD0535FF2FF%7D&file=eMSL%20Build%20in%20VLC.docx&action=default&mobileredirect=true&DefaultItemOpen=1)

- **Parity / Parity++ mapping (where Orders choices were tracked):**
  [eMSL Build in VLC Feature (xlsx)](https://microsoftapc-my.sharepoint.com/personal/rohitvarma_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7B59972B8C-8F90-4A95-B3C3-430C08CE1869%7D&file=eMSL%20Build%20in%20VLC%20Feature.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1)

### Local References
- [Connect Dec 2022](./Connect%20dec%202022.pdf)
- [Connect May 2023](./Connect%20May%202023.pdf)
- [Connect Oct 2023](./Connect%20Oct%202023.pdf)
- [Connect May 2024](./Connect%20May%202024.pdf)
- [Connect Nov 2024](./Connect%20Nov%202024.pdf)
- [Connect Apr 2025](./Connect%20Apr%202025.pdf)
- [Connect Nov 2025](./Connect%20Nov%202025.pdf)

---

## 3) Context (Why this mattered)

Enterprise ordering is not "checkout UX".
It is a high-stakes system where:
- pricing must be enrolment-accurate
- eligibility rules must be enforced
- compliance paths must not be breakable
- mistakes create downstream instability and trust loss

Earlier ordering experiences were fragmented and required operations support. This model became increasingly difficult to scale as the business grew. The organisation needed a scalable path that enabled self-serve while maintaining the integrity of the order lifecycle.

---

## 4) The Problem Statement (framed as a Senior PD problem)

**How might we enable Partners / Ops / Customers to create and manage orders self-serve, while ensuring:**
1. Trust in pricing, eligibility, and quote artefacts
2. Compliance and auditability
3. High throughput (bulk orders, large orders, complex scenarios)
4. Minimal operational touch and fewer escalations
5. A platform foundation that supports retirement of legacy tools (POET/VLCT)

This required balancing **experience clarity** with **system constraints** and building something that scales across multiple personas and order types.

---

## 5) My Role (Scope & Ownership)

I progressed from major module ownership to **design ownership for the Orders space**, responsible for:

- End-to-end ordering experience design (Phase 1 to Phase 2 and onwards)
- Partner and ROC/OSC cognitive walkthroughs to validate delighters, pain points, and usability gaps
- Design-to-dev execution support and UAT/pilot readiness
- Accessibility readiness (Grade C explicitly met for Orders/combined experiences)
- Fit & finish / bug-bash ownership (explicitly called out by leadership)
- Vendor management and quality uplift in parallel (credited by leadership)

---

## 6) What I Designed (End-to-End)

### A) Order Creation (Partner / Customer self-serve)
Key capabilities delivered or designed across phases included:

- **Multiple POs in a single order** (submit up to **50 orders at once**)
- **Bulk edits** for managing large orders (reported **60% reduction** in time for placing orders)
- **Multi-SKU search + order all workflow** (reported **>50% time reduction** for step-ups and additional products)
- A more scalable catalogue and product discovery approach (catalogue view reducing back-and-forth)
- Step-ups and additional products experience ("hero search" called out as faster/easier by partners)
- Non-EA order experience (noted as smooth delivery with minimal churn/pushback)

### B) Order Management (Partner)
- A simplified system for partners to manage orders, designed to improve proactivity and confidence (partner-validated)

### C) Operations (OSC / ROC) ordering workflows (retirement-critical)
Leadership explicitly framed Ops ordering as "a different scale" requiring backwards planning, multi-usecase coverage, and stakeholder sign-off. The work included complex use cases such as combined search, automation opportunities, special pricing issues, duplicate orders, flags review, and more.

### D) MSEDS Customer Self-Serve (MAC)
- Built the customer-facing self-serve path aligned to compliance rules and order types, explicitly called out as a critical charter and "already received a lot of acclaim" from leadership.

---

## 7) Design Approach (How I solved it)

### 1) Trust-first design (enterprise reality)
I treated trust as the primary UX KPI:
- clarity of constraints
- guardrails that enforce rules without breaking usability
- confidence in quote/order artefacts

This is explicitly reflected in my MSEDS self-serve ownership and outcomes ("days to minutes", "improved transparency", "preserves upstream accuracy and downstream stability").

### 2) Partner validation via cognitive walkthroughs (CogWalks)
I led/participated in multiple partner/ROC CogWalks to gather direct feedback and uncover blind spots.
Partner quotes recorded in Connects included:
- "**My head is spinning, This split works just grand, it's awesome**"
- "**this will make our lives super easy**"

CogWalks were also explicitly called out as contributing to insights, delighters, and opportunity discovery.

### 3) Strong design ops + execution partnership
I implemented clearer delivery mechanics over time:
- workshops/working sessions to drive clarity and transparency with stakeholders
- closer dev collaboration post-handoff to prevent pitfalls and support smoother implementation
- explicit fit/finish ownership and bug-bash collaboration across PM/Dev/Accessibility to increase adoption readiness

---

## 8) Explicit Metrics (Outcomes you can quote)

### Adoption & usage
- **+32% adoption in just one week** (Orders Phase 2 pilot)
- **Non-EA orders adoption reached 80% within 30 days of GA**

### Efficiency & throughput
- Submit up to **50 orders at once** via multi-PO capability
- **60% reduction** in time for placing orders via bulk edits
- **>50% time reduction** for step-ups/additional products via multi-SKU flow
- Partner users can carry out ordering tasks **~60% more efficiently**
- **>50% enhanced efficiency** for ordering upgrades/additional products
- **>70% boost in agility** after enabling multiple order creation/submission together

### Quality / compliance
- Orders + Credits GA delivered with **Accessibility Grade-C compliance met**

### Time-to-action narrative (customer self-serve)
- MSEDS self-serve design impact explicitly described as reducing order creation time **from days to minutes** and improving transparency.

---

## 9) Leadership Quotes (Verbatim - high signal)

### (A) Orders ownership + POET retirement recognition (Oct 2023)
> "Prashik... has mostly **single handedly delivered a large and key module that is going to help us retire POET**."
> "Overall, these past 6 months have seen Prashik really **grow into being the design owner for the orders space**!"

### (B) Growth + execution strength (May 2024)
> "You have shown **immense growth**... delivered two critical products - **orders and credits**."
> "A key call out is how you **took over credits and streamlined it in a week** after months of delays..."
> "Another important aspect... ownership of **fit and finish / bug bash** - an area that was often ignored..."

### (C) Tool retirement + measurable outcomes (Nov 2024)
> "The older tools like **POET and VLCT were successfully retired**."
> "Integrating the POET capabilities as VLC ordering was a huge opportunity and you have been an **amazing thinker and collaborator**..."

### (D) MSEDS acclaim + high visibility delivery (Nov 2025)
> "The MSEDS customer facing work was a **critical commitment for the org**..."
> "The MSEDS work has already received a lot of **acclaim from LT and execs**."

---

## 10) What this enabled (Strategic outcomes)

### 1) Legacy tool retirement and consolidation
Orders work was directly connected to retirement and consolidation outcomes:
- **POET retirement** (explicitly leadership-quoted)
- **VLCT retirement** (explicitly stated in Nov 2024 Connect)
- "single pane of glass" progress via unified ordering capabilities

### 2) Future foundation: automation and AI assistance
Orders design was repeatedly framed by leadership as an opportunity area for:
- automation
- digitisation
- customer self-serve expansion
- alignment with eMSL retirement and order automation programmes

---

## 11) Challenges & What I Learned (grounded)

### 1) Scale complexity and stakeholder pressure
- Navigating tight timelines and high-visibility retirement goals required strong planning, transparency, and design ops discipline.

### 2) Balancing craft and speed under churn
I explicitly learned to parallelise quick wins while maintaining long-term vision and quality under scope changes and delivery pressure.

### 3) Stronger advocacy & escalation earlier
Earlier in my growth arc, I learned to raise risks sooner rather than waiting for the "right time," reinforcing senior ownership behaviours.

---

## 12) Why this is Senior Product Designer work (clear proof)

This body of work demonstrates Senior-level signals:
- **System ownership** across end-to-end enterprise lifecycle
- **Judgement under ambiguity** (requirements evolving, retirement pressure, scale constraints)
- **Cross-functional leadership** (PM/Eng/Ops/QA alignment, exec-level visibility)
- **Measurable impact** (adoption, efficiency, throughput)
- **Trust & compliance first** (enterprise UX reality)
- **Platform consolidation outcomes** (POET/VLCT retirement)

Leadership explicitly describes this evolution:
- "grow into being the design owner for the orders space"

---

## 13) Appendix - Related Deliverables Adjacent to Ordering (linked to outcomes)

While the core case study is Orders Self-Serve, these adjacent deliverables contributed to the same ordering ecosystem outcomes:

- **Update Statement:** multi-year update statement time reduction from "10 days to 5 min"
- **CICR:** shipped/piloted; security risk flagged and escalated (security-first mindset)
- **Credits:** shipped with Orders; turnaround and GA protection explicitly called out by leadership

---

## 14) One-liner for recruiters (copy/paste)

**Led end-to-end enterprise ordering self-serve at Microsoft, delivering measurable adoption and efficiency gains and enabling POET/VLCT retirement through trusted, scalable UX.**
