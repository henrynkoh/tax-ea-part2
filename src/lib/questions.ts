export type Domain = "Domain 1" | "Domain 2" | "Domain 3" | "Cross-Domain";
export type Difficulty = "Easy" | "Medium" | "Hard";
export type Choice = "A" | "B" | "C" | "D";

export interface Question {
  id: number;
  domain: Domain;
  difficulty: Difficulty;
  question: string;
  choices: Record<Choice, string>;
  answer: Choice;
  explanation: string;
}

export const questions: Question[] = [
  // ─── DOMAIN 1: Business Entities and Considerations (Q1–Q30) ───────────────
  {
    id: 1,
    domain: "Domain 1",
    difficulty: "Easy",
    question:
      "Which entity type provides limited liability to ALL owners without requiring corporate formalities?",
    choices: {
      A: "General partnership",
      B: "Limited liability company (LLC)",
      C: "Sole proprietorship",
      D: "C corporation",
    },
    answer: "B",
    explanation:
      "An LLC provides limited liability to all members without the board meetings, minutes, or other formalities required of corporations. General partnerships expose general partners to unlimited personal liability.",
  },
  {
    id: 2,
    domain: "Domain 1",
    difficulty: "Easy",
    question:
      "A single-member LLC that has not filed an entity-classification election is taxed by default as:",
    choices: {
      A: "C corporation",
      B: "S corporation",
      C: "Disregarded entity — reported on Schedule C",
      D: "Partnership",
    },
    answer: "C",
    explanation:
      "A single-member LLC is a disregarded entity by default. Its income and expenses flow through to the owner's Form 1040 Schedule C, E, or F, depending on the activity. No separate entity return is filed.",
  },
  {
    id: 3,
    domain: "Domain 1",
    difficulty: "Easy",
    question: "Which entity is subject to double taxation?",
    choices: {
      A: "S corporation",
      B: "Partnership",
      C: "C corporation",
      D: "Sole proprietorship",
    },
    answer: "C",
    explanation:
      "C corporations pay corporate income tax on profits; shareholders then pay individual income tax on dividends received. This two-level taxation is called double taxation and does not apply to pass-through entities.",
  },
  {
    id: 4,
    domain: "Domain 1",
    difficulty: "Easy",
    question: "The maximum number of shareholders an S corporation may have is:",
    choices: { A: "35", B: "75", C: "100", D: "Unlimited" },
    answer: "C",
    explanation:
      "IRC §1361(b)(1)(A) limits S corporations to 100 shareholders. Members of a family may be counted as one shareholder for this purpose.",
  },
  {
    id: 5,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Which of the following is NOT an eligible S corporation shareholder?",
    choices: {
      A: "U.S. citizen individual",
      B: "Grantor trust",
      C: "C corporation",
      D: "Qualified Subchapter S Trust (QSST)",
    },
    answer: "C",
    explanation:
      "Corporations (C or S), partnerships, and most non-resident aliens cannot be S corporation shareholders. Only individuals, certain trusts, and estates qualify under IRC §1361(b)(1)(B).",
  },
  {
    id: 6,
    domain: "Domain 1",
    difficulty: "Easy",
    question:
      "A partnership must have at least how many partners to exist as such for tax purposes?",
    choices: { A: "One", B: "Two", C: "Three", D: "Four" },
    answer: "B",
    explanation:
      "A partnership requires at least two owners. A single-owner arrangement is a sole proprietorship or disregarded entity, not a partnership.",
  },
  {
    id: 7,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Which entity structure allows owners to reduce self-employment (SE) tax by paying themselves a reasonable W-2 salary?",
    choices: {
      A: "Sole proprietorship",
      B: "General partnership",
      C: "S corporation",
      D: "Single-member LLC (disregarded entity)",
    },
    answer: "C",
    explanation:
      "S corporation owner-employees pay SE tax only on their reasonable W-2 compensation. Distributions above salary are not subject to SE tax, potentially reducing the SE tax burden versus a sole proprietorship or partnership.",
  },
  {
    id: 8,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "A calendar-year C corporation's Form 1120 is due (before any extension) on:",
    choices: {
      A: "March 15",
      B: "April 15",
      C: "April 15 with automatic extension to October 15",
      D: "March 15 with automatic extension to September 15",
    },
    answer: "B",
    explanation:
      "Form 1120 for a calendar-year C corporation is due April 15. An automatic 6-month extension (to October 15) is available by filing Form 7004. Partnerships and S corporations are due March 15.",
  },
  {
    id: 9,
    domain: "Domain 1",
    difficulty: "Easy",
    question:
      "Which accounting method recognizes income when earned and expenses when incurred, regardless of cash movement?",
    choices: {
      A: "Cash method",
      B: "Accrual method",
      C: "Hybrid method",
      D: "Installment method",
    },
    answer: "B",
    explanation:
      "Under the accrual method, income is recognized when all events have occurred to fix the right to receive it, and expenses are deducted when the liability is fixed and the amount is determinable — not when cash is exchanged.",
  },
  {
    id: 10,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "A C corporation with average annual gross receipts exceeding $30 million for the prior three-year period is generally REQUIRED to use which accounting method?",
    choices: {
      A: "Cash method",
      B: "Accrual method",
      C: "Either method",
      D: "Mark-to-market method",
    },
    answer: "B",
    explanation:
      "IRC §448 prohibits C corporations (other than qualified personal service corporations and certain farming businesses) with average annual gross receipts exceeding $30 million from using the cash method.",
  },
  {
    id: 11,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Which form is filed to request an automatic change in accounting method?",
    choices: {
      A: "Form 1128",
      B: "Form 3115",
      C: "Form 8832",
      D: "Form 2553",
    },
    answer: "B",
    explanation:
      "Form 3115 (Application for Change in Accounting Method) is filed to obtain IRS consent — automatic or advance — to change a method of accounting. Form 1128 is for tax year changes.",
  },
  {
    id: 12,
    domain: "Domain 1",
    difficulty: "Easy",
    question:
      "An LLC files which form to elect classification as a corporation for federal tax purposes?",
    choices: {
      A: "Form 2553",
      B: "Form 8832",
      C: "Form 1065",
      D: "Form 1120",
    },
    answer: "B",
    explanation:
      "Form 8832 (Entity Classification Election) is the 'check-the-box' form used to elect a different tax classification. Form 2553 is then filed to further elect S corporation status after Form 8832 classifies the entity as a corporation.",
  },
  {
    id: 13,
    domain: "Domain 1",
    difficulty: "Easy",
    question:
      "To elect S corporation status, an eligible corporation files:",
    choices: {
      A: "Form 8832",
      B: "Form 2553",
      C: "Form 1120-S",
      D: "Form 1065",
    },
    answer: "B",
    explanation:
      "Form 2553 (Election by a Small Business Corporation) must be filed by the 15th day of the 3rd month of the tax year for the election to be effective for that year, or any time during the prior year.",
  },
  {
    id: 14,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "A partner's outside basis in a partnership interest is INCREASED by which of the following?",
    choices: {
      A: "The partner's share of partnership liabilities",
      B: "Cash distributions received from the partnership",
      C: "The partner's share of partnership losses",
      D: "The partner's share of nondeductible expenses",
    },
    answer: "A",
    explanation:
      "Under IRC §752, increases in a partner's share of partnership liabilities are treated as cash contributions, increasing outside basis. Capital contributions and allocable income also increase basis; losses, distributions, and nondeductible expenses decrease it.",
  },
  {
    id: 15,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Which of the following REDUCES a partner's outside basis in a partnership?",
    choices: {
      A: "Additional capital contributions",
      B: "Distributive share of partnership ordinary income",
      C: "Cash distributions received from the partnership",
      D: "Partner assumes additional partnership liabilities",
    },
    answer: "C",
    explanation:
      "Cash distributions reduce outside basis dollar-for-dollar. Contributions and income shares increase basis; assuming more partnership liabilities also increases basis.",
  },
  {
    id: 16,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "Unlike partners in a partnership, an S corporation shareholder's basis is NOT increased by:",
    choices: {
      A: "Additional stock purchases",
      B: "Loans the shareholder personally makes to the corporation",
      C: "Pass-through income from the corporation",
      D: "The corporation's third-party (bank) debt",
    },
    answer: "D",
    explanation:
      "S corporation shareholders do NOT receive basis for entity-level debt (third-party loans to the corporation). Only direct loans FROM the shareholder TO the corporation increase loan basis. This is a key distinction from partnership rules.",
  },
  {
    id: 17,
    domain: "Domain 1",
    difficulty: "Easy",
    question:
      "Which schedule reports each partner's allocable share of partnership income, deductions, and credits?",
    choices: {
      A: "Schedule K-1 (Form 1120-S)",
      B: "Schedule K-1 (Form 1065)",
      C: "Schedule E (Form 1040)",
      D: "Schedule C (Form 1040)",
    },
    answer: "B",
    explanation:
      "Partnerships file Form 1065 and issue Schedule K-1 (Form 1065) to each partner. S corporations issue Schedule K-1 (Form 1120-S). Partners then report K-1 items on their own returns.",
  },
  {
    id: 18,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "The at-risk rules (IRC §465) limit loss deductions to the amount a taxpayer:",
    choices: {
      A: "Has as outside basis in the entity",
      B: "Has economically at risk in the activity",
      C: "Earned from the activity during the year",
      D: "Invested during the current year only",
    },
    answer: "B",
    explanation:
      "At-risk rules limit deductible losses to the amount the taxpayer is actually at risk — generally cash invested, adjusted basis of contributed property, and amounts borrowed for which the taxpayer is personally liable.",
  },
  {
    id: 19,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Under the passive activity loss rules (IRC §469), passive losses may generally be deducted against:",
    choices: {
      A: "Active income only",
      B: "Portfolio (investment) income only",
      C: "Passive income only",
      D: "Any type of income without limitation",
    },
    answer: "C",
    explanation:
      "Passive activity losses can only offset passive activity income. Suspended passive losses are carried forward and deducted when the taxpayer earns passive income or disposes of the passive activity.",
  },
  {
    id: 20,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Which of the following satisfies one of the material participation tests under the passive activity regulations?",
    choices: {
      A: "Participating more than 100 hours with no other person participating more",
      B: "Participating more than 500 hours in the activity during the year",
      C: "Owning more than 10% of the entity",
      D: "Working in the activity for at least 10 consecutive weeks",
    },
    answer: "B",
    explanation:
      "One of the seven material participation tests is participating more than 500 hours in the activity during the year. The 100-hour test (with no other individual participating more) is a separate, second test.",
  },
  {
    id: 21,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Inside basis in a partnership context refers to:",
    choices: {
      A: "A partner's basis in their partnership interest",
      B: "The partnership's adjusted basis in its own assets",
      C: "A shareholder's basis in S corporation stock",
      D: "A corporation's basis in treasury stock",
    },
    answer: "B",
    explanation:
      "Inside basis is the partnership's tax basis in each of its assets. Outside basis is the partner's basis in their partnership interest. The two can diverge due to contributed property, special allocations, and distributions.",
  },
  {
    id: 22,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Under the check-the-box regulations, a domestic eligible entity with two or more members is classified by default as:",
    choices: {
      A: "C corporation",
      B: "S corporation",
      C: "Partnership",
      D: "Disregarded entity",
    },
    answer: "C",
    explanation:
      "Under Treas. Reg. §301.7701-3, a domestic multi-member eligible entity defaults to partnership classification. A single-member entity defaults to disregarded entity status. Either can elect a different classification on Form 8832.",
  },
  {
    id: 23,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Which of the following is a SEPARATELY STATED item on a partnership Schedule K-1?",
    choices: {
      A: "Gross receipts from business",
      B: "Cost of goods sold",
      C: "Charitable contributions",
      D: "Officer salaries",
    },
    answer: "C",
    explanation:
      "Items that could be treated differently depending on the partner's tax situation are separately stated. Charitable contributions must be separately stated because each partner applies their own AGI-based deduction limit.",
  },
  {
    id: 24,
    domain: "Domain 1",
    difficulty: "Easy",
    question:
      "UNICAP rules (IRC §263A) require certain producers and resellers to:",
    choices: {
      A: "Deduct all inventory costs immediately",
      B: "Capitalize certain indirect costs into inventory or self-constructed assets",
      C: "Use the LIFO inventory method",
      D: "File Form 3115 every tax year",
    },
    answer: "B",
    explanation:
      "The Uniform Capitalization (UNICAP) rules require producers and certain resellers to include allocated indirect costs (e.g., purchasing, handling, storage) in the cost of inventory rather than expensing them currently.",
  },
  {
    id: 25,
    domain: "Domain 1",
    difficulty: "Easy",
    question:
      "A limited partner in a general partnership has liability generally limited to:",
    choices: {
      A: "Unlimited personal liability for all partnership debts",
      B: "Twice their capital contribution",
      C: "Their capital contribution and agreed-upon capital commitment",
      D: "Zero — limited partners have no liability",
    },
    answer: "C",
    explanation:
      "Limited partners' liability is limited to their invested capital and any additional capital they agreed to contribute. General partners have unlimited personal liability. A limited partnership must have at least one general partner.",
  },
  {
    id: 26,
    domain: "Domain 1",
    difficulty: "Easy",
    question:
      "Which of the following is NOT a valid federal income tax accounting method?",
    choices: {
      A: "Cash receipts and disbursements method",
      B: "Accrual method",
      C: "Net present value method",
      D: "Hybrid method combining cash and accrual",
    },
    answer: "C",
    explanation:
      "Net present value (NPV) is a financial analysis concept, not a tax accounting method. IRC §446 recognizes cash, accrual, and hybrid methods as permissible tax accounting methods.",
  },
  {
    id: 27,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "A §754 election by a partnership allows the partnership to:",
    choices: {
      A: "Elect out of the partnership tax rules",
      B: "Adjust the inside basis of partnership assets upon a transfer of a partnership interest or certain distributions",
      C: "Defer recognition of built-in gains for 5 years",
      D: "Allocate all income to the managing partner",
    },
    answer: "B",
    explanation:
      "A §754 election allows a partnership to adjust the inside basis of its assets (under §§743(b) or 734(b)) when a partnership interest is transferred or when certain distributions occur, aligning inside and outside basis.",
  },
  {
    id: 28,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "An S corporation's accumulated adjustments account (AAA) tracks:",
    choices: {
      A: "C corporation retained earnings",
      B: "Previously taxed income that can be distributed tax-free to S corporation shareholders",
      C: "The corporation's tax liability",
      D: "Distributions made to shareholders",
    },
    answer: "B",
    explanation:
      "The AAA represents S corporation income that has already been taxed to shareholders. Distributions from the AAA are tax-free to shareholders (return of previously taxed income). Distributions in excess of AAA may be taxed as dividends if the corporation has C corporation E&P.",
  },
  {
    id: 29,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "Under IRC §704(b), partnership special allocations must have:",
    choices: {
      A: "Equal sharing among all partners",
      B: "IRS pre-approval before they can be used",
      C: "Substantial economic effect to be respected for tax purposes",
      D: "A business purpose documented in the partnership agreement",
    },
    answer: "C",
    explanation:
      "Special allocations in a partnership agreement are respected for tax purposes only if they have 'substantial economic effect' under the §704(b) regulations. This ensures that tax consequences follow economic reality.",
  },
  {
    id: 30,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "A calendar-year S corporation must file Form 1120-S by (before any extension):",
    choices: {
      A: "April 15",
      B: "March 15",
      C: "April 15 with extension to September 15",
      D: "March 15 with extension to October 15",
    },
    answer: "B",
    explanation:
      "Form 1120-S is due March 15 for calendar-year S corporations. An automatic 6-month extension to September 15 is available by filing Form 7004. Partnerships (Form 1065) share the same March 15 due date.",
  },

  // ─── DOMAIN 2: Business Tax Preparation (Q31–Q67) ──────────────────────────
  {
    id: 31,
    domain: "Domain 2",
    difficulty: "Easy",
    question:
      "Which IRC section governs the deductibility of ordinary and necessary business expenses?",
    choices: {
      A: "IRC §162",
      B: "IRC §212",
      C: "IRC §263",
      D: "IRC §179",
    },
    answer: "A",
    explanation:
      "IRC §162 allows a deduction for all ordinary and necessary expenses paid or incurred in carrying on a trade or business. §212 covers investment expenses; §263 covers capitalization; §179 covers expensing of depreciable property.",
  },
  {
    id: 32,
    domain: "Domain 2",
    difficulty: "Easy",
    question:
      "Business meal expenses are currently deductible at what percentage?",
    choices: { A: "100%", B: "80%", C: "50%", D: "25%" },
    answer: "C",
    explanation:
      "Under IRC §274(n), business meals are generally limited to 50% deductibility. The food and beverages must not be lavish or extravagant, and a business purpose must be documented.",
  },
  {
    id: 33,
    domain: "Domain 2",
    difficulty: "Easy",
    question:
      "After the Tax Cuts and Jobs Act (TCJA), client entertainment expenses (tickets to sporting events, golf outings, etc.) are:",
    choices: {
      A: "50% deductible",
      B: "100% deductible",
      C: "Not deductible",
      D: "Deductible only if business is discussed",
    },
    answer: "C",
    explanation:
      "TCJA eliminated the deduction for entertainment expenses effective 2018. Even if business is discussed during entertainment, these costs are not deductible. Business meals remain 50% deductible if separate from entertainment.",
  },
  {
    id: 34,
    domain: "Domain 2",
    difficulty: "Easy",
    question:
      "The home office deduction using the simplified method allows:",
    choices: {
      A: "$3 per square foot up to 300 square feet",
      B: "$5 per square foot up to 300 square feet (max $1,500)",
      C: "Actual expenses pro-rated by square footage",
      D: "A flat $1,000 deduction",
    },
    answer: "B",
    explanation:
      "The simplified method allows $5 per square foot for up to 300 square feet of dedicated home office space, for a maximum deduction of $1,500. The regular method uses actual expenses allocated by business percentage.",
  },
  {
    id: 35,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "A vehicle costing $50,000 is used 60% for business. What is the depreciable business basis for tax purposes?",
    choices: {
      A: "$50,000",
      B: "$30,000",
      C: "$20,000",
      D: "$25,000",
    },
    answer: "B",
    explanation:
      "$50,000 × 60% business use = $30,000 depreciable basis. Only the business-use portion of a vehicle is depreciable. Personal use creates no tax deduction, and listed property rules (§280F) further limit automobile depreciation.",
  },
  {
    id: 36,
    domain: "Domain 2",
    difficulty: "Easy",
    question:
      "Under MACRS, which recovery period applies to most non-residential real property?",
    choices: { A: "27.5 years", B: "39 years", C: "15 years", D: "40 years" },
    answer: "B",
    explanation:
      "Non-residential real property is depreciated over 39 years under MACRS using the straight-line method. Residential rental property (apartments, etc.) uses a 27.5-year recovery period.",
  },
  {
    id: 37,
    domain: "Domain 2",
    difficulty: "Easy",
    question:
      "Section 179 expensing allows a business to:",
    choices: {
      A: "Deduct the full cost of qualifying property in the year placed in service",
      B: "Accelerate depreciation over 3 years instead of the MACRS period",
      C: "Deduct 50% of the cost immediately and the rest over the recovery period",
      D: "Carry back depreciation deductions to prior tax years",
    },
    answer: "A",
    explanation:
      "IRC §179 allows an immediate first-year deduction of the full cost of qualifying business property (personal property, certain improvements) placed in service during the year, subject to annual dollar and income limitations.",
  },
  {
    id: 38,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The Section 179 deduction is limited by:",
    choices: {
      A: "The taxpayer's total gross income",
      B: "The aggregate taxable income from all active trades or businesses",
      C: "The taxpayer's adjusted gross income",
      D: "The total cost of all assets placed in service during the year",
    },
    answer: "B",
    explanation:
      "§179 cannot create or increase a loss. The deduction is limited to the aggregate taxable income from all active trades or businesses of the taxpayer. Any disallowed amount is carried forward to future years.",
  },
  {
    id: 39,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Bonus depreciation (additional first-year depreciation) for property placed in service during 2024 is:",
    choices: { A: "100%", B: "80%", C: "60%", D: "40%" },
    answer: "C",
    explanation:
      "TCJA provided 100% bonus depreciation through 2022. The phase-down schedule is: 80% (2023), 60% (2024), 40% (2025), 20% (2026), then 0% (2027 and beyond) for property placed in service after December 31, 2022.",
  },
  {
    id: 40,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Which of the following is considered 'listed property' subject to special limitations under IRC §280F?",
    choices: {
      A: "Office furniture used exclusively at a regular business establishment",
      B: "A desktop computer used exclusively at the employer's office",
      C: "Passenger automobiles",
      D: "Heavy manufacturing equipment",
    },
    answer: "C",
    explanation:
      "Passenger automobiles are listed property subject to annual luxury auto depreciation caps. Note: computers used exclusively at a regular business establishment were removed from listed property by TCJA. Heavy equipment is not listed property.",
  },
  {
    id: 41,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Under IRC §195, startup costs for a new business are deductible as follows:",
    choices: {
      A: "Up to $5,000 immediately (phased out when total exceeds $50,000); remainder amortized over 180 months",
      B: "Up to $10,000 immediately; 60-month amortization for the rest",
      C: "Fully deductible in the year the business opens",
      D: "Capitalized and never deducted",
    },
    answer: "A",
    explanation:
      "§195 allows up to $5,000 of startup costs as an immediate deduction in the year the business begins. The $5,000 is reduced dollar-for-dollar when total startup costs exceed $50,000. Any remainder is amortized over 180 months.",
  },
  {
    id: 42,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The mid-quarter MACRS convention applies for personal property when:",
    choices: {
      A: "Any property is placed in service in Q4",
      B: "More than 40% of all personal property placed in service during the year is placed in service in Q4",
      C: "Property is disposed of during the middle of a quarter",
      D: "The taxpayer elects it on Form 4562",
    },
    answer: "B",
    explanation:
      "When more than 40% of all depreciable personal property placed in service during the year is placed in service in the last quarter, the mid-quarter convention replaces the half-year convention for ALL personal property placed in service that year.",
  },
  {
    id: 43,
    domain: "Domain 2",
    difficulty: "Easy",
    question:
      "For MACRS real property (residential and non-residential), which depreciation convention applies?",
    choices: {
      A: "Half-year convention",
      B: "Mid-quarter convention",
      C: "Mid-month convention",
      D: "Full-year convention",
    },
    answer: "C",
    explanation:
      "Real property (both residential rental and non-residential) always uses the mid-month convention, treating the property as placed in service (or disposed of) in the middle of the month, regardless of the actual date.",
  },
  {
    id: 44,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Net operating losses (NOLs) generated after December 31, 2017 (TCJA rules):",
    choices: {
      A: "Can be carried back 2 years and forward 20 years",
      B: "Can only be carried forward indefinitely; the deduction is limited to 80% of taxable income",
      C: "Can be carried back 3 years and forward 15 years",
      D: "Must be used in the year generated or are permanently lost",
    },
    answer: "B",
    explanation:
      "TCJA eliminated the 2-year carryback for most post-2017 NOLs (certain farming and insurance NOLs still have 2-year carrybacks) and limited the deduction to 80% of taxable income, but allowed indefinite carryforward.",
  },
  {
    id: 45,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Cancellation of debt (COD) income is:",
    choices: {
      A: "Always excluded from gross income",
      B: "Included in gross income unless a specific exclusion applies (e.g., insolvency, bankruptcy)",
      C: "Always treated as a capital gain",
      D: "Automatically deferred for 5 years",
    },
    answer: "B",
    explanation:
      "IRC §61(a)(12) includes COD income in gross income. Exclusions exist for discharges in bankruptcy, insolvency, qualified farm debt, qualified real property business indebtedness, and certain student loan discharges.",
  },
  {
    id: 46,
    domain: "Domain 2",
    difficulty: "Easy",
    question:
      "The employer's share of FICA (Social Security + Medicare) payroll taxes totals:",
    choices: {
      A: "7.65% (6.2% + 1.45%)",
      B: "15.3% (12.4% + 2.9%)",
      C: "9.1% (6.2% + 2.9%)",
      D: "6.2% flat",
    },
    answer: "A",
    explanation:
      "The employer pays 6.2% Social Security tax (on wages up to the annual wage base) plus 1.45% Medicare tax (no cap) = 7.65% total. The employee pays an identical 7.65%, for a combined total of 15.3%.",
  },
  {
    id: 47,
    domain: "Domain 2",
    difficulty: "Easy",
    question:
      "Federal unemployment tax (FUTA) is paid by:",
    choices: {
      A: "Both employer and employee equally",
      B: "The employee only via payroll withholding",
      C: "The employer only — no employee withholding",
      D: "The federal government from general revenues",
    },
    answer: "C",
    explanation:
      "FUTA is entirely an employer tax reported on Form 940. Unlike Social Security and Medicare taxes, no FUTA is withheld from employee wages.",
  },
  {
    id: 48,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "After applying the maximum 5.4% state unemployment credit, the net federal FUTA rate is:",
    choices: { A: "6.0%", B: "5.4%", C: "0.6%", D: "3.0%" },
    answer: "C",
    explanation:
      "The gross FUTA rate is 6.0% on the first $7,000 of wages per employee. Employers who pay state unemployment taxes timely receive a credit of up to 5.4%, reducing the net FUTA rate to 0.6%.",
  },
  {
    id: 49,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Corporations must make estimated income tax payments when expected tax liability is:",
    choices: {
      A: "$500 or more",
      B: "$1,000 or more",
      C: "$2,500 or more",
      D: "$5,000 or more",
    },
    answer: "A",
    explanation:
      "Corporations must deposit estimated taxes when they expect to owe $500 or more in federal income tax. Deposits are generally due on the 15th day of the 4th, 6th, 9th, and 12th months of the tax year.",
  },
  {
    id: 50,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "A C corporation owning 20–79% of the distributing corporation may claim a dividends received deduction (DRD) of:",
    choices: { A: "50%", B: "65%", C: "70%", D: "100%" },
    answer: "B",
    explanation:
      "The DRD percentage depends on ownership: less than 20% = 50%; 20–79% = 65%; 80% or more = 100%. TCJA reduced the 70% and 80% tiers to 65% and 100% respectively.",
  },
  {
    id: 51,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "The accumulated earnings tax (AET) is imposed on C corporations that:",
    choices: {
      A: "Pay excessive salaries to shareholder-employees",
      B: "Accumulate earnings beyond reasonable business needs to avoid shareholder-level dividend taxation",
      C: "Fail to make estimated tax payments for two consecutive years",
      D: "Have more than 100 shareholders",
    },
    answer: "B",
    explanation:
      "The AET (IRC §531) is a 20% penalty tax on C corporations with accumulated taxable income beyond the reasonable needs of the business. The intent is to prevent using the corporation to shield earnings from shareholder-level dividend taxation.",
  },
  {
    id: 52,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "Personal holding company (PHC) status requires which two conditions?",
    choices: {
      A: "More than 50% owned by 5 or fewer individuals AND at least 60% of adjusted ordinary gross income is PHC income",
      B: "More than 100 shareholders AND primarily passive income",
      C: "Accumulated earnings exceed $250,000 AND majority shareholder is a foreign person",
      D: "At least 80% owned by family members AND earns only dividend income",
    },
    answer: "A",
    explanation:
      "IRC §542 defines a PHC as a corporation where (1) more than 50% of outstanding stock is owned by 5 or fewer individuals at any time in the last half of the year, AND (2) at least 60% of adjusted ordinary gross income is PHC income (passive income).",
  },
  {
    id: 53,
    domain: "Domain 2",
    difficulty: "Easy",
    question:
      "Section 199A (QBI deduction) allows eligible pass-through owners to deduct up to what percentage of qualified business income?",
    choices: { A: "10%", B: "15%", C: "20%", D: "25%" },
    answer: "C",
    explanation:
      "IRC §199A provides a deduction of up to 20% of QBI from partnerships, S corporations, and sole proprietorships. The deduction is subject to W-2 wage and UBIA limitations, and is phased out for SSTB owners above certain income thresholds.",
  },
  {
    id: 54,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Which of the following businesses is classified as a specified service trade or business (SSTB) under §199A?",
    choices: {
      A: "Engineering",
      B: "Architecture",
      C: "Law",
      D: "Manufacturing",
    },
    answer: "C",
    explanation:
      "Law is specifically listed as an SSTB under §199A. Engineering and architecture were explicitly EXCLUDED from SSTB status despite being professional services. Manufacturing is not an SSTB.",
  },
  {
    id: 55,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Which form does a partnership use to report its annual income, deductions, and credits to the IRS?",
    choices: {
      A: "Form 1120",
      B: "Form 1120-S",
      C: "Form 1065",
      D: "Schedule C",
    },
    answer: "C",
    explanation:
      "Partnerships file Form 1065 (U.S. Return of Partnership Income) — an informational return. The tax liability flows through to the partners, who report K-1 items on their own returns. Partnerships do not pay federal income tax at the entity level.",
  },
  {
    id: 56,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Guaranteed payments to partners for services or use of capital are:",
    choices: {
      A: "Non-deductible distributions from the partnership",
      B: "Deductible by the partnership and ordinary income (subject to SE tax) to the partner",
      C: "Treated as capital gains to the receiving partner",
      D: "Excluded from the partner's gross income",
    },
    answer: "B",
    explanation:
      "IRC §707(c) guaranteed payments are deductible by the partnership as a business expense and are included as ordinary income to the receiving partner. They are also generally subject to self-employment tax.",
  },
  {
    id: 57,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "When a C corporation distributes appreciated property (not cash) to a shareholder, the corporation recognizes:",
    choices: {
      A: "No gain or loss",
      B: "Gain only — never a loss",
      C: "Gain or loss, as if the property were sold at fair market value",
      D: "Loss only, if the property has declined in value",
    },
    answer: "B",
    explanation:
      "IRC §311(b) requires a corporation to recognize gain when distributing appreciated property (as if sold at FMV). However, §311(a) disallows recognition of loss on distributions. Shareholders include the FMV of the property as a dividend.",
  },
  {
    id: 58,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "An S corporation with C corporation accumulated earnings and profits (AE&P) must monitor passive investment income. If passive investment income exceeds 25% of gross receipts for 3 consecutive years:",
    choices: {
      A: "The S election is suspended but not terminated",
      B: "The S election is terminated at the end of the third year",
      C: "Shareholders owe double tax on the passive income",
      D: "The AE&P is automatically distributed to shareholders",
    },
    answer: "B",
    explanation:
      "Under IRC §1362(d)(3), if an S corporation with AE&P has passive investment income exceeding 25% of gross receipts for 3 consecutive tax years, the S election is terminated effective the first day of the following tax year.",
  },
  {
    id: 59,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "The built-in gains (BIG) tax (IRC §1374) applies when an S corporation:",
    choices: {
      A: "Was always an S corporation from inception",
      B: "Recognizes gain within the 5-year recognition period on assets that had unrealized appreciation at the time of C-to-S conversion",
      C: "Exceeds 100 shareholders",
      D: "Fails to pay reasonable compensation to shareholder-employees",
    },
    answer: "B",
    explanation:
      "The BIG tax prevents C corporations from avoiding corporate-level tax by converting to S status. It applies at the highest corporate rate on recognized gains within 5 years of conversion, up to the amount of built-in gain existing at conversion.",
  },
  {
    id: 60,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The research and development (R&D) tax credit is calculated on:",
    choices: {
      A: "Form 6765",
      B: "Form 5884",
      C: "Form 3468",
      D: "Form 8941",
    },
    answer: "A",
    explanation:
      "Form 6765 (Credit for Increasing Research Activities) is used to calculate the R&D credit, which is then included in the general business credit on Form 3800. Form 5884 is the Work Opportunity Credit.",
  },
  {
    id: 61,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Section 179 property placed in service and then converted to personal use before the end of the asset's recovery period triggers:",
    choices: {
      A: "No recapture — §179 is not subject to recapture",
      B: "Ordinary income recapture under IRC §1245 for the excess of §179 deduction over straight-line depreciation",
      C: "Capital gains tax on the full §179 amount",
      D: "An amendment to the original return for all prior years",
    },
    answer: "B",
    explanation:
      "§1245 recapture applies when §179 property is converted to personal use before the end of its recovery period. The recapture income is the difference between the §179 amount deducted and the straight-line depreciation that would have been allowed.",
  },
  {
    id: 62,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "A self-employed taxpayer with $100,000 of net self-employment income can deduct which amount as an above-the-line deduction on Form 1040?",
    choices: {
      A: "$14,130 (full SE tax)",
      B: "$7,065 (one-half of SE tax)",
      C: "$7,500 flat",
      D: "$15,300",
    },
    answer: "B",
    explanation:
      "Self-employed individuals pay SE tax of 15.3% on 92.35% of net SE income. One-half of the SE tax is deductible as an above-the-line deduction under IRC §164(f). On $100,000: $100,000 × 92.35% × 15.3% ≈ $14,130; one-half ≈ $7,065.",
  },
  {
    id: 63,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Excess business losses for non-corporate taxpayers under IRC §461(l) (as extended by TCJA):",
    choices: {
      A: "Are fully deductible in the current year without limitation",
      B: "Are disallowed and treated as an NOL carryforward to the next tax year",
      C: "Can offset wage income without any limitation",
      D: "Are deductible only against passive income",
    },
    answer: "B",
    explanation:
      "For non-corporate taxpayers, excess business losses (aggregate business losses exceeding $250,000 for single / $500,000 for MFJ, indexed for inflation) are disallowed and carried forward as an NOL under IRC §172.",
  },
  {
    id: 64,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Organizational costs for a corporation under IRC §248 are treated as:",
    choices: {
      A: "Fully deductible in the year of incorporation",
      B: "Up to $5,000 immediately deductible (reduced when total exceeds $50,000); remainder amortized over 180 months",
      C: "Capitalized permanently — never deductible",
      D: "Deductible over 60 months beginning in the first month",
    },
    answer: "B",
    explanation:
      "§248 mirrors the §195 startup cost rules. Up to $5,000 of organizational costs (incorporating fees, legal costs for the charter, etc.) are immediately deductible, with the phase-out beginning when costs exceed $50,000. The rest amortizes over 180 months.",
  },
  {
    id: 65,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "A calendar-year partnership must file Form 1065 and issue K-1s by:",
    choices: {
      A: "April 15",
      B: "March 15",
      C: "April 15 with extension to September 15",
      D: "March 15 with extension to September 15",
    },
    answer: "D",
    explanation:
      "Form 1065 is due March 15 for calendar-year partnerships, with an automatic 6-month extension to September 15 available by filing Form 7004. The early deadline allows partners to receive K-1s before their individual return due date of April 15.",
  },
  {
    id: 66,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The Work Opportunity Tax Credit (WOTC) is first calculated on which form?",
    choices: {
      A: "Form 3800",
      B: "Form 5884",
      C: "Form 8941",
      D: "Form 6765",
    },
    answer: "B",
    explanation:
      "WOTC is computed on Form 5884 for employers who hire individuals from targeted groups (veterans, SNAP recipients, etc.). The credit flows to Form 3800 (General Business Credit) for the overall credit limitation calculation.",
  },
  {
    id: 67,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "Under the MACRS half-year convention, a 5-year property asset is placed in service in 2024. In which year is the final year depreciation deduction taken?",
    choices: {
      A: "2028 (year 5)",
      B: "2029 (year 6)",
      C: "2027 (year 4)",
      D: "2030 (year 7)",
    },
    answer: "B",
    explanation:
      "The half-year convention gives only a half-year of depreciation in year 1 (2024) and the final year of the recovery period. For 5-year property placed in service in 2024, depreciation spans years 2024–2029 (6 calendar years) to allow for 5 full years of deductions using the half-year convention in both the first and final years.",
  },

  // ─── DOMAIN 3: Specialized Returns (Q68–Q85) ───────────────────────────────
  {
    id: 68,
    domain: "Domain 3",
    difficulty: "Easy",
    question: "A trust or estate files its annual income tax return on:",
    choices: {
      A: "Form 1040",
      B: "Form 1041",
      C: "Form 1065",
      D: "Form 1120",
    },
    answer: "B",
    explanation:
      "Trusts and estates file Form 1041 (U.S. Income Tax Return for Estates and Trusts). Form 1040 is for individuals; Form 1065 is for partnerships; Form 1120 is for C corporations.",
  },
  {
    id: 69,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Distributable net income (DNI) in the context of estates and trusts determines:",
    choices: {
      A: "The executor's deductible fee",
      B: "The maximum distribution deduction for the estate/trust and the character of income to beneficiaries",
      C: "The taxable income of the trust before distributions",
      D: "The amount of the estate tax applicable exclusion",
    },
    answer: "B",
    explanation:
      "DNI serves two purposes: (1) it caps the estate/trust's deduction for distributions to beneficiaries, and (2) it determines the amount and character of income the beneficiaries must include on their own returns.",
  },
  {
    id: 70,
    domain: "Domain 3",
    difficulty: "Hard",
    question:
      "A trust has DNI of $30,000 and distributes $40,000 to its sole beneficiary. The trust's distribution deduction is:",
    choices: {
      A: "$40,000",
      B: "$30,000",
      C: "$10,000",
      D: "$0",
    },
    answer: "B",
    explanation:
      "The distribution deduction is limited to the lesser of the actual distribution or DNI. The trust deducts $30,000 (DNI), and the beneficiary includes $30,000 as income. The $10,000 excess distribution is a nontaxable return of trust corpus.",
  },
  {
    id: 71,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "A tax-exempt organization must file Form 990-T and pay income tax on unrelated business taxable income (UBTI) when UBTI exceeds:",
    choices: { A: "$100", B: "$1,000", C: "$5,000", D: "$10,000" },
    answer: "B",
    explanation:
      "Under IRC §512, exempt organizations owe tax on UBTI in excess of $1,000. Each unrelated trade or business must be separately tracked under siloing rules enacted by the Tax Cuts and Jobs Act.",
  },
  {
    id: 72,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Which of the following is generally NOT included in unrelated business taxable income (UBTI)?",
    choices: {
      A: "Revenue from a regularly conducted trade or business unrelated to exempt purpose",
      B: "Dividends and interest from investments",
      C: "Rental income from debt-financed property",
      D: "Advertising revenue from a publication unrelated to the exempt purpose",
    },
    answer: "B",
    explanation:
      "IRC §512(b) excludes 'passive income modifications' from UBTI: dividends, interest, annuities, royalties, and rents from non-debt-financed property. Debt-financed rental income IS included. Advertising and unrelated business revenue ARE UBTI.",
  },
  {
    id: 73,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "An exempt organization with gross receipts of $250,000 and total assets of $600,000 must file:",
    choices: {
      A: "Form 990-N (e-Postcard)",
      B: "Form 990-EZ",
      C: "Form 990",
      D: "No form — exempt organizations don't file returns",
    },
    answer: "C",
    explanation:
      "Form 990 is required when gross receipts ≥$200,000 OR total assets ≥$500,000. This organization meets both thresholds. Form 990-EZ is for those with gross receipts <$200,000 and assets <$500,000; 990-N for those with gross receipts ≤$50,000.",
  },
  {
    id: 74,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "A monthly payroll tax depositor must deposit federal employment taxes by:",
    choices: {
      A: "The 15th day of the following month",
      B: "The last business day of the current month",
      C: "The next banking day after payroll",
      D: "The last day of the following month",
    },
    answer: "A",
    explanation:
      "Monthly depositors accumulate payroll tax liability and deposit by the 15th day of the following month. Semiweekly depositors deposit within 1–3 days after payroll. Very large liabilities require next-day deposits.",
  },
  {
    id: 75,
    domain: "Domain 3",
    difficulty: "Easy",
    question:
      "Form 941 (Employer's Quarterly Federal Tax Return) is filed:",
    choices: {
      A: "Monthly",
      B: "Quarterly",
      C: "Annually",
      D: "Semi-annually",
    },
    answer: "B",
    explanation:
      "Form 941 is filed quarterly (due April 30, July 31, October 31, and January 31) to report wages, federal income tax withheld, and employee and employer FICA taxes. Very small employers may file Form 944 annually instead.",
  },
  {
    id: 76,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Agricultural employers who pay $2,500 or more in farm wages during the calendar year file:",
    choices: {
      A: "Form 940",
      B: "Form 941",
      C: "Form 943",
      D: "Form 944",
    },
    answer: "C",
    explanation:
      "Form 943 (Employer's Annual Federal Tax Return for Agricultural Employees) is filed annually by farm employers. Form 941 is for non-agricultural employers; Form 944 is for very small employers; Form 940 is for FUTA taxes.",
  },
  {
    id: 77,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Form 1099-NEC is used to report payments of $600 or more made to:",
    choices: {
      A: "Employees (instead of Form W-2)",
      B: "C or S corporations for services",
      C: "Non-employee independent contractors for services",
      D: "Shareholders receiving dividends",
    },
    answer: "C",
    explanation:
      "Form 1099-NEC reports nonemployee compensation of $600 or more paid to individuals and unincorporated businesses for services. Payments to C and S corporations are generally exempt from 1099-NEC reporting. W-2 covers employees.",
  },
  {
    id: 78,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Form 1099-NEC is due to both the recipient AND the IRS by:",
    choices: {
      A: "January 31",
      B: "February 28 (paper) / March 31 (electronic)",
      C: "April 15",
      D: "March 15",
    },
    answer: "A",
    explanation:
      "Form 1099-NEC has a single deadline of January 31 for both recipient copies and IRS filing (both paper and electronic). This differs from Form 1099-MISC, which has separate deadlines for recipient (January 31) and IRS (February 28 paper / March 31 electronic).",
  },
  {
    id: 79,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Federal excise taxes on goods such as fuel, tobacco, and alcohol are reported on:",
    choices: {
      A: "Form 941",
      B: "Form 720",
      C: "Form 2290",
      D: "Form 940",
    },
    answer: "B",
    explanation:
      "Form 720 (Quarterly Federal Excise Tax Return) is the primary form for most federal excise taxes. Form 2290 is specifically for the heavy highway vehicle use tax; Forms 940/941 are employment tax returns.",
  },
  {
    id: 80,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Form 2290 (Heavy Highway Vehicle Use Tax) is required for highway motor vehicles with a taxable gross weight of:",
    choices: {
      A: "Over 10,000 pounds",
      B: "Over 26,000 pounds",
      C: "55,000 pounds or more",
      D: "80,000 pounds or more",
    },
    answer: "C",
    explanation:
      "Form 2290 is required for highway motor vehicles with a taxable gross weight of 55,000 pounds or more that are used on public highways. The annual tax is due by the last day of the month following the first month of use.",
  },
  {
    id: 81,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Very small employers with annual employment tax liability of $1,000 or less may file which form annually instead of Form 941 quarterly?",
    choices: {
      A: "Form 940",
      B: "Form 943",
      C: "Form 944",
      D: "Form 945",
    },
    answer: "C",
    explanation:
      "The IRS may notify eligible employers to file Form 944 (Employer's Annual Federal Tax Return) annually. Only employers specifically notified by the IRS to file Form 944 should do so; otherwise Form 941 is required quarterly.",
  },
  {
    id: 82,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "The annual gift tax exclusion for 2024, which allows gifts free of gift tax and without using the lifetime exemption, is:",
    choices: {
      A: "$15,000 per recipient",
      B: "$16,000 per recipient",
      C: "$17,000 per recipient",
      D: "$18,000 per recipient",
    },
    answer: "D",
    explanation:
      "The annual gift tax exclusion for 2024 is $18,000 per recipient (up from $17,000 in 2023). This amount is indexed for inflation and allows tax-free gifts without reducing the lifetime estate and gift tax exemption.",
  },
  {
    id: 83,
    domain: "Domain 3",
    difficulty: "Hard",
    question:
      "The generation-skipping transfer (GST) tax generally applies to transfers to:",
    choices: {
      A: "All gifts to grandchildren regardless of amount",
      B: "Skip persons (e.g., grandchildren) when transfers exceed the GST exemption",
      C: "All transfers between spouses in community property states",
      D: "All transfers to non-relatives over $100,000",
    },
    answer: "B",
    explanation:
      "The GST tax (IRC §2601) is a separate tax imposed on direct skips, taxable terminations, and taxable distributions to skip persons — generally individuals at least 37.5 years younger than the transferor. Transfers within the GST exemption avoid the tax.",
  },
  {
    id: 84,
    domain: "Domain 3",
    difficulty: "Hard",
    question:
      "A 'controlled foreign corporation' (CFC) is a foreign corporation where U.S. shareholders (each owning 10% or more) collectively own more than what percentage of total voting power or total value?",
    choices: { A: "25%", B: "50%", C: "10%", D: "75%" },
    answer: "B",
    explanation:
      "A CFC is defined in IRC §957 as a foreign corporation where U.S. shareholders (each owning 10%+ of voting power) own in aggregate more than 50% of total combined voting power or total value. U.S. shareholders of CFCs may have Subpart F income inclusions.",
  },
  {
    id: 85,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Which of the following is a grantor trust for federal income tax purposes?",
    choices: {
      A: "A trust where the grantor retains no powers after creation",
      B: "An irrevocable trust where a third-party trustee has full discretion",
      C: "A trust where the grantor retains the power to revoke the trust",
      D: "A charitable remainder trust (CRT)",
    },
    answer: "C",
    explanation:
      "Under IRC §676, a trust is a grantor trust if the grantor retains the power to revest ownership. A revocable living trust is the most common grantor trust. The grantor includes all trust income on their own Form 1040; Form 1041 may be filed as an informational return.",
  },

  // ─── CROSS-DOMAIN: Integrated Scenarios (Q86–Q100) ─────────────────────────
  {
    id: 86,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "Maria converts her C corporation to an S corporation on January 1, 2024. The corporation holds assets with $200,000 of built-in gain at conversion. If the corporation sells those assets in 2026, the built-in gains tax:",
    choices: {
      A: "Does not apply — the 5-year recognition period has expired",
      B: "Applies because the 5-year recognition period has not yet expired",
      C: "Applies only if the corporation still has C corporation AE&P",
      D: "Never applies — the S election eliminates corporate-level tax",
    },
    answer: "B",
    explanation:
      "The 5-year BIG recognition period runs from January 1, 2024 through December 31, 2028. A 2026 sale falls within the period, so BIG tax applies on the lesser of the recognized gain or the net unrealized built-in gain at conversion.",
  },
  {
    id: 87,
    domain: "Cross-Domain",
    difficulty: "Medium",
    question:
      "A partnership has $100,000 of recourse liabilities. Partner A has a 40% profits and loss interest. How does the liability affect Partner A's outside basis?",
    choices: {
      A: "No effect — liabilities only affect inside basis",
      B: "Increases by $40,000 (proportionate share)",
      C: "Increases by $100,000 (full amount)",
      D: "Decreases outside basis by $40,000",
    },
    answer: "B",
    explanation:
      "Under IRC §752, recourse liabilities are allocated to the partners who bear the economic risk of loss, often in proportion to their interests. Partner A's outside basis increases by their $40,000 share of the recourse liability.",
  },
  {
    id: 88,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "An S corporation shareholder has stock basis of $0 and loan basis of $5,000. The corporation passes through a $7,000 ordinary loss. How much can the shareholder deduct currently?",
    choices: { A: "$0", B: "$5,000", C: "$7,000", D: "$12,000" },
    answer: "B",
    explanation:
      "Losses are allowed first against stock basis (currently $0), then against loan basis ($5,000). The shareholder can deduct $5,000. The remaining $2,000 is suspended and carried forward until the shareholder restores basis (by additional stock purchases or loans to the corporation).",
  },
  {
    id: 89,
    domain: "Cross-Domain",
    difficulty: "Medium",
    question:
      "A sole proprietor's home office is 200 sq ft in a 2,000 sq ft home (10% business). Annual mortgage interest is $12,000. Using the regular (actual expense) method, how much mortgage interest is deducted on Schedule C as a business expense?",
    choices: { A: "$0", B: "$600", C: "$1,200", D: "$12,000" },
    answer: "C",
    explanation:
      "The business percentage is 200/2,000 = 10%. $12,000 × 10% = $1,200 allocated to the home office and deducted on Schedule C. The remaining 90% ($10,800) is deducted on Schedule A as personal mortgage interest (if the taxpayer itemizes).",
  },
  {
    id: 90,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A C corporation buys equipment for $500,000 in 2024. It claims §179 of $300,000. The remaining $200,000 basis is eligible for 60% bonus depreciation. The bonus depreciation amount is:",
    choices: {
      A: "$200,000",
      B: "$120,000",
      C: "$80,000",
      D: "$300,000",
    },
    answer: "B",
    explanation:
      "2024 bonus depreciation rate is 60%. After §179, the remaining basis is $200,000. Bonus depreciation = $200,000 × 60% = $120,000. The final $80,000 remaining basis would then be depreciated under regular MACRS over the asset's recovery period.",
  },
  {
    id: 91,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A partnership distributes $30,000 cash to Partner B, whose outside basis is $20,000. The tax result is:",
    choices: {
      A: "$10,000 ordinary loss to Partner B",
      B: "$10,000 capital gain to Partner B; basis reduced to $0",
      C: "Basis reduced to $0; no gain or loss recognized",
      D: "$30,000 ordinary income to Partner B",
    },
    answer: "B",
    explanation:
      "IRC §731(a)(1): cash distributions exceeding a partner's outside basis are taxable as capital gain. The $30,000 distribution exceeds $20,000 basis by $10,000. Partner B recognizes $10,000 capital gain, and outside basis is reduced to $0.",
  },
  {
    id: 92,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A calendar-year S corporation fails to file Form 1120-S by March 15 with no extension. The late filing penalty per month is approximately:",
    choices: {
      A: "$200 per month per shareholder",
      B: "$235 per month per shareholder (indexed for inflation)",
      C: "5% of unpaid tax per month",
      D: "$500 flat penalty regardless of number of shareholders",
    },
    answer: "B",
    explanation:
      "The §6699 failure-to-file penalty for Form 1120-S is $235 per shareholder per month (or fraction thereof) for tax year 2024, up to a maximum of 12 months. A 10-shareholder S corporation could face up to $28,200 in penalties.",
  },
  {
    id: 93,
    domain: "Cross-Domain",
    difficulty: "Medium",
    question:
      "XYZ Partnership has $100,000 ordinary income and $20,000 long-term capital gain (LTCG). Partner C has a 50% interest. Partner C reports:",
    choices: {
      A: "$50,000 ordinary income only",
      B: "$60,000 combined ordinary income",
      C: "$50,000 ordinary income + $10,000 LTCG — each reported separately",
      D: "$60,000 ordinary income because LTCG flows through as ordinary",
    },
    answer: "C",
    explanation:
      "The LTCG is a separately stated item on Schedule K-1 because its character (capital gain rate) must be preserved at the partner level. Partner C reports $50,000 ordinary income and $10,000 LTCG, each on the appropriate line of their personal return.",
  },
  {
    id: 94,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "Company X is an S corporation with AE&P of $50,000 and passive investment income of $80,000 on gross receipts of $120,000 (PII ratio ≈ 67%). The consequences are:",
    choices: {
      A: "No consequences — S elections are irrevocable once made",
      B: "The S corporation owes excess net passive income tax; if this continues 3 years in a row, the S election terminates",
      C: "Shareholders pay double tax on all passive income",
      D: "The AE&P is immediately constructively distributed and taxed as dividends",
    },
    answer: "B",
    explanation:
      "IRC §1375 imposes a corporate-level tax on excess net passive income when an S corp with AE&P earns PII exceeding 25% of gross receipts. IRC §1362(d)(3) terminates the S election if this occurs for 3 consecutive tax years.",
  },
  {
    id: 95,
    domain: "Cross-Domain",
    difficulty: "Medium",
    question:
      "A tax-exempt hospital's gift shop sells items to the general public unrelated to its medical mission. Annual gift shop profits are $50,000. The hospital:",
    choices: {
      A: "Pays no tax — all income is excluded as exempt",
      B: "Owes tax on $49,000 of UBTI (after the $1,000 specific deduction) on Form 990-T",
      C: "Loses its exempt status for that year",
      D: "Pays tax only if the shop operates more than 90 days",
    },
    answer: "B",
    explanation:
      "The gift shop is an unrelated trade or business (regularly conducted for profit, unrelated to the exempt purpose). UBTI = $50,000 profit − $1,000 specific deduction = $49,000 taxable at regular corporate rates on Form 990-T.",
  },
  {
    id: 96,
    domain: "Cross-Domain",
    difficulty: "Medium",
    question:
      "A real estate professional (meeting the IRC §469(c)(7) tests) who materially participates in rental activities may deduct rental losses:",
    choices: {
      A: "Only up to $25,000 (the special allowance for active participation)",
      B: "Only against other passive income",
      C: "Against any type of income — passive rules do not apply",
      D: "Only in the year the rental property is sold",
    },
    answer: "C",
    explanation:
      "A qualifying real estate professional (750+ hours in real estate trades AND more than half of personal services in real property trades/businesses) may treat rental activities as non-passive if they materially participate, allowing losses to offset any income.",
  },
  {
    id: 97,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A tax return preparer who takes an unreasonable position (lacking substantial authority) on a return is subject to a penalty under IRC §6694 of:",
    choices: {
      A: "No penalty unless the position rises to fraud",
      B: "The greater of $1,000 or 50% of the income the preparer derived from preparing that return",
      C: "Automatic suspension of PTIN",
      D: "20% of the tax underpayment on the return",
    },
    answer: "B",
    explanation:
      "IRC §6694(a) imposes a penalty on preparers who take unreasonable positions (failing the substantial authority or reasonable basis + disclosure standard) of the greater of $1,000 or 50% of the income the preparer earned for preparing the return.",
  },
  {
    id: 98,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A partner sells their entire partnership interest for $100,000. The partner's outside basis is $60,000, of which $20,000 is attributable to 'hot assets' (unrealized receivables and inventory). The gain recognized is:",
    choices: {
      A: "$40,000 capital gain",
      B: "$20,000 ordinary income + $20,000 capital gain",
      C: "$40,000 ordinary income",
      D: "$20,000 ordinary income only; the rest is not taxed",
    },
    answer: "B",
    explanation:
      "Under IRC §751, the portion of gain attributable to hot assets (unrealized receivables and substantially appreciated inventory) is ordinary income. The remaining gain is capital gain. Total gain: $100,000 − $60,000 = $40,000; $20,000 ordinary (§751) + $20,000 capital.",
  },
  {
    id: 99,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "Under the BBA (Bipartisan Budget Act) centralized audit rules for partnerships, audit adjustments are generally assessed at the partnership level in the:",
    choices: {
      A: "Year under audit (reviewed year)",
      B: "Year the audit is completed (adjustment year)",
      C: "Year each partner files their individual return",
      D: "Year the IRS issues the notice of proposed partnership adjustment",
    },
    answer: "B",
    explanation:
      "Under BBA audit rules (IRC §6221–6241, effective for tax years beginning after 2017), imputed underpayments are assessed and collected at the partnership level in the adjustment year (the year the audit concludes), not the reviewed year. Partners can elect the push-out method to shift liability to reviewed-year partners.",
  },
  {
    id: 100,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "An enrolled agent preparing a business tax return discovers the client has substantial unreported income from a prior year return the EA also prepared. Under Circular 230, the EA should:",
    choices: {
      A: "Immediately report the error to the IRS without notifying the client",
      B: "Promptly advise the client of the error and the consequences, but may not unilaterally notify the IRS",
      C: "Withdraw from the engagement and say nothing",
      D: "Correct the current year return and ignore the prior year error",
    },
    answer: "B",
    explanation:
      "Under Circular 230 §10.21, a practitioner who discovers a client's error or omission must promptly advise the client of the error and the potential consequences. The EA cannot unilaterally disclose to the IRS without the client's consent (unless required by law), but must not continue to assist in noncompliance.",
  },
];
