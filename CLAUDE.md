# OWP Delivery Partner Workshop — Build Brief

Static multi-page HTML lab guide for the **Operational Workforce Planning (OWP)**
delivery-partner workshop. Same design family as `rpm-apps-workshop`,
`ifp-delivery-workshop`, `fcr-delivery-workshop`. **Canonical design system =
`rpm-apps-workshop` main branch** (`~/git-repos/rpm-apps-workshop`).

## Files & layout
- `index.html` — landing page (done).
- `docs/*.html` — one file per workshop page.
- `css/style.css`, `js/lab-quiz.js` — copied verbatim from canonical. **Do not edit.**
- `js/nav.js` — OWP sidebar (done). The sidebar is the source of truth for page
  order and prev/next.
- `CONTENT.md` — **the only source of content.** Author strictly from it.
- `docs/_template.html` — skeleton. Delete before commit.

## Hard markup rules (every docs/*.html page)
1. Start `<!DOCTYPE html>`, `<html lang="en">`. Head: charset, viewport,
   `<title>PAGE — OWP Lab Guide</title>`, `<link rel="stylesheet" href="../css/style.css">`.
2. Body order exactly: `.mobile-header` (with `OWP Lab Guide`) → empty
   `<nav class="sidebar"></nav>` → `<main class="main-content">`.
3. `main` starts with `.content-header` (`<h1>`, `<p class="subtitle">`, a
   `.badge-row` of `.content-badge` spans) then `<div class="content-body">`.
4. Content-body ends with a **prev/next block** immediately before `</div></main>`:
   ```html
   <div class="prevnext-nav">
     <a class="prevnext-btn" href="./PREV.html">← Previous</a>
     <a class="prevnext-btn" href="./NEXT.html">Next →</a>
   </div>
   ```
   Prev/next follow **sidebar order** (see nav.js). The first docs page
   (`00-overview.html`) has **Next only**; the last (`94-wrap-up.html`) has
   **Previous only**. Never link across to `index.html` in prev/next.
5. Scripts at end of body: always `<script src="../js/nav.js"></script>`. Add
   `<script src="../js/lab-quiz.js"></script>` **only** on pages that use
   `.lab-quiz`, `.lab-check`, or `.lab-screenshot-toggle`.
6. **Use only existing CSS classes.** Do not invent classes or add `<style>` blocks
   (small inline `style=""` for spacing/color, as seen in canonical pages, is OK).
7. Exactly one `<h1>`. Use `<h2>`/`<h3>` for structure. Escape `&` as `&amp;`.
8. No duplicate attributes; well-formed HTML; no leftover `PENDING`/`TODO`
   placeholders **except** the sanctioned `[PENDING SME input]` note (rule 12).

## Component vocabulary (from canonical — reuse, don't reinvent)
- **Callouts:** `.callout-tip` 💡, `.callout-note` 📝, `.callout-do` ✅,
  `.callout-important` 🚨, `.callout-warning` ⚠, `.callout-show` 👁. Each has a
  `<span class="callout-label">EMOJI Label</span>` then `<p>`.
- **Tell/Show/Do banner** (good on overview/walkthrough pages): `.tsd-banner`
  containing `.tsd-step.tsd-step-tell` / `-show` / `-do`, each with
  `.tsd-step-label`, `.tsd-step-heading`, `.tsd-step-desc`.
- **Numbered steps:** `.step` with `.step-badge` (number) + `.step-content`.
- **Cards:** `.two-col` wrapping two `.card` (`<h3>` + content).
- **Tables:** wrap in `<div class="table-wrap"><table>…`. Use `<thead>`/`<tbody>`.
- **Lab objectives:** `.lab-objectives` (`<h3>What you'll do</h3>` + `<ul>`).
- **Lab steps:** `<ol class="lab-steps">`.
- **Inline quiz** (needs lab-quiz.js): `.lab-quiz[data-correct="X"]` with
  `.lab-quiz-label`, `<h3>` question, `.lab-quiz-options` of
  `label.lab-quiz-option > input[type=radio][name=UNIQUE][value=A..] + .lab-quiz-letter + <span>`,
  a `button.lab-quiz-check`, and two feedback divs
  `.lab-quiz-feedback.lab-quiz-feedback-correct` / `-wrong`. Radio `name` must be
  unique per page. Copy the exact shape from
  `rpm-apps-workshop/docs/cap-04-lab.html`.
- **Check my work** (needs lab-quiz.js): `.lab-check[data-check-id="owp-…"][data-workshop-slug="owp"]`
  with `.lab-check-prompt`, `button.lab-check-button`, and a hidden
  `.lab-check-results` (`.lab-check-summary`, `<ul class="lab-check-list">`,
  `.lab-check-next`). Use `data-workshop-slug="owp"` and kebab-case `data-check-id`.
- **Screenshot placeholder** (no real screenshots yet — the recordings are our only
  source): use `.screenshot-placeholder` with `.ss-icon` (📸), `.ss-label`
  (`[SCREENSHOT NEEDED: …]`), `.ss-desc` (one-line capture description). Do **not**
  reference real image files in `img/` — none exist yet. Every demo/walkthrough
  screen described in CONTENT.md should get a screenshot-placeholder.

## Voice & tone
Plain, direct, positively framed. Lead with what the practitioner can do. No
AI-sounding filler, no bold-label reframes. Address the reader as "you." This is a
delivery-partner enablement guide — practical, field-oriented. Mirror the register of
`rpm-apps-workshop/docs/00-overview.html` and `tq-01-overview.html`.

## Sourcing & gaps
9. **Author only from CONTENT.md.** Do not add product facts from general knowledge.
10. Preserve the verbatim numbers, names, and quotes in CONTENT.md
    (e.g. $78k→$80k, 25% match threshold, "zombie positions", APID).
11. Roadmap items carry a safe-harbor note (say the item is roadmap/forward-looking).
12. For content marked PENDING in CONTENT.md (WFB detail, architecture/PATH, org
    modeling/RIF, exhaustive security matrix), still build a real page from what IS
    known, and add **one** clearly-marked note using this exact pattern:
    ```html
    <div class="callout-note">
      <span class="callout-label">📝 Pending SME Input</span>
      <p>[PENDING SME input] <em>Short description of what's missing and why (not captured on the workshop recordings).</em></p>
    </div>
    ```
13. Q&A page: group by theme, present as questions with answers, **strip participant
    names** — "A participant asked…". Presenter names (Emmanuel, Anju) are fine
    elsewhere.

## Reference pages to open in the canonical repo before authoring
- Overview/tone: `rpm-apps-workshop/docs/00-overview.html`
- Functional overview + tsd-banner: `.../docs/tq-01-overview.html`
- Sample-data tables: `.../docs/cap-02-sample-data.html`
- Lab (quiz + check + steps + debrief): `.../docs/cap-04-lab.html`
- Q&A: `.../docs/16-qanda.html`  · Resources: `.../docs/17-resources.html`
- Prev/next + tenant-access shape: `.../docs/00-tenant-access.html`
