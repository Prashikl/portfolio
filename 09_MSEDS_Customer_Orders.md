# MSEDS Customer Orders – Self‑Serve
## Source Index, Design Effort & Impact Mapping

> This document consolidates **all primary sources** that informed the  
> **MSEDS Customer Orders – Self‑Serve** case study and explicitly maps  
> **design effort → measurable impact**.

Some links are Microsoft‑internal and subject to NDA.

---

## 1. Core Programme Definition (What we built & why)

### Plan of Record (POR)
- **MSEDS Customer Self‑Serve Orders on MAC – Phase 1 POR**  
  [Open POR (SharePoint)](https://microsoft.sharepoint.com/teams/KaizenSustainmentMSEDSCustomerSelf-serveOrdersonMACPhase1/_layouts/15/Doc.aspx?sourcedoc=%7BECE7A905-650C-4A83-A5AB-D9BBE7B23FE7%7D&file=MSEDS%20Customer%20Self-serve%20Orders%20on%20MAC%20Phase%201%20POR.pptx&action=edit)

**Why it matters (design lens):**
- Established the **north star for self‑serve** (customer autonomy + ops safety)
- Defined **in-scope / out-of-scope** guardrails critical to UX decisions
- Anchored design on **SKU‑level pricing visibility and auditability**

---

### Scope of Work
- **MSEDS Scope of Work**  
  [Open deck](https://microsoftapc-my.sharepoint.com/personal/aasthatiwari_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7B15D422D8-C61C-43F1-8CC5-99FDFD991F25%7D&file=MSEDS%20Scope%20of%20Work.pptx)

**Design effort:**
- Translated contractual and pricing constraints into usable flows
- Designed for **true‑ups, step‑ups, new orders, reservation reconciliation**
- Ensured role‑based access and action visibility on MAC

---

## 2. Research & Problem Validation (Why self‑serve would work)

### Product Discovery & Design Direction
- **Orders PDD – Product Discovery Deck**  
  [Open PDD](https://microsoftapc-my.sharepoint.com/personal/aasthatiwari_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7BD5FE0636-8182-46AC-B62B-86FFB4C454EF%7D&file=Orders%20PDD.pptx)

- **PDD – Customer Self‑Serve Orders**  
  [Open deck](https://microsoftapc.sharepoint.com/teams/EnterpriseCommerceStudio/_layouts/15/Doc.aspx?sourcedoc=%7B90A05044-6409-4CA6-B72E-7D2A4B2BF787%7D&file=PDD%20Customer%20self%20serve%20orders.pptx)

**Design effort:**
- Synthesised customer pain points into **design principles**
- Reframed "self‑serve" from speed → **trust and confidence**
- Helped teams align on **what *must* be visible vs what can be abstracted**

---

### Customer Research & Feedback
- **Reservation & Mid‑Term Order – Customer Feedback (July 2025)**  
  [Open feedback deck](https://microsoftapc.sharepoint.com/teams/EnterpriseCommerceStudio/_layouts/15/Doc.aspx?sourcedoc=%7B65C5313B-986D-4797-B3DC-1158E3EC2BD3%7D)

- **Reservation Recon & Mid‑Term Order – Insights & Feedback**  
  [Open insights deck](https://microsoftapc.sharepoint.com/teams/EnterpriseCommerceStudio/_layouts/15/Doc.aspx?sourcedoc=%7B1E186B98-2414-4380-AEC6-077BFCA29602%7D)

- **Customer Self‑Serve POV (Behavioural & Value Lens)**  
  [Open POV](https://microsoftapc.sharepoint.com/teams/EnterpriseCommerceStudio/_layouts/15/Doc.aspx?sourcedoc=%7B5BE29B87-2C76-4A6B-9F5D-1A38F621E139%7D)

**Design effort:**
- Used cogwalk‑led validation to test **confidence, not just usability**
- Identified need for **proactive guidance + "flag for review" patterns**
- Informed bulk actions, pricing visibility, and audit trails

---

## 3. Design Execution (What I directly designed)

### UX & Content Validation
- **MSEDS Order UX Messages & Disclaimers Validation**  
  [Open doc](https://microsoftapc-my.sharepoint.com/personal/aasthatiwari_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7B66FF2F39-CEE8-452D-A692-BBD575960C07%7D)

**Design effort:**
- Ensured language matched **legal, compliance, and customer mental models**
- Removed ambiguous terms ("contract" → "enrolment")
- Reduced downstream MSEDS clarifications and rework

---

### Specs & North Star
- **PM Spec – Self‑Serve Mid‑Term Order & Recon (Phase II)**  
  [Open spec](https://microsoftapc-my.sharepoint.com/personal/aasthatiwari_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7B9147B316-8B38-4334-AB7B-17C0B6D02FFF%7D)

- **Internal PM Spec – MSEDS North Star**  
  [Open internal spec](https://microsoftapc-my.sharepoint.com/personal/aasthatiwari_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7B4E580EAD-F28F-4E4F-8EBD-20A4DDBABCAC%7D)

**Design effort:**
- Partnered with PM to shape **behavioural scenarios**
- Ensured design feasibility under RP, pricing, and compliance constraints
- Influenced fast‑follow prioritisation via UX risk signals

---

### Design Walkthroughs (Owned by me)
- **MSEDS Customer Orders – Design Walkthrough (Video)**  
  [Watch walkthrough](https://microsoftapc-my.sharepoint.com/personal/planjewar_microsoft_com/Documents/Forms/DispForm.aspx?ID=460)

- **Customer Self‑Serve Orders – End‑to‑End Walkthrough**  
  [Watch video](https://microsoftapc-my.sharepoint.com/personal/planjewar_microsoft_com/Documents/Forms/DispForm.aspx?ID=433)

**Design effort:**
- Used walkthroughs to align PM, Eng, Ops, and Leadership
- Surfaced UX risks early (validation gaps, cognitive load, flow breaks)
- Reduced late‑stage surprises before UAT / GA

---

## 4. Validation, Risks & UAT

### UAT & Delivery Tracking
- **Ordering & Orchestrator Program Tracking**  
  [Open tracker](https://microsoftapc-my.sharepoint.com/personal/nikotha_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7B5A7257CD-BC02-4226-8E87-3CFC515ABDE5%7D)

- **MSEDS Self‑Serve – UAT Delay & Mitigation (ADO)**  
  [View risk](https://dev.azure.com/CEPlanning/81f2f069-e37d-42bd-b483-6414973f9449/_workitems/edit/519845)

**Design effort:**
- Participated in bug‑bashes and UAT walkthroughs
- Logged UX‑critical issues (validation, messaging, affordances)
- Ensured no **trust‑breaking** issues shipped to GA

---

## 5. Demos & Leadership Visibility

- **MSEDS Self‑Serve Demo (LT / Exec)**  
  [Watch demo](https://microsoftapc.sharepoint.com/teams/MILANGlobal194/MBO%20Work%20Items/Forms/DispForm.aspx?ID=3)

- **FY26 H1 LT Visit – Top MBO Asks**  
  [Open deck](https://microsoftapc-my.sharepoint.com/personal/manook_microsoft_com/_layouts/15/Doc.aspx?sourcedoc=%7B28AE9DFB-07BE-490C-8747-23B301B63D89%7D)

**Design effort:**
- Helped shape the **before / after narrative**
- Positioned design as an enabler of **scale, not polish**
- Demonstrated self‑serve as a credible enterprise‑grade solution

---

## 6. Business Impact (From authoritative sources)

### Time, Cost & Scale
- **~77,000 hours/year efficiency equivalent**  
  [One‑pager](https://microsoftapc.sharepoint.com/teams/MSEDStopitems/_layouts/15/Doc.aspx?sourcedoc=%7B09A41047-7CF5-4646-818E-AC9A4723556D%7D)

- **$5.7M estimated cost avoidance (FY26–FY28)**  
  [ADO release](https://dev.azure.com/CEPlanning/81f2f069-e37d-42bd-b483-6414973f9449/_workitems/edit/124179)

**Design impact contribution:**
- Reduced manual ops dependency by making constraints visible upfront
- Prevented errors instead of recovering from them downstream
- Enabled scale without proportional headcount growth

---

## 7. Why This Design Work Matters

This case study represents:
- **Enterprise‑grade UX**, not consumer checkout design
- Productising a **high‑risk, high‑cost operational workflow**
- Design acting as a **business multiplier**, not a delivery function

**Core design outcomes enabled by this work:**
- Customer confidence to self‑serve
- Reduced operational friction
- Faster time‑to‑action
- Preserved trust, compliance, and auditability
- A reusable foundation for future automation & AI assistance

---

## 8. How to Use This File

You can safely use this `.md`:
- As **appendix evidence** for a promotion case
- As a **source index** linked from your portfolio
- As a **review artefact** with your manager or sponsor
- As grounding for **interview deep dives**

---

*End of document.*
