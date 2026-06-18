# CLAUDE.md — Operating Instructions for Application Process Repository

## What This Repository Is

This repository contains the complete professional background of **Carla Manzano Ramells** and everything needed to generate tailored CVs and cover letters for job applications quickly and with high quality.

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
