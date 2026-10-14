import React from "react";
import { ArrowUpRight, Check, FileSearch, Sparkles } from "lucide-react";
import badCreditImage from "../../images/unnamed.png";
import instantCashImage from "../../images/redcard.png";
import emergencyLoanImage from "../../images/MO.png";

// Campaign content and complete card designs are edited only in this file.
// numberOffset keeps numbering continuous on Home / All Offers.
const PersonalLoans = ({ numberOffset = 0 } = {}) => (
  <>
    {/* ================= CARD 1: LENDING FOR BAD CREDIT ================= */}
    <article className="group relative flex flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_12px_45px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_30px_70px_rgba(37,99,235,0.16)]">
      <div className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-transform duration-500 group-hover:scale-x-100" />
      {/* Natural dimensions preserve the entire approved creative. No overlays or image zoom crop text. */}
      <div className="bg-slate-50 transition-colors duration-500 group-hover:bg-blue-50/50">
        <img src={badCreditImage} alt="Lending For Bad Credit campaign creative" className="block h-auto w-full object-contain" />
      </div>
      <div className="flex flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-blue-700">Personal Loans</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-[10px] font-bold text-violet-700"><Sparkles size={12} />Featured</span>
          <span className="ml-auto text-xs font-bold text-slate-400">{String(numberOffset + 1).padStart(2, "0")}</span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-[#0a1733] sm:text-2xl">Lending For Bad Credit</h3>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"><FileSearch size={19} /></span>
        </div>
        <div className="mt-5">
          <p className="text-xs font-semibold text-slate-400">Available amount</p>
          <p className="mt-1 bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-[28px] font-black tracking-tight text-transparent">$100 – $40,000</p>
        </div>
        <p className="mt-4 text-[15px] font-medium leading-7 text-slate-600">Submit a loan request through an online marketplace that connects consumers with participating lenders and lending partners. Loan availability and terms vary.</p>
        <div className="mt-5 flex items-start gap-2.5 rounded-[14px] border border-blue-100 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 p-3.5">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"><Check size={11} strokeWidth={3} /></span>
          <p className="text-xs font-medium leading-5 text-slate-600">Review eligibility, rates, fees and provider terms before continuing.</p>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-auto pt-6">
          <a
            href="https://www.options-available.com/?src=ws&cid=&sid=www.lendingforbadcredit.com&pid=s1"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="
      group/button relative flex min-h-[52px]
      w-full items-center justify-center gap-2.5
      overflow-hidden rounded-[14px]
      bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
      px-5 py-3 text-sm font-extrabold text-white
      shadow-[0_10px_25px_rgba(79,70,229,0.22)]
      transition-all duration-300
      hover:-translate-y-0.5
      hover:shadow-[0_15px_35px_rgba(79,70,229,0.30)]
      focus-visible:outline-none
      focus-visible:ring-4 focus-visible:ring-indigo-200
    "
          >
            {/* Animated Shine */}
            <span
              className="
        pointer-events-none absolute -left-12 top-[-30%]
        h-[160%] w-8 rotate-[18deg]
        bg-white/20 blur-sm
        transition-all duration-700
        group-hover/button:left-[120%]
      "
            />

            {/* Centered Text */}
            <span className="relative">
              Learn More
            </span>

            {/* Centered Icon */}
            <span
              className="
        relative flex h-7 w-7 items-center justify-center
        rounded-lg bg-white/15
        transition-transform duration-300
        group-hover/button:translate-x-1
      "
            >
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </article>

    {/* ================= CARD 2: REDARROWLOANS ================= */}
    <article className="group relative flex flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_12px_45px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_30px_70px_rgba(37,99,235,0.16)]">
      <div className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-transform duration-500 group-hover:scale-x-100" />
      {/* Natural dimensions preserve the entire approved creative. No overlays or image zoom crop text. */}
      <div className="bg-slate-50 transition-colors duration-500 group-hover:bg-blue-50/50">
        <img src={instantCashImage} alt="RedArrowLoans campaign creative" className="block h-auto w-full object-contain" />
      </div>
      <div className="flex flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-blue-700">Personal Loans</span>
          <span className="ml-auto text-xs font-bold text-slate-400">{String(numberOffset + 2).padStart(2, "0")}</span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-[#0a1733] sm:text-2xl">RedArrowLoans</h3>
            <p className="mt-1.5 text-xs font-medium text-slate-500">Loan Marketplace</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"><FileSearch size={19} /></span>
        </div>
        <div className="mt-5">
          <p className="text-xs font-semibold text-slate-400">Available amount</p>
          <p className="mt-1 bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-[28px] font-black tracking-tight text-transparent">$500 – $35,000</p>
        </div>
        <p className="mt-4 text-[15px] font-medium leading-7 text-slate-600">Connect with lenders through RedArrowLoans' online network and review available loan options. Approval, rates, amounts and terms are determined by the lender.</p>
        <div className="mt-5 flex items-start gap-2.5 rounded-[14px] border border-blue-100 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 p-3.5">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"><Check size={11} strokeWidth={3} /></span>
          <p className="text-xs font-medium leading-5 text-slate-600">Review eligibility, rates, fees and provider terms before continuing.</p>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-auto pt-6">
          <a
            href="https://www.redarrowloans.com/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="
             group/button relative flex min-h-[52px]
             w-full items-center justify-center gap-2.5
             overflow-hidden rounded-[14px]
             bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
             px-5 py-3 text-sm font-extrabold text-white
             shadow-[0_10px_25px_rgba(79,70,229,0.22)]
             transition-all duration-300
             hover:-translate-y-0.5
             hover:shadow-[0_15px_35px_rgba(79,70,229,0.30)]
             focus-visible:outline-none
             focus-visible:ring-4 focus-visible:ring-indigo-200
           "
          >
            {/* Animated Shine */}
            <span
              className="
               pointer-events-none absolute -left-12 top-[-30%]
               h-[160%] w-8 rotate-[18deg]
               bg-white/20 blur-sm
               transition-all duration-700
               group-hover/button:left-[120%]
             "
            />

            {/* Centered Text */}
            <span className="relative">
              Learn More
            </span>

            {/* Centered Icon */}
            <span
              className="
               relative flex h-7 w-7 items-center justify-center
               rounded-lg bg-white/15
               transition-transform duration-300
               group-hover/button:translate-x-1
             "
            >
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </article>

    {/* ================= CARD 3: MONEYMUTUAL ================= */}
    <article className="group relative flex flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_12px_45px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_30px_70px_rgba(37,99,235,0.16)]">
      <div className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-transform duration-500 group-hover:scale-x-100" />
      {/* Natural dimensions preserve the entire approved creative. No overlays or image zoom crop text. */}
      <div className="bg-slate-50 transition-colors duration-500 group-hover:bg-blue-50/50">
        <img src={emergencyLoanImage} alt="MoneyMutual campaign creative" className="block h-auto w-full object-contain" />
      </div>
      <div className="flex flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-blue-700">Personal Loans</span>
          <span className="ml-auto text-xs font-bold text-slate-400">{String(numberOffset + 3).padStart(2, "0")}</span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-[#0a1733] sm:text-2xl">MoneyMutual</h3>
            <p className="mt-1.5 text-xs font-medium text-slate-500">Short-Term Loans</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"><FileSearch size={19} /></span>
        </div>
        <div className="mt-5">
          <p className="text-xs font-semibold text-slate-400">Available amount</p>
          <p className="mt-1 bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-[28px] font-black tracking-tight text-transparent">Up to $5,000</p>
        </div>
        <p className="mt-4 text-[15px] font-medium leading-7 text-slate-600">Connect with participating lenders through MoneyMutual's online marketplace and review available loan options and terms before accepting an offer.</p>
        <div className="mt-5 flex items-start gap-2.5 rounded-[14px] border border-blue-100 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 p-3.5">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"><Check size={11} strokeWidth={3} /></span>
          <p className="text-xs font-medium leading-5 text-slate-600">Review eligibility, rates, fees and provider terms before continuing.</p>
        </div>
        {/* ================= CTA ================= */}
        <div className="mt-auto pt-6">
          <a
            href="https://moneymutual.com/"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="
      group/button relative flex min-h-[52px]
      w-full items-center justify-center gap-2.5
      overflow-hidden rounded-[14px]
      bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
      px-5 py-3 text-sm font-extrabold text-white
      shadow-[0_10px_25px_rgba(79,70,229,0.22)]
      transition-all duration-300
      hover:-translate-y-0.5
      hover:shadow-[0_15px_35px_rgba(79,70,229,0.30)]
      focus-visible:outline-none
      focus-visible:ring-4 focus-visible:ring-indigo-200
    "
          >
            {/* Animated Shine */}
            <span
              className="
        pointer-events-none absolute -left-12 top-[-30%]
        h-[160%] w-8 rotate-[18deg]
        bg-white/20 blur-sm
        transition-all duration-700
        group-hover/button:left-[120%]
      "
            />

            {/* Centered Text */}
            <span className="relative">
              Learn More
            </span>

            {/* Centered Icon */}
            <span
              className="
        relative flex h-7 w-7 items-center justify-center
        rounded-lg bg-white/15
        transition-transform duration-300
        group-hover/button:translate-x-1
      "
            >
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </article>
  </>
);

export default PersonalLoans;
