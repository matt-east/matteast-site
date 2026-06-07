# Escape Velocity — Sources & Supporting Data

Companion data/citations file for the SpaceX growth-frontier scrollytelling (`spacex-escape-velocity.html`).
**Compiled:** June 5, 2026. Companion data and citations for the published essay.

Two tiers of data here:
1. **Post-cutoff facts** (SpaceX IPO, financials, Morgan Stanley forecast, index rule changes). Each is cited to a specific, dated source URL below. These are the load-bearing claims and should be re-checked the week of publication — several are days old and still moving (S&P's decision is dated June 4–5).
2. **Historical comparables** (15-yr revenue CAGRs of public companies). Revenue figures are drawn from company SEC filings (10-Ks) and standard aggregators (Macrotrends, StockAnalysis.com). They are aggregator-level and flagged for primary-filing confirmation in §6.

All CAGR, margin, and scale figures are computed by us from the cited inputs (see `calc.py`); they need no external citation, but the **inputs** do.

---

## 0. Scene structure (as published)

Twenty-one scroll panes; the figures below map to these scenes.

| Act | Panes | Data |
|---|---|---|
| The Offering | The Largest IPO Ever · But You Can't Buy Much | §1, §1b |
| The Claim | Real, Fast Growth · Then This | §2, §3 |
| The Naive Read | 41.5% a Year · Tesla Climbed Steeper | §4, §6 |
| The Reframe | A Lower Bar · Against the Field · From 160× the Base | §6 |
| The Frontier | Growth Has a Speed Limit · The Growth Frontier | §7 |
| The Outlier | Measure the Gaps · Rank Them · Most Sit Near 1.0× · Off the Manifold | §6, §7 |
| The Tell / Scale | 79% Margins · Six Percent of Everything | §5, §5b |
| The Machine | Forced to Buy · Someone Sells Into It | §8, §9 |
| The Close | Coherence Isn't Truth · The Elon Frontier | §6, §7 |

---

## 1. The IPO

| Figure | Value | Source |
|---|---|---|
| Offer price | $135 / share | CNBC [1], Fortune [2] |
| Shares offered | 555.6 million | Fortune [2] |
| Valuation | $1.77 trillion (largest IPO debut ever) | CNBC [1], Fortune [2] |
| Capital raised | ~$75 billion (largest IPO in history; all-primary) | CNBC [1], Fortune [2] |
| Float | <5% of shares public | Fortune [2], Axios [13] |
| Musk voting control | >82% (dual-class) | Yahoo/Benzinga [3] |
| Listing | Nasdaq, ticker SPCX, ~June 12, 2026 | CNBC [1], SpotGamma [10] |

**Note for accuracy:** the IPO itself is an *all-primary* offering (proceeds to SpaceX's treasury, not an insider cash-out). The "exit liquidity" critique (§9) refers to the **lock-up expiry 90–180 days later**, when insiders can sell into index-driven passive demand — not to the IPO day itself. Keep this distinction precise in the copy.

## 1b. Largest IPOs in history (the money-grid comparison)

Each block in "The Offering" = $25B of IPO valuation.

| IPO | Year | Valuation at debut | Raised | Blocks (÷$25B) | Source |
|---|---|---|---|---|---|
| **SpaceX** | 2026 | **$1.77T** | $75B | 71 | [1][2] |
| Saudi Aramco | 2019 | $1.7T | $25.6B | 68 | Bloomberg/CNN/Al Jazeera [28] |
| Alibaba | 2014 | ~$0.17T ($168B) | $25B | 7 | [28] |
| Facebook | 2012 | ~$0.10T ($104B) | $16B | 4 | [28] |

SpaceX edges Aramco for the largest debut valuation ever, and raises ~3× Aramco's prior record $25.6B. **Float view:** only ~$75B (≈4.2% ≈ 3 of 71 blocks) is sold to the public; ~96% stays locked with insiders — the setup for the lock-up / exit-liquidity mechanic in §8–§9.

## 2. SpaceX financials

| Figure | Value | Source |
|---|---|---|
| Revenue history (drives "The Claim" bars) | 2022 $4.6B · 2023 $8.7B · 2024 $14.0B · 2025 $18.7B | Sacra [6], Payload [29] |
| 2025 revenue | $18.7B (≈ +30–33% YoY) | Fortune [4], Morningstar [5], Sacra [6] |
| 2024 revenue | ~$14.0B (some sources $14.2B) | Fortune [4], Morningstar [5], Payload [29] |
| 2025 net result | –$4.94B loss (vs +$791M profit in 2024) | Fortune [4], Sacra [6] |
| Loss driver | xAI/AI segment (~$6.35B operating loss in 2025) | Sacra [6] |
| Starlink (2025) | $11.4B revenue, $4.42B operating income; 10M+ subs / 160 countries (Feb 2026) | Sacra [6] |
| 2025 capex | ~$20–21B | Morningstar [5] |

## 3. Morgan Stanley / Goldman forecast (roadshow, shared June 4, 2026)

| Figure | Value | Source |
|---|---|---|
| 2040 revenue | $3.4 trillion (182× 2025) | Stocktwits [7], Yahoo/Reuters [8] |
| 2040 adjusted EBITDA | $2.7 trillion | ZeroHedge [9] |
| 2028 revenue | ~$160B (≈ 8.5× 2025) | basenor [11] |
| 2030 revenue | ~$330B (MS); Goldman ~$470B+ | basenor [11] |
| 2030 adjusted EBITDA | ~$230B (MS) | basenor [11] |
| AI revenue 2030 | ~$190B (from $3.2B in 2025) | basenor [11] |
| Conflict | Morgan Stanley & Goldman are **co-lead underwriters** | Benzinga [12] |

## 4. Required-growth math (computed — see `calc.py`)

| Metric | Value |
|---|---|
| 2025→2040 required CAGR (18.67 → 3,400, 15y) | **41.5%** |
| 2025→2028 implied CAGR (→160) | **104.6%** |
| 2025→2030 implied CAGR (→330) | **77.6%** |
| 2030→2040 implied CAGR (330→3,400) | 26.3% |
| AI line 2025→2030 (3.2 → 190) | 126.3% |

The implausibility is **front-loaded**: near-annual doublings off a ~$19B base for the first four years, then a comparatively ordinary 26% back half. The bet is decided by ~2030, which makes it checkable soon.

## 5. Terminal-value reality checks (computed)

| Check | Value | Reference point |
|---|---|---|
| Implied 2040 EBITDA margin | **79.4%** ($2.7T / $3.4T) | Aramco ~50–55%; software ~40–50% |
| Revenue vs largest company ever | **5.0×** Walmart (~$680B) | — |
| Share of projected 2040 US GDP | **~6.4%** | 2040 GDP ≈ $53T (2025 $30.76T @ 3.7% nominal × 15y) |

## 5b. SpaceX revenue as a share of U.S. GDP (2025 → 2040)

Drives the "Six Percent of Everything" scene. If SpaceX compounds at the headline 41.5% and the economy grows at consensus, one company's revenue goes from a rounding error to ~1/16 of national output.

| Input | Value | Source |
|---|---|---|
| U.S. nominal GDP, 2025 | **$30.76T** (2024: $29.30T) | BEA [26] |
| Consensus long-run growth | **~3.7% nominal** (CBO real ~1.7% + ~2% inflation) | CBO [27] |
| Projected U.S. nominal GDP, 2040 | ~$53T ( = $30.76T × 1.037¹⁵ ) | computed |
| SpaceX revenue, 2025 → 2040 | $18.7B → $3.4T (41.5% CAGR) | §2–§4 |
| **SpaceX ÷ GDP, 2025** | **0.06%** | computed |
| **SpaceX ÷ GDP, 2040** | **~6.4%** (≈ one-sixteenth of the economy) | computed |
| Reference: Walmart ÷ GDP today | ~2.2% ( $680B ÷ $30.76T ) — largest firm's current share | computed |

Share rises ~100-fold in fifteen years and passes today's largest-company share (~2.2%) around **2037**. Sensitivity: a 3.5–4.5% nominal-growth band puts the 2040 share at ~5.9–6.9%.

## 6. Comparables — 15-year revenue CAGR by starting base

Rule: revenue in the company's fiscal year at/near IPO (the "base") vs. 15 fiscal years later (14 for Tesla, 12 for Meta — noted). GAAP revenue. **First-draft figures — confirm against 10-Ks before publishing.**

**Residual ×** = actual 15-yr CAGR ÷ the frontier-predicted CAGR at that base (§7 fit). >1 beat the trend; <1 fell short. Drives the Outlier act — the residual lollipops ("Measure the Gaps"), the ranked bars ("Rank Them" / "Most Sit Near 1.0×"), and the distribution ("Off the Manifold").

| Company | Window | Base rev ($B) | End rev ($B) | Yrs | 15-yr CAGR | Residual × |
|---|---|---|---|---|---|---|
| Cisco | 1990→2005 | 0.070 | 24.80 | 15 | 47.9% | 1.07 |
| Tesla | 2010→2024 | 0.117 | 97.69 | 14 | 61.7% | 1.49 |
| Apple | 1980→1995 | 0.117 | 11.06 | 15 | 35.4% | 0.86 |
| Netflix | 2002→2017 | 0.151 | 11.69 | 15 | 33.6% | 0.85 |
| Amazon | 1997→2012 | 0.148 | 61.09 | 15 | 49.4% | 1.24 |
| Salesforce | FY05→FY20 | 0.176 | 17.10 | 15 | 35.7% | 0.92 |
| Microsoft | 1986→2001 | 0.197 | 25.30 | 15 | 38.2% | 1.00 |
| Qualcomm | 1996→2011 | 0.814 | 14.96 | 15 | 21.4% | 0.69 |
| Oracle | FY95→FY10 | 2.970 | 26.82 | 15 | 15.8% | 0.62 |
| Google | 2004→2019 | 3.190 | 161.86 | 15 | 29.9% | 1.19 |
| Nvidia | FY10→FY25 | 3.330 | 130.50 | 15 | 27.7% | 1.11 |
| Intel | 1990→2005 | 3.920 | 38.83 | 15 | 16.5% | 0.68 |
| Meta | 2012→2024 | 5.090 | 164.50 | 12 | 33.6% | 1.43 |
| Amazon | 2004→2019 | 6.920 | 280.52 | 15 | 28.0% | 1.25 |
| Apple (iPhone era) | 2007→2022 | 24.600 | 394.33 | 15 | 20.3% | 1.10 |
| **SpaceX (required)** | **2025→2040** | **18.670** | **3,400.00** | **15** | **41.5%** | **2.15** |

Ranked residual factor (largest → smallest): **SpaceX 2.15** · Tesla 1.49 · Meta 1.43 · Amazon ’04 1.25 · Amazon ’97 1.24 · Google 1.19 · Nvidia 1.11 · Apple ’07 1.10 · Cisco 1.07 · Microsoft 1.00 · Salesforce 0.92 · Apple ’80 0.86 · Netflix 0.85 · Qualcomm 0.69 · Intel 0.68 · Oracle 0.62. **Tesla's 1.49× is the historical record; SpaceX's required 2.15× exceeds it by ~44%.**

**Intellectual-honesty note:** Meta (~34% from a $5B base) and Amazon's second window (~28% from a $6.9B base) are the strongest "high base AND fast" points — they soften the frontier and should be shown, not hidden. Even so, the **best 15-yr CAGR ever achieved from a base ≥ $15B is Apple's iPhone decade at 20.3%.** SpaceX requires ~2× that.

**Distribution (drives "Off the Manifold"):** across the 15 historical residual factors, Q1 ≈ 0.84, median **1.07**, Q3 1.24, IQR 0.40. Tukey upper fence = Q3 + 1.5·IQR = **1.84×**. Tesla's 1.49× sits just inside it; SpaceX's required **2.15×** falls beyond, a statistical outlier ~44% past the record.

**By rate alone (drives "Against the Field"):** only **3 of 15** comps ever exceeded SpaceX's required 41.5% 15-yr CAGR — Tesla (61.7%), Amazon '97 (49.4%), Cisco (47.9%). The rate is high but not unprecedented; the base is what makes it an outlier.

**Base & rate ratios (drives "From 160× the Base"):** SpaceX's $18.67B base ÷ Tesla's $0.117B base = **159.6× ≈ 160×**; rate ratio 41.5% ÷ 62% = **0.67 ≈ ⅔**. The framing: ⅔ the rate, from 160× the base.

## 7. Frontier fit + methodology

Log-log OLS regression of CAGR on starting base across the 15 historical points:

```
CAGR ≈ 0.30 × base^(−0.15)      (base in $B)
R² = 0.533
```

- Predicted CAGR at SpaceX's $18.67B base: **19.3%**. Required: **41.5%** → **2.15× the trend.**
- **±1 SD band (the shaded region on the scatter).** The standard deviation of ln(residual factor) across the 15 points is **≈0.26** (mean ≈ 0, so the fit is unbiased in log space), so the shaded ±1 SD band spans **×0.77 to ×1.30** of the predicted CAGR. SpaceX's required 2.15× sits ~2.9 SD above the trend; the Elon-frontier line rises above the band to the right of SpaceX. The band persists on every scene where the scatter appears.
- **A trend, not a law — and a metaphor, not a mechanism.** Size explains ~53% of the variance in 15-yr CAGR here: real and directional, not deterministic. The published piece uses a gravity / escape-velocity image ("size becomes a rate-limiting factor to sustained velocity") as intuition for *why* a larger base grows slower, while keeping the on-screen claim honest ("a stubborn trend," R² ≈ 0.53). Note the forms differ: our empirical relationship is a **power law** (CAGR ∝ base^−0.15, a gentle decline), whereas the rocket equation's fuel-vs-velocity cost is **exponential**. The metaphor conveys direction, not functional form. (The −0.15 exponent rhymes with firm-growth literature on Gibrat's-law violations; we are not claiming a causal metabolic law.)
- **Selection bias, stated plainly:** these are survivors — the most successful companies in history. The frontier is therefore a *best-case* envelope. That cuts toward the bear case (even the winners couldn't do it from this base) but means the curve is an upper bound on observed outcomes, not a hard ceiling on what is possible.
- **Window sensitivity:** CAGR depends on the chosen window (Apple appears at 35% and 20% for different eras). Windows here are rule-based (from ~IPO). A critic using different windows will get a different exponent; robustness should be checked before publishing.

## 8. Index rule changes — the split decision

**Nasdaq — bent.** "Fast Entry" rule approved March 30, effective **May 1, 2026**: any newly listed company ranked top-40 by market cap joins the Nasdaq-100 after just **15 trading days**. The prior **10% minimum public-float requirement was eliminated**; low-float names instead receive an **adjusted weighting multiplier (up to ~3× float)** that *inflates* effective index weight above what tradable shares imply. Goldman estimated the change could force **up to ~$60B of buying** across the Nasdaq-100. — SpotGamma [10], Ashurst [14], Fortune [15]

> This is the key technical point. Naive float-adjusted weighting would *shrink* a <5%-float name's index weight (and the forced bid with it). Nasdaq's multiplier was specifically designed to override that — which is why the squeeze is large despite the tiny float. The mechanism, not the headline cap, is the story.

**FTSE Russell — bent.** Fast-entry after the **5th trading day** for IPOs above the Russell Top 500 cutoff; SpaceX's ~$70B investable cap clears the thresholds. Eligible for Russell Top 50/200/1000 and FTSE GEIS series. — Bloomberg [16], Benzinga [17]

**S&P Dow Jones — held the line (June 4–5, 2026).** Consultation considered cutting seasoning 12→6 months, waiving the profitability requirement, and waiving the 10% float minimum for megacaps — then **declined**, stating exceptions "should not be granted solely based on market capitalization." SpaceX gets only the less-watched S&P Total Market / DJ US Total Stock Market indexes, not the S&P 500. The benchmark with ~$20T tracking it (~$13T passive) refused. — CNBC [18], Axios [13], Bloomberg [19]

## 9. The criticism (attributed opinion)

- **George Noble** (ex-Fidelity, 40+ yrs): called the Fast Entry change "the most SHAMELESS structural manipulation of a major index I've ever seen" (Substack, March 2026); "your 401(k) is the exit liquidity." — AOL [20], Yahoo [21]
- **Michael Burry**: amplified Noble's critique to his followers, calling it a "must read." — AOL [20]
- **Mechanism alleged:** index inclusion forces passive funds to buy at elevated prices → at lock-up expiry (90–180 days), insiders sell into that artificial demand.
- **Academic:** Harvard's Murray & Sammon found prices around a comparable fast-track inclusion surged, then fell up to ~10 percentage points in following weeks. — Yahoo [21]

**Framing guardrail:** keep the line between *"this is what the structure produces"* (defensible, supported) and *"this was orchestrated"* (intent — unprovable; leave the sharpest accusations attributed to Noble/Burry).

## 10. Steelman assets (real, contracted — for the bull case in V8)

- **xAI merger** — Feb 2, 2026, all-stock; valued SpaceX $1T + xAI $250B; xAI folding into a SpaceX AI unit. — Sentisight [22]
- **Anthropic–Colossus 1 lease** — May 6, 2026: Anthropic to use *all* compute at SpaceX's Colossus 1 (Memphis): **220,000+ Nvidia GPUs, 300+ MW**; interest in orbital data centers. — CNBC [23], DCD [24], Tom's Hardware [25]
- **Starlink** — real recurring-revenue utility: $11.4B 2025 revenue, 10M+ subscribers / 160 countries. — Sacra [6]

> Do **not** assert an unverified annual lease dollar figure (earlier drafts floated "$1.25B/month" / "$15B/yr" — not confirmed in sourcing). Describe the lease by its verified specs (all compute, 220k GPUs, 300MW) instead.

## 11. Limitations & open items

1. **Re-pull all §1–§3 and §8 facts the week of publication** — post-cutoff and moving. Confirm SpaceX actually begins trading (~June 12) and that no figure repriced.
2. **Confirm every historical revenue figure in §6 against 10-Ks** — currently aggregator-level.
3. **Robustness-check the frontier** — re-run §7 with alternative windows; report whether the exponent and SpaceX's 2.15× multiple hold.
4. **WSJ screenshot provenance** — the original prompt referenced a WSJ image; confirm the exact figures shown match the cited reporting.
5. Decide whether to present the fit as "trend/envelope" (recommended) vs. "law" (rhetorically stronger, epistemically weaker — and ironic given the piece's own "coherence ≠ truth" thesis).
6. **GDP-share (§5b) uses a single 3.7% nominal-growth path.** State the assumption on-chart; refresh the BEA 2025 GDP print and CBO growth figure at publication. The 41.5%-CAGR path is the headline rate, not Morgan Stanley's front-loaded path (which is higher mid-decade), so the share curve is the conservative read of their own forecast.

---

## References

[1] CNBC — *SpaceX targets $135 IPO price at valuation of $1.77 trillion* — https://www.cnbc.com/2026/06/03/spacex-ipo-stock-price-roadshow-musk.html
[2] Fortune — *SpaceX reveals share price and record valuation* — https://fortune.com/2026/06/03/spacex-ipo-share-price-index-funds-valuation-public/
[3] Yahoo Finance — *SpaceX IPO Pricing… Musk To Keep Ironclad Control* — https://finance.yahoo.com/markets/stocks/articles/spacex-ipo-pricing-135-per-221653587.html
[4] Fortune — *SpaceX finally files IPO prospectus… revenue is up, but losses are too* — https://fortune.com/2026/05/20/spacex-finally-files-ipo-prospectus-reveals-revenue-is-up-but-losses-are-too/
[5] Morningstar — *6 Charts on SpaceX's Pre-IPO Financials* — https://www.morningstar.com/stocks/6-charts-spacexs-s-1-financials
[6] Sacra — *SpaceX revenue, valuation & funding* — https://sacra.com/c/spacex/
[7] Stocktwits — *Morgan Stanley Sees SpaceX Revenue Soar 182-Fold To $3.4 Trillion By 2040* — https://stocktwits.com/news-articles/markets/equity/spacex-revenue-soar-182-fold-3-4-trillion-2040-morgan-stanley-spcx-ipo/cZ0FkkIReCJ
[8] Yahoo Finance / Reuters — *Morgan Stanley expects SpaceX revenue to hit $3.4 trillion in 2040, WSJ reports* — https://finance.yahoo.com/markets/stocks/articles/morgan-stanley-expects-spacex-revenue-121652635.html
[9] ZeroHedge — *…$3.4 Trillion 2040 revenue, $2.7 Trillion EBITDA* — https://www.zerohedge.com/markets/morgan-stanley-projects-spacex-revenue-hitting-stratospheric-34-trillion-2040-27-trillion
[10] SpotGamma — *SpaceX IPO Index Inclusion: How Rule Changes for SPY, QQQ, IWM Force Index Funds to Sell* — https://spotgamma.com/spacex-ipo-index-changes-spotgamma/
[11] basenor — *Morgan Stanley Projects SpaceX at $3.4T Revenue by 2040* (2028/2030 path) — https://www.basenor.com/blogs/news/morgan-stanley-projects-spacex-at-3-4t-revenue-by-2040
[12] Benzinga — *SpaceX Revenue Could Hit $3.4 Trillion By 2040, Co-Lead Underwriter Morgan Stanley Predicts* — https://www.benzinga.com/markets/prediction-markets/26/06/53027273/spacex-revenue-could-hit-3-4-trillion-by-2040-co-lead-underwriter-morgan-stanley-predicts
[13] Axios — *S&P will not change the rules to allow SpaceX into its benchmark index early* — https://www.axios.com/2026/06/04/musk-spacex-ipo-sp-investors
[14] Ashurst — *Nasdaq Proposes New "Fast Entry" Rule for the Nasdaq-100 Index* — https://www.ashurst.com/en/insights/nasdaq-proposes-new-fast-entry-rule-for-the-nasdaq-100-index/
[15] Fortune — *If S&P Dow Jones rewrites its listing rules SpaceX and Anthropic will benefit—investors won't* — https://fortune.com/2026/06/02/spacex-index-funds-new-listing-rules/
[16] Bloomberg — *SpaceX IPO Gets a Route for Faster FTSE Russell Index Inclusion* — https://www.bloomberg.com/news/articles/2026-05-26/spacex-ipo-gets-another-greenlight-toward-faster-index-inclusion
[17] Benzinga — *SpaceX Stock Could Get Fast-Tracked To Russell, FTSE Indexes* — https://www.benzinga.com/news/space/26/05/52798615/spacex-stock-fast-track-russell-ftse-indexes-ipo
[18] CNBC — *SpaceX blocked from early U.S. benchmark index entry as S&P reaffirms existing rules* — https://www.cnbc.com/2026/06/05/spacex-blocked-from-early-us-benchmark-index-entry-as-sp-reaffirms-existing-rules.html
[19] Bloomberg — *S&P Dow Jones Keeps Megacap IPO Rules As-Is After Consultation* — https://www.bloomberg.com/news/articles/2026-06-04/s-p-dow-jones-keeps-megacap-ipo-rules-as-is-after-consultation
[20] AOL — *'Big Short' investor Michael Burry flags criticism of proposed rule change to fast-track SpaceX joining the Nasdaq* — https://www.aol.com/articles/big-short-investor-michael-burry-214209485.html
[21] Yahoo Finance — *SpaceX to land in your 401(k)… Burry flags retirement savings are 'exit liquidity'* — https://finance.yahoo.com/markets/stocks/articles/spacex-land-401-k-no-163000833.html
[22] Sentisight — *SpaceX–xAI Merger: What It Means for Grok and AI Output* — https://www.sentisight.ai/spacex-xai-merger-grok-ai-output/
[23] CNBC — *Anthropic, SpaceX announce compute deal that includes space development* — https://www.cnbc.com/2026/05/06/anthropic-spacex-data-center-capacity.html
[24] Data Center Dynamics — *Anthropic to use all of SpaceX-xAI's Colossus 1 data center compute* — https://www.datacenterdynamics.com/en/news/anthropic-to-use-all-of-spacex-xais-colossus-1-data-center-compute/
[25] Tom's Hardware — *Musk's SpaceX has rented out access to its supercomputer's 220,000 Nvidia GPUs and 300 MW…* — https://www.tomshardware.com/tech-industry/artificial-intelligence/musks-spacex-has-rented-out-access-to-its-supercomputers-220-000-nvidia-gpus-and-300-megawatts-of-ai-compute-power-to-rival-anthropic-musk-says-no-one-set-off-my-evil-detector-antrhropic-also-interested-in-orbital-data-centers
[26] U.S. Bureau of Economic Analysis — *Gross Domestic Product* (2025 nominal GDP $30.76T; 2024 $29.30T) — https://www.bea.gov/data/gdp/gross-domestic-product
[27] Congressional Budget Office — *The Long-Term Budget Outlook: 2025 to 2055* (real GDP ~1.7%/yr long-run; ~2% inflation → ~3.7% nominal) — https://www.cbo.gov/publication/61270
[28] CNN / Bloomberg / Al Jazeera — *Saudi Aramco's $25.6B IPO at $1.7T valuation; beat Alibaba's $25B (2014)* — https://www.cnn.com/2019/12/05/investing/saudi-aramco-ipo-price ; https://www.bloomberg.com/news/articles/2019-12-05/saudi-aramco-raises-25-6-billion-in-world-s-biggest-ipo
[29] Payload / Sacra — *SpaceX revenue history: 2022 $4.6B · 2023 $8.7B · 2024 $14.2B* — https://payloadspace.com/predicting-spacexs-2024-revenue/ ; https://sacra.com/c/spacex/
