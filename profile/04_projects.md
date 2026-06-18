# Key Projects — Carla Manzano Ramells

All projects follow the **Problem → Action → Output → Impact** format for direct use in CVs and interview answers.

---

## Project 1: Restaurant Operations Dashboard

**Problem:** Rocxi Beach lacked structured visibility over its sales and operational performance. Data existed in various exports but was not visualised or used for decisions.

**Action:** Carla explored and developed dashboards using Looker Studio and Power BI, cleaning and structuring restaurant sales and operational data into visual KPI reports. Defined KPI frameworks covering daily and weekly sales, peak hours, daypart performance, revenue trends, product and category-level analysis, and customer volume patterns.

**Output:** A set of dashboard concepts and working visualisations giving management a clear view of business performance — moving from raw data to decision-ready information.

**Impact:** Management gained the ability to identify when the restaurant is busiest, which products perform best, where service pressure increases, and where to focus operational attention — replacing gut-feel decisions with data-backed visibility.

**Tools:** Looker Studio, Power BI, Excel, Google Sheets

---

## Project 2: Customer Feedback Analysis System

**Problem:** Rocxi Beach received customer reviews and post-visit survey responses but had no systematic way to analyse them. Comments were read individually without pattern detection or structured categorisation.

**Action:** Carla developed an AI-assisted feedback categorisation framework, classifying comments from CoverManager, online reviews, and post-visit surveys into structured themes: waiting times, service speed, staff attitude, food quality, dish-specific mentions, atmosphere, price perception, complaints, and recurring issues.

**Output:** A structured analysis method that transforms scattered qualitative feedback into operational intelligence — identifying recurring patterns, most praised dishes, most mentioned pain points, and service bottlenecks.

**Impact:** Management can now detect patterns rather than reacting to isolated reviews. Repeated mentions of waiting times during peak service become an operational improvement signal. Dish-level praise or criticism can inform menu decisions and staff briefings.

**Tools:** CoverManager exports, ChatGPT, Claude, Excel/Sheets

---

## Project 3: CoverManager Report Automation (Gmail to Google Drive)

**Problem:** CoverManager sends recurring performance reports via email with downloadable CSV links. Manually opening, downloading, renaming, and organising these files was creating friction, inconsistency, and risk of lost or disorganised data.

**Action:** Carla built and refined a Gmail-to-Drive automation using Google Apps Script. The script detects relevant Gmail messages by label, downloads the report CSV files, saves them to Google Drive with structured naming, applies a processed label to avoid re-processing, and is designed to run on a weekly trigger.

**Output:** An automated workflow that removes manual file management for recurring CoverManager reports — replacing a repetitive administrative task with a reliable, consistent, self-running system.

**Impact:** Reporting data becomes reliably available in a structured Drive folder without manual effort, reducing the chance of missing or duplicated files and making raw data ready for dashboard use.

**Tools:** Google Apps Script, Gmail API, Google Drive API, CoverManager

---

## Project 4: CRM Segmentation and Customer Data Strategy

**Problem:** Rocxi Beach holds thousands of customer profiles in CoverManager but the database is not fully categorised or segmented. Without segmentation, communication is generic and the CRM cannot function as a loyalty or revenue tool.

**Action:** Carla identified the segmentation opportunity and proposed a structured strategy for organising customers by frequency of visit, reservation history, best-client status, special occasions, feedback, spending patterns, and loyalty potential — with the goal of enabling personalised post-visit communication, loyalty actions, and marketing campaigns.

**Output:** A segmentation strategy and proposed workflow for making the CoverManager database an active business tool rather than a passive contact list.

**Impact (potential):** Moving from generic email communication to personalised touchpoints for high-value customers — improving retention, loyalty, and repeat visit rates.

**Tools:** CoverManager, Excel/Sheets, strategic planning

---

## Project 5: Product Matching and Cost/Margin Analysis

**Problem:** Rocxi Beach could not easily connect products sold (from sales data) with products purchased from suppliers (from purchase data). Without this link, real food cost and margin analysis was not possible.

**Action:** Carla worked on matching restaurant sales products with supplier purchase products: comparing sales files with purchase files, identifying name matches across different nomenclatures, categorising products by family and subfamily, and preparing a structured dataset for profitability analysis.

**Output:** A matched product table connecting sales and purchase data, categorised and structured for cost and margin analysis.

**Impact (potential):** Enables management to identify which products generate the most revenue, which have the best margin, which are high-volume but low-margin, and which low-cost products should be commercially prioritised — supporting smarter menu engineering and supplier negotiations.

**Tools:** Excel, Google Sheets, AI-assisted matching, supplier and sales data exports

---

## Project 6: Digital Transformation Roadmap for Rocxi Beach (EAE Programme)

**Problem:** Rocxi Beach, like many SMEs, operates with digital gaps: inconsistent data, manual reporting, underused CRM, no structured feedback loops, and limited use of available technology for decision-making.

**Action:** As part of her Digital Transformation for SMEs programme at EAE Business School, Carla developed a complete digital transformation plan using Rocxi Beach as the real business case. The plan included: digital maturity analysis, current-state process mapping, pain point identification, CRM strategy, KPI framework proposals, automation opportunities, AI use cases, dashboard planning, and a phased implementation roadmap.

**Output:** A structured digital transformation roadmap — grounded in real operational context, not abstract theory — with practical recommendations a small hospitality business could actually implement.

**Impact:** Demonstrated the ability to think strategically while staying close to operational reality. The project also served as a bridge between academic learning and practical business transformation work.

**Tools:** EAE programme framework, process mapping, strategic planning, CRM analysis, KPI design

---

## Project 7: Personalised Guest Experience — New Year's Eve

**Problem:** New Year's Eve at Rocxi Beach is a high-expectation service for many long-time clients and family-connected guests. A standard service would not match the relationship these customers have with the restaurant.

**Action:** Carla designed and printed personalised menus for each reservation and wrote individual handwritten notes for fourteen tables, combining operational preparation with guest experience design and emotional intelligence.

**Output:** A personalised, detail-rich New Year's Eve experience where each table received a custom menu and individual note — creating a memorable, relationship-reinforcing moment.

**Impact:** Demonstrates Carla's understanding that hospitality is not only about efficiency. It is about emotional touchpoints, client memory, and the small details that turn a dinner into a loyalty-building experience.

**Tools:** Canva (menu design), operational planning, guest profile knowledge

---

## Project 8: Rocxi Beach Cost & Profitability Web App (Escandallos App)

**Problem:** Rocxi Beach managed recipe costs, ingredient prices, and supplier invoices manually across spreadsheets and paper. Food-cost percentages were hard to keep up to date, supplier price changes were not traceable, and there was no reliable way to see real profit per dish — making menu and purchasing decisions reactive rather than data-driven.

**Action:** Carla designed and built a mobile-first internal web application for the kitchen team, developing it with Claude Code. The app stores recipes, ingredients, suppliers, and invoices in a relational **PostgreSQL** database (Supabase) and calculates food cost in real time as ingredient weights are edited. She modelled the data schema (ingredients, suppliers, price history, recipe cost sheets, invoices), built supplier-invoice upload with automatic price extraction that updates affected recipe costs, and created a profitability view that crosses POS sales data with recipe costs to surface real margin per product and family.

**Output:** A working, in-production web app (Next.js, React, Supabase/PostgreSQL, TypeScript) with recipe cost sheets showing live food-cost %, an ingredient catalog with monthly price history and full invoice traceability, supplier price comparison, and profitability KPIs by product and family. Invoice-automation and deployment/authentication are in progress.

**Impact:** Turns scattered cost and purchasing data into a single, always-current tool the kitchen can use on mobile — making food cost, supplier price changes, and real per-dish profitability visible at a glance, and supporting smarter menu engineering and supplier decisions. Demonstrates end-to-end ability to model data, query it with SQL, and ship a real application that solves an operational problem.

**Tools:** Next.js, React, Supabase (PostgreSQL), SQL, TypeScript, Tailwind CSS, Claude Code
