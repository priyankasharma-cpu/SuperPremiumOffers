import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  FileSearch,
  LayoutGrid,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import { offerCategories } from "../data/offerCategories";
const heroAssets = import.meta.glob("../images/premium-offers-hero.jpg", { eager: true, query: "?url", import: "default" });
const heroImage = heroAssets["../images/premium-offers-hero.jpg"];

const Hero = () => {
  const scrollToOffers = () => {
    document.getElementById("offers")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden bg-slate-50/60 py-16 lg:py-10 flex items-center"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-[550px] w-[550px] rounded-full bg-blue-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-[650px] w-[650px] rounded-full bg-sky-400/20 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/10 blur-[120px]" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-8">

          {/* ================================
              LEFT SIDE: CONTENT & CONSTRAINTS
          ================================= */}
          <div className="z-10 lg:col-span-7 xl:col-span-6">
            {/* Eyebrow Badge */}
            <div className="group inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm ring-2 ring-blue-100">
                <Sparkles size={12} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900">
                EXPLORE PREMIUM OFFERS
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-[66px]">
              Discover Premium Offers That{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                Fit Your Needs.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              Explore premium offers across financial services, credit solutions, insurance, health and more. Compare available options, review important details and connect with participating providers.
            </p>

            {/* Call To Actions */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                to="/offers"
                className="group relative inline-flex h-14 items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-blue-600 px-8 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/35 active:translate-y-0"
              >
                <span className="absolute -left-20 top-0 h-full w-12 rotate-12 bg-white/20 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                <span>Explore Premium Offers</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white/70 px-7 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:text-blue-600 active:translate-y-0"
              >
                How It Works
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Glass Info Cards */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <InfoCard icon={LayoutGrid} title="Multiple Options" text="Browse offers" />
              <InfoCard icon={FileSearch} title="Easy Comparison" text="Review details" />
              <InfoCard icon={ShieldCheck} title="Provider Information" text="Review provider details" />
            </div>

            {/* Provider Disclaimer Card */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/90 bg-white/50 p-3.5 shadow-sm backdrop-blur-md">
              <BadgeCheck size={18} className="mt-0.5 shrink-0 text-blue-600" />
              <p className="text-xs leading-relaxed text-slate-500">
                Offer availability and final terms are determined by individual providers. Review the relevant provider information before continuing.
              </p>
            </div>
          </div>

          {/* ================================
              RIGHT SIDE: ENHANCED IMAGE & FLOATING CARDS
          ================================= */}
          <div className="relative flex items-center justify-center lg:col-span-5 xl:col-span-6">
            <div className="relative w-full max-w-[560px]">

              {/* Backglow and Visual Frame Effect */}
              <div className="absolute -inset-1.5 rotate-1 rounded-[36px] bg-gradient-to-tr from-blue-600/30 via-sky-400/20 to-indigo-500/20 opacity-70 blur-2xl" />
              <div className="absolute inset-0 -rotate-1 rounded-[36px] bg-gradient-to-br from-white/60 to-blue-200/40 blur-md" />

              <div className="relative rounded-[32px] border border-white/80 bg-white/60 p-3.5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
                {heroImage && <img src={heroImage} alt="Financial services, credit, insurance and health offer categories" className="mb-4 h-auto w-full rounded-[24px] object-contain" />}
                <div className="grid grid-cols-1 gap-3 rounded-[24px] bg-gradient-to-br from-blue-50 via-white to-violet-100/70 p-4 sm:grid-cols-2 sm:p-6">
                  {offerCategories.map((category, index) => {
                    const CategoryIcon = category.icon;
                    return <div key={category.id} style={{ animationDelay: `${index * -0.7}s` }} className="flex items-center gap-3 rounded-2xl border border-white bg-white/85 p-4 shadow-lg transition-transform hover:scale-[1.02] motion-safe:animate-[howFloat_8s_ease-in-out_infinite]">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white"><CategoryIcon size={21} /></span>
                      <p className="text-xs font-bold text-slate-800">{category.label}</p>
                    </div>;
                  })}
                </div>
                <p className="px-3 pt-4 text-center text-xs leading-5 text-slate-500">Explore our category range. Published offers are listed in Offer Categories.</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        type="button"
        onClick={scrollToOffers}
        aria-label="Scroll to offers"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-blue-600 lg:flex"
      >
        <span className="text-[10px] font-black uppercase tracking-widest">Explore</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
};

/* ================================
    REUSABLE GLASS INFO CARD
================================= */
const InfoCard = ({ icon: IconComponent, title, text }) => {
  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-white/80 bg-white/60 p-3.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-600/20">
        {IconComponent && <IconComponent size={18} />}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-900">{title}</p>
        <p className="text-[10px] font-medium text-slate-500">{text}</p>
      </div>
    </div>
  );
};

export default Hero;