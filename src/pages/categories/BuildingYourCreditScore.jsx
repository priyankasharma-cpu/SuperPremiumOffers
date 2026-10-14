import React from "react";
import { ArrowUpRight, FileSearch } from "lucide-react";
import selfCreditBuilderImage from "../../images/self-credit-builder.png";
import CreditStrong from "../../images/crc.png"

// Campaign content and complete card designs are edited only in this file.
// numberOffset keeps numbering continuous on Home / All Offers.
const BuildingYourCreditScore = ({ numberOffset = 0 } = {}) => (
  <>


    {/* ================= CARD 1: CREDITSTRONG ================= */}
    <article
      className="
    group relative flex h-full min-w-0 flex-col
    overflow-hidden rounded-[26px]
    border border-slate-200/80 bg-white
    shadow-[0_12px_45px_rgba(15,23,42,0.07)]
    transition-all duration-500
    hover:-translate-y-1 hover:border-emerald-200
    hover:shadow-[0_30px_70px_rgba(16,185,129,0.14)]
  "
    >
      {/* Animated top gradient */}
      <div
        className="
      absolute inset-x-0 top-0 z-10 h-[4px]
      origin-left scale-x-0
      bg-gradient-to-r from-[#43C900] via-emerald-500 to-blue-600
      transition-transform duration-500
      group-hover:scale-x-100
    "
      />

      {/* ================= LOGO ================= */}
      <div
        className="
      relative flex w-full items-center justify-center
      overflow-hidden bg-black
      transition-all duration-500
    "
      >
        <img
          src={CreditStrong}
          alt="CreditStrong campaign logo"
          loading="lazy"
          className="
        mx-auto block aspect-[5/3]
        w-full max-w-[500px]
        object-contain
        transition-transform duration-500
        group-hover:scale-[1.025]
      "
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Category and number */}
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span
            className="
          inline-flex items-center gap-2 rounded-full
          border border-emerald-100 bg-emerald-50
          px-3 py-1.5 text-[10px] font-extrabold
          uppercase tracking-wider text-emerald-700
        "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Building Your Credit Score
          </span>

          <span className="ml-auto text-xs font-bold text-slate-400">
            {String(numberOffset + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Heading */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className="
            text-[22px] font-extrabold leading-tight
            tracking-tight text-[#0a1733]
            sm:text-2xl
          "
            >
              CreditStrong
            </h3>

            <p className="mt-1 text-[12px] font-semibold text-emerald-700">
              Credit Builder Loan
            </p>
          </div>

          <span
            className="
          flex h-10 w-10 shrink-0 items-center justify-center
          rounded-[13px] bg-emerald-50 text-emerald-600
          transition-all duration-300
          group-hover:bg-emerald-600 group-hover:text-white
        "
          >
            <FileSearch size={19} />
          </span>
        </div>

        {/* Description */}
        <p
          className="
        mt-4 text-[15px] font-medium
        leading-7 text-slate-600
      "
        >
          The credit builder loan you can trust—quick application,
          low payments, free monthly credit score.
          Unlock your life goals with strong credit!
        </p>


        {/* ================= CTA ================= */}
        <div className="mt-auto pt-6">
          <a
            href="https://www.htgg0h0u.com/2J75T3/R74QP/?uid=45"
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



    {/* ================= CARD 2: SELF CREDIT BUILDER ================= */}
    <article className="group relative flex flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_12px_45px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_30px_70px_rgba(37,99,235,0.16)]">
      <div className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-transform duration-500 group-hover:scale-x-100" />
      {/* Natural dimensions preserve the entire approved creative. No overlays or image zoom crop text. */}
      <div className="bg-slate-50 transition-colors duration-500 group-hover:bg-blue-50/50">
        <img src={selfCreditBuilderImage} alt="Self Credit Builder campaign creative" className="mx-auto block aspect-[5/3] w-full max-w-[500px] object-contain" />
      </div>
      <div className="flex flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-blue-700">Building Your Credit Score</span>
          <span className="ml-auto text-xs font-bold text-slate-400">{String(numberOffset + 1).padStart(2, "0")}</span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-[#0a1733] sm:text-2xl">Self Credit Builder</h3>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"><FileSearch size={19} /></span>
        </div>
        <p className="mt-4 text-[15px] font-medium leading-7 text-slate-600">Your credit building toolkit. Build savings &amp; credit with Self’s Credit Builder Account — plus, lift up your credit by reporting rent and bills.</p>

        {/* ================= CTA ================= */}
        <div className="mt-auto pt-6">
          <a
            href="https://www.orb36aam.com/2BQ64KRMP/81ZTZ8K/"
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

export default BuildingYourCreditScore;
