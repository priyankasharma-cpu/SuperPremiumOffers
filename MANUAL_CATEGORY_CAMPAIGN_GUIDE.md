# Manual Category aur Campaign Guide

Project folder: `E:\VISHAL LOVANSHI\All InOne`

Ab campaign ka naam, description, image, amount, badge, disclaimer, CTA aur URL
**usi category ki JSX file mein** hain. Campaign data file ya reusable card
template edit karne ki zaroorat nahi hai. Har card ka complete JSX apna hai;
aap ek card ka design independently change kar sakte ho.

## 1. Kaunsi file edit karni hai?

- Category list: `src/data/offerCategories.js`
- Category selection / switch: `src/components/OfferRenderer.jsx`
- Building Your Credit Score: `src/pages/categories/BuildingYourCreditScore.jsx`
- Credit Monitoring: `src/pages/categories/CreditMonitoring.jsx`
- Health & Wellness: `src/pages/categories/HealthWellness.jsx`
- Credit Repair: `src/pages/categories/CreditRepair.jsx`
- Health Insurance: `src/pages/categories/HealthInsurance.jsx`
- Mortgage Refinance: `src/pages/categories/MortgageRefinance.jsx`
- Nutraceuticals: `src/pages/categories/Nutraceuticals.jsx`
- Personal Loans: `src/pages/categories/PersonalLoans.jsx`
- Current local images: `src/images/`

Absolute example: `E:\VISHAL LOVANSHI\All InOne\src\pages\categories\HealthWellness.jsx`.

`Offers.jsx` URL se category select karta hai. Category file sirf card JSX
return karti hai; existing page apna grid banata hai. Homepage aur `/offers`
bhi isi JSX ko reuse karte hain. Campaign JSX duplicate nahi hai.

## 2. Nayi category add karo — sirf teen steps

### Step 1: Main list mein ek entry add karo

`src/data/offerCategories.js` ki `offerCategories` array mein entry add karo.
Existing entry ka real example:

```js
{ id: "health-wellness", label: "Health & Wellness", slug: "health-wellness", icon: HeartPulse, description: "Explore health and wellness offers.", allOffersOrder: 2 },
```

Nayi category ke liye apna readable label, stable slug, description aur
already imported icon choose karo. `id` aur `slug` same rakhna simplest hai.
Naya icon chahiye to isi file ke Lucide import mein uska naam add karo.

Pehli teen entries ka special order preserve karo:
Building Your Credit Score, Credit Monitoring, Health & Wellness.
Baaki entries alphabetical position mein insert karo. Navbar, sidebar,
mobile selector aur Footer isi single list ko use karte hain.

`slug` se `/offers/<slug>` URL banta hai. Existing slug badalne se old URL
break hoga, isliye category rename karte waqt sirf label change karo.

### Step 2: Category ki JSX file banao

`src/pages/categories/` mein readable PascalCase filename banao.
Example: `CreditRepair.jsx` ka numbered-card-ready structure:

```jsx
import React from "react";

const CreditRepair = ({ numberOffset = 0 } = {}) => (
  <>
    {/* Apne actual campaign ke complete JSX cards yahan add karo. */}
  </>
);

export default CreditRepair;
```

Empty fragment valid hai. Jab tak card nahi hai, category navigation mein
hide rahegi; direct category URL existing empty message dikhayega.
Unused `numberOffset` ko empty file se hata sakte ho; first numbered card
add karte waqt parameter wapas add karo. Existing empty category files isi
tarah ready hain.

### Step 3: OfferRenderer mein import aur case add karo

`src/components/OfferRenderer.jsx` mein existing working example:

```jsx
import HealthWellness from "../pages/categories/HealthWellness";

// renderCategory switch ke andar:
case "health-wellness":
  return <HealthWellness numberOffset={numberOffset} />;
```

Nayi category ka import aur matching slug case isi tarah add karo.
`App.jsx`, Navbar, Footer ya sidebar mein new category manually mat add karo.
Existing `/offers/:category` route automatically kaam karega.

## 3. Existing category mein naya campaign add karo

1. Corresponding category JSX file kholo.
2. Local image ka import add karo.
3. Fragment `<> ... </>` ke andar existing complete `<article>...</article>`
   block copy karo, ya apna complete card design likho.
4. Actual name, description, features, disclaimer, image, CTA aur affiliate
   URL fill karo. Copied campaign ki purani content/URL replace karna mat bhoolo.
5. Card comment aur local numbering update karo, phir save karo.

Example: Ultiself ko edit karne ke liye sirf
`src/pages/categories/HealthWellness.jsx` edit hoti hai. Us file mein actual
working image import hai:

```jsx
import ultiselfImage from "../../images/ultiself-campaign.jpg";
```

Aur actual campaign ke working JSX parts hain:

```jsx
<h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-[#0a1733] sm:text-2xl">
  Ultiself
</h3>

<img
  src={ultiselfImage}
  alt="Ultiself campaign logo"
  className="mx-auto block aspect-[5/3] w-full max-w-[500px] object-contain"
/>

<p className="mt-4 text-[15px] font-medium leading-7 text-slate-600">
  Ultiself is an AI-powered habit-tracking and self-improvement mobile app designed to help users build daily routines, track moods and health data, and optimize personal productivity. Download today.
</p>

<a
  href="https://monetisetrk4.co.uk/?a=26325&c=54974&s1="
  target="_blank"
  rel="noopener noreferrer"
  className="group/button relative flex min-h-[52px] items-center justify-between overflow-hidden rounded-[14px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(79,70,229,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(79,70,229,0.30)]"
>
  <span className="absolute -left-12 top-[-30%] h-[160%] w-8 rotate-[18deg] bg-white/20 blur-sm transition-all duration-700 group-hover/button:left-[120%]" />
  <span className="relative">Learn More</span>
  <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 transition-transform group-hover/button:translate-x-1">
    <ArrowUpRight size={16} />
  </span>
</a>
```

Ye excerpts existing card ke parts hain. Current design copy karna ho to
category file ka **poora article block** copy karo, sirf ye excerpts nahi.
Icon use karte ho to isi file ke `lucide-react` import mein usko add karo.

Naya campaign category page, All Offers aur homepage mein automatically
aayega. Koi global campaign count, data array ya renderer edit nahi chahiye.
Previously empty category mein card add karne par uski navigation bhi
automatically visible ho jayegi.

## 4. Local image import/change kaise karein?

Current assets `src/images/` mein hain. New image yahan ya
`src/images/campaign-images/` folder mein rakh sakte ho. Category file se:

```jsx
// Existing working import:
import selfCreditBuilderImage from "../../images/self-credit-builder.png";
```

Subfolder use karoge to relative path `../../images/campaign-images/<filename>`
hoga. Image import aur `<img src={...}>` dono isi category file mein edit karo.
Filename ka case aur extension exact rakho; spaces wale names bhi exact match
hone chahiye. Descriptive `alt` rakho.

Self aur Ultiself ka original image frame `aspect-[5/3]`, `max-w-[500px]`,
`object-contain` hai. Loan aur TransUnion images `h-auto w-full object-contain`
use karti hain. Existing sizing preserve karna ho to image classes mat badlo.

`CreditMonitoring.jsx` existing optional TransUnion full creative
`src/images/transunion-credit-essentials.png` ko prefer karta hai, phir supplied
`src/images/trans.jpeg` logo use karta hai. Full creative add karne ke baad
production build dobara banao. Dono files absent hon to original pending
creative UI aayegi.

## 5. Text, features, disclaimer, URL aur CTA change karo

- Campaign name: card ka `<h3>` text edit karo.
- Description: corresponding `<p>` text edit karo.
- Amount, badge, subtype: us card ka local JSX edit karo.
- Features: us card ke andar apna `<ul><li>...</li></ul>` likho; template fixed nahi hai.
- Disclaimer: card ke local disclaimer block ka text edit/add/remove karo.
- Affiliate URL: usi card ke `<a href="...">` mein exact approved URL paste karo.
  Tracking path, query parameters aur final `s1=` jaise empty parameters preserve karo.
- CTA: `<span className="relative">Learn More</span>` ka text edit karo.
- External link behavior: existing `target="_blank"` aur
  `rel="noopener noreferrer"` attributes preserve karo.

Phone button ya interactive UI chahiye to apna JSX isi card mein add kar
sakte ho. Category function pure JSX rakho: direct `useState` / `useEffect`
usmein mat add karo. Interactive behavior ek child component mein rakho;
woh child bhi isi JSX file mein define ho sakta hai. Isse renderer ka automatic
card counting sahi rehta hai aur campaign ke liye extra file required nahi hoti.

## 6. Campaign remove ya order change karo

Campaign remove karne ke liye comment se poora `<article>...</article>` block
delete karo. Us image/icon ka import ab unused hai to isi file se hata do.
Temporary hide karna ho to poora block JSX comment mein rakh sakte ho.

Campaign order badalne ke liye complete article blocks upar/neeche move karo.
Har **direct fragment child ek campaign card** rakho. Saare cards ke around
extra wrapper/grid mat add karo: grid pehle se Offers/homepage mein hai.

Numbering span ke real examples:

```jsx
{/* Category ka pehla card */}
<span className="ml-auto text-xs font-bold text-slate-400">
  {String(numberOffset + 1).padStart(2, "0")}
</span>

{/* Category ka doosra card */}
<span className="ml-auto text-xs font-bold text-slate-400">
  {String(numberOffset + 2).padStart(2, "0")}
</span>
```

Card add/remove/reorder karte waqt isi category file mein `+ 1`, `+ 2`, `+ 3`
positions aur card comments sequence mein rakho. Global offset renderer
actual JSX card count se calculate karta hai; doosri category file ko edit
nahi karna padta. Last card remove hone par category navigation automatically
hide hoti hai aur direct URL empty state dikhata hai.

Home aur All Offers ka original sequence:
Lending For Bad Credit → RedArrowLoans → MoneyMutual → Self Credit Builder
→ Ultiself → TransUnion.

List mein `allOffersOrder` isi separate category grouping ko preserve karta
hai: Personal Loans `0`, Building Your Credit Score `1`, Health & Wellness `2`,
Credit Monitoring `3`. New category without this field existing campaigns ke
baad aayegi. Existing category ke cards isi group mein appear honge.
Navigation order main array ka order hai; woh is field se change nahi hota.

## 7. Website locally run karo

PowerShell:

```powershell
Set-Location 'E:\VISHAL LOVANSHI\All InOne'
npm install
npm run dev
```

Terminal mein shown local URL kholo. `node_modules` already installed ho to
har baar `npm install` required nahi hai. Category file save karke browser
check karo; empty/populated category navigation bhi update hogi.

## 8. Production build aur preview

```powershell
Set-Location 'E:\VISHAL LOVANSHI\All InOne'
npm run build
npm run preview
```

Build output `dist/` mein aata hai. Deploy karte waqt existing `dist/.htaccess`
bhi include karo. Apache par ye direct category URL refresh ko `index.html`
par route karta hai. Actual server ka SPA fallback enabled rehna chahiye.
`App.jsx` ke routes change karne ki zaroorat nahi hai.

## 9. Save/build ke baad quick check

- Category URL directly kholo, refresh aur back/forward test karo.
- Navbar, desktop sidebar, mobile selector aur Footer category links check karo.
- Category, `/offers` aur homepage mein new/edited card check karo.
- Image load, full image sizing, card number aur CTA ka exact href check karo.
- Mobile single column aur desktop two-column grid check karo.
- `npm run build` aur `npm run lint` run karo.

Campaign add/edit karne ke liye `App.jsx`, `OfferRenderer.jsx`, category list,
Navbar, Footer ya global configuration edit nahi hoti. **Sirf corresponding
category JSX file (aur new image asset, agar chahiye) change hoti hai.**
