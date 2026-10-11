# Case Study — Northwind Global (source for the delivery labs)

A fictional customer used by the **delivery decision labs** (Data Readiness,
Map the HR Extract). The application labs use the training tenant's own Golden
Copy data instead, so they don't reference Northwind.

> This is invented teaching material — not from the recordings. It exists to give
> the methodology pillar something concrete to reason about. Keep it internally
> consistent; don't contradict the OWP product facts in CONTENT.md.

---

## Company profile

**Northwind Global** — a global B2B technology &amp; services company. ~8,000
employees across three regions: **North America** (HQ Boston), **EMEA** (London),
**APAC** (Singapore). HCM system is **Workday**; recruiting runs in **Greenhouse**
(ATS). Finance sets the annual headcount budget in **Excel** today.

**The pain (why OWP):** Finance sets a headcount budget in a spreadsheet; HR
creates positions in Workday ad hoc; Talent recruits from a separate req list. The
three never reconcile — so Northwind over-hires in some orgs, under-hires in
others, and Finance gets budget surprises every quarter. There is **no link**
between what's budgeted, what's planned, and what's being recruited. That's the
closed-loop / plan-to-hire gap OWP closes.

**What Northwind wants (scope):**
- Position-based planning with the **WFB → CPP** loop.
- **Selective access** by region + function (an EMEA HRBP sees only EMEA).
- A **skills view** for internal mobility — fill open roles internally first.
- On worker cards: expose **gender** and **performance rating**, but **not race /
  ethnicity** (a per-customer DEI toggle — good teaching point).
- **No role-grade planning** — Northwind plans by role, not by grade (teaching
  point: don't enable Role Grade when it isn't needed).

## Organization &amp; hierarchies

**Function / job families:**
- **GTM** — Account Executive (SLS-AE), Senior AE (SLS-AE-SR), Solutions Engineer
  (ENG-SE), Customer Success Manager (CS-CSM), Regional Sales Director (SLS-MGR)
- **Engineering** — Software Engineer (ENG-SW), Senior Software Engineer
  (ENG-SW-SR), Pre-Sales Engineer (ENG-SE), Engineering Manager (ENG-MGR)
- **G&amp;A** — Financial Analyst (FIN-ANL), HR Business Partner (HR-HRBP), Counsel
  (LGL-CNS), General Counsel (LGL-GC)

**Management (supervisory) org** — exists in Workday, e.g. `Global Sales &rarr; EMEA
Enterprise Sales`, `NA Customer Success`, `APAC Engineering`, `NA Finance`, `Legal`.

**Budget hierarchy (5 levels):** Total Company &rarr; Function &rarr; Region &rarr;
Department &rarr; Cost Center. Not yet structured in a tool — lives in the Finance
spreadsheet.

**Job levels / job catalog** — maintained in Workday. Foundational: bring into OWP,
do **not** create new job levels in OWP.

**Planning scenarios Northwind runs:** a **Baseline** budget, a **Stretch** (faster
hiring) scenario, and a **Conservative** (hiring-slowed) scenario.

---

## Data situation (source for the Data Readiness lab)

| OWP object | Available at Northwind? | Notes |
|---|---|---|
| **Position** | Yes — Workday | Dirty: zombie positions, some broken worker links. Mandatory. |
| **Employee / Worker** | Yes — Workday | Mostly clean; one duplicate. Mandatory. |
| **Position &rarr; Worker link** | Yes — Workday | Some broken (zombies, an employee with no position). Mandatory. |
| **Management (supervisory) org** | Yes — Workday | Exists; one worker missing a manager link. Mandatory (half the app). |
| **Job role / job level** | Yes — Workday job catalog | Foundational — bring in, don't create. |
| **Compensation** | Partial | Base pay for most; OTE/bonus incomplete. Non-mandatory to start (fake for dev, load real later). |
| **Skills** | Partial &amp; dirty | Free-text, inconsistent spelling. Non-mandatory; matching is manual anyway. |
| **Attrition history** | Not readily available | Non-mandatory — defer. |
| **Budget hierarchy** | In Excel, unstructured | Needed for WFB. Can start with a dummy 5-level hierarchy and refine. |

**Readiness answer key (go/no-go):** **GO to start configuration**, with a
**data-cleanup workstream on positions** (close zombies, fix broken worker/manager
links) as the long pole. Management org, workers, and job levels are ready.
Compensation detail, skills, and attrition are non-mandatory and can follow — but
be explicit with Northwind that until they land, the matching and full-cost views
won't be complete. The one hard blocker to clean before load: **clean position data
and a clean position&rarr;worker link.**

---

## The messy HR extract (source for the Map-the-Extract lab)

A representative Workday export Northwind hands over. Present these rows to
participants; the deliberate problems are in the "Issue" column (which is the
**answer key** — the lab page shows the rows WITHOUT the Issue column and asks
participants to find them).

| Emp ID | Worker Name | Position ID | Position Title | Mgr ID | Supervisory Org | Location | Job Code | Base Pay | Skills (free text) | Hire Date | Status | Issue (answer key) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| E1001 | Dana Whitfield | P50012 | Senior Account Executive | E1000 | EMEA Enterprise Sales | London | SLS-AE-SR | 118000 | Enterprise Sales; Negotiation | 2021-03-15 | Filled | clean |
| E1002 | Marco Reyes | P50018 | Solutions Engineer | E1000 | EMEA Enterprise Sales | LON | ENG-SE | 104000 | Presales; Solutioning | 2022-06-01 | Filled | location "LON" — standardize |
| E1003 | Priya Nair | P50021 | Sr. AE | E1000 | EMEA Enterprise Sales | London, UK | SLS-AE-SR | *(blank)* | Enterprise Sales; account planning | 2020-11-02 | Filled | title variant + location variant + base pay blank |
| — | *(blank)* | P40007 | Customer Success Manager | E2000 | NA Customer Success | Boston | CS-CSM | *(blank)* | *(blank)* | *(blank, "created 2019")* | Unfilled | **zombie position** — never filled, no worker/hire date |
| E1005 | Tomás Ferreira | P50033 | Financial Analyst | *(blank)* | NA Finance | Boston | FIN-ANL | 92000 | Financial Planningg; Excel | 2023-01-09 | Filled | **missing manager link** + skill typo "Planningg" |
| E1006 | Aiko Tanaka | P60002 | Senior Software Engineer | E3000 | APAC Engineering | Singapore | ENG-SW-SR | 132000 | Java; Distributed Systems | 2019-08-20 | Filled | clean |
| E1007 | Sarah Klein | P50040 | Regional Sales Director | E0500 | Global Sales | Boston | SLS-MGR | 176000 | Leadership; Forecasting | 2018-04-11 | Filled | clean (a manager) |
| E1003 | Priya Nair | P50021 | Senior Account Executive | E1000 | EMEA Enterprise Sales | London | SLS-AE-SR | 121000 | Enterprise Sales | 2020-11-02 | Filled | **duplicate of E1003** — conflicting base pay/title |
| E1009 | Ben Osei | *(blank)* | Counsel | E4000 | Legal | Boston | LGL-CNS | 145000 | Contracts; Compliance | 2021-09-30 | Filled | **worker with no Position ID** — OWP plans by position |
| E1010 | Lena Vogt | P50051 | Account Executive | E0500 | EMEA Enterprise Sales | Munich | SLS-AE | 98000 | fin. planning; prospecting | 2022-02-14 | Filled | skill variant "fin. planning" |
| — | *(blank)* | P70003 | Pre-Sales Engineer | E3000 | APAC Engineering | Singapore | ENG-SE | *(blank)* | *(blank)* | *(blank, "created 2020")* | Unfilled | **likely zombie / stale open req** — confirm or close |
| E1013 | Grace Lim | P60015 | Software Engineer | E3000 | APAC Engineering | Singapore | ENG-SW | 108000 | Python; planning | 2023-05-22 | Filled | vague skill "planning" |
| E1014 | Owen Brady | P50060 | Sr Account Exec | E1000 | EMEA Enterprise Sales | Dublin | SLS-AE-SR | 119000 | Enterprise Sales; Negotiation | 2021-07-19 | Filled | title variant "Sr Account Exec" |
| E1015 | Nadia Haddad | P40011 | Customer Success Manager | E2000 | NA Customer Success | Boston | CS-CSM | 96000 | Onboarding; Renewals | 2022-10-03 | Filled | clean |

### Mapping answer key (columns &rarr; OWP templates)
- **Employee / Worker tab:** Emp ID, Worker Name, Hire Date, Location, Base Pay, Skills; Mgr ID as the manager reference.
- **Position tab:** Position ID, Position Title, Job Code, Supervisory Org, Status; the Employee↔Position link ties a worker to a position.
- **Management (supervisory) org:** Supervisory Org + Mgr ID drive the org hierarchy.
- **Job / job level:** Job Code &rarr; foundational, sourced from the Workday job catalog — **do not create job levels in OWP.**

**Mandatory to start:** Position ID, the Employee↔Position link, Supervisory Org, Job Code.

**Must fix before load (the mandatory ones):**
1. **Zombie positions** P40007 (and confirm P70003) — close/exclude; don't load dead positions.
2. **Missing manager link** on E1005 — breaks the supervisory-org rollup; fix in Workday.
3. **Duplicate worker** E1003 (two rows) — dedupe and reconcile the conflicting base pay/title.
4. **Employee with no position** — Ben Osei (E1009) — OWP plans by position; assign a Position ID or exclude.

**Defer (non-mandatory to start):**
- Standardize **skills** ("Financial Planningg" / "fin. planning" / "planning" → one value) — matching is manual anyway.
- Fill **missing base pay** — fake it for dev, load real comp later.
- **Attrition** — not in this extract at all; note it's missing but it's OK to defer.
- Standardize **locations** ("LON" / "London, UK" → "London") and **titles** to the job-code label — good hygiene, not a blocker.
