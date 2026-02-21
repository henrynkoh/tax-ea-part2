export type SourceEntry = {
  title: string;
  publisher: string;
  date: string;
  contribution: string[];
  group: "Primary IRS / Exam Structure" | "Secondary Blueprint Interpreters";
};

export const sourceEntries: SourceEntry[] = [
  {
    title: "Enrolled Agents: Frequently Asked Questions (SEE Overview)",
    publisher: "Internal Revenue Service (IRS)",
    date: "SEE content updated 2023-03-01; scheduling FAQ updated 2023-10-19",
    group: "Primary IRS / Exam Structure",
    contribution: [
      "Confirms SEE has three parts: Individuals, Businesses, and Representation/Practices/Procedures.",
      "States each SEE part contains 100 questions.",
      "Recommends IRC, Circular 230, IRS publications, forms, and instructions for study.",
    ],
  },
  {
    title: "Publication 5279 (Rev. 4-2025): Your Pathway to Becoming an Enrolled Agent",
    publisher: "IRS, Catalog Number 69714J",
    date: "Revision 4-2025",
    group: "Primary IRS / Exam Structure",
    contribution: [
      "Defines SEE as a three-part exam administered by Prometric for IRS; Part 2 is Businesses.",
      "Confirms 100 multiple-choice questions per part, 3.5-hour limit, May-February window.",
      "States up to 4 attempts per part per window and 3-year validity to pass all parts.",
    ],
  },
  {
    title: "SEE Part 2 Content Outline (Part 2 - Businesses)",
    publisher: "IRS (PDF linked from EA FAQ)",
    date: "For test window beginning 2024-05-01",
    group: "Primary IRS / Exam Structure",
    contribution: [
      "Defines three Part 2 domains with question counts: 30, 37, and 18.",
      "Provides topic bullets (entity choice, accounting methods, basis, depreciation, credits, specialized forms).",
      "States each part has 100 questions with 85 scored and 15 experimental.",
    ],
  },
  {
    title: "IRS SEE Candidate Information Bulletin (CIB), 2024-2026 window",
    publisher: "Prometric LLC on behalf of IRS",
    date: "For window 2024-05-01 through 2026-02-28 circulation",
    group: "Primary IRS / Exam Structure",
    contribution: [
      "Documents registration, fees, identification, retake policy, and accommodations.",
      "Reiterates 100 questions total, 85 scored and 15 experimental.",
      "Publishes official domain titles and topic-overview bullets for Part 2.",
    ],
  },
  {
    title: "Special Enrollment Examination Questions and Official Answers (Sample Questions)",
    publisher: "IRS",
    date: "2017 format; refreshed through tax law cutoff 2024-12-31",
    group: "Primary IRS / Exam Structure",
    contribution: [
      "Explains SEE questions test EA job skills and are tied to a stated law cutoff date.",
      "Provides representative item styles: direct, incomplete sentence, and except-format questions.",
      "Shows how IRS references authority in rationales (IRC, publications, forms).",
    ],
  },
  {
    title: "Office of Professional Responsibility and Circular 230",
    publisher: "IRS",
    date: "Page updated 2023-08-01; Circular 230 periodically revised",
    group: "Primary IRS / Exam Structure",
    contribution: [
      "Supplies practice-before-IRS standards relevant to business taxpayer scenarios.",
      "Highlights late-2024 focus areas: technology competency and diligence-as-to-accuracy.",
      "Supports practitioner-duty explanations where business returns and representation overlap.",
    ],
  },
  {
    title: "EA Exam Syllabus 2025: IRS SEE Exam Parts 1-3",
    publisher: "IPassEAExam.com",
    date: "2025-10-04",
    group: "Secondary Blueprint Interpreters",
    contribution: [
      "Restates Part 2 domain names and counts in line with IRS/Prometric specifications.",
      "Adds plain-language interpretation of each domain's topic scope.",
      "Emphasizes that Domain 2 carries the largest share and should drive weighting.",
    ],
  },
  {
    title: "Enrolled Agent Exam: Syllabus and Part-wise Breakdown",
    publisher: "SkillArbitra.ge",
    date: "2025-11-28 (syllabus) and 2025-11-25 (guide)",
    group: "Secondary Blueprint Interpreters",
    contribution: [
      "Frames Part 2 as complex due to entity choice, depreciation, deductions, and multi-layer taxation.",
      "Supports domain weighting near 33-35%, 44-46%, and remainder for specialized topics.",
      "Notes trend topics for 2026 material: partnership COD, BBA audits, and SSTB/QBI nuances.",
    ],
  },
  {
    title: "Enrolled Agent Syllabus: Complete Breakdown for 2026",
    publisher: "Eduyush",
    date: "2024-10-11",
    group: "Secondary Blueprint Interpreters",
    contribution: [
      "Gives practical allocation estimates for business income/expenses and entity-taxation topics.",
      "Flags basis, distributions, and liquidations as lower-frequency but higher-difficulty items.",
      "Supports hard-tier question pool design for advanced pass-through mechanics.",
    ],
  },
  {
    title: "IRS Enrolled Agent Exam - Comprehensive Guide",
    publisher: "SkillArbitra.ge",
    date: "2025-11-25",
    group: "Secondary Blueprint Interpreters",
    contribution: [
      "Confirms 100-question structure (85 scored, 15 experimental) and 3.5-hour length.",
      "Details entity-level vs owner-level taxation focus for Part 2 scenarios.",
      "Calls out 2025 syllabus updates feeding 2026 prep focus (COD, BBA, SSTB/QBI).",
    ],
  },
  {
    title: "EA Exam News",
    publisher: "Gleim Publications",
    date: "2026-02-05",
    group: "Secondary Blueprint Interpreters",
    contribution: [
      "Summarizes Prometric CIB updates for 2024-2025 and continuity through 2025-2026 window.",
      "Advises monitoring IRS EA news for potential vendor logistics changes.",
      "Reinforces blueprint stability with content changes primarily from tax law updates.",
    ],
  },
  {
    title: "General EA Guides",
    publisher: "Becker and Study.com",
    date: "General references",
    group: "Secondary Blueprint Interpreters",
    contribution: [
      "Corroborate official domain titles and common item styles (direct and scenario-based).",
      "Provide non-proprietary conceptual framing for business topics and sequencing.",
      "Help validate consistent interpretation of the official blueprint across providers.",
    ],
  },
];

export const domainSummary = [
  {
    domain: "Domain 1",
    label: "Business Entities and Considerations",
    questions: "Approx. 30",
    share: "~30-33%",
  },
  {
    domain: "Domain 2",
    label: "Business Tax Preparation",
    questions: "Approx. 37",
    share: "~40-46%",
  },
  {
    domain: "Domain 3",
    label: "Specialized Returns and Taxpayers",
    questions: "Approx. 18",
    share: "~18-22%",
  },
];

export const domainTopics = [
  {
    heading: "Domain 1 - Business Entities and Considerations",
    topics: [
      "Entity structures and formation (sole prop, partnership, C corp, S corp, LLC classifications).",
      "Entity-selection tradeoffs: pass-through vs double-tax, SE tax vs payroll tax, compensation patterns.",
      "Accounting periods and methods: tax year choices, cash/accrual, Form 3115, inventory/UNICAP basics.",
      "Capitalization and basis frameworks, including inside/outside basis and owner-level limitation overlays.",
      "Compliance setup themes: EINs, employment/excise/information filing touchpoints by entity type.",
    ],
  },
  {
    heading: "Domain 2 - Business Tax Preparation",
    topics: [
      "Business income and COGS, other income categories, and COD awareness including partnership emphasis.",
      "Ordinary/necessary deduction rules, travel and meals limits, home office and auto usage rules.",
      "Depreciation and amortization: MACRS, section 179, bonus, listed property, startup/organizational costs.",
      "Business credits, employment taxes, estimated taxes, and penalties from return-preparer perspective.",
      "Entity-specific computations and forms: Form 1120, 1065/K-1, 1120-S/K-1, plus section 199A basics.",
    ],
  },
  {
    heading: "Domain 3 - Specialized Returns and Taxpayers",
    topics: [
      "Fiduciary returns (Form 1041), DNI concepts, and beneficiary/entity tax treatment awareness.",
      "Exempt organization basics, UBTI concept, and Form 990-series overview.",
      "Specialized filing obligations: Forms 941/940/943/944, 1099/1098 series, and excise-return awareness.",
      "Estate/gift/GST intersections with business interests at conceptual exam depth.",
      "International and multistate topics mainly as awareness-level, high-level conceptual questions.",
    ],
  },
];

export const reportOutline = [
  {
    section: "I. Orientation to SEE Part 2",
    pages: "3-4 pages",
    points: [
      "Purpose, role of Part 2, and exam structure (100 total / 85 scored / 15 experimental).",
      "Exam facts and logistics: 3.5-hour limit, May-February window, 4 attempts per part per window.",
      "Blueprint weighting overview and study-level strategy (memorize vs deeply understand).",
    ],
  },
  {
    section: "II. Business Entity Fundamentals (Domain 1)",
    pages: "10-12 pages",
    points: [
      "Entity types and tax profiles for sole prop, partnerships, C corps, S corps.",
      "Entity selection and owner-compensation comparisons (single vs double tax, SE vs payroll).",
      "Accounting periods/methods and basis/at-risk/passive overlays with scenario framing.",
    ],
  },
  {
    section: "III. Business Income and Deductions (Core Domain 2)",
    pages: "10-12 pages",
    points: [
      "Business income streams, gross receipts vs COGS, and COD/high-frequency trap patterns.",
      "Deduction architecture under section 162 including meals/travel/home office/auto issues.",
      "Depreciation/amortization stack (MACRS, section 179, bonus, startup/organizational costs).",
      "Credits, employment taxes, estimates, and penalties tied to return preparation.",
    ],
  },
  {
    section: "IV. Entity-Specific Return Preparation",
    pages: "8-10 pages",
    points: [
      "Form 1120 structure and C-corp computation themes (DRD awareness and reconciliation patterns).",
      "Form 1065/K-1 and 1120-S/K-1 construction, separately stated items, and basis mechanics.",
      "Section 199A/QBI and SSTB threshold concepts at Part 2 exam depth.",
    ],
  },
  {
    section: "V. Specialized Returns and Taxpayers (Domain 3)",
    pages: "8-10 pages",
    points: [
      "Form 1041 and high-level DNI treatment.",
      "Exempt organizations, UBTI, and Form 990-series awareness.",
      "Employment/excise/information returns plus limited-depth international and multistate issues.",
    ],
  },
  {
    section: "VI. Exam Tactics, Traps, and Master Checklists",
    pages: "4-5 pages",
    points: [
      "Question patterns: direct, scenario-based, and except-style item design.",
      "Top trap categories by domain (basis limits, depreciation conventions, QBI misapplication, specialized forms).",
      "Master memorize list vs master understand list and integrated case practice strategy.",
    ],
  },
];

export const setDesignRows = [
  {
    topic: "Entity types and basic features",
    domain: "Domain 1",
    mix: "60/30/10",
    setA: 10,
    setB: 8,
    setC: 6,
    rationale:
      "Set A cements classification; B adds practical scenarios; C shifts toward nuanced exceptions.",
  },
  {
    topic: "Entity selection and tax considerations",
    domain: "Domain 1",
    mix: "40/40/20",
    setA: 6,
    setB: 8,
    setC: 8,
    rationale:
      "B/C stress reasoning around compensation and tax layers; A focuses conceptual anchors.",
  },
  {
    topic: "Accounting periods and methods",
    domain: "Domain 1",
    mix: "40/40/20",
    setA: 4,
    setB: 6,
    setC: 6,
    rationale:
      "B/C add method-change consequences and exceptions; A emphasizes identification basics.",
  },
  {
    topic: "Partnership fundamentals and basis",
    domain: "Domain 1/2 overlap",
    mix: "30/40/30",
    setA: 6,
    setB: 8,
    setC: 10,
    rationale:
      "C is largest due to hard basis/COD/limitation interactions; B adds computation depth.",
  },
  {
    topic: "S corporation fundamentals and basis",
    domain: "Domain 1/2 overlap",
    mix: "30/40/30",
    setA: 5,
    setB: 7,
    setC: 9,
    rationale:
      "C emphasizes basis ordering/loss limits; B focuses numerical basis changes.",
  },
  {
    topic: "C corporation basics and Form 1120",
    domain: "Domain 2",
    mix: "50/35/15",
    setA: 7,
    setB: 7,
    setC: 5,
    rationale:
      "Balanced across sets with progressively harder reconciliation and DRD interactions.",
  },
  {
    topic: "Business income and COGS",
    domain: "Domain 2",
    mix: "50/35/15",
    setA: 8,
    setB: 8,
    setC: 6,
    rationale:
      "Core frequency topic weighted heavily in A/B; C adds layered scenarios.",
  },
  {
    topic: "Ordinary and necessary deductions",
    domain: "Domain 2",
    mix: "50/35/15",
    setA: 8,
    setB: 8,
    setC: 6,
    rationale:
      "A supports rule recognition; B/C add substantiation and partial-allowance traps.",
  },
  {
    topic: "Depreciation, section 179, bonus, amortization",
    domain: "Domain 2",
    mix: "35/40/25",
    setA: 7,
    setB: 9,
    setC: 8,
    rationale:
      "B is strongest for numeric computation; C emphasizes convention-selection pitfalls.",
  },
  {
    topic: "Business credits and adjustments",
    domain: "Domain 2",
    mix: "40/40/20",
    setA: 4,
    setB: 6,
    setC: 6,
    rationale:
      "A builds category recognition; B/C integrate credits into full return effects.",
  },
  {
    topic: "Employment and self-employment tax",
    domain: "Domain 2/3 overlap",
    mix: "50/35/15",
    setA: 6,
    setB: 6,
    setC: 4,
    rationale:
      "A/B anchor payroll-SE distinctions; C focuses classification and penalty traps.",
  },
  {
    topic: "QBI section 199A and SSTB basics",
    domain: "Domain 2",
    mix: "30/40/30",
    setA: 3,
    setB: 5,
    setC: 7,
    rationale:
      "Trend-heavy topic with hardest threshold/limitation interplay concentrated in C.",
  },
  {
    topic: "Fiduciary returns and DNI awareness",
    domain: "Domain 3",
    mix: "60/30/10",
    setA: 4,
    setB: 4,
    setC: 3,
    rationale:
      "Mostly conceptual awareness with moderate scenario testing.",
  },
  {
    topic: "Exempt organizations and UBTI",
    domain: "Domain 3",
    mix: "60/30/10",
    setA: 4,
    setB: 4,
    setC: 3,
    rationale:
      "Awareness-weighted topic with light edge-case testing in C.",
  },
  {
    topic: "Employment, excise, and information returns",
    domain: "Domain 3",
    mix: "50/35/15",
    setA: 6,
    setB: 6,
    setC: 5,
    rationale:
      "A/B focus who-files-what; C adds due-date and threshold distractors.",
  },
  {
    topic: "International and multistate concepts",
    domain: "Domain 3",
    mix: "70/20/10",
    setA: 2,
    setB: 2,
    setC: 2,
    rationale:
      "Small but persistent awareness layer across all sets.",
  },
  {
    topic: "Integrated multi-topic scenarios",
    domain: "Cross-domain",
    mix: "20/40/40",
    setA: 4,
    setB: 10,
    setC: 15,
    rationale:
      "Few in A, more in B, heavy in C to replicate advanced integrated exam reasoning.",
  },
];

export const setDesignTakeaways = [
  "Set A prioritizes foundational accuracy and confidence on high-frequency rules.",
  "Set B emphasizes medium-difficulty computations and realistic return-preparation scenarios.",
  "Set C concentrates hard exceptions, limitation interactions, and newer trend topics for 2026.",
];
