import React from "react";
import {
    ArrowRight,
    BadgeCheck,
    FileSearch,
    LayoutGrid,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const CTA = () => {
    const scrollToOffers = () => {
        const section = document.getElementById("offers");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="relative overflow-hidden bg-white px-5 pb-20 pt-4 sm:px-7 sm:pb-24 lg:px-10 lg:pb-28">
            <div className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[30px] bg-[#0b1020]">

                {/* =================================
            BACKGROUND
        ================================= */}

                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full bg-violet-600/20 blur-[120px]" />

                    <div className="absolute -bottom-40 right-0 h-[430px] w-[430px] rounded-full bg-blue-500/15 blur-[130px]" />

                    <div
                        className="absolute inset-0 opacity-[0.035]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                        }}
                    />

                    <div className="absolute left-[48%] top-[-160px] h-[380px] w-[380px] rounded-full border border-white/[0.05]" />

                    <div className="absolute left-[53%] top-[-100px] h-[260px] w-[260px] rounded-full border border-white/[0.05]" />
                </div>

                {/* =================================
            CONTENT
        ================================= */}

                <div className="relative grid min-h-[470px] items-center gap-12 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-16 xl:px-20">

                    {/* ================= LEFT ================= */}

                    <div className="max-w-[650px]">

                        {/* EYEBROW */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 backdrop-blur-md">
                            <Sparkles size={13} className="text-violet-300" />

                            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-violet-200">
                                Explore Your Options
                            </span>
                        </div>

                        {/* HEADING */}
                        <h2 className="max-w-[620px] text-[32px] font-extrabold leading-[1.1] tracking-[-0.04em] text-white sm:text-[40px] lg:text-[46px] xl:text-[50px]">
                            Ready to see which{" "}
                            <span className="text-violet-300">
                                offers are available?
                            </span>
                        </h2>

                        {/* TEXT */}
                        <p className="mt-5 max-w-[590px] text-[14px] leading-7 text-slate-400 sm:text-[15px]">
                            Browse available options, compare key information, and visit
                            the provider when you find an offer you want to explore
                            further.
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <button
                                type="button"
                                onClick={scrollToOffers}
                                className="
                  group inline-flex h-[50px]
                  items-center justify-center gap-2
                  rounded-xl bg-white px-6
                  text-[13px] font-extrabold text-slate-950
                  shadow-[0_12px_30px_rgba(0,0,0,0.15)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-violet-100
                "
                            >
                                Explore Available Offers

                                <ArrowRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                            <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
                                <BadgeCheck
                                    size={15}
                                    className="text-emerald-400"
                                />

                                Review provider terms before proceeding
                            </div>
                        </div>

                    </div>

                    {/* ================= RIGHT VISUAL ================= */}

                    <div className="relative mx-auto w-full max-w-[470px]">

                        {/* BACK CARD */}
                        <div className="absolute inset-4 translate-x-5 translate-y-5 rotate-[3deg] rounded-[24px] border border-white/[0.07] bg-white/[0.035]" />

                        {/* MAIN CARD */}
                        <div className="relative overflow-hidden rounded-[24px] border border-white/[0.10] bg-white/[0.07] p-5 shadow-[0_30px_70px_rgba(0,0,0,0.20)] backdrop-blur-xl sm:p-6">

                            {/* TOP */}
                            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">

                                <div>
                                    <p className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-500">
                                        Offer Explorer
                                    </p>

                                    <p className="mt-1 text-[14px] font-extrabold text-white">
                                        Find an option to explore
                                    </p>
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                                    <LayoutGrid size={18} />
                                </div>

                            </div>

                            {/* OPTION 1 */}
                            <div className="mt-5 rounded-[17px] border border-white/[0.08] bg-white/[0.055] p-4 transition hover:bg-white/[0.08]">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                                        <FileSearch size={17} />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-[12px] font-bold text-white">
                                            Review Offers
                                        </p>

                                        <p className="mt-1 text-[10px] text-slate-400">
                                            Compare key available information
                                        </p>
                                    </div>

                                    <ArrowRight
                                        size={14}
                                        className="text-slate-500"
                                    />

                                </div>

                            </div>

                            {/* OPTION 2 */}
                            <div className="mt-3 rounded-[17px] border border-white/[0.08] bg-white/[0.055] p-4 transition hover:bg-white/[0.08]">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                                        <ShieldCheck size={17} />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-[12px] font-bold text-white">
                                            Check Provider Details
                                        </p>

                                        <p className="mt-1 text-[10px] text-slate-400">
                                            Review terms, fees and eligibility
                                        </p>
                                    </div>

                                    <ArrowRight
                                        size={14}
                                        className="text-slate-500"
                                    />

                                </div>

                            </div>

                            {/* BOTTOM */}
                            <div className="mt-5 flex items-center justify-between rounded-[14px] bg-[#080c17] px-4 py-3">

                                <div className="flex items-center gap-2">

                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                                    </span>

                                    <span className="text-[10px] font-semibold text-slate-400">
                                        Offers ready to explore
                                    </span>

                                </div>

                                <span className="text-[10px] font-bold text-violet-300">
                                    Browse →
                                </span>

                            </div>

                        </div>

                        {/* FLOATING CHIP */}
                        <div className="absolute -left-5 top-[48%] hidden items-center gap-2 rounded-xl border border-white/10 bg-[#171d2d] px-3.5 py-2.5 shadow-xl xl:flex">

                            <BadgeCheck
                                size={15}
                                className="text-emerald-400"
                            />

                            <span className="text-[10px] font-bold text-white">
                                Compare before continuing
                            </span>

                        </div>

                    </div>

                </div>

                {/* =================================
            BOTTOM STRIP
        ================================= */}

                <div className="relative grid border-t border-white/[0.08] sm:grid-cols-3">

                    <div className="flex items-center justify-center gap-2 px-5 py-4 text-[10px] font-semibold text-slate-400 sm:border-r sm:border-white/[0.08]">
                        <LayoutGrid
                            size={14}
                            className="text-violet-300"
                        />
                        Browse available options
                    </div>

                    <div className="flex items-center justify-center gap-2 border-t border-white/[0.08] px-5 py-4 text-[10px] font-semibold text-slate-400 sm:border-r sm:border-t-0 sm:border-white/[0.08]">
                        <FileSearch
                            size={14}
                            className="text-violet-300"
                        />
                        Compare key details
                    </div>

                    <div className="flex items-center justify-center gap-2 border-t border-white/[0.08] px-5 py-4 text-[10px] font-semibold text-slate-400 sm:border-t-0">
                        <ShieldCheck
                            size={14}
                            className="text-violet-300"
                        />
                        Review provider terms
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTA;