# CLAUDE.md — Operating Instructions for Application Process Repository

## What This Repository Is

This repository contains the complete professional background of **Carla Manzano Ramells** and everything needed to generate tailored CVs and cover letters for job applications quickly and with high quality.

⚠️ **This repo also holds a second, unrelated deliverable:** Carla's live public portfolio website (`index.html`, `style.css`, `script.js` at repo root), merged in via "Consolidate full profile repo onto main as single source of truth." See **Portfolio Website** near the end of this file for everything about that — it has nothing to do with the CV/cover-letter system described below.

---

## How to Use This Repo for a New Application

### Step 1 — Read the profile
Start with the relevant section files:
- `profile/01_executive_summary.md` — Quick overview and professional identity
- `profile/03_experience.md` — All professional experience entries
- `profile/04_projects.md` — Key projects in Problem → Action → Impact format
- `profile/05_skills.md` — Tools and technical skills

For full depth: `profile/master_profile.md`

### Step 2 — Identify the role type and read the angle file
Based on the job description, read the closest file in `positioning/role_angles/`:

| Role family | File |
|---|---|
| Business Analyst, BI Analyst, Data Analyst | `business_analyst.md` |
| Operations Analyst, Business Operations, Process Improvement | `operations_analyst.md` |
| CRM Specialist, Sales Ops, Customer Data | `crm_operations.md` |
| Digital Transformation, SME Digitalization, AI Adoption | `digital_transformation.md` |
| Revenue Analyst, Revenue Strategy, Yield Management | `revenue_strategy.md` |
| Hotel Ops, F&B Operations, Hospitality Technology, Guest Experience | `hospitality_operations.md` |

### Step 3 — Read the reusable components
- `templates/cv/achievement_bank.md` — Pre-written CV bullet points to select and adapt
- `templates/cover_letter/opening_hooks.md` — Strong opening sentences by role type
- `templates/cover_letter/closing_statements.md` — Strong closing paragraphs

### Step 4 — Get the job description
If no job description file exists in `applications/`, ask the user to paste it now before generating.

### Step 5 — Generate the document

**For a CV:**
- Follow the structure in `templates/cv/cv_structure.md`
- Select the most relevant experiences and achievements from the achievement bank
- Match language closely to the job description
- Optimise for ATS using keywords from `profile/07_keywords.md`
- Keep to 1 page for most roles, 2 pages maximum

**For a Cover Letter:**
- Follow the structure in `templates/cover_letter/cl_structure.md`
- Open with a hook from `opening_hooks.md` adapted to this specific role
- Connect Carla's background directly to the company's context and the role's needs
- Close with a paragraph from `closing_statements.md`
- Length: 3–4 focused paragraphs, no filler

### Step 6 — Log the application
Add a row to `applications/tracker.md`: Company | Role | Date Applied | Stage | Outcome | Notes

---

## Key Principles for Document Generation

1. **Always tailor to the specific job description.** Generic CVs get ignored. Match language, priorities, and tone to what the employer wrote.
2. **Lead with the most relevant experience for this role type.** The angle file tells you what to foreground.
3. **Use the achievement bank as a starting point**, not a literal copy-paste. Adapt bullets to match the specific role's keywords and requirements.
4. **ATS optimisation matters.** Include role-relevant keywords from `profile/07_keywords.md` naturally throughout the CV.
5. **Cover letters must be specific.** Mention the company by name, reference the role, and make a direct connection between Carla's background and what they are looking for. No generic phrases.
6. **Carla's differentiator is always the combination** of operational experience + data/digital skills. Never separate these — the combination is her competitive advantage over purely technical or purely hospitality candidates.
7. **European CV format.** Include: name/contact, professional headline, experience (reverse chronological), education, skills, languages. No photo unless requested.

---

## Quick Reference Table

| Need | File |
|---|---|
| Full background | `profile/master_profile.md` |
| Quick summary | `profile/01_executive_summary.md` |
| All experience entries | `profile/03_experience.md` |
| Projects with impact | `profile/04_projects.md` |
| Skills and tools | `profile/05_skills.md` |
| Role pitch angle | `positioning/role_angles/<type>.md` |
| Pre-written CV bullets | `templates/cv/achievement_bank.md` |
| Cover letter openers | `templates/cover_letter/opening_hooks.md` |
| ATS keywords | `profile/07_keywords.md` |
| Application log | `applications/tracker.md` |

---

## Portfolio Website (`index.html` / `style.css` / `script.js`)

### What it is
Carla's live personal portfolio — a plain static site (no framework, no build step, no npm). Single HTML file with all content, one CSS file, one JS file for nav/scroll/tab behavior. Deployed on **Vercel**, connected to `main` — every merge to `main` triggers an automatic redeploy.

### Structure
- **No data file** — every project is hardcoded HTML in `index.html`, reusing shared CSS classes: `section-label`, `section-title`, `section-lead`, `tags`/`tag`/`tag-teal`, `cards-grid` + `project-card` (icon + title + desc + tags), `insight-grid` + `insight-card`.
- Sections in page order (`<section id="...">`): `home` (hero) → `introduction` → `focus` → `dashboards` → `digital-transformation` → `cost-app` → `tasks-app` → `review-intelligence` → `ai-workflows` → `automation` → `revenue` → `crm` → `philosophy`.
- **Three places must be updated together whenever a section is added/renamed:** the navbar (`#navLinks`, ~line 22), the footer sitemap (`.footer-nav`, ~line 983), and the right-side `scroll-nav` dots (~line 1017).
- Design system: headings in DM Serif Display, body in Inter; palette + spacing as CSS custom properties at the top of `style.css` (`--color-primary: #0F5757`, `--color-accent: #C17F3A`, `--color-primary-dark`, etc.).
- **No real screenshots or external image assets anywhere on the site.** Every "app preview" visual (hero dashboard cards, phone mockups) is a pure CSS/HTML recreation using absolute-positioned cards or a fake phone frame — never an embedded image. This is deliberate: it keeps the repo image-free and means there's never a real screenshot to redact/anonymize. Keep following this pattern for future project previews.

### Featured Rocxi Beach sections
Two separate real apps built for the Rocxi Beach restaurant, both built with Claude Code, both showcased here:
- **`#cost-app`** — Cost & Profitability App (Next.js, Supabase, PostgreSQL) — internal food-cost/margin tool.
- **`#tasks-app`** — Task Distribution App (React, Vite, Supabase PWA) — the closing-shift checklist app from the separate `RBeach` repo (bin-packing task engine, two-shift system, live equity tracking, server-side PIN auth).
  - Contains an **anonymised CSS phone mockup** of the real Admin screen (`.phone-mockup`/`.phone-*` classes in `style.css`) recreating the header stats, shift toggle, and staff progress rows — with real staff names replaced by generic "Staff A/B/C/D/E". Built this way instead of embedding the real screenshot the user shared, specifically to avoid exposing real employee names.
  - **Deliberately has no "View Live App" link.** The production app (`r-beach.vercel.app`) shows real staff first names on its profile/check-in screen before any PIN is entered, so it must never be linked from the public portfolio. If asked to link to it again, push back — surface this constraint first.

### Dev workflow
- AI sessions develop on branch `claude/rocxi-beach-task-app-dx5ipi`. If that branch's PR has already been merged, recreate it fresh from `origin/main` (`git checkout -B claude/rocxi-beach-task-app-dx5ipi origin/main`) rather than stacking on stale history — `main` here has been rewritten/consolidated before, so old branch tips can diverge hard from current `main`.
- No test suite / build step exists for the site — verify changes by serving `index.html` locally (e.g. `python3 -m http.server`) and rendering it in a headless browser (Playwright, pre-installed at `/opt/pw-browsers/chromium`), or opening it directly.

### Changelog (website only)
- Full initial site build, visual redesign passes, hero dashboard mockup, scroll-nav dots, Chart.js dashboards, review-intelligence styling — prior history, see `git log -- index.html style.css script.js`.
- Cost & Profitability App section added (`#cost-app`).
- **2026-07-01:** Task Distribution App section added (`#tasks-app`) — lead paragraph, tech tags, 4 feature cards (automated distribution, two-shift system, live equity tracking, secure PIN access), 3 insight cards. Wired into navbar/footer/scroll-nav. PR #1 merged.
- **2026-07-01:** Added the anonymised CSS phone mockup of the real Admin screen (see above) after the user shared an actual screenshot and asked to keep staff names private.
- **2026-07-01:** Removed the "View Live App" link to `r-beach.vercel.app` — the live app is an internal tool that shows real staff names pre-login, so it shouldn't be publicly reachable from the portfolio.
