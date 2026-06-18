# Application Process Repository — Carla Manzano Ramells

This repository is a structured professional background system designed to make CV and cover letter generation fast, consistent, and high quality.

## How It Works

1. **Profile** (`profile/`) — Source-of-truth background data, broken into scannable sections
2. **Positioning** (`positioning/`) — Narrative, differentiators, and pre-built angle files for each role type
3. **Templates** (`templates/`) — CV and cover letter building blocks: structure guides, achievement banks, opening hooks
4. **Applications** (`applications/`) — A folder per job application + a master tracker
5. **Instructions** (`instructions/`) — Human-readable guides for using the system

## Starting a New Application

See `instructions/how_to_use.md` for the full step-by-step guide.

If working with Claude: open this repo and Claude will read `CLAUDE.md` for instructions automatically.

## Repository Structure

```
application_process/
├── CLAUDE.md                        ← AI operating instructions
├── README.md                        ← This file
│
├── profile/
│   ├── master_profile.md            ← Full comprehensive profile
│   ├── 01_executive_summary.md
│   ├── 02_education.md
│   ├── 03_experience.md
│   ├── 04_projects.md
│   ├── 05_skills.md
│   ├── 06_languages.md
│   └── 07_keywords.md
│
├── positioning/
│   ├── professional_narrative.md
│   ├── differentiators.md
│   ├── target_roles.md
│   ├── cv_headlines.md
│   └── role_angles/
│       ├── business_analyst.md
│       ├── operations_analyst.md
│       ├── crm_operations.md
│       ├── digital_transformation.md
│       ├── revenue_strategy.md
│       └── hospitality_operations.md
│
├── templates/
│   ├── cv/
│   │   ├── cv_structure.md
│   │   └── achievement_bank.md
│   └── cover_letter/
│       ├── cl_structure.md
│       ├── opening_hooks.md
│       └── closing_statements.md
│
├── applications/
│   ├── tracker.md
│   └── _template/
│       ├── job_description.md
│       ├── cv_tailored.md
│       └── cover_letter.md
│
└── instructions/
    ├── how_to_use.md
    └── tailoring_guide.md
```
