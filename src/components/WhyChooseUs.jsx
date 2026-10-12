import React from "react";
import {
    ArrowRight,
    BadgeCheck,
    CircleDollarSign,
    FileSearch,
    LayoutGrid,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const features = [
    {
        icon: LayoutGrid,
        number: "01",
        title: "Multiple Options",
        description:
            "Explore offers across multiple categories in one place.",
    },
    {
        icon: FileSearch,
        number: "02",
        title: "Clear Information",
        description:
            "Review key offer details before continuing to a provider for complete terms and eligibility.",
    },
    {
        icon: CircleDollarSign,
        number: "03",
        title: "Simple Comparison",
        description:
            "Compare category-specific details and offer types to find options worth exploring.",
    },
    {
        icon: ShieldCheck,
        number: "04",
        title: "Provider Details",
        description:
            "Continue directly to the provider to review their requirements, disclosures, and final terms.",
    },
];

const WhyChooseUs = () => {
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
            id="why-us"
            className="relative overflow-hidden bg-slate-50 py-12 text-slate-900 sm:py-16 lg:py-20"
        >
            {/* ================= BACKGROUND EFFECTS ================= */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 -top-20 h-[350px] w-[350px] rounded-full bg-blue-400/10 blur-[100px]" />
                <div className="absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-violet-400/10 blur-[100px]" />

                <div
                    className="absolute inset-0 opacity-[0.3]"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

                {/* ================= HEADER SECTION ================= */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

                    {/* LEFT HEADER */}
                    <div className="max-w-[540px]">
                        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1 shadow-sm backdrop-blur-md">
                            <Sparkles size={12} className="text-blue-600" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">
                                Why Super Premium Offers
                            </span>
                        </div>

                        <h2 className="text-[26px] font-black leading-tight tracking-[-0.025em] text-slate-900 sm:text-[32px] lg:text-[36px]">
                            A simpler way to{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                explore your options.
                            </span>
                        </h2>
                    </div>

                    {/* RIGHT HEADER */}
                    <div className="max-w-[500px]">
                        <p className="text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
                            Super Premium Offers helps organize available offers in an
                            easy-to-browse experience, so you can review key information
                            before visiting a provider for complete details.
                        </p>

                        <button
                            type="button"
                            onClick={scrollToOffers}
                            className="group mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-blue-600 transition-colors hover:text-violet-700"
                        >
                            Browse available offers
                            <ArrowRight
                                size={14}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </div>

                </div>

                {/* ================= FEATURE CARDS (COMPACT & OPTIMIZED) ================= */}
                <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                key={feature.number}
                                className="
                                    group relative overflow-hidden
                                    rounded-xl border border-slate-200/80
                                    bg-white p-4.5 shadow-sm
                                    transition-all duration-300
                                    hover:-translate-y-1 hover:border-blue-300
                                    hover:shadow-md hover:shadow-blue-500/5
                                "
                            >
                                {/* Top Header: Icon & Number */}
                                <div className="flex items-center justify-between">
                                    <div
                                        className="
                                            flex h-9 w-9 items-center justify-center
                                            rounded-lg border border-blue-100
                                            bg-gradient-to-br from-blue-50 to-violet-50
                                            text-blue-600
                                            transition-all duration-300
                                            group-hover:from-blue-600 group-hover:to-violet-600
                                            group-hover:text-white
                                        "
                                    >
                                        <Icon size={18} />
                                    </div>

                                    <span className="text-[11px] font-extrabold tracking-wider text-slate-300 transition-colors group-hover:text-blue-300">
                                        {feature.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mt-3.5">
                                    <h3 className="text-[15px] font-bold tracking-tight text-slate-900">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-1.5 text-[12.5px] leading-snug text-slate-600">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300 group-hover:w-full" />
                            </article>
                        );
                    })}
                </div>

                {/* ================= BOTTOM PANEL (COMPACT) ================= */}
                <div className="mt-4 flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm md:flex-row md:items-center">

                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200/60">
                            <BadgeCheck size={18} />
                        </div>

                        <div>
                            <h3 className="text-[13.5px] font-bold text-slate-900">
                                Take time to review the details
                            </h3>
                            <p className="text-[12px] text-slate-500">
                                Offer availability, requirements and final terms are set by individual providers.
                            </p>
                        </div>
                    </div>

                    <div className="mt-3 shrink-0 pt-3 border-t border-slate-100 md:mt-0 md:pt-0 md:border-t-0">
                        <button
                            type="button"
                            onClick={scrollToOffers}
                            className="
                                group flex h-[38px] w-full items-center
                                justify-center gap-2 rounded-lg
                                bg-gradient-to-r from-blue-600 to-violet-600 px-4
                                text-[12px] font-bold text-white
                                shadow-sm transition-all duration-300
                                hover:from-blue-700 hover:to-violet-700
                                md:w-auto
                            "
                        >
                            Explore Offers
                            <ArrowRight
                                size={14}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;