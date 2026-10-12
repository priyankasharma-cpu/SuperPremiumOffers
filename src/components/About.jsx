import React from "react";

import {
    ArrowRight,
    BadgeCheck,
    CircleDollarSign,
    FileSearch,
    LayoutGrid,
    Search,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const About = () => {
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
        <section
            id="about"
            className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
        >
            {/* BACKGROUND DECORATION */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-48 bottom-0 h-[430px] w-[430px] rounded-full bg-violet-100/50 blur-[130px]" />

                <div className="absolute -right-48 top-0 h-[430px] w-[430px] rounded-full bg-blue-100/40 blur-[130px]" />
            </div>

            <div className="relative mx-auto grid max-w-[1380px] items-center gap-14 px-5 sm:px-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-10">

                {/* =================================
            LEFT VISUAL
        ================================= */}

                <div className="relative mx-auto w-full max-w-[570px] lg:mx-0">

                    {/* Background layer */}
                    <div className="absolute -inset-4 -rotate-[2deg] rounded-[34px] bg-gradient-to-br from-violet-100 via-slate-50 to-blue-100" />

                    {/* MAIN DASHBOARD */}
                    <div className="relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-[#fafbff] p-5 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:p-7">

                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-slate-200/70 pb-5">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white shadow-[0_8px_20px_rgba(109,40,217,0.20)]">
                                    <Sparkles size={19} />
                                </div>

                                <div>
                                    <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400">
                                        Super Premium Offers
                                    </p>

                                    <p className="mt-0.5 text-[14px] font-extrabold text-slate-950">
                                        Offer Discovery
                                    </p>
                                </div>

                            </div>

                            <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-emerald-700">
                                Explore
                            </span>

                        </div>

                        {/* SEARCH STYLE BOX */}
                        <div className="mt-5 rounded-[18px] border border-slate-200 bg-white p-4 shadow-sm">

                            <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                                    <Search size={16} />
                                </div>

                                <div>
                                    <p className="text-[10px] font-medium text-slate-400">
                                        Looking for
                                    </p>

                                    <p className="text-[13px] font-bold text-slate-800">
                                        Offers across multiple categories
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* GRID */}
                        <div className="mt-4 grid grid-cols-2 gap-3">

                            <div className="rounded-[18px] border border-slate-200/80 bg-white p-4">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                                    <LayoutGrid size={17} />
                                </div>

                                <p className="mt-4 text-[13px] font-extrabold text-slate-900">
                                    Browse Options
                                </p>

                                <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                                    Explore available offers in one place.
                                </p>
                            </div>

                            <div className="rounded-[18px] border border-slate-200/80 bg-white p-4">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                    <FileSearch size={17} />
                                </div>

                                <p className="mt-4 text-[13px] font-extrabold text-slate-900">
                                    Review Details
                                </p>

                                <p className="mt-1.5 text-[11px] leading-5 text-slate-500">
                                    Compare key information before continuing.
                                </p>
                            </div>

                        </div>

                        {/* PROVIDER ROW */}
                        <div className="mt-4 rounded-[18px] bg-[#111827] p-4 text-white">

                            <div className="flex items-center justify-between gap-4">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-violet-300">
                                        <CircleDollarSign size={18} />
                                    </div>

                                    <div>
                                        <p className="text-[10px] text-slate-400">
                                            When you're ready
                                        </p>

                                        <p className="mt-0.5 text-[12px] font-bold">
                                            Continue directly to the provider
                                        </p>
                                    </div>

                                </div>

                                <ArrowRight
                                    size={17}
                                    className="shrink-0 text-violet-300"
                                />

                            </div>

                        </div>

                    </div>

                    {/* FLOATING CARD 1 */}
                    <div className="absolute -right-5 top-[95px] hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_16px_45px_rgba(15,23,42,0.12)] xl:flex">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                            <BadgeCheck size={17} />
                        </div>

                        <div>
                            <p className="text-[10px] font-medium text-slate-400">
                                Simple
                            </p>

                            <p className="text-[12px] font-extrabold text-slate-900">
                                Offer discovery
                            </p>
                        </div>

                    </div>

                    {/* FLOATING CARD 2 */}
                    <div className="absolute -bottom-6 -left-5 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_16px_45px_rgba(15,23,42,0.12)] sm:flex">

                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                            <ShieldCheck size={17} />
                        </div>

                        <div>
                            <p className="text-[10px] font-medium text-slate-400">
                                Remember
                            </p>

                            <p className="text-[12px] font-extrabold text-slate-900">
                                Review provider terms
                            </p>
                        </div>

                    </div>

                </div>

                {/* =================================
            RIGHT CONTENT
        ================================= */}

                <div className="max-w-[620px]">

                    {/* EYEBROW */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/70 px-3.5 py-2">

                        <Sparkles size={13} className="text-violet-600" />

                        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-violet-700">
                            About Super Premium Offers
                        </span>

                    </div>

                    {/* HEADING */}
                    <h2 className="text-[32px] font-extrabold leading-[1.12] tracking-[-0.035em] text-slate-950 sm:text-[40px] lg:text-[46px]">
                        Making it easier to{" "}
                        <span className="text-violet-600">
                            discover and compare
                        </span>{" "}
                        available offers.
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mt-6 text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                        Super Premium Offers is designed to help visitors explore
                        available offers through a clear and easy-to-use experience.
                        Instead of presenting complicated information all at once, we
                        organize key details so you can quickly understand what options
                        are available.
                    </p>

                    <p className="mt-4 text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                        When an offer interests you, you can continue to the provider to
                        review their complete terms, eligibility requirements, fees,
                        disclosures, and application process.
                    </p>

                    {/* FEATURE LIST */}
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">

                        <div className="flex items-start gap-3 rounded-[16px] border border-slate-200/80 bg-[#fafbff] p-4">

                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                                <BadgeCheck size={15} />
                            </div>

                            <div>
                                <h3 className="text-[12px] font-extrabold text-slate-900">
                                    Easy to Browse
                                </h3>

                                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                                    Find available options without unnecessary complexity.
                                </p>
                            </div>

                        </div>

                        <div className="flex items-start gap-3 rounded-[16px] border border-slate-200/80 bg-[#fafbff] p-4">

                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <FileSearch size={15} />
                            </div>

                            <div>
                                <h3 className="text-[12px] font-extrabold text-slate-900">
                                    Clear Information
                                </h3>

                                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                                    Review key information before visiting a provider.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">

                        <button
                            type="button"
                            onClick={scrollToOffers}
                            className="group inline-flex h-[50px] items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-[13px] font-extrabold text-white shadow-[0_10px_25px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700"
                        >
                            Explore Offers

                            <ArrowRight
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>

                        <p className="max-w-[240px] text-[10px] leading-5 text-slate-400">
                            Provider terms, eligibility, fees, and availability may vary.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;