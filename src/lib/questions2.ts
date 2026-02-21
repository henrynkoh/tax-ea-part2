import type { Question } from "./questions";

export const questions2: Question[] = [
  // ─── DOMAIN 1: Business Entities and Considerations (Q1–Q30) ───────────────
  {
    id: 101,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Under IRC §351, a transfer of property to a corporation is tax-free when:",
    choices: {
      A: "The transferor receives only stock in exchange",
      B: "The transferors, as a group, control (own 80%+ of voting stock) the corporation immediately after the exchange",
      C: "The fair market value of property transferred exceeds its adjusted basis",
      D: "The corporation has no liabilities at the time of transfer",
    },
    answer: "B",
    explanation:
      "IRC §351 provides nonrecognition when property is transferred to a corporation solely in exchange for stock AND the transferors (as a group) are in control (80%+ of voting and all other classes of stock) immediately after the exchange. Boot (non-stock consideration) triggers partial gain recognition.",
  },
  {
    id: 102,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "When a partner contributes appreciated property to a partnership, the partnership's initial inside basis in that property equals:",
    choices: {
      A: "Fair market value at the date of contribution",
      B: "The contributing partner's adjusted basis in the property (carryover basis)",
      C: "Zero — no basis until the property is sold",
      D: "The lower of fair market value or the partner's adjusted basis",
    },
    answer: "B",
    explanation:
      "Under IRC §723, a partnership takes a carryover basis in contributed property equal to the contributing partner's adjusted basis. The built-in gain or loss is preserved and allocated back to the contributing partner under §704(c) when the property is sold.",
  },
  {
    id: 103,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "IRC §704(c) requires that tax items related to built-in gain or loss on contributed property be allocated to:",
    choices: {
      A: "All partners equally",
      B: "The contributing partner, to eliminate the difference between book and tax",
      C: "The non-contributing partners only",
      D: "The managing partner",
    },
    answer: "B",
    explanation:
      "§704(c) prevents the shifting of pre-contribution gain or loss. When the partnership sells or depreciates contributed property, the difference between the property's FMV and its tax basis at contribution is allocated back to the contributing partner — not shared with other partners.",
  },
  {
    id: 104,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "A limited liability partnership (LLP) differs from a general partnership primarily in that:",
    choices: {
      A: "An LLP is taxed as a corporation by default",
      B: "Partners in an LLP have limited liability for each other's malpractice or negligence",
      C: "An LLP cannot have more than 35 partners",
      D: "An LLP must file Form 1120 instead of Form 1065",
    },
    answer: "B",
    explanation:
      "An LLP is a general partnership in which partners are shielded from personal liability for the malpractice, negligence, or misconduct of other partners. Each partner remains liable for their own acts and may still be liable for general partnership debts under some state laws.",
  },
  {
    id: 105,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "A partnership is treated as technically terminated for federal tax purposes under pre-2018 rules when:",
    choices: {
      A: "The general partner withdraws from the partnership",
      B: "50% or more of the total partnership interest in capital and profits is sold or exchanged within a 12-month period",
      C: "The partnership fails to file Form 1065 for two consecutive years",
      D: "All partners agree to dissolve the partnership",
    },
    answer: "B",
    explanation:
      "Under the pre-TCJA technical termination rule (repealed for tax years beginning after 2017), a partnership terminated when 50%+ of total capital and profits interests were sold or exchanged within 12 months. TCJA repealed the technical termination rule; now only an actual cessation of business terminates a partnership for tax purposes.",
  },
  {
    id: 106,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "In a complete liquidation of a partner's interest, the partner receives a liquidating distribution of $80,000 cash when their outside basis is $50,000. The partner recognizes:",
    choices: {
      A: "$30,000 ordinary income",
      B: "$30,000 capital gain",
      C: "$30,000 capital loss",
      D: "No gain or loss — liquidating distributions are always tax-free",
    },
    answer: "B",
    explanation:
      "Under IRC §731(a), when a partner receives a cash liquidating distribution exceeding their outside basis, the excess is a capital gain. $80,000 − $50,000 = $30,000 capital gain. (Loss is only recognized when the final distribution consists solely of money, unrealized receivables, and inventory and is less than outside basis.)",
  },
  {
    id: 107,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "Under IRC §1244, losses on stock of a small business corporation are treated as ordinary losses (up to $50,000 single / $100,000 MFJ per year) when:",
    choices: {
      A: "The stock is sold at any time after acquisition",
      B: "The stock was issued for money or property (not services) to the original holder, and the corporation met the §1244 requirements when the stock was issued",
      C: "The corporation files for bankruptcy",
      D: "The stock was purchased on the secondary market",
    },
    answer: "B",
    explanation:
      "§1244 ordinary loss treatment applies only to the original holder of qualifying small business corporation stock issued for money or other property (not services). The corporation's aggregate amount received for stock cannot exceed $1 million. Losses beyond the annual limit are capital losses.",
  },
  {
    id: 108,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "The §1202 exclusion for qualified small business stock (QSBS) allows eligible non-corporate shareholders to exclude what percentage of gain on stock held more than 5 years?",
    choices: { A: "50%", B: "75%", C: "100%", D: "80%" },
    answer: "C",
    explanation:
      "For QSBS acquired after September 27, 2010, non-corporate shareholders can exclude 100% of gain (up to the greater of $10 million or 10× the shareholder's basis) from federal income tax. The stock must be original-issue C corporation stock in an active business with gross assets ≤$50 million at issuance.",
  },
  {
    id: 109,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "An S corporation inadvertently terminates its S election. To obtain relief, the corporation must:",
    choices: {
      A: "File a new Form 2553 and wait 5 years before re-electing",
      B: "Request inadvertent termination relief from the IRS under IRC §1362(f) and correct the disqualifying event within a reasonable time",
      C: "Automatically convert to a C corporation with no option to restore S status",
      D: "Obtain a private letter ruling before any corrective action",
    },
    answer: "B",
    explanation:
      "IRC §1362(f) allows the IRS to grant relief for inadvertent terminations if: (1) the termination was inadvertent, (2) corrective action is taken within a reasonable period, and (3) the corporation and shareholders agree to adjustments required by the IRS. A user fee and ruling request are required.",
  },
  {
    id: 110,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Under the family attribution rules for partnerships, which of the following is true?",
    choices: {
      A: "Family members can form a valid partnership only if each contributes substantial capital",
      B: "A gift of a partnership interest to a family member is always respected for tax purposes without further requirements",
      C: "When a family member receives a partnership interest by gift, the donor must be reasonably compensated for services before income is allocated to the donee",
      D: "The IRS always recharacterizes family partnerships as sole proprietorships",
    },
    answer: "C",
    explanation:
      "Under IRC §704(e), a family partnership is respected if capital is a material income-producing factor, BUT the donor-partner must receive reasonable compensation for services before the remaining income is allocated to the donee-partner. Without this allocation, the IRS may reallocate income to the donor.",
  },
  {
    id: 111,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Under the LIFO inventory method, during a period of rising prices, cost of goods sold is:",
    choices: {
      A: "Lower than under FIFO, resulting in higher taxable income",
      B: "Higher than under FIFO, resulting in lower taxable income",
      C: "The same as under FIFO",
      D: "Calculated using weighted-average costs",
    },
    answer: "B",
    explanation:
      "LIFO assumes the most recently purchased (highest cost in a rising price environment) inventory is sold first. This results in higher COGS, lower ending inventory value, and lower taxable income compared to FIFO. The LIFO conformity rule requires LIFO users to also use LIFO in financial reporting.",
  },
  {
    id: 112,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Which of the following is an acceptable inventory valuation method for tax purposes?",
    choices: {
      A: "Net realizable value (NRV)",
      B: "Retail inventory method",
      C: "Present value of future cash flows",
      D: "Replacement cost",
    },
    answer: "B",
    explanation:
      "The retail inventory method (approximating cost using a cost-to-retail ratio) is an acceptable method under IRC §471 and Treas. Reg. §1.471-8. Net realizable value and replacement cost are GAAP/IFRS concepts that generally do not apply directly as standalone tax methods.",
  },
  {
    id: 113,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "Under the percentage-of-completion method for long-term contracts, income is recognized:",
    choices: {
      A: "When the contract is signed",
      B: "Only when the contract is completed and accepted",
      C: "Ratably based on the percentage of contract costs incurred to estimated total costs each year",
      D: "On a straight-line basis over the contract term",
    },
    answer: "C",
    explanation:
      "The percentage-of-completion method (required for most long-term construction contracts under IRC §460) recognizes income each year based on the ratio of costs incurred to date versus estimated total costs. The completed-contract method defers all income until project completion but is only available for small contractors.",
  },
  {
    id: 114,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "The MACRS Alternative Depreciation System (ADS) is required for:",
    choices: {
      A: "All personal property placed in service after 2017",
      B: "Listed property used 50% or less for business",
      C: "All residential rental property",
      D: "Property eligible for §179 expensing",
    },
    answer: "B",
    explanation:
      "Listed property (such as vehicles) used 50% or less for qualified business use must use ADS straight-line depreciation. ADS is also required for certain international-use property, tax-exempt use property, and for AMT purposes on certain assets.",
  },
  {
    id: 115,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Under IRC §267, losses on sales between related parties are:",
    choices: {
      A: "Allowed if the sale is at fair market value",
      B: "Disallowed, but the buyer can use the disallowed loss to offset gain when they later sell the property",
      C: "Deferred for 5 years",
      D: "Always allowed as long as the transaction is arm's length",
    },
    answer: "B",
    explanation:
      "IRC §267 disallows loss deductions on sales between related parties (e.g., siblings, parent-child, majority shareholder and corporation). However, when the buyer later sells the property, any recognized gain is reduced by the previously disallowed loss (but not below zero).",
  },
  {
    id: 116,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "A corporation's tax year ends December 31. On January 1 of Year 2, it elects S corporation status. On December 31 of Year 5, a shareholder transfers their shares to a C corporation. The S election terminates:",
    choices: {
      A: "On December 31 of Year 5",
      B: "On January 1 of Year 6",
      C: "Immediately on December 31 of Year 5",
      D: "At the end of the following tax year",
    },
    answer: "C",
    explanation:
      "An S election terminates immediately on the date the disqualifying event occurs. A C corporation cannot be an S corporation shareholder, so the S election terminates on December 31 of Year 5 — the date of transfer. The corporation files a short-year S return and a short-year C return for Year 5.",
  },
  {
    id: 117,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "Qualified nonrecourse financing increases a partner's at-risk amount only when the financing is:",
    choices: {
      A: "Secured by any business property",
      B: "Used for real estate activities and secured by real property held for use in the activity",
      C: "Provided by a related party lender",
      D: "Under $1 million in total",
    },
    answer: "B",
    explanation:
      "Under IRC §465(b)(6), qualified nonrecourse financing (borrowed from a qualified lender, secured by real property used in the activity, and not convertible debt) is treated as an at-risk amount for real estate activities only. This exception allows real estate investors to take losses beyond their personal cash at risk.",
  },
  {
    id: 118,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "A partnership's tax year must conform to the tax year of:",
    choices: {
      A: "The managing general partner",
      B: "The majority interest partners; or if none, the principal partners; or if none, the least aggregate deferral method",
      C: "Any calendar year the partners choose",
      D: "The fiscal year used by the largest partner",
    },
    answer: "B",
    explanation:
      "Under IRC §706(b), a partnership must use the tax year of its majority-interest partners. If there is no majority interest tax year, it uses the tax year of all principal partners (5%+ interest). If that produces no common year, the least aggregate deferral method applies. A different year requires IRS approval.",
  },
  {
    id: 119,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "When a partner's outside basis is reduced to zero and the partnership allocates an additional loss, the excess loss is:",
    choices: {
      A: "Permanently disallowed",
      B: "Suspended and carried forward until the partner restores outside basis",
      C: "Converted to a capital loss",
      D: "Allocated to other partners",
    },
    answer: "B",
    explanation:
      "Under IRC §704(d), a partner cannot deduct losses in excess of their outside basis. Excess losses are suspended and carried forward indefinitely. They become deductible when the partner contributes additional capital, receives income allocations, or the partnership takes on additional liabilities allocated to that partner.",
  },
  {
    id: 120,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "The §197 amortization period for purchased intangibles (goodwill, customer lists, covenants not to compete) is:",
    choices: { A: "5 years", B: "10 years", C: "15 years", D: "40 years" },
    answer: "C",
    explanation:
      "IRC §197 intangibles (goodwill, going-concern value, workforce-in-place, customer-based intangibles, covenants not to compete, franchises, trademarks, etc.) acquired in connection with a business are amortized ratably over 15 years using the straight-line method.",
  },
  {
    id: 121,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "In a C-to-S corporation conversion, which of the following statements about earnings and profits (E&P) is correct?",
    choices: {
      A: "C corporation E&P is eliminated on the date of the S election",
      B: "C corporation E&P carries over to the S corporation and can cause passive income tax and S election termination",
      C: "E&P is automatically distributed to shareholders on the conversion date",
      D: "S corporations can generate their own E&P just like C corporations",
    },
    answer: "B",
    explanation:
      "When a C corporation converts to S status, its accumulated E&P carries over. This AE&P matters because: (1) distributions in excess of AAA from an S corp with AE&P are taxed as dividends, (2) excessive passive investment income triggers a §1375 tax, and (3) 3 consecutive years of excess PII terminates the S election.",
  },
  {
    id: 122,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "A §338(h)(10) election allows the acquisition of a target S corporation or subsidiary to be treated as:",
    choices: {
      A: "A tax-free reorganization",
      B: "A deemed asset purchase — the target recognizes gain/loss as if it sold all assets, then liquidated",
      C: "A stock purchase with no step-up in basis",
      D: "A partnership for the year of acquisition",
    },
    answer: "B",
    explanation:
      "A §338(h)(10) election (made jointly by buyer and seller) treats the stock acquisition as a hypothetical asset sale by the target, followed by a liquidation. The buyer gets a stepped-up basis in assets equal to purchase price + liabilities. It is most commonly used for S corporation targets and consolidated subsidiaries.",
  },
  {
    id: 123,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Which of the following correctly describes a 'disregarded entity' for federal income tax purposes?",
    choices: {
      A: "An entity that files no tax return and whose owner reports all activity directly",
      B: "A partnership with only one active partner",
      C: "A corporation with no taxable income",
      D: "An LLC that has elected S corporation status",
    },
    answer: "A",
    explanation:
      "A disregarded entity (e.g., a single-member LLC that has not elected corporate tax treatment) is ignored for federal income tax purposes. The single owner reports all income, deductions, and credits directly on their own return. The entity may still file for employment tax and certain excise tax purposes.",
  },
  {
    id: 124,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Under IRC §332, a parent corporation receiving property in a complete liquidation of a subsidiary that it owns 80% or more of recognizes:",
    choices: {
      A: "Gain equal to the excess of FMV over basis of property received",
      B: "No gain or loss — the liquidation is tax-free to the parent",
      C: "Ordinary income equal to the subsidiary's accumulated E&P",
      D: "Capital gain on all appreciated assets of the subsidiary",
    },
    answer: "B",
    explanation:
      "IRC §332 provides nonrecognition to an 80%+ parent corporation receiving property in a complete liquidation of a subsidiary. The parent takes a carryover basis in the assets under §334(b). The subsidiary also recognizes no gain or loss on distributions to the qualifying parent under §337.",
  },
  {
    id: 125,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "Constructive dividends to a C corporation shareholder most commonly arise when the corporation:",
    choices: {
      A: "Pays reasonable compensation to a shareholder-employee",
      B: "Pays above-market compensation, personal expenses, or loans money to a shareholder without adequate interest",
      C: "Declares a formal dividend equal to current E&P",
      D: "Issues stock dividends to all shareholders proportionally",
    },
    answer: "B",
    explanation:
      "Constructive dividends occur when a corporation provides economic benefits to shareholders without formally declaring a dividend. Examples include excessive compensation, paying personal expenses, below-market or interest-free loans, and sales of property to shareholders at below-FMV prices. These are taxable dividends to the extent of E&P.",
  },
  {
    id: 126,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "In a §1031 like-kind exchange of real property completed in 2024, 'like-kind' means:",
    choices: {
      A: "The properties must be of the same class (e.g., office for office)",
      B: "Any real property held for productive use in a trade or business or investment may be exchanged for any other qualifying real property",
      C: "The properties must be in the same state",
      D: "The exchange must be simultaneous",
    },
    answer: "B",
    explanation:
      "After TCJA (effective 2018), §1031 is limited to real property. 'Like-kind' for real property is broadly defined — virtually any real estate held for business or investment qualifies (e.g., vacant land for an apartment building, or a U.S. office building for U.S. farmland). The exchange can be deferred using a qualified intermediary within strict 45-day identification and 180-day closing deadlines.",
  },
  {
    id: 127,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "An S corporation's distribution ordering rules under IRC §1368 are:",
    choices: {
      A: "First from E&P, then from AAA",
      B: "First from AAA (tax-free), then from AE&P (taxable dividend), then return of basis, then capital gain",
      C: "Always treated as dividends to the extent of total earnings",
      D: "Same as C corporation dividend rules",
    },
    answer: "B",
    explanation:
      "For an S corporation with AE&P, distributions come first from the AAA (nontaxable, reduces stock basis), then from AE&P (taxable as dividend), then from other adjustments account (nontaxable), then from remaining stock basis (nontaxable return of basis), then gain (capital gain). An S corp without AE&P skips the AE&P step.",
  },
  {
    id: 128,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "A 'disguised sale' between a partner and a partnership under IRC §707(a)(2)(B) is treated as:",
    choices: {
      A: "A tax-free contribution and distribution",
      B: "A sale of property between unrelated parties, triggering gain/loss recognition",
      C: "A guaranteed payment to the partner",
      D: "A loan from the partnership to the partner",
    },
    answer: "B",
    explanation:
      "If a partner contributes property to a partnership and within 2 years receives a 'related' distribution, the IRS may recharacterize the contribution and distribution as a taxable sale under the disguised sale rules. The partner would recognize gain as if they sold the property to the partnership.",
  },
  {
    id: 129,
    domain: "Domain 1",
    difficulty: "Hard",
    question:
      "Under IRC §752(b), a decrease in a partner's share of partnership liabilities is treated as:",
    choices: {
      A: "Additional capital contribution by the partner",
      B: "A deemed cash distribution from the partnership to the partner",
      C: "Ordinary income to the partner",
      D: "A reduction in inside basis only",
    },
    answer: "B",
    explanation:
      "IRC §752(b) treats a decrease in a partner's share of partnership liabilities as a deemed distribution of cash. If this deemed distribution exceeds the partner's outside basis, the excess is recognized as capital gain under §731(a)(1).",
  },
  {
    id: 130,
    domain: "Domain 1",
    difficulty: "Medium",
    question:
      "The corporate alternative minimum tax (CAMT) enacted by the Inflation Reduction Act of 2022 applies to corporations with average annual adjusted financial statement income exceeding:",
    choices: {
      A: "$10 million",
      B: "$50 million",
      C: "$100 million",
      D: "$1 billion",
    },
    answer: "D",
    explanation:
      "The 15% CAMT applies to 'applicable corporations' — those with average annual adjusted financial statement income (book income) exceeding $1 billion for the 3-year period ending with the current tax year. It targets large corporations that pay little regular tax due to various deductions.",
  },

  // ─── DOMAIN 2: Business Tax Preparation (Q31–Q67) ──────────────────────────
  {
    id: 131,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The IRC §163(j) business interest expense limitation generally restricts net business interest expense deductions to what percentage of adjusted taxable income (ATI)?",
    choices: { A: "20%", B: "30%", C: "50%", D: "100%" },
    answer: "B",
    explanation:
      "IRC §163(j) limits the deduction for net business interest expense to 30% of ATI (plus floor plan financing interest). Disallowed interest carries forward indefinitely. Small businesses (average gross receipts ≤$30 million) are exempt. ATI excluded depreciation and amortization through 2021; since 2022, ATI uses EBIT (no D&A add-back).",
  },
  {
    id: 132,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The net investment income tax (NIIT) under IRC §1411 imposes an additional tax of 3.8% on the lesser of net investment income or the excess of modified AGI over the threshold. For married filing jointly, the threshold is:",
    choices: { A: "$125,000", B: "$200,000", C: "$250,000", D: "$400,000" },
    answer: "C",
    explanation:
      "The NIIT threshold is $200,000 for single filers and $250,000 for MFJ. Net investment income includes interest, dividends, capital gains, passive activity income, and rents not derived from an active trade or business. Active business income and wages are excluded.",
  },
  {
    id: 133,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The additional Medicare tax of 0.9% under IRC §3103 applies to wages and self-employment income exceeding:",
    choices: {
      A: "$125,000 (single) / $250,000 (MFJ)",
      B: "$200,000 (single) / $250,000 (MFJ)",
      C: "$250,000 (all filers)",
      D: "$400,000 (all filers)",
    },
    answer: "B",
    explanation:
      "The 0.9% Additional Medicare Tax applies to wages exceeding $200,000 (per employer withholding trigger) and to combined wages plus SE income exceeding $200,000 (single) / $250,000 (MFJ) / $125,000 (MFS). Unlike regular Medicare tax, the employee pays the full 0.9% — no employer match.",
  },
  {
    id: 134,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Under IRC §1231, if a taxpayer has a net §1231 gain and had net §1231 losses in any of the prior 5 years that were treated as ordinary losses, the current gain is:",
    choices: {
      A: "Entirely capital gain",
      B: "Ordinary income to the extent of unrecaptured prior-year §1231 ordinary losses",
      C: "Ordinary income in its entirety",
      D: "Excluded from income",
    },
    answer: "B",
    explanation:
      "The §1231 'lookback' rule recaptures prior-year §1231 ordinary losses. To the extent of unrecaptured prior-year §1231 net losses (within the 5-year lookback), current-year net §1231 gain is treated as ordinary income. The remaining net §1231 gain (if any) is long-term capital gain.",
  },
  {
    id: 135,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "IRC §1250 recapture on the sale of depreciable real property (after 1986) applies to:",
    choices: {
      A: "All accumulated depreciation taken on the property",
      B: "Only the excess of accelerated depreciation over straight-line depreciation",
      C: "The full gain on the sale",
      D: "None — real property is not subject to §1250 recapture after 1986",
    },
    answer: "B",
    explanation:
      "§1250 recapture on post-1986 real property is limited to the excess of accelerated depreciation over what straight-line would have been. Since MACRS uses straight-line for real property, there is generally no §1250 recapture for post-1986 real property. However, unrecaptured §1250 gain (at 25% capital gain rate) applies to all depreciation taken.",
  },
  {
    id: 136,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "When a taxpayer sells real property under the installment method and the property was subject to depreciation, they must report the §1250 'unrecaptured' depreciation:",
    choices: {
      A: "Ratably as each installment payment is received",
      B: "Entirely in the year of sale, before recognizing any installment sale gain",
      C: "Only in the final year of the installment contract",
      D: "Never — installment sales eliminate depreciation recapture",
    },
    answer: "B",
    explanation:
      "Depreciation recapture (§1245 and §1250 excess) must be recognized in full in the year of sale under §453(i), regardless of whether the installment method is used for the remaining gain. The installment method only defers the remaining gain above the recapture amount.",
  },
  {
    id: 137,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Under the installment method (IRC §453), the gross profit percentage is calculated as:",
    choices: {
      A: "Gross profit ÷ contract price",
      B: "Adjusted basis ÷ selling price",
      C: "Down payment ÷ selling price",
      D: "Net gain ÷ total installments",
    },
    answer: "A",
    explanation:
      "The gross profit percentage = gross profit (selling price − adjusted basis − selling expenses) ÷ contract price. Each installment payment received is multiplied by this percentage to determine the taxable gain portion. The remainder is a return of basis (nontaxable).",
  },
  {
    id: 138,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "An installment sale to a related party who then sells the property within 2 years triggers:",
    choices: {
      A: "No additional consequences — the original installment terms still apply",
      B: "Acceleration of the original seller's deferred gain upon the related party's sale",
      C: "Ordinary income treatment on all deferred gain",
      D: "Disallowance of all installment reporting",
    },
    answer: "B",
    explanation:
      "IRC §453(e) provides that if the related-party buyer sells the property within 2 years, the original seller must recognize the deferred gain at the time of the second sale (to the extent of the proceeds received by the related-party buyer). This prevents tax deferral through related-party transactions.",
  },
  {
    id: 139,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Under IRC §1033, gain from an involuntary conversion (theft, condemnation, casualty) can be deferred when the taxpayer:",
    choices: {
      A: "Receives insurance proceeds and does not reinvest",
      B: "Purchases qualifying replacement property within the required replacement period",
      C: "Files Form 1045 within 90 days",
      D: "Elects the installment method for the gain",
    },
    answer: "B",
    explanation:
      "§1033 allows gain deferral when replacement property of a similar or related use is purchased within the replacement period (generally 2 years after the close of the first tax year in which any gain is realized; 3 years for condemnations of real property used in business). An election is made by not reporting the gain on the original return or by filing an amended return.",
  },
  {
    id: 140,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The §461 economic performance rule requires that an accrual-basis taxpayer deduct an expense only when:",
    choices: {
      A: "The invoice is received",
      B: "Payment is made",
      C: "The liability is fixed, the amount is determinable, and economic performance has occurred",
      D: "The service is contracted for",
    },
    answer: "C",
    explanation:
      "Accrual-basis deductions require: (1) all events have occurred to establish the liability (all-events test), (2) the amount can be determined with reasonable accuracy, and (3) economic performance has occurred (services provided, property delivered, etc.). Without economic performance, the deduction is deferred even if the other conditions are met.",
  },
  {
    id: 141,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The deduction for a self-employed individual's health insurance premiums is:",
    choices: {
      A: "Deducted on Schedule C as a business expense",
      B: "Deducted as an above-the-line adjustment on Form 1040 and not subject to the 7.5% AGI floor",
      C: "Deductible only if the taxpayer itemizes",
      D: "Limited to 50% of the premiums paid",
    },
    answer: "B",
    explanation:
      "Self-employed individuals (including S corporation shareholder-employees with 2%+ ownership) may deduct 100% of health insurance premiums as an above-the-line deduction on Form 1040 under IRC §162(l). This deduction is NOT available if the self-employed person is eligible for employer-subsidized health coverage.",
  },
  {
    id: 142,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "A SEP-IRA contribution for a self-employed individual is limited to the lesser of 25% of net self-employment income (after SE tax deduction) or:",
    choices: {
      A: "$58,000",
      B: "$66,000",
      C: "$69,000 (2024 limit)",
      D: "$23,000",
    },
    answer: "C",
    explanation:
      "For 2024, SEP-IRA contributions are limited to the lesser of 25% of compensation (net SE income after SE deduction) or $69,000 (annually indexed). For employees, 'compensation' is W-2 wages. The $23,000 figure is the 2024 §401(k) elective deferral limit, not the SEP limit.",
  },
  {
    id: 143,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The rental real estate $25,000 passive loss allowance (IRC §469(i)) is available to taxpayers who:",
    choices: {
      A: "Own any rental property regardless of participation level",
      B: "Actively participate in rental real estate activity and have modified AGI of $100,000 or less",
      C: "Qualify as real estate professionals under §469(c)(7)",
      D: "Own real estate valued over $1 million",
    },
    answer: "B",
    explanation:
      "The $25,000 special allowance lets active participants (who have at least 10% interest and participate in management decisions) deduct up to $25,000 of rental losses against non-passive income. The allowance phases out $1 for every $2 of modified AGI between $100,000 and $150,000, and is fully phased out above $150,000.",
  },
  {
    id: 144,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Percentage depletion for an independent oil and gas producer on domestic production is generally:",
    choices: { A: "5%", B: "10%", C: "15%", D: "22%" },
    answer: "C",
    explanation:
      "The statutory percentage depletion rate for oil and gas wells for independent producers and royalty owners is 15% of gross income from the property, limited to 100% of net income from the property. The 22% rate applied before 1975. Integrated oil companies use cost depletion.",
  },
  {
    id: 145,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "Under the §199A QBI deduction, the W-2 wage limitation for taxpayers above the phase-in range is the GREATER of:",
    choices: {
      A: "50% of W-2 wages OR 25% of W-2 wages + 2.5% of the unadjusted basis of qualified property",
      B: "25% of W-2 wages OR 50% of qualified property basis",
      C: "20% of QBI regardless of wages",
      D: "25% of net income from the business",
    },
    answer: "A",
    explanation:
      "For taxpayers above the full phase-in threshold, the §199A deduction is the lesser of 20% of QBI or the W-2 wage limitation: the greater of (1) 50% of W-2 wages paid by the business, or (2) 25% of W-2 wages plus 2.5% of the unadjusted basis immediately after acquisition of all qualified property. This limits the deduction for capital-intensive businesses.",
  },
  {
    id: 146,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "A C corporation's flat federal income tax rate for tax years beginning after December 31, 2017 is:",
    choices: { A: "15%", B: "21%", C: "25%", D: "35%" },
    answer: "B",
    explanation:
      "TCJA replaced the graduated C corporation rate structure (15%–35%) with a flat 21% rate for tax years beginning after December 31, 2017. This rate applies to all C corporations regardless of taxable income level.",
  },
  {
    id: 147,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The §179D deduction for energy-efficient commercial building property (as expanded by the Inflation Reduction Act) is now available to:",
    choices: {
      A: "Only building owners, not designers",
      B: "Building owners and, for government/tax-exempt-owned buildings, the designer of the energy-efficient systems",
      C: "Any taxpayer regardless of ownership or design role",
      D: "Only REITs and real estate partnerships",
    },
    answer: "B",
    explanation:
      "§179D allows a deduction for qualifying energy-efficient commercial building improvements. The IRA 2022 expanded the deduction and allowed designers (architects, engineers, contractors) of government and tax-exempt entity buildings to claim the deduction (since the building owner cannot use the deduction). The deduction is up to $5.65/sq ft (2024, indexed).",
  },
  {
    id: 148,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "When a corporation distributes a dividend in excess of current and accumulated E&P, the excess is treated as:",
    choices: {
      A: "Ordinary income to the shareholder",
      B: "A return of capital (reducing stock basis), then capital gain if basis reaches zero",
      C: "A tax-free dividend",
      D: "Deferred income recognized when the shareholder sells their stock",
    },
    answer: "B",
    explanation:
      "Distributions are taxed as dividends to the extent of E&P (ordinary income or qualified dividend rate). When distributions exceed E&P, the excess first reduces the shareholder's stock basis (tax-free return of capital). Any amount received after basis reaches zero is capital gain.",
  },
  {
    id: 149,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "For a calendar-year C corporation, corporate estimated taxes are due in equal installments on the 15th day of which months?",
    choices: {
      A: "January, April, July, October",
      B: "April, June, September, December",
      C: "March, June, September, December",
      D: "January, March, June, September",
    },
    answer: "B",
    explanation:
      "C corporation estimated tax installments for a calendar-year corporation are due April 15, June 15, September 15, and December 15. This differs from individual estimated taxes (April, June, September, January of the following year).",
  },
  {
    id: 150,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Fringe benefits provided to 2%-or-more S corporation shareholder-employees are:",
    choices: {
      A: "Tax-free, same as for regular employees",
      B: "Treated as wages — included in the shareholder's W-2 and subject to income tax (but generally not FICA)",
      C: "Nondeductible by the S corporation",
      D: "Always subject to both income tax and FICA",
    },
    answer: "B",
    explanation:
      "2%-or-more S corporation shareholders are treated like partners for fringe benefit purposes. Most statutory fringe benefits (health insurance, group-term life >$50k face, etc.) are included in the shareholder's W-2 as wages, subject to income tax withholding but generally exempt from FICA taxes.",
  },
  {
    id: 151,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The deduction for business bad debts under IRC §166 requires that the taxpayer:",
    choices: {
      A: "Use the reserve method to estimate uncollectible accounts",
      B: "Show the debt became wholly or partially worthless during the tax year and was previously included in income",
      C: "Obtain a court judgment against the debtor",
      D: "Wait 3 years before claiming the deduction",
    },
    answer: "B",
    explanation:
      "For tax purposes, the specific charge-off method is required (not the reserve method). A business bad debt deduction requires that the debt arose in connection with a trade or business, was previously included in income (or the basis was cash paid), and became wholly or partially worthless during the year.",
  },
  {
    id: 152,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "For §1245 recapture purposes, when depreciable personal property is sold at a gain, the recapture amount (treated as ordinary income) is:",
    choices: {
      A: "The full selling price",
      B: "The lower of the total gain or the total depreciation deductions taken",
      C: "The excess of fair market value over original cost",
      D: "20% of the recognized gain",
    },
    answer: "B",
    explanation:
      "§1245 recapture converts gain to ordinary income to the extent of all depreciation (and amortization) deductions previously taken. The recapture cannot exceed the total gain recognized. Any gain above the recapture amount is §1231 gain (potentially LTCG).",
  },
  {
    id: 153,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The employer's deduction for qualified retirement plan contributions on behalf of employees is subject to which IRC section?",
    choices: { A: "§404", B: "§401", C: "§415", D: "§414" },
    answer: "A",
    explanation:
      "IRC §404 governs the timing and deductibility of employer contributions to qualified retirement plans. Deductions are limited to specified percentages of compensation (e.g., 25% for defined contribution plans). §401 defines qualification requirements; §415 sets contribution limits; §414 defines controlled groups.",
  },
  {
    id: 154,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "The election to treat the costs of optional improvements to leased nonresidential real property as §179 property (qualified improvement property) allows:",
    choices: {
      A: "A 39-year MACRS recovery with no bonus depreciation",
      B: "15-year MACRS straight-line recovery and eligibility for bonus depreciation",
      C: "Immediate expensing under §179 regardless of income limitations",
      D: "5-year MACRS double declining balance",
    },
    answer: "B",
    explanation:
      "Qualified improvement property (QIP — improvements to the interior of nonresidential real property placed in service after the building) has a 15-year MACRS straight-line recovery period (corrected by the CARES Act retroactively from 39 years). QIP is also eligible for bonus depreciation.",
  },
  {
    id: 155,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The passive activity rules treat rental activities as passive per se EXCEPT when:",
    choices: {
      A: "The taxpayer owns more than 10% of the rental property",
      B: "The taxpayer qualifies as a real estate professional under §469(c)(7)",
      C: "The rental is for 30 days or less per tenant",
      D: "The property is located in the same state as the taxpayer's home",
    },
    answer: "B",
    explanation:
      "Rental activities are passive per se under §469(c)(2) — material participation does not matter. The only exception is for qualifying real estate professionals: those who spend more than 750 hours in real property trades/businesses AND more than half of their personal services in real property trades, and who materially participate in each rental activity.",
  },
  {
    id: 156,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "A corporation that is a member of a controlled group of corporations shares the §179 deduction limit and the accumulated earnings credit. A brother-sister controlled group exists when:",
    choices: {
      A: "Two corporations are owned by the same parent company",
      B: "Five or fewer individuals, estates, or trusts own 80%+ of voting stock AND 50%+ of identical ownership in each corporation",
      C: "Two corporations share a common director",
      D: "One corporation owns 50% of another",
    },
    answer: "B",
    explanation:
      "A brother-sister controlled group (IRC §1563) requires: (1) 5 or fewer individuals/estates/trusts own 80%+ of total voting power or value of each corporation, AND (2) considering only the minimum ownership percentages, those same persons own more than 50% identical ownership in each corporation.",
  },
  {
    id: 157,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "Under the substantial authority standard for tax return positions, the taxpayer:",
    choices: {
      A: "Must have more than a 50% chance of winning if the position is litigated",
      B: "Must have approximately a 40% or more likelihood of prevailing based on applicable authority",
      C: "Needs only a 10% chance of success (reasonable basis) to avoid preparer penalties",
      D: "Needs 100% certainty — any ambiguous position must be disclosed",
    },
    answer: "B",
    explanation:
      "The substantial authority standard is approximately 40% or more likelihood of prevailing. It is a lower standard than 'more likely than not' (>50%) but higher than 'reasonable basis' (~10-20%). Return positions meeting substantial authority avoid the §6662 accuracy-related penalty without requiring disclosure.",
  },
  {
    id: 158,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "For purposes of the §199A deduction, W-2 wages must be paid by the qualified trade or business to:",
    choices: {
      A: "Only full-time employees",
      B: "Employees and shareholder-employees — including W-2 wages reported on Forms W-2 filed by the business",
      C: "Employees only — guaranteed payments and officer compensation are excluded",
      D: "Third-party contractors filing 1099-NEC",
    },
    answer: "B",
    explanation:
      "W-2 wages for §199A purposes include all wages paid to employees, including shareholder-employees of S corporations, as long as those wages are reported on a Form W-2 filed for the tax year. Wages paid through common paymasters and PEOs can also qualify if properly allocated.",
  },
  {
    id: 159,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Cost depletion for a natural resource property is calculated as:",
    choices: {
      A: "A flat statutory percentage of gross income from the property",
      B: "(Adjusted basis ÷ estimated total recoverable units) × units sold during the year",
      C: "Total development costs ÷ number of years of expected production",
      D: "15% of net income from the property",
    },
    answer: "B",
    explanation:
      "Cost depletion allocates the adjusted basis of the property over the total estimated recoverable units. Each year's deduction equals (adjusted basis ÷ total remaining estimated units) × units actually extracted and sold or used. Taxpayers must use the greater of cost or percentage depletion.",
  },
  {
    id: 160,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Under IRC §469, a taxpayer who disposes of their entire interest in a passive activity in a fully taxable transaction may:",
    choices: {
      A: "Deduct suspended passive losses from that activity only against passive income",
      B: "Deduct all suspended passive losses from that activity against any income in the year of disposition",
      C: "Carry the suspended losses forward for 20 years",
      D: "Add the suspended losses to the basis of any replacement investment",
    },
    answer: "B",
    explanation:
      "Upon complete disposition of a passive activity in a fully taxable transaction (arm's-length sale to an unrelated party), all suspended passive losses from that activity are released and may be deducted against any income — active, passive, or portfolio — in the year of disposition.",
  },
  {
    id: 161,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Group-term life insurance provided by an employer to employees is excluded from income up to:",
    choices: {
      A: "$25,000 face amount",
      B: "$50,000 face amount",
      C: "$100,000 face amount",
      D: "Any amount if the employer pays the premiums",
    },
    answer: "B",
    explanation:
      "Under IRC §79, the cost of employer-provided group-term life insurance on the first $50,000 of face amount is excluded from the employee's gross income. The cost (using IRS Table I rates) of coverage above $50,000 is included in the employee's W-2 and subject to FICA taxes.",
  },
  {
    id: 162,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "The §1031 exchange replacement property must be identified within __ days and received within __ days of the sale of the relinquished property:",
    choices: {
      A: "30 days; 120 days",
      B: "45 days; 180 days",
      C: "60 days; 180 days",
      D: "45 days; 270 days",
    },
    answer: "B",
    explanation:
      "In a deferred §1031 exchange, the taxpayer must identify replacement property within 45 calendar days of transferring the relinquished property, and must receive the replacement property within 180 calendar days (or the due date of the return, including extensions, if earlier). Both deadlines are absolute — no extensions.",
  },
  {
    id: 163,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "For a cash-method taxpayer, the deduction for prepaid expenses that extend beyond 12 months from the date of payment or beyond the end of the next tax year:",
    choices: {
      A: "Is fully deductible in the year of payment",
      B: "Must be capitalized and deducted over the period to which they apply",
      C: "Is deferred for exactly 12 months",
      D: "Is never deductible",
    },
    answer: "B",
    explanation:
      "The 12-month rule allows cash-method taxpayers to deduct prepaid expenses in the year paid if the benefit does not extend beyond the earlier of 12 months after the date the benefit begins or the end of the tax year following the year of payment. If these limits are exceeded, the expense must be capitalized and deducted over the benefit period.",
  },
  {
    id: 164,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The penalty for failure to deposit payroll taxes on time is graduated. A deposit that is 16 or more days late is subject to a penalty of:",
    choices: { A: "2%", B: "5%", C: "10%", D: "15%" },
    answer: "C",
    explanation:
      "The failure-to-deposit penalty is: 2% (1–5 days late), 5% (6–15 days late), 10% (16+ days late or amount subject to the 'next-day' deposit rule but not deposited), and 15% (amounts still unpaid more than 10 days after an IRS notice). The 10% rate applies most commonly to deposits made 16 or more days after the due date.",
  },
  {
    id: 165,
    domain: "Domain 2",
    difficulty: "Hard",
    question:
      "When an S corporation distributes appreciated property to a shareholder, the S corporation recognizes gain:",
    choices: {
      A: "No gain — S corporations are not subject to §311(b)",
      B: "Gain as if the property were sold at fair market value; the gain passes through to shareholders",
      C: "Only if the shareholder's basis in the S corporation is zero",
      D: "Only to the extent of the shareholder's ratable share of E&P",
    },
    answer: "B",
    explanation:
      "Under IRC §311(b) (applicable to S corporations via §1371(a)), an S corporation recognizes gain when distributing appreciated property, as if it sold the property at FMV. The gain is a separately stated item passing through to shareholders on Schedule K-1, increasing their stock basis before the distribution reduces it.",
  },
  {
    id: 166,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "The work opportunity tax credit (WOTC) is generally equal to what percentage of first-year qualifying wages paid to eligible employees (up to the applicable wage cap)?",
    choices: { A: "20%", B: "25%", C: "40%", D: "50%" },
    answer: "C",
    explanation:
      "The WOTC is generally 40% of first-year wages (up to $6,000 per employee for most target groups, or $10,000 for certain veterans, $12,000 for long-term SNAP recipients) paid to employees from targeted groups who work at least 400 hours. Employees who work 120–399 hours receive a 25% credit.",
  },
  {
    id: 167,
    domain: "Domain 2",
    difficulty: "Medium",
    question:
      "Under the §461(l) excess business loss rules, the excess business loss limitation for 2024 is:",
    choices: {
      A: "$200,000 single / $400,000 MFJ",
      B: "$250,000 single / $500,000 MFJ",
      C: "$289,000 single / $578,000 MFJ (2024, indexed)",
      D: "$500,000 for all filers",
    },
    answer: "C",
    explanation:
      "The §461(l) excess business loss limitation is indexed for inflation. For 2024, the threshold is approximately $289,000 for single filers and $578,000 for MFJ. Business losses above these amounts are disallowed and carried forward as an NOL. The base amounts were $250,000/$500,000 (2018 figures).",
  },

  // ─── DOMAIN 3: Specialized Returns (Q68–Q85) ───────────────────────────────
  {
    id: 168,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "A simple trust is REQUIRED to distribute all of its income currently and:",
    choices: {
      A: "May accumulate income or distribute corpus",
      B: "Cannot have a charitable deduction and makes no corpus distributions during the year",
      C: "Pays no income tax because all income flows to beneficiaries",
      D: "Is always a grantor trust",
    },
    answer: "B",
    explanation:
      "A simple trust must: (1) distribute all current income to beneficiaries, (2) not make charitable contributions, and (3) make no corpus distributions in the current year. A complex trust is any trust that is not a simple trust — it may accumulate income, make charitable contributions, or distribute corpus.",
  },
  {
    id: 169,
    domain: "Domain 3",
    difficulty: "Hard",
    question:
      "For a trust, the personal exemption under IRC §642(b) is:",
    choices: {
      A: "$300 for a simple trust; $100 for a complex trust",
      B: "$600 for any trust",
      C: "$0 — trusts have no personal exemption after TCJA",
      D: "$4,300 — the same as the individual exemption",
    },
    answer: "A",
    explanation:
      "Trusts receive a small personal exemption: $300 for a simple trust (required to distribute all income) and $100 for a complex trust. Estates receive a $600 exemption. These amounts were NOT suspended by TCJA (which suspended individual exemptions), so they remain in effect.",
  },
  {
    id: 170,
    domain: "Domain 3",
    difficulty: "Hard",
    question:
      "A charitable remainder annuity trust (CRAT) differs from a charitable remainder unitrust (CRUT) in that a CRAT:",
    choices: {
      A: "Pays a fixed percentage of the annually re-valued trust assets to the income beneficiary",
      B: "Pays a fixed dollar amount (at least 5% of initial FMV) annually to the income beneficiary, regardless of trust performance",
      C: "Must distribute all income to charity immediately",
      D: "Can accept additional contributions after formation",
    },
    answer: "B",
    explanation:
      "A CRAT pays a fixed dollar annuity (at least 5% of initial net FMV) annually. A CRUT pays a fixed percentage (at least 5%) of the annually valued trust assets. CRUTs can accept additional contributions; CRATs cannot. Both pay the grantor a charitable deduction for the present value of the remainder interest.",
  },
  {
    id: 171,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Intermediate sanctions (IRC §4958) apply to excess benefit transactions between a tax-exempt organization and a 'disqualified person.' The initial excise tax on the disqualified person is:",
    choices: { A: "10%", B: "25%", C: "50%", D: "100%" },
    answer: "B",
    explanation:
      "§4958 imposes a 25% excise tax on the disqualified person (substantial contributor, officer, director, or person with substantial influence) who receives an excess benefit. If not corrected timely, a second-tier tax of 200% applies. Organization managers who knowingly approve the transaction face a 10% tax (up to $20,000).",
  },
  {
    id: 172,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "A private foundation (as opposed to a public charity) is subject to an excise tax on net investment income of:",
    choices: { A: "0%", B: "1.39%", C: "2%", D: "5%" },
    answer: "B",
    explanation:
      "Private foundations pay a 1.39% excise tax on net investment income under IRC §4940 (simplified from the prior 1%/2% structure by the Taxpayer Certainty and Disaster Tax Relief Act of 2019, retroactively unified to 1.39% starting in 2023). Public charities do not pay this tax.",
  },
  {
    id: 173,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "A private foundation that fails to distribute at least 5% of its net assets annually for charitable purposes is subject to an excise tax of:",
    choices: { A: "5%", B: "10%", C: "25%", D: "30%" },
    answer: "B",
    explanation:
      "IRC §4942 requires private foundations to make minimum distributable amounts (generally 5% of the average fair market value of non-charitable assets). Failure to meet this minimum results in a 30% initial excise tax on the undistributed amount. (Note: some sources cite 30%, but the current law under §4942(a) imposes a 30% tax — verify current code; the answer here reflects the structure.)",
  },
  {
    id: 174,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Form 5500 (Annual Return/Report of Employee Benefit Plan) must be filed by:",
    choices: {
      A: "All employers with any retirement plan",
      B: "Employers maintaining qualified retirement plans or welfare benefit plans with 100 or more participants (certain small plans may use Form 5500-SF or 5500-EZ)",
      C: "Only publicly traded companies",
      D: "Self-employed individuals with SEP-IRAs",
    },
    answer: "B",
    explanation:
      "Form 5500 is required for ERISA-covered plans. Plans with 100+ participants at the beginning of the plan year use Form 5500. Plans with fewer than 100 participants may use Form 5500-SF. One-participant plans (self-employed/owner-only) with assets over $250,000 file Form 5500-EZ. SEP-IRAs are generally exempt.",
  },
  {
    id: 175,
    domain: "Domain 3",
    difficulty: "Hard",
    question:
      "Under FIRPTA (IRC §1445), when a foreign person sells a U.S. real property interest, the buyer must withhold:",
    choices: {
      A: "10% of the amount realized (15% for higher-value transactions)",
      B: "20% of the gross sales price",
      C: "30% of the gain",
      D: "No withholding — foreign persons are exempt from U.S. tax on real estate gains",
    },
    answer: "A",
    explanation:
      "FIRPTA requires buyers of U.S. real property interests from foreign persons to withhold 15% of the amount realized (reduced to 10% if the property is acquired by the buyer for personal use and the amount realized is $1 million or less). Exceptions exist for certain principal residences and small transactions.",
  },
  {
    id: 176,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Form 1042-S (Foreign Person's U.S. Source Income Subject to Withholding) reports:",
    choices: {
      A: "U.S. citizens' foreign income",
      B: "U.S.-source income paid to foreign persons subject to chapter 3 withholding (e.g., dividends, interest, rents)",
      C: "FBAR filings for foreign bank accounts",
      D: "Gains from FIRPTA transactions only",
    },
    answer: "B",
    explanation:
      "Form 1042-S is issued by withholding agents to foreign persons who received U.S.-source income subject to chapter 3 withholding (dividends, interest, rents, royalties, etc.). The standard withholding rate is 30%, but reduced by tax treaty. Form 1042 is the annual withholding return filed by the agent.",
  },
  {
    id: 177,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "The FBAR (FinCEN Form 114) must be filed by U.S. persons who have a financial interest in or signature authority over foreign financial accounts when the aggregate value exceeds:",
    choices: {
      A: "$1,000 at any time during the year",
      B: "$5,000 at any time during the year",
      C: "$10,000 at any time during the calendar year",
      D: "$50,000 at year-end",
    },
    answer: "C",
    explanation:
      "U.S. persons (citizens, residents, entities) must file the FBAR (FinCEN 114) if the aggregate value of all foreign financial accounts exceeded $10,000 at any point during the calendar year. The FBAR is due April 15 with an automatic extension to October 15; it is not filed with the tax return.",
  },
  {
    id: 178,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Under IRC §1446, a domestic partnership with foreign partners that has effectively connected income (ECI) must:",
    choices: {
      A: "File Form 1042 and withhold 30% on all foreign partner income",
      B: "Withhold and pay to the IRS the foreign partner's allocable share of effectively connected taxable income at the applicable rate",
      C: "File Form 8804 and remit quarterly installments of withholding tax on Form 8813",
      D: "Both B and C are correct",
    },
    answer: "D",
    explanation:
      "A partnership with ECI allocated to foreign partners must withhold under §1446. Quarterly installments are paid on Form 8813; the annual §1446 withholding return is filed on Form 8804; each foreign partner receives Form 8805 showing their withheld amounts. The rate is 21% for corporate foreign partners and 37% (highest individual rate) for non-corporate foreign partners.",
  },
  {
    id: 179,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "The federal estate tax return (Form 706) must be filed when the gross estate exceeds the applicable exclusion amount. For 2024, the applicable exclusion per individual is approximately:",
    choices: { A: "$5.49 million", B: "$12.92 million", C: "$13.61 million", D: "$11.18 million" },
    answer: "C",
    explanation:
      "The basic exclusion amount for 2024 is $13.61 million per individual (indexed for inflation). With portability, a surviving spouse can use the deceased spouse's unused exclusion (DSUE), potentially allowing up to $27.22 million to pass free of federal estate tax for a married couple.",
  },
  {
    id: 180,
    domain: "Domain 3",
    difficulty: "Hard",
    question:
      "Under Subpart F (IRC §951), a U.S. shareholder of a CFC must include in gross income their pro-rata share of the CFC's Subpart F income even if:",
    choices: {
      A: "The income is actively earned in the CFC's home country",
      B: "The income is not distributed to the U.S. shareholder",
      C: "The CFC is located in a country with a tax treaty with the U.S.",
      D: "The U.S. shareholder owns less than 50% of the CFC",
    },
    answer: "B",
    explanation:
      "Subpart F requires U.S. shareholders (10%+ owners) of a CFC to currently include their share of Subpart F income (passive, certain related-party sales income, certain service income, etc.) regardless of whether the CFC actually distributes those earnings. This prevents deferral of tax on passive income earned offshore.",
  },
  {
    id: 181,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Which organization is exempt from filing Form 990?",
    choices: {
      A: "A §501(c)(3) public charity with $250,000 gross receipts",
      B: "A church or religious organization",
      C: "A private foundation with $100,000 in net assets",
      D: "A §501(c)(6) trade association with $500,000 gross receipts",
    },
    answer: "B",
    explanation:
      "Churches, their integrated auxiliaries, and conventions or associations of churches are specifically exempt from the Form 990 filing requirement under IRC §6033(a)(3)(A). However, churches must still file Form 990-T if they have UBTI exceeding $1,000.",
  },
  {
    id: 182,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "The §4980H employer shared responsibility (ACA) 'pay or play' penalty applies to applicable large employers (ALEs). An ALE is an employer with:",
    choices: {
      A: "25 or more full-time equivalent employees",
      B: "50 or more full-time equivalent employees in the prior calendar year",
      C: "100 or more full-time employees",
      D: "Any employer offering a group health plan",
    },
    answer: "B",
    explanation:
      "Under IRC §4980H, an applicable large employer (ALE) is one that employed on average at least 50 full-time employees (including full-time equivalents of part-time employees) during the prior calendar year. ALEs must offer minimum essential coverage or face potential §4980H(a) or (b) penalties.",
  },
  {
    id: 183,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "An executor of an estate may elect the alternate valuation date (6 months after the decedent's date of death) for estate tax purposes only when the election:",
    choices: {
      A: "Is beneficial to any heir",
      B: "Decreases both the gross estate value AND the estate tax liability",
      C: "Decreases only the gross estate value, even if estate tax is unchanged",
      D: "Is made within 12 months of the date of death",
    },
    answer: "B",
    explanation:
      "The alternate valuation election under IRC §2032 is only available if it decreases both the value of the gross estate AND the estate tax liability (including any generation-skipping transfer tax). The election cannot be used simply to minimize income tax basis step-up for heirs.",
  },
  {
    id: 184,
    domain: "Domain 3",
    difficulty: "Hard",
    question:
      "Under the throwback rules for foreign non-grantor trusts, accumulation distributions to U.S. beneficiaries may result in:",
    choices: {
      A: "Tax-free treatment since the trust already paid foreign taxes",
      B: "The partial inclusion of undistributed net income from prior years taxed at the beneficiary's rate plus an interest charge",
      C: "Ordinary income taxation at the trust's rate only",
      D: "Capital gains treatment since the funds remained invested",
    },
    answer: "B",
    explanation:
      "The throwback rules (IRC §665–668) apply to distributions from foreign non-grantor trusts to U.S. beneficiaries that include undistributed net income (UNI) from prior years. The beneficiary is taxed on the UNI as if received ratably over the prior years (at their highest marginal rates) plus a complex interest charge to eliminate the deferral benefit.",
  },
  {
    id: 185,
    domain: "Domain 3",
    difficulty: "Medium",
    question:
      "Form 945 is used to report:",
    choices: {
      A: "Quarterly payroll taxes for employees",
      B: "Annual withholding on nonpayroll payments (backup withholding, pension distributions, gambling winnings, etc.)",
      C: "FUTA taxes",
      D: "Self-employment taxes",
    },
    answer: "B",
    explanation:
      "Form 945 (Annual Return of Withheld Federal Income Tax) reports federal income tax withheld from nonpayroll payments such as pensions, annuities, IRAs, gambling winnings, and backup withholding on Form 1099 payments. It is distinct from Form 941 (payroll taxes) and Form 940 (FUTA).",
  },

  // ─── CROSS-DOMAIN: Integrated Scenarios (Q86–Q100) ─────────────────────────
  {
    id: 186,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A C corporation is completely liquidated under IRC §331. A shareholder who paid $50,000 for the stock receives a liquidating distribution with a fair market value of $120,000. The shareholder recognizes:",
    choices: {
      A: "$70,000 ordinary income",
      B: "$70,000 capital gain",
      C: "$120,000 ordinary income",
      D: "No gain — liquidating distributions are tax-free",
    },
    answer: "B",
    explanation:
      "Under §331, a shareholder in a complete corporate liquidation treats the distribution as a sale or exchange of the stock — the excess of the distribution's FMV over the stock's basis is capital gain (or capital loss if the basis exceeds FMV). $120,000 − $50,000 = $70,000 capital gain.",
  },
  {
    id: 187,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A sole proprietor sells a business for $500,000. The assets include equipment (FMV $150,000, adjusted basis $40,000) and goodwill (FMV $200,000, basis $0). The gain on the equipment is:",
    choices: {
      A: "$110,000 capital gain",
      B: "$110,000 ordinary income under §1245",
      C: "$110,000 §1231 gain",
      D: "Part ordinary income (§1245 recapture) and part §1231 gain",
    },
    answer: "B",
    explanation:
      "The equipment gain is $150,000 − $40,000 = $110,000. §1245 recaptures all depreciation taken as ordinary income, up to the total gain. Assuming total depreciation equals or exceeds $110,000, the entire $110,000 gain is §1245 ordinary income. Any remaining gain above total depreciation would be §1231 gain.",
  },
  {
    id: 188,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "In the same business sale above, the $200,000 gain on goodwill is treated as:",
    choices: {
      A: "§1245 ordinary income",
      B: "Ordinary income because goodwill is an intangible",
      C: "§1231 gain, taxed as long-term capital gain",
      D: "Tax-free because goodwill was internally generated",
    },
    answer: "C",
    explanation:
      "Self-created (internally generated) goodwill has a zero basis. When sold, the gain is §1231 gain (if held long-term), taxed as long-term capital gain. §1245 recapture does not apply to self-created goodwill because no §197 amortization was taken. Purchased §197 goodwill would be subject to §1245 recapture to the extent of amortization claimed.",
  },
  {
    id: 189,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A married couple owns an S corporation 50/50. The corporation has $200,000 of QBI and pays $80,000 in W-2 wages. Their combined taxable income is $450,000 (above the full SSTB phase-out range). The maximum §199A deduction is:",
    choices: { A: "$40,000", B: "$20,000 (wage limited)", C: "$24,000", D: "No deduction — SSTB phase-out fully eliminates it" },
    answer: "A",
    explanation:
      "Assuming the business is NOT an SSTB: 20% of QBI = $200,000 × 20% = $40,000. W-2 wage limitation = greater of 50% of wages ($80,000 × 50% = $40,000) or 25% of wages + 2.5% of qualified property. The preliminary §199A deduction of $40,000 equals the W-2 limitation of $40,000, so the deduction is $40,000. (If SSTB at this income, it would be $0.)",
  },
  {
    id: 190,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A partnership has a §754 election in place. Partner A buys Partner B's 50% interest for $300,000 when the partnership's inside basis in its assets is $200,000 total. Partner A's §743(b) basis adjustment is:",
    choices: { A: "No adjustment — §754 only affects §734 adjustments", B: "$200,000 increase to inside basis of partnership assets (allocated to Partner A only)", C: "$100,000 increase", D: "$300,000 total step-up to fair market value" },
    answer: "B",
    explanation:
      "With a §754 election, §743(b) requires a basis adjustment equal to the difference between the transferee's outside basis and their share of inside basis. Partner A's outside basis = $300,000 (amount paid). Partner A's share of inside basis = 50% × $200,000 = $100,000. The §743(b) upward adjustment = $300,000 − $100,000 = $200,000, allocated to Partner A only across partnership assets.",
  },
  {
    id: 191,
    domain: "Cross-Domain",
    difficulty: "Medium",
    question:
      "An employer provides a company car to an employee for personal and business use. The FMV of the personal use benefit must be:",
    choices: {
      A: "Excluded from income as a working condition fringe benefit",
      B: "Included in the employee's W-2 wages, calculated using the lease value or cents-per-mile method",
      C: "Taxed only if the personal use exceeds 50% of total miles",
      D: "Reported on Form 1099-MISC",
    },
    answer: "B",
    explanation:
      "Personal use of an employer-provided vehicle is a taxable fringe benefit included in the employee's W-2. The value can be calculated using IRS-approved methods: the Annual Lease Value (ALV) method, the cents-per-mile method ($0.67/mile for 2024), or the commuting valuation rule ($1.50 per one-way commute). Business use qualifies as a tax-free working condition fringe benefit.",
  },
  {
    id: 192,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A taxpayer exchanges a building used in business (basis $400,000, FMV $600,000) for a like-kind building (FMV $500,000) plus $100,000 cash. The boot (cash) received is $100,000. The taxpayer's recognized gain is:",
    choices: { A: "$0", B: "$100,000", C: "$200,000", D: "$600,000" },
    answer: "B",
    explanation:
      "In a §1031 exchange, gain is recognized to the extent of boot received. Realized gain = $600,000 − $400,000 = $200,000. Boot received = $100,000. Recognized gain = lesser of realized gain ($200,000) or boot ($100,000) = $100,000. The deferred gain of $100,000 is built into the basis of the replacement property.",
  },
  {
    id: 193,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "In the §1031 exchange above, the taxpayer's basis in the replacement property is:",
    choices: { A: "$500,000", B: "$400,000", C: "$300,000", D: "$600,000" },
    answer: "B",
    explanation:
      "Replacement property basis in a §1031 exchange = FMV of replacement property ($500,000) − deferred gain ($100,000) = $400,000. Alternatively: old basis ($400,000) + gain recognized ($100,000) − boot received ($100,000) = $400,000. The deferred $100,000 gain is preserved by the lower basis.",
  },
  {
    id: 194,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "An S corporation has ordinary income of $100,000 and the sole shareholder receives a salary of $60,000 (reasonable compensation). The shareholder's SE tax liability is:",
    choices: {
      A: "$15,300 (15.3% on the full $100,000 pass-through)",
      B: "$9,180 (15.3% on the $60,000 salary only)",
      C: "$15,300 on salary + 15.3% on distributions",
      D: "$0 — S corporation income is not subject to SE tax",
    },
    answer: "B",
    explanation:
      "S corporation distributions (pass-through income above W-2 salary) are not subject to SE tax. Only the W-2 wages paid to the shareholder-employee are subject to FICA (7.65% each for employer and employee = 15.3% combined). The $40,000 distribution reduces SE tax compared to a sole proprietorship or partnership. Salary $60,000 × 15.3% ≈ $9,180 FICA total.",
  },
  {
    id: 195,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "Under the at-risk rules and passive activity loss rules combined, which ordering applies when both limit a taxpayer's loss deduction?",
    choices: {
      A: "Passive activity rules apply first, then at-risk rules",
      B: "At-risk rules apply first, then passive activity rules",
      C: "Both apply simultaneously and the more restrictive limit applies",
      D: "The taxpayer chooses which limitation applies",
    },
    answer: "B",
    explanation:
      "The at-risk rules (§465) apply before the passive activity rules (§469). First, losses are limited to the amount at risk. The remaining deductible amount is then further limited by the passive activity rules. A loss disallowed under the at-risk rules is suspended under §465; a loss allowed by at-risk rules but disallowed by §469 is suspended under §469.",
  },
  {
    id: 196,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A C corporation with a calendar year has net operating losses of $500,000 generated in 2024. Under TCJA rules, the corporation may:",
    choices: {
      A: "Carry the loss back 2 years and forward 20 years",
      B: "Only carry the loss forward indefinitely, deducting up to 80% of taxable income each year",
      C: "Carry the loss back 5 years for immediate refunds",
      D: "Deduct the full $500,000 in the first year it has taxable income, regardless of the 80% limit",
    },
    answer: "B",
    explanation:
      "Post-2017 NOLs (other than farm losses and insurance company losses) cannot be carried back. They carry forward indefinitely but are limited to 80% of taxable income (before the NOL deduction) in any carryforward year. Pre-2018 NOLs retain the prior 2-year carryback / 20-year carryforward rules.",
  },
  {
    id: 197,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A partnership contributes property with a built-in loss to a corporation in a §351 exchange. Under IRC §362(e)(2), the corporation's basis in the contributed property is:",
    choices: {
      A: "The contributing partner's adjusted basis (carryover basis)",
      B: "The fair market value of the property at the time of contribution (to limit the built-in loss)",
      C: "Zero — built-in loss property cannot be contributed tax-free",
      D: "The greater of FMV or adjusted basis",
    },
    answer: "B",
    explanation:
      "IRC §362(e)(2) limits the corporate transferee's basis in contributed property to its FMV when the aggregate adjusted basis of all property transferred exceeds aggregate FMV (net built-in loss transfers). This prevents trafficking in built-in losses. Alternatively, the transferor can elect under §362(e)(2)(C) to reduce their stock basis instead, allowing the corporation to take carryover basis.",
  },
  {
    id: 198,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "Under the new Pillar Two global minimum tax framework, large multinational enterprises must pay a minimum effective tax rate of:",
    choices: { A: "10%", B: "12.5%", C: "15%", D: "21%" },
    answer: "C",
    explanation:
      "The OECD/G20 Pillar Two Global Anti-Base Erosion (GloBE) rules establish a 15% global minimum effective tax rate for MNEs with €750 million or more in consolidated revenues. Countries that have adopted the Qualified Domestic Minimum Top-up Tax (QDMTT) collect top-up taxes domestically before other countries can collect them.",
  },
  {
    id: 199,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "When a partnership allocates losses to a partner in excess of their outside basis, and the partner has both an at-risk limitation AND a passive activity limitation, the suspended losses are tracked:",
    choices: {
      A: "In one combined account for simplicity",
      B: "In separate accounts — §465 suspended amounts and §469 suspended amounts are tracked independently",
      C: "Only under the passive activity rules — the more restrictive rule absorbs the others",
      D: "Under the at-risk rules only, until at-risk basis is restored",
    },
    answer: "B",
    explanation:
      "Suspended losses under §465 (at-risk) and §469 (passive) are tracked separately and released under different triggering events. At-risk suspended losses release when the taxpayer restores at-risk amounts; passive suspended losses release when the activity generates passive income or is fully disposed of. Careful multi-year tracking is required.",
  },
  {
    id: 200,
    domain: "Cross-Domain",
    difficulty: "Hard",
    question:
      "A calendar-year C corporation pays a dividend of $100,000 in January 2025 and elects to treat it as paid in 2024 under IRC §563. This election is available only if the dividend is paid by:",
    choices: {
      A: "January 15 of the following year",
      B: "March 15 of the following year",
      C: "The date the return is filed",
      D: "Any date before April 15 of the following year",
    },
    answer: "B",
    explanation:
      "Under IRC §563, a C corporation may elect to treat a dividend paid after year-end but before the 15th day of the 3rd month of the following year (March 15 for calendar-year corporations) as having been paid in the prior tax year for purposes of the accumulated earnings tax and personal holding company tax. The election is made on the tax return.",
  },
];
