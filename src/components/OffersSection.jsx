import React from "react";

import {
    ArrowRight,
    BadgeCheck,
    CircleDollarSign,
    FileSearch,
    LayoutGrid,
    ShieldCheck,
    Sparkles,
    WalletCards,
} from "lucide-react";

import OfferRenderer from "./OfferRenderer";

const OffersSection = () => {
    const scrollToHowItWorks = () => {
        document.getElementById("how-it-works")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <section
            id="offers"
            className="
                relative
                scroll-mt-24
                overflow-hidden
                bg-[#f8faff]
                py-20
                sm:py-24
                lg:py-28
            "
        >
            {/* =====================================================
                PREMIUM ANIMATED BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* Dot Grid */}
                <div
                    className="
                        absolute inset-0
                        opacity-[0.30]
                        [background-image:radial-gradient(#c7d2fe_0.8px,transparent_0.8px)]
                        [background-size:25px_25px]
                    "
                />

                {/* Blue Glow */}
                <div
                    className="
                        absolute
                        -left-[250px]
                        top-[80px]
                        h-[550px]
                        w-[550px]
                        animate-pulse
                        rounded-full
                        bg-blue-300/25
                        blur-[150px]
                        [animation-duration:7s]
                    "
                />

                {/* Violet Glow */}
                <div
                    className="
                        absolute
                        -right-[220px]
                        top-[180px]
                        h-[600px]
                        w-[600px]
                        animate-pulse
                        rounded-full
                        bg-violet-300/20
                        blur-[160px]
                        [animation-duration:9s]
                    "
                />

                {/* Center Indigo Glow */}
                <div
                    className="
                        absolute
                        left-1/2
                        top-[450px]
                        h-[400px]
                        w-[600px]
                        -translate-x-1/2
                        rounded-full
                        bg-indigo-200/15
                        blur-[150px]
                    "
                />

                {/* Decorative Offers Icon */}
                <div
                    className="
                        absolute
                        left-[4%]
                        top-[130px]
                        hidden
                        h-16
                        w-16
                        rotate-[-12deg]
                        items-center
                        justify-center
                        rounded-[20px]
                        border
                        border-white
                        bg-white/50
                        text-blue-600
                        shadow-lg
                        backdrop-blur-xl
                        lg:flex
                        animate-[floatOffer_7s_ease-in-out_infinite]
                    "
                >
                    <CircleDollarSign size={27} />
                </div>

                {/* Decorative Trust Icon */}
                <div
                    className="
                        absolute
                        right-[5%]
                        top-[180px]
                        hidden
                        h-16
                        w-16
                        rotate-[10deg]
                        items-center
                        justify-center
                        rounded-[20px]
                        border
                        border-white
                        bg-white/55
                        text-violet-600
                        shadow-lg
                        backdrop-blur-xl
                        lg:flex
                        animate-[floatOffer_8s_ease-in-out_infinite]
                    "
                >
                    <ShieldCheck size={27} />
                </div>
            </div>

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <div
                className="
                    relative
                    mx-auto
                    max-w-[1420px]
                    px-5
                    sm:px-7
                    lg:px-10
                "
            >
                {/* =================================================
                    SECTION HEADER
                ================================================== */}

                <div className="mx-auto max-w-[780px] text-center">

                    {/* Eyebrow */}
                    <div
                        className="
                            mx-auto
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-blue-200/80
                            bg-white/75
                            px-4
                            py-2
                            shadow-[0_8px_30px_rgba(37,99,235,0.08)]
                            backdrop-blur-xl
                        "
                    >
                        <Sparkles
                            size={14}
                            className="text-blue-600"
                        />

                        <span
                            className="
                                text-[11px]
                                font-extrabold
                                uppercase
                                tracking-[0.16em]
                                text-blue-700
                            "
                        >
                            FEATURED PREMIUM OFFERS
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="
                            mt-5
                            text-[36px]
                            font-black
                            leading-[1.08]
                            tracking-[-0.045em]
                            text-[#07152e]
                            sm:text-[44px]
                            lg:text-[52px]
                        "
                    >
                        Explore Our{" "}

                        <span
                            className="
                                bg-gradient-to-r
                                from-blue-600
                                via-indigo-600
                                to-violet-600
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Premium Offers
                        </span>
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-[650px]
                            text-[15px]
                            font-medium
                            leading-7
                            text-slate-500
                            sm:text-[16px]
                        "
                    >
                        Discover offers across multiple categories, compare important details and explore options from participating providers.
                    </p>
                </div>

                {/* =================================================
                    TRUST / FEATURE STRIP
                ================================================== */}

                <div
                    className="
                        mx-auto
                        mt-11
                        grid
                        max-w-[1050px]
                        grid-cols-1
                        gap-2
                        rounded-[22px]
                        border
                        border-white
                        bg-white/65
                        p-2
                        shadow-[0_15px_50px_rgba(15,23,42,0.06)]
                        backdrop-blur-xl
                        sm:grid-cols-3
                    "
                >
                    <FeatureItem
                        icon={LayoutGrid}
                        title="Multiple Options"
                        text="Explore in one place"
                    />

                    <FeatureItem
                        icon={FileSearch}
                        title="Easy Comparison"
                        text="Review key details"
                    />

                    <FeatureItem
                        icon={ShieldCheck}
                        title="Provider Information"
                        text="Review final terms"
                    />
                </div>

                {/* =================================================
                    OFFER CARDS
                    MOBILE  = 1
                    TABLET  = 2
                    DESKTOP = 2
                ================================================== */}

                <div
                    className="
                        mx-auto
                        mt-12
                        grid
                        max-w-[1180px]
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-2
                        lg:gap-7
                    "
                >
                    <OfferRenderer />
                </div>

                {/* =================================================
                    BOTTOM HELP PANEL
                ================================================== */}

                <div
                    className="
                        relative
                        mx-auto
                        mt-12
                        max-w-[1180px]
                        overflow-hidden
                        rounded-[25px]
                        border
                        border-blue-100
                        bg-white/75
                        px-6
                        py-6
                        shadow-[0_15px_50px_rgba(15,23,42,0.06)]
                        backdrop-blur-xl
                        sm:px-8
                    "
                >
                    {/* Glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-16
                            -top-20
                            h-52
                            w-52
                            rounded-full
                            bg-gradient-to-br
                            from-blue-300/30
                            to-violet-300/30
                            blur-[60px]
                        "
                    />

                    <div
                        className="
                            relative
                            flex
                            flex-col
                            gap-6
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >
                        {/* Left */}
                        <div className="flex items-start gap-4">

                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-[15px]
                                    bg-gradient-to-br
                                    from-blue-600
                                    to-indigo-600
                                    text-white
                                    shadow-[0_10px_25px_rgba(37,99,235,0.25)]
                                "
                            >
                                <WalletCards size={21} />
                            </div>

                            <div>
                                <p
                                    className="
                                        text-[15px]
                                        font-extrabold
                                        text-[#07152e]
                                    "
                                >
                                    Not sure which option to explore?
                                </p>

                                <p
                                    className="
                                        mt-1
                                        max-w-[650px]
                                        text-[12px]
                                        leading-6
                                        text-slate-500
                                    "
                                >
                                    Compare the options above, then review the selected provider's details, disclosures and final terms before continuing.
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="button"
                            onClick={scrollToHowItWorks}
                            className="
                                group
                                inline-flex
                                h-[50px]
                                shrink-0
                                items-center
                                justify-center
                                gap-2
                                rounded-[14px]
                                bg-gradient-to-r
                                from-blue-600
                                via-indigo-600
                                to-violet-600
                                px-6
                                text-[12px]
                                font-extrabold
                                text-white
                                shadow-[0_10px_25px_rgba(79,70,229,0.20)]
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-[0_15px_35px_rgba(79,70,229,0.30)]
                            "
                        >
                            How It Works

                            <ArrowRight
                                size={15}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </button>
                    </div>
                </div>

                {/* =================================================
                    DISCLAIMER
                ================================================== */}

                <div
                    className="
                        mx-auto
                        mt-5
                        flex
                        max-w-[1000px]
                        items-start
                        justify-center
                        gap-2.5
                        text-center
                    "
                >
                    <BadgeCheck
                        size={15}
                        className="
                            mt-0.5
                            shrink-0
                            text-blue-600
                        "
                    />

                    <p
                        className="
                            text-[10.5px]
                            font-medium
                            leading-5
                            text-slate-400
                        "
                    >
                        Offer availability and final terms are determined by individual
                        providers. Review provider information before
                        continuing.
                    </p>
                </div>
            </div>
        </section>
    );
};

/* =====================================================
    FEATURE ITEM
====================================================== */

const FeatureItem = ({
    icon: IconComponent,
    title,
    text,
}) => {
    return (
        <div
            className="
                group
                flex
                items-center
                gap-3
                rounded-[17px]
                px-4
                py-3.5
                transition-all
                duration-300
                hover:bg-gradient-to-r
                hover:from-blue-50
                hover:to-indigo-50/70
            "
        >
            {/* Icon */}
            <div
                className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-[13px]
                    bg-blue-50
                    text-blue-600
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:bg-blue-600
                    group-hover:text-white
                    group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.22)]
                "
            >
                {IconComponent && (
                    <IconComponent
                        size={17}
                        strokeWidth={2}
                    />
                )}
            </div>

            {/* Content */}
            <div>
                <p className="text-[12px] font-extrabold text-slate-900">
                    {title}
                </p>

                <p className="mt-0.5 text-[10.5px] font-medium text-slate-500">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default OffersSection;
