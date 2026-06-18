# How to Use This Repository — Step-by-Step Guide

This guide explains exactly how to use this system to generate a tailored CV or cover letter for a new job application.

---

## Starting a New Application

### Step 1: Create a folder for the application

Duplicate the `applications/_template/` folder and rename it:
```
applications/[Company Name]_[Role Title]/
```
Example: `applications/Gartner_ClientSuccess/`

### Step 2: Paste the job description

Open `applications/[folder]/job_description.md` and paste the full job description. Keep it unedited so Claude can read the original language.

Optionally, list the 5–7 key requirements you noticed at the bottom of the file.

### Step 3: Open Claude Code and tell it what you need

Example prompts:

**For a CV:**
> “I need a tailored CV for this application. The job description is in `applications/Gartner_ClientSuccess/job_description.md`. Please read the profile and the relevant angle file, then generate a tailored CV and save it in `applications/Gartner_ClientSuccess/cv_tailored.md`.”

**For a cover letter:**
> “I need a cover letter for this role. Job description is in `applications/Gartner_ClientSuccess/job_description.md`. Please use the profile and opening hooks to draft a tailored cover letter.”

**For both at once:**
> “New application for [Company] — [Role]. Job description in `applications/[folder]/job_description.md`. Please generate both a tailored CV and cover letter.”

### Step 4: Review and adjust

Claud will generate the documents. Review them:
- Does the opening hook land?
- Does the CV lead with the right experience for this role?
- Are the keywords from the JD reflected naturally?
- Does it feel specific to this company, not generic?

Ask Claude to adjust specific sections if needed.

### Step 5: Export for submission

- Copy the CV content into your preferred tool (Word, Google Docs, Canva, etc.) for formatting
- Export as PDF
- File naming: `CV_Carla_Manzano_[Company]_[Role].pdf` and `CL_Carla_Manzano_[Company]_[Role].pdf`

### Step 6: Log the application

Add a row to `applications/tracker.md` with the company, role, role type, date applied.

---

## Tips for Better Outcomes

**Match the JD language exactly.** If the job description says “customer lifecycle”, use that term — not “customer journey.” ATS systems and human reviewers both respond to this.

**Give Claude the company context.** If you know something specific about the company (they are scaling fast, they focus on SMEs, they value operational experience), add it to the Notes section of the job description file. Claude will use it to personalise.

**Use the role type files.** The `positioning/role_angles/` files are the single most important thing for quality. They tell Claude which experiences to foreground and which language to use. If a role feels mixed (e.g. part operations, part CRM), mention both angle files.

**Update the tracker every time.** Over time, the tracker becomes a feedback tool — you can see which role types, companies, and positioning approaches get responses, and which don’t.

**Keep versions.** If you generate multiple versions for the same company, add a suffix: `cv_tailored_v1.md`, `cv_tailored_v2.md`. Do not overwrite.

---

## What Claude Will Do When You Ask

1. Read `profile/01_executive_summary.md` for quick context
2. Read `profile/03_experience.md` and `profile/04_projects.md` for detailed background
3. Read the relevant `positioning/role_angles/<type>.md` to understand which angle to take
4. Read `templates/cv/achievement_bank.md` to select the strongest bullets
5. Read the job description you pasted
6. Generate a tailored document that mirrors the JD language, leads with the right experience, and is structured for ATS
7. Ask if you want adjustments
8. Log in the tracker if you confirm the application is going out
