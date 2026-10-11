# OWP Workshop — Source Content (from the two recordings)

This is the single source of truth for page authoring. It consolidates the two
OWP workshop recordings:

- **The delivery-methodology recording (GMT20260701)** — first ~59 min only (up to the coffee break): the
  **app-led delivery methodology**. Architecture, the PATH framework, and the
  WFB/budgeting walkthrough happened *after* the break and were **not recorded**.
- **The CPP deep-dive recording (GMT20260702)** — the **Continuous Position Plan (CPP)** deep dive:
  WFB→CPP bridge, workspace, plan actions, transfers, skills matching, security /
  selective access, Optimizer futures. Ends before the org-modeling / RIF /
  hiring-freeze demo, which was **not recorded**.

**Presenters:** Emmanuel Bapt (Anaplan Professional Services, Paris; involved in
the first OWP project in Europe) — the delivery-methodology recording. An unnamed **OWP Delivery
Advisor** (deep roadmap/product answers). **Anju Rao** (Anaplan; ~15 yrs
professional services, now product side) — the CPP deep-dive recording. Audience is
Anaplan **delivery partners**.

> **Authoring rule:** Do not invent product detail beyond what's here. Where a
> topic is referenced but not shown on the recordings, use a
> `[PENDING SME input]` note (see CLAUDE.md). Anything roadmap-related is under
> Anaplan's safe-harbor caveat — say so.

---

## A. What OWP Is (→ 01-owp-overview.html)

- **OWP = Operational Workforce Planning** — a pre-built Anaplan **app** (part of
  the apps suite alongside IFP, Supply Chain, T&Q). Delivered as a working
  application, not built from a blank model. Version discussed: **2.1** (a **2.0**
  model was used for one demo because it had a "better data set").
- **Two halves of the application:**
  - **WFB = Workforce Budgeting** — the budgeting side; where budgeted / planned
    positions are created.
  - **CPP = Continuous Position Plan** — the dynamic, day-to-day operational side.
    (Slides mislabel it "continuous forecast"; the presenter repeatedly corrected:
    *"it says continuous forecast, but it's the continuous position plan."*)
- **Plans at position + employee level.** *"You have employee, you have position,
  you plan empty position, and then you assign employees."* Data is planned "as a
  position, employee, location, job role, legal [entity]." Built on **position
  management** as the best-practice approach to workforce planning.
- **Management org (supervisory org):** *"Half of the application is built off of
  this concept of management org."* Customers with no supervisory-org concept can
  still use it, but must be taught it and have it built with them.
- **The closed-loop / plan-to-hire problem OWP solves:** finance does the budget,
  HR plans positions, talent recruits — usually disconnected, communication taking
  months. *"No link between what we're planning, what we're actually budgeting for,
  and what's actually getting recruited for."* Anaplan implemented OWP internally
  to solve this.
- **Position lifecycle:** create position in OWP → export to HCM (Workday) →
  position filled by a worker → actuals flow back → full history visible (who filled
  a role over time, comp over time, moves). Position states: **filled / planned /
  open / closed.**
- **APID = Anaplan ID:** *"the thing that keeps all of this together."* A code
  assigned when a position is created in OWP; written back into the HCM system as a
  field; the key that follows the position through every system for the whole
  lifecycle.
- **Hard fit limit:** if a customer refuses to plan at position level (wants
  employee-only planning), *"the app is very far from their needs"* — a fundamental
  mismatch, not an extension.

---

## B. App-Led Delivery (→ 02-app-led-delivery.html)

- **Traditional Anaplan delivery** ("the blank piece of paper"): build from scratch
  — requirements, workshops, sprint reviews/planning, deliver sprints, UAT, repeat.
- **App-led delivery:** start *with* a pre-built app that already contains structure
  and logic. *"The first action in an Anaplan-app way for [an] application is to
  load data in it."* Sequence: **load data → set/configure the app → customize /
  extend only what's needed.**
- Rationale: the app contains **hundreds of modules**, built-in best practices,
  delivered workflows, and ADO connections. Rebuilding from scratch would be
  *"months of project just to reach this amount of components."* So: **"set it
  first, and then customize"** to use the most of the app's capabilities.
- **Anti-pattern:** customers trying to **"lift and shift"** their current process
  into the app *"is not really what we should be doing."* When a customer wants to
  fundamentally change the core, the conversation is *why* — and whether that thing
  even belongs in OWP or should live elsewhere.

---

## C. The Delivery Lifecycle (→ 03-delivery-lifecycle.html)

Four phases:

**Phase 1 — Pre-project**
- A **deep-dive demo** of the app: show what it does, understand what the customer
  wants to use.
- Activities: **discovery workshop**, review **functional scope**, and a
  **data-readiness** assessment (can the customer bring employee, job-role,
  compensation data — yes/no?).
- Deliverable: **Statement of Work (SOW)**, high-level scope/compatibility.
- **Templates + solution guide are shared before kickoff** (see §E).

**Phase 2 — Configuration** ("data is the most important part")
- Entirely **data-driven and iterative.** Use templates to capture the right level
  of detail per dimension, the right number of hierarchy levels, the right
  properties.
- Most work is **on the customer side**: they design and extract data from their
  systems into the expected templates.
- **Iterative loop:** load data → find missing info / mismatched codes → go back to
  customer for a new file or fields → reload. *"You load data… and then share with
  the customer: Are you happy with this data? Is this your data? Do you recognize
  your hierarchy?"*
- **Settings** done in config pages: currency, current date, number of roles,
  approvers, which workflow to deliver, etc.
- Output: **an app running with data, ready to use.** Then an **onboarding
  workshop** with the customer.
- Teams can **duplicate the app** to test multiple settings and **restart from zero**
  using stored templates.

**Phase 3 — Two paths from a configured app**
- Customer happy as-is → **test / UAT** (user-testing scenarios), then use as-is.
- Customer needs more → **extensions**: additional report, a new dataset not in OWP,
  a new rule/calculation.
- Test and extensions can run **both ways** (postpone test to wait for an extension,
  or test first).

**Phase 4 — Extension design & delivery**
- Delivered as a **regular Anaplan change**: write stories, plan a sprint, deliver,
  test.
- What's different is *how you design*, because you're changing a fully functional
  ~200-module app — the focus is **not to break something that's working.**

---

## D. Extensions vs. Core Changes (→ 05-extensions-vs-core.html)

- **Rule of thumb: add, don't change.** Add a new page, a **new line item to a
  system module**, a new calculation → *"easy extension without changing the core
  app."*
- **If you must change the core app:** consult the Anaplan **TS team / Delivery
  Advisor** for the most effective, upgradeable way. Versions: *"today we are 2.1,
  then we have 2.2, 3.0, and so on."* Goal: **upgrade the app without breaking the
  extension.**
- Anaplan is **building tooling to identify what was delivered by the app vs. what
  was customized** (the **PATH** application framework — deferred to after the
  a segment not captured on the recordings, so not detailed on the recording → `[PENDING SME input]`), so at
  upgrade time they can determine what needs to change.
- **Impact depends on scope:** changing a list few modules depend on = low impact;
  changing a **core list (position, supervisor/management org)** = design
  conversation with Anaplan required.
- **Fit expectation (candid numbers):** out of the box OWP covers **"60 to 70%"**
  (also framed as "60%") of what a customer wants; the other **30–40%** is
  extensions/configurations/customizations. (The **60/40 rule**.)
- **Best practice — big extensions go in a separate model:** cautionary tale — a
  customer built an entire **detailed contractor** capability *inside* OWP on an
  older version; in hindsight it should have been a **separate model feeding data
  into OWP**, to avoid data/module/processing bloat.
- **Bad data or bad process in → bad out.** *"No Anaplan model or application is
  going to fix a bad process."* Lay out change management **up front, in the sales
  cycle / at the outset.**

**Delivery Advisor role:** not there to teach partners how to build (*"you guys are
stronger architects than I am"*). Customer-facing advisory: understand the
requirement, advise **where** to build an extension and how to link it in, warn when
a requested feature is **already on the roadmap** (so the customer prioritizes
elsewhere), and flag when a requested core change threatens upgradeability. There
should be a Delivery Advisor for **EMEA** and **APAC**.

---

## E. Data Templates & Readiness (→ 04-data-templates.html)

- **Templates = an Excel file with multiple tabs**, one per object: **position file,
  employee file**, etc. Each tab/field flagged **mandatory Y/N**. Customer matches
  their data to it and reports what's available/not.
- Templates + **solution guide** + documentation given **during the sales cycle /
  when the deal is signed** — **before kickoff.** Aim: 1–2 template review meetings
  before kickoff.
- Data loaded via the app's **import action** (not a "load rule" — the presenter
  corrected himself).
- **Mandatory vs non-mandatory:** you do **not** need 100% of data. Missing
  **attrition** → OK to move on. Detailed **compensation** can come later (use a
  compensation account later). But **clean position data and a clean
  position→employee link are needed to start** — hard to start without them.
- **Start with dummy structure:** the built-in **5-level budget hierarchy** can use
  dummy levels; remove useless levels later in the extension phase.
- **Hierarchies that build the app:** 2–3 hierarchies drive it — a **planning
  hierarchy for budget**, a **planning hierarchy**, and the **job-role hierarchy** —
  often started at 3–4 (or 5) levels; reconciling customer granularity to the
  template is the key config discussion.
- **Config workshop cadence:** roughly **every two days** — separate workshops for
  data, budget process, project process — run with the **data-management team, HR
  BP, and Finance** (Finance cares about granularity to connect the finance app).
- **Dirty HR data:** HR data from **Workday / SuccessFactors** is *"very dirty."*
  Classic problem: **"zombie positions"** — positions created years ago, never
  filled, doing nothing. Loading HR data into structure surfaces **red flags** and
  is an opportunity for the customer to clean up. *"Getting the data is the hardest
  part"* (Amanda).
- **Dev-data best practice:** don't use full production data for development.
  **"Start with a small data set, then increase it as you go into different
  environments"** (also framed for **Polaris**). **Fake the comp:** *"For
  compensation numbers, just make everyone $100,000, or $10,000"* — accuracy doesn't
  matter early; **"we need to get the math to work"** first, then load real
  production data.
- **You can't build workforce planning without the data:** if a customer wants
  workforce planning they *must* provide position/employee/location/job-role data
  eventually. Identify what they can/can't provide in pre-project; some app
  functionality simply won't work until the data is there.

---

## F. Delivery Timeline (→ 06-delivery-timeline.html)

Presenter's **optimistic** timeline (*"in projects, I never have seen this one"*):

- **Week 0 (1–2 weeks):** pre-project — meet business users, understand ingestible
  data, high-level coverage → green light. **Templates provided before kickoff.**
- **Weeks 1–3:** configuration — every-two-days workshops; iterate "take data, load
  data, change data, reload data," set pages → app available.
- **Weeks 4–6+:** testing and extensions — duration depends on number of extensions.

**Realistic guidance: double the time.** **Week 0 alone can take a month.** *"The
data is the long pole in the tent… the worst part."* Start data prep ~3 weeks before
the project. Delays come from customers needing IT/Workday teams to build new
reports/fields, or customers who **don't yet know what they want** (no prior
workforce-planning experience). Customers with a prior WFP app go faster ("just
connect the dots").

---

## G. Integration & Architecture (→ 07-integration-architecture.html)

- **Why not plug straight into SuccessFactors and do the full ETL?** You **can** —
  data prep is *"one of the most-used extensions."* But it's **not part of the app**;
  it's a separate service/model that parses the customer's one big file into the
  templates. The app just needs data in the template **structure** so the **import
  action** works. Any tool is fine — **Workday RaaS export + API, Informatica off
  Snowflake, NEO / DataHub, CloudWorks** scheduling. Do proper integration **after**
  the app is running and the required data is proven.
- **Are the apps built with integration in mind?** Yes. Some apps ship with data
  hubs, some don't, but *"the plan is to move every single app to just use ADO"*
  (**Anaplan Data Orchestrator**) as the central inbound conduit.
- **Closed-loop planning:** plan positions inside Anaplan, then **get planned
  positions back into the HCM system to be filled.** OWP ships **modules and pages
  to export positions**; export can be triggered by API, done manually, or scheduled
  via workflow. Custom export modules are an **easy extension with no impact on the
  app.**
- **UDM — Unified Data Model** (roadmap, safe harbor): analogous to **Oracle DRM** —
  a **shared library of metadata.** Instead of replicating (e.g.) a **cost-center
  hierarchy** across 4–5 apps/ADO instances, hold it once in the UDM and use **ADO +
  workflow** to push it to multiple apps (IFP, OWP, Supply Chain, T&Q)
  simultaneously. *"That's where we're moving to."*
- **HCM systems referenced:** Workday (primary example), SuccessFactors, generic
  HCM, ATS, talent/recruiting systems.
- **Architecture / PATH detail** proper was in a segment not captured on the recordings → `[PENDING SME
  input]`.

---

## H. Workforce Budgeting — WFB (→ wfb-01-overview.html) — MOSTLY PENDING

Not walked through on the recordings (not captured on the recordings). What we know:
- WFB is the **budgeting half** of OWP — where **budgeted / planned positions** are
  created before they sync into the CPP.
- Uses a **budget hierarchy (BH)** — the built-in **5-level** hierarchy (dummy
  levels allowed at first).
- Budget work happens in **iterations** (e.g. a **"baseline"** iteration) that get
  **pushed / synchronized** into the CPP once the budget is closed (see §J).
- Finance cares about **granularity** to connect the finance app (IFP).
- **Everything beyond the above is `[PENDING SME input]`** — mark the page clearly.

---

## I. CPP Overview (→ cpp-01-overview.html)

- **Continuous Position Plan** — *"this landing area really for HR and finance and
  talent to look at this dynamic view of the organization."* A dynamic, day-to-day
  view of the org: hires, transfers, promotions, sabbaticals, movement, backfills —
  linked to finance (budget / forecast / plan / actuals).
- **Roles that enter the CPP:** HRBPs, Finance, management-org owners, talent
  acquisition, workforce planners, comp analysts, cost-center owners.
- **Views:** filled positions, plan positions; cost & position views comparing
  **forecast vs budget vs CPP vs actuals.**
- **Plan actions vs Analytics** split (Plan actions: create a position, create many
  positions, edit plan positions in bulk, transfer positions, transfer workers,
  worker departures).
- **"More of a best practice for workforce planning"** — planning by position
  (filled/planned/open) rather than by headcount.
- **Directs vs. indirects:** the management/supervisory org list is kept **flat**
  because people can live at an upper level but also in orgs below; hierarchy is
  reconstructed in the back end for aggregation and security.

---

## J. WFB → CPP Bridge (→ cpp-02-wfb-bridge.html)

- In the budgeting side you **push / synchronize** a budget iteration (e.g. a
  **"baseline"**) into the CPP.
- Grid shows planned positions (e.g. "senior IT specialists," "VPs of R&D"), the
  **budget hierarchy** they map to, their **management org**, **target start dates**,
  and costs.
- Before syncing you can **preview the potential impact to the plan** — by individual
  org (example: the "compliance team") or globally.
- This is an **admin action**, done once the budget is closed; it pushes all planned
  positions into the CPP.

---

## K. The CPP Workspace (→ cpp-03-workspace.html)

- **Position plan grid** columns: which positions are filled, worker names, org,
  associated cost center, mappings, costs, location, and where a plan position was
  created (forecast vs budget).
- **Worker cards / KPIs** (customizable, removable): tenure, position, location, and
  optionally **gender, generational distribution, race, ethnicity, performance
  rating** — defaulted to "unlisted" or removed if the customer declines (a
  per-customer DEI toggle).
- **"Start anywhere, go everywhere"** — links at top for **job profile** and
  **management org.**
  - **Job-level detail page:** job level details; orgs that have this job; workers
    across the org with this job; **required skills, proficiency level, and whether
    it's a critical skill.**
  - Drill to a **worker** (example: **Dorothy**, San Francisco) → start date, tenure,
    position, comp breakout, **compa-ratio**, performance rating (if loaded).
  - Pivot to an **org** (example: **AR / accounts-receivable org**) → e.g. 3 filled
    positions (**Nisha**, sales rep), workers, locations, an **org-chart** widget;
    from there create a position or depart a worker.

---

## L. Create & Edit Positions (→ cpp-04-positions.html)

- **Plan actions:** create a position, **create many positions**, edit plan
  positions (bulk).
- **Worked example — fine-tune fully-loaded cost (a sales rep):** out-of-the-box
  assumption **$78,000.** Scenario: add a **10% annual bonus** and reduce base to
  **$75,000** ("Adjust value… minus 5,000"). Result: **~$7,300** annual bonus and
  the position created at **~$80,000** instead of the $78k baseline. Point: the CPP
  allows more precise, negotiation-aware costing than the budget side.
- **Guardrails via dynamic text** instead of hard action errors — e.g. *"you don't
  have write access,"* *"your time to hire is too short for creating a position"* —
  because *"error reporting in Anaplan is not super great."*
- **Queue** exists in editing plan / requested positions. (No approval *queue* for
  creating positions — see §N Q&A; **Workflow** routes requests instead.)

---

## M. Position & Worker Transfers (→ cpp-05-transfers.html)

- **Position transfer — worked example (Benjamin Rose):** currently at company
  level; transfer to another org on a set date. Shows impact on both source and
  destination org (total positions). **Cost-center override** example: transfer to an
  org but align cost to **"Field Sales EMEA"** instead of the default "outside sales"
  cost center (a customer enhancement that breaks the one-to-one org↔cost-center
  mapping). Enter a **reason**, set a **schedule date**; when the model rolls to that
  date the position moves and actuals align as HCM data arrives.
- **Worker transfer — worked example (Yumiko):** senior hardware engineer, senior
  associate, **London.** Search all planned/open positions in the CPP filtered to
  "hardware": finds open **senior hardware engineer** roles and a **senior director
  of hardware engineering** (would require a move to **Boston**). Alternative: an
  **EA** role in London. Illustrates internal-transfer cost savings and the
  **backfill vs. close** flag — e.g. in October the vacated position ID flips to
  **open** (backfill) or **closed** (close).
- **Limitations:** transfers are **one at a time** — **no mass transfer** yet
  (future enhancement). **No approval process** on transfers — it just executes when
  the date hits (approvals on transfers logged as a good future enhancement).
  Transfers scheduled at the **month level**, not day level.

---

## N. Skills Matching (→ cpp-06-skills-matching.html)

- **Worked example:** search workers by skills (accounts payable, financial
  analysis, financial modeling, planning) with a **match threshold**: **75%** (too
  high) → **50%** → **25%** (best results). Drill to **Jennifer Hills** to check
  role, tenure, performance. Example job **General Counsel** with **regulatory
  compliance** as a **critical skill**, to illustrate a future weighting module.
- **Gotcha:** **skills data is very dirty** — *"you have people that spell planning
  with four N's."* Skills matching is a **manual process out of the box.**

---

## O. Org Modeling, RIF & Hiring Freeze (→ cpp-08-org-modeling.html) — PENDING

Announced but **not recorded.** Known only as a heading:
scenario org changes including **RIF (reduction in force)** and **hiring-freeze**
planning. Mark the whole page `[PENDING SME input]`.

---

## P. User Roles & Security Model (→ sec-01-roles.html)

- **User-roles slide** (*"John Pitstick hates this slide"*): **user roles** down the
  left — Workforce planners, Analysts, HRBPs, People leaders, Talent acquisition,
  Comp & rewards, FP&A — and **features / functionality buckets** across the top,
  showing out-of-the-box access.
- **UX page-security matrix slide:** categories, pages, which model each page applies
  to, and per-role access (workforce planner, HRBP, Finance) — all customizable.
- **Note:** Anaplan allows only **one model role per user**, but **UX-page access can
  be modified** (remove/change) to simulate multiple.
- Full role/matrix content to be sent as documentation afterward (so some detail is
  `[PENDING SME input]` — the *structure* above is known, the exhaustive cell-by-cell
  matrix is not).

---

## Q. Selective Access (→ sec-02-selective-access.html)

- **Security management hub (2.1):** select a user (examples: Alex, Mariah, Anna),
  grant **write access** to an org (e.g. "global sales") → **automatically cascades**
  to all underlying management orgs (despite the flat list) **and** to all positions
  aligned to those orgs.
- Works from the **budget-hierarchy (BH)** side too — grant against everything under
  "Operations" → cascades to all cost centers underneath + budget positions.
- Also manages users once added: change model role, review/update — all through the
  UX, immediately writing back to the model.
- **Copy access:** no dedicated "copy from user to user" button, but you can
  **copy/paste the access rows** to another user and push to models — works across
  all models.
- **ALM / upgrade nuance:** an upgrade **shouldn't** overwrite selective-access
  changes (builders don't modify selective access) — *"only if we change it on our
  end will it overwrite."* A nuance about where security is implemented (dev vs UAT,
  ALM to UAT) was **logged as a question** to the internal product framework team →
  `[PENDING SME input]`. Ideally the upgrade ignores/clears selective access.
- Selective access **governs everything a user sees** — drop-downs, positions,
  transfer targets.
- Manual would be a *"nightmare"* for a 40–50k-person org — the cascade is the point.
- **Job levels / framework are foundational** — you **cannot create new job levels in
  OWP**; create them in Workday/HCM and bring them in.

---

## R. Optimizer & Future Use Cases (→ 90-optimizer.html)

- **Optimizer** = an **extension**, and only on **Classic** today; **Optimizer on
  Polaris targeted by end of year** (safe harbor).
- Future use cases: **span-of-control** issues, **critical-skill concentration**
  (e.g. all machine-learning skills in one org), skill **redistribution.** Example:
  an org of **~400 people** with span-of-control issues and critical-skill
  concentration.
- Would require a **weighting module** (skill required = weight 1 or 3; critical
  skill = +; expert proficiency = higher). Variable could be **cost** or
  **skill-fit** — not fully thought through yet.
- Working with **Adam Rhodes** (Anaplan pre-sales, UK) on this later in the year.

---

## S. OWP as a Foundation (→ 91-foundation.html)

- OWP positioned as a **foundation** (not a point solution). Once people +
  positions + skills + performance are normalized, it feeds **PRP (Project Resource
  Planning)**, **capacity planning**, **demand planning**, contact-center planning,
  go-to-market capacity. *"Your demand is your people."*
- Ties into the **agentic CFO / AI** vision sitting on top of OWP + Finance + PRP.
- **PRP** is the pointer for project/skills/visa-type staffing questions.
- A couple of customers are **linking Forecaster into OWP.**
- Presented at Anaplan's conference (**Connect**) — workforce-planning-as-foundation
  and the agentic-CFO material.

---

## T. Q&A from Sessions (→ 92-qanda.html) — group verbatim; strip participant names

**Delivery / methodology:**
- *Sample/dirty/unavailable data — how to tackle?* Customer must provide it
  eventually; identify in pre-project what they can/can't provide; work with the data
  team in config. Some data is mandatory (used by app nodes/processes), some isn't —
  you can start without 100%, but *"as far as this data is not provided… some part of
  the app will not be functional."*
- *Why fill templates instead of Anaplan connecting straight to SuccessFactors and
  doing the ETL?* You can — but it's a separate service/extension, not part of the
  app; the app just needs data in template structure for the import action. Do proper
  integration after the app runs. (See §G.)
- *Are the apps built with integration in mind?* Yes — moving every app to **ADO**.
- *Can selective-access changes / added hierarchy levels survive upgrades?*
  Selective access is generally safe to change post-setup; adding a level inside an
  existing hierarchy that selective access depends on is riskier — discuss with
  Anaplan.

**COE / fit:**
- *Role of a COE with packaged apps?* Apps aren't self-sustaining; the COE shifts
  from building to managing (users, new reports, formula/cost changes, year-over-year
  rollovers, extensions). Value = time saved not building ~1,000 modules / ~130 UX
  pages / a data hub. *"No COE wants to spend time building a data hub."*
- *On the 60/40 fit, how often tell customers to accept it or change process?* Most
  app buyers want best practice; **OWP implementations go hand-in-hand with process
  change** (e.g. stop creating planned positions in Workday, do it in Anaplan). Some
  things can't be done (platform limits). Re-architecting can break the app.
  Cautionary tale: detailed contractor capability built inside OWP should have been a
  separate model. (See §D.)

**CPP / transfers / security:**
- *Can you mass-transfer positions?* **No** — one at a time; mass transfers are a
  future enhancement. You can only transfer positions/orgs you have access to.
- *Is there an approval process for transfers?* **No** — it executes when the date
  hits. Approvals for transfers logged as a good enhancement.
- *What if you need to transfer to an org you don't have access to?* Modify access or
  have a higher-access user do it — suggests approvals as the better path.
- *Why not an approval queue for creating/requesting positions?* A queue needs
  someone to manage it; **Workflow** routes directly to the right person/delegates
  instead. (A queue does exist in editing plan/requested positions.)
- *Batch approvals?* **Batch approvals for workflow shipped ~1.5 weeks ago** (approve
  ~20 at once). **Not yet incorporated into the app**, expected soon.
- *Will granting selective access to a flat org cascade to positions?* **Yes** — 2.1
  builds a hierarchical view and cascades to underlying orgs and all aligned
  positions; works from the budget-hierarchy side too.
- *Will an upgrade/ALM overwrite selective-access changes?* *"It shouldn't"* —
  logged a nuance to the product framework team. (See §Q.)
- *Can you copy security access from one user to another?* No dedicated button, but
  copy/paste access rows and push to models.
- *Can you create new job levels in OWP?* **No** — foundational; create in Workday/HCM.
- *(Optimizer) what would the variable be — cost?* Not fully decided; cost or
  skill-fit; needs a weighting module; Optimizer is an extension, Classic today,
  Polaris EOY. (See §R.)
- *(Project/skills/visa-type staffing)* → points to **PRP** and OWP-as-foundation.

---

## U. Named entities (for consistent spelling)

**People (Anaplan):** Emmanuel Bapt (PS, Paris); Anju Rao (product); John Pitstick;
Adam Rhodes (pre-sales, UK); an unnamed OWP Delivery Advisor. **Demo personas
(sample data):** Dorothy (SF); Nisha (sales rep, AR org); Benjamin Rose; Yumiko
(senior hardware engineer, London); Jennifer Hills. Security-hub examples: Alex,
Mariah, Anna.

**Products / features:** OWP (2.1 primary, 2.0 secondary), WFB, CPP, IFP, T&Q, PRP,
Optimizer, Forecaster, CoModeler, Workflow. Platform: Anaplan Classic and Polaris;
ALM; ADO (Anaplan Data Orchestrator); UDM (Unified Data Model); PATH (application
framework). **Keys/concepts:** APID (Anaplan ID), BH (budget hierarchy),
management/supervisory org, compa-ratio, span of control, critical-skill
concentration, zombie positions, 60/40 rule, closed-loop / plan-to-hire.

**Systems:** Workday (primary HCM), SuccessFactors, ATS, Informatica, Snowflake,
NEO/DataHub, CloudWorks (scheduling). **Event:** Connect (Anaplan conference).

> **Do not attribute quotes to named participants.** Present Q&A as
> "A participant asked…" / "Q:". Presenter attribution (Emmanuel, Anju) is fine.
