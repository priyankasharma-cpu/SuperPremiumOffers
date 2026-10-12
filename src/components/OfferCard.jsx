import React from "react";
import { ArrowUpRight, Check, FileSearch, Phone, Sparkles } from "lucide-react";
import { offerCategories } from "../data/offerCategories";

// Existing telephone support stays optional; never attach it to non-loan campaigns.
const PHONE_NUMBER = "";
const DISPLAY_NUMBER = "";
const OfferCard = ({ offer, index = 0 }) => {
  const category = offerCategories.find(item => item.id === offer.categoryId);
  const categoryLabel = category?.label || offer.category;
  const phoneNumber = offer.phone || PHONE_NUMBER;
  const phoneAvailable = Boolean(phoneNumber) && offer.categoryId === "personal-loans";
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_12px_45px_rgba(15,23,42,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_30px_70px_rgba(37,99,235,0.16)]">
      <div className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 transition-transform duration-500 group-hover:scale-x-100" />
      {/* Natural dimensions preserve the entire approved creative. No overlays or image zoom crop text. */}
      <div className="bg-slate-50 transition-colors duration-500 group-hover:bg-blue-50/50">
        {offer.image ? (
          <img src={offer.image} alt={offer.imageAlt || `${offer.title} campaign creative`} className="block h-auto w-full object-contain" />
        ) : (
          <div className="flex min-h-44 flex-col items-center justify-center gap-3 px-6 py-9 text-center" role="img" aria-label={`${offer.title}: client campaign creative pending`}>
            <Sparkles size={28} className="text-blue-600" />
            <p className="font-bold text-slate-700">Campaign creative pending</p>
            <p className="text-xs text-slate-500">{offer.title} · {categoryLabel}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-blue-700">{categoryLabel}</span>
          {offer.badge && <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 text-[10px] font-bold text-violet-700"><Sparkles size={12} />{offer.badge}</span>}
          <span className="ml-auto text-xs font-bold text-slate-400">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-[#0a1733] sm:text-2xl">{offer.title}</h3>
            {offer.subtype && <p className="mt-1.5 text-xs font-medium text-slate-500">{offer.subtype}</p>}
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"><FileSearch size={19} /></span>
        </div>
        {offer.amount && <div className="mt-5">
          <p className="text-xs font-semibold text-slate-400">Available amount</p>
          <p className="mt-1 bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-[28px] font-black tracking-tight text-transparent">{offer.amount}</p>
        </div>}
        {offer.description && <p className="mt-4 text-[15px] font-medium leading-7 text-slate-600">{offer.description}</p>}
        {offer.disclaimer && <div className="mt-5 flex items-start gap-2.5 rounded-[14px] border border-blue-100 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 p-3.5">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white"><Check size={11} strokeWidth={3} /></span>
          <p className="text-xs font-medium leading-5 text-slate-600">{offer.disclaimer}</p>
        </div>}
        {offer.highlights?.length > 0 && <ul className="mt-4 space-y-2 text-sm text-slate-600">{offer.highlights.map((highlight, highlightIndex) => <li key={`${offer.id}-${highlightIndex}`} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-blue-600" />{highlight}</li>)}</ul>}
        <div className={`mt-6 grid gap-2.5 ${phoneAvailable ? "grid-cols-[1fr_50px]" : "grid-cols-1"}`}>
          <a href={offer.link} target="_blank" rel="noopener noreferrer" className="group/button relative flex min-h-[52px] items-center justify-between overflow-hidden rounded-[14px] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-5 py-3 text-sm font-extrabold text-white shadow-[0_10px_25px_rgba(79,70,229,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(79,70,229,0.30)]">
            <span className="absolute -left-12 top-[-30%] h-[160%] w-8 rotate-[18deg] bg-white/20 blur-sm transition-all duration-700 group-hover/button:left-[120%]" />
            <span className="relative">Learn More</span>
            <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 transition-transform group-hover/button:translate-x-1"><ArrowUpRight size={16} /></span>
          </a>
          {phoneAvailable && <a href={`tel:${phoneNumber}`} aria-label={`Call about ${offer.title}`} title={DISPLAY_NUMBER ? `Call ${DISPLAY_NUMBER}` : "Call now"} className="flex min-h-[52px] items-center justify-center rounded-[14px] border border-blue-100 bg-blue-50 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"><Phone size={18} /></a>}
        </div>
      </div>
    </article>
  );
};
export default OfferCard;
