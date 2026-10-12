import React from "react";

import {
    ArrowRight,
    BadgeCheck,
    CheckCircle2,
    ExternalLink,
    FileSearch,
    MousePointerClick,
    Search,
    ShieldCheck,
    Sparkles,
    WalletCards,
    Zap,
} from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Explore Offers",
        description:
            "Browse available premium offers across categories and explore options that interest you.",
        label: "Start exploring",
    },
    {
        number: "02",
        icon: FileSearch,
        title: "Review the Details",
        description:
            "Compare category-specific details and provider information to decide which options you want to learn more about.",
        label: "Compare options",
    },
    {
        number: "03",
        icon: MousePointerClick,
        title: "Select an Offer",
        description:
            "Choose an offer that interests you and continue to the provider's website for additional information.",
        label: "Choose an option",
    },
    {
        number: "04",
        icon: ExternalLink,
        title: "Continue With Provider",
        description:
            "Review the provider's eligibility requirements, terms, fees, disclosures, and application process.",
        label: "Provider website",
    },
];

const HowItWorks = () => {
    const scrollToOffers = () => {
        document.getElementById("offers")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <section
            id="how-it-works"
            className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-[#f7f9ff]
        py-20
        sm:py-24
        lg:py-28
      "
        >
            {/* =====================================================
          BACKGROUND
      ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* dotted pattern */}
                <div
                    className="
            absolute inset-0
            opacity-[0.32]
            [background-image:radial-gradient(#c7d2fe_0.8px,transparent_0.8px)]
            [background-size:27px_27px]
          "
                />

                {/* blue glow */}
                <div
                    className="
            absolute
            -left-[260px] top-[100px]
            h-[580px] w-[580px]
            rounded-full
            bg-blue-300/20
            blur-[150px]
          "
                />

                {/* violet glow */}
                <div
                    className="
            absolute
            -right-[260px] bottom-[30px]
            h-[620px] w-[620px]
            rounded-full
            bg-violet-300/20
            blur-[160px]
          "
                />

                {/* center indigo glow */}
                <div
                    className="
            absolute
            left-1/2 top-[380px]
            h-[420px] w-[700px]
            -translate-x-1/2
            rounded-full
            bg-indigo-200/15
            blur-[150px]
          "
                />

                {/* floating decoration 1 */}
                <div
                    className="
            absolute
            left-[5%] top-[170px]
            hidden
            h-16 w-16
            items-center justify-center
            rounded-[20px]
            border border-white/90
            bg-white/60
            text-blue-600
            shadow-[0_15px_45px_rgba(37,99,235,0.10)]
            backdrop-blur-xl
            lg:flex
            animate-[howFloat_7s_ease-in-out_infinite]
          "
                >
                    <WalletCards size={26} />
                </div>

                {/* floating decoration 2 */}
                <div
                    className="
            absolute
            right-[5%] top-[240px]
            hidden
            h-16 w-16
            items-center justify-center
            rounded-[20px]
            border border-white/90
            bg-white/60
            text-violet-600
            shadow-[0_15px_45px_rgba(124,58,237,0.10)]
            backdrop-blur-xl
            lg:flex
            animate-[howFloatReverse_8s_ease-in-out_infinite]
          "
                >
                    <ShieldCheck size={26} />
                </div>
            </div>

            {/* =====================================================
          MAIN CONTAINER
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
                {/* =====================================================
            HEADER
        ====================================================== */}

                <div className="mx-auto max-w-[800px] text-center">

                    {/* eyebrow */}

                    <div
                        className="
              mx-auto
              inline-flex
              items-center gap-2
              rounded-full
              border border-blue-200/80
              bg-white/80
              px-4 py-2
              shadow-[0_8px_30px_rgba(37,99,235,0.08)]
              backdrop-blur-xl
            "
                    >
                        <span
                            className="
                flex h-6 w-6
                items-center justify-center
                rounded-full
                bg-gradient-to-br
                from-blue-600
                to-indigo-600
                text-white
              "
                        >
                            <Sparkles size={11} />
                        </span>

                        <span
                            className="
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-blue-700
              "
                        >
                            Simple 4-Step Process
                        </span>
                    </div>

                    {/* title */}

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
                        How Super Premium Offers{" "}
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
                            works
                        </span>
                    </h2>

                    <p
                        className="
              mx-auto mt-5
              max-w-[650px]
              text-[15px]
              font-medium
              leading-7
              text-slate-500
              sm:text-[16px]
            "
                    >
                        A simple way to explore available options, compare important
                        information, and continue directly to the provider when you're
                        ready.
                    </p>

                    {/* mini trust row */}

                    <div
                        className="
              mt-6
              flex flex-wrap
              items-center
              justify-center
              gap-x-6 gap-y-3
            "
                    >
                        <MiniInfo text="Browse options" />
                        <MiniInfo text="Compare details" />
                        <MiniInfo text="Review provider terms" />
                    </div>
                </div>

                {/* =====================================================
            PROCESS
        ====================================================== */}

                <div className="relative mt-16 lg:mt-20">

                    {/* desktop connecting rail */}

                    <div
                        className="
              absolute
              left-[12%] right-[12%]
              top-[35px]
              hidden h-[3px]
              overflow-hidden
              rounded-full
              bg-slate-200/80
              lg:block
            "
                    >
                        <div
                            className="
                h-full w-full
                bg-gradient-to-r
                from-blue-500
                via-indigo-500
                to-violet-500
                opacity-70
              "
                        />

                        {/* animated shine */}

                        <div
                            className="
                absolute
                top-0
                h-full w-[120px]
                bg-gradient-to-r
                from-transparent
                via-white/90
                to-transparent
                animate-[processLine_4s_linear_infinite]
              "
                        />
                    </div>

                    {/* CARDS */}

                    <div
                        className="
              relative
              grid gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
                    >
                        {steps.map((step, index) => {
                            const StepIcon = step.icon;

                            return (
                                <article
                                    key={step.number}
                                    className="
                    group
                    relative
                    flex flex-col
                    items-center
                  "
                                >
                                    {/* =========================
                      NUMBER NODE
                  ========================== */}

                                    <div
                                        className="
                      relative z-20
                      flex h-[70px] w-[70px]
                      items-center justify-center
                      rounded-full
                      border-[7px]
                      border-[#f7f9ff]
                      bg-white
                      shadow-[0_10px_35px_rgba(15,23,42,0.12)]
                      transition-all
                      duration-500
                      group-hover:-translate-y-1
                    "
                                    >
                                        <div
                                            className="
                        flex h-full w-full
                        items-center justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-blue-600
                        via-indigo-600
                        to-violet-600
                        text-white
                        transition-all
                        duration-500
                        group-hover:scale-105
                        group-hover:shadow-[0_10px_30px_rgba(79,70,229,0.35)]
                      "
                                        >
                                            <span
                                                className="
                          text-[12px]
                          font-black
                          tracking-[0.08em]
                        "
                                            >
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* pulse ring */}

                                        <span
                                            className="
                        absolute inset-[5px]
                        -z-10
                        rounded-full
                        bg-blue-400/20
                        opacity-0
                        transition-all duration-500
                        group-hover:scale-[1.5]
                        group-hover:opacity-100
                      "
                                        />
                                    </div>

                                    {/* =========================
                      CARD
                  ========================== */}

                                    <div
                                        className="
                      relative
                      mt-6
                      flex min-h-[315px]
                      w-full flex-col
                      overflow-hidden
                      rounded-[26px]
                      border border-slate-200/80
                      bg-white/85
                      p-6
                      shadow-[0_12px_40px_rgba(15,23,42,0.055)]
                      backdrop-blur-xl
                      transition-all duration-500

                      hover:-translate-y-2
                      hover:border-blue-200
                      hover:shadow-[0_25px_60px_rgba(37,99,235,0.13)]
                    "
                                    >
                                        {/* top gradient */}

                                        <div
                                            className="
                        absolute inset-x-0 top-0
                        h-[3px]
                        origin-left
                        scale-x-0
                        bg-gradient-to-r
                        from-blue-600
                        via-indigo-600
                        to-violet-600
                        transition-transform
                        duration-500
                        group-hover:scale-x-100
                      "
                                        />

                                        {/* decorative glow */}

                                        <div
                                            className="
                        pointer-events-none
                        absolute
                        -right-16 -top-16
                        h-40 w-40
                        rounded-full
                        bg-blue-100/0
                        blur-[50px]
                        transition-all duration-500
                        group-hover:bg-indigo-200/60
                      "
                                        />

                                        {/* card top */}

                                        <div className="relative flex items-start justify-between">
                                            {/* icon */}

                                            <div
                                                className="
                          flex h-[52px] w-[52px]
                          items-center justify-center
                          rounded-[16px]
                          border border-blue-100
                          bg-gradient-to-br
                          from-blue-50
                          to-indigo-50
                          text-blue-600
                          shadow-sm
                          transition-all duration-500

                          group-hover:rotate-[-4deg]
                          group-hover:scale-110
                          group-hover:border-transparent
                          group-hover:bg-gradient-to-br
                          group-hover:from-blue-600
                          group-hover:to-indigo-600
                          group-hover:text-white
                          group-hover:shadow-[0_10px_25px_rgba(37,99,235,0.25)]
                        "
                                            >
                                                <StepIcon size={21} strokeWidth={2.2} />
                                            </div>

                                            <span
                                                className="
                          text-[11px]
                          font-black
                          text-slate-200
                          transition-colors duration-300
                          group-hover:text-blue-200
                        "
                                            >
                                                STEP {step.number}
                                            </span>
                                        </div>

                                        {/* content */}

                                        <div className="relative mt-6">
                                            <p
                                                className="
                          text-[10px]
                          font-extrabold
                          uppercase
                          tracking-[0.16em]
                          text-blue-600
                        "
                                            >
                                                {step.label}
                                            </p>

                                            <h3
                                                className="
                          mt-2.5
                          text-[20px]
                          font-black
                          tracking-[-0.025em]
                          text-[#07152e]
                        "
                                            >
                                                {step.title}
                                            </h3>

                                            <p
                                                className="
                          mt-3
                          text-[13px]
                          font-medium
                          leading-[1.75]
                          text-slate-500
                        "
                                            >
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* bottom */}

                                        <div
                                            className="
                        relative
                        mt-auto
                        flex items-center
                        justify-between
                        border-t border-slate-100
                        pt-5
                      "
                                        >
                                            <div
                                                className="
                          flex items-center gap-2
                          text-[10.5px]
                          font-bold
                          text-slate-500
                        "
                                            >
                                                <span
                                                    className="
                            flex h-5 w-5
                            items-center justify-center
                            rounded-full
                            bg-blue-50
                            text-blue-600
                          "
                                                >
                                                    <CheckCircle2 size={12} />
                                                </span>

                                                Step {index + 1} of {steps.length}
                                            </div>

                                            <ArrowRight
                                                size={15}
                                                className="
                          text-slate-300
                          transition-all duration-300
                          group-hover:translate-x-1
                          group-hover:text-blue-600
                        "
                                            />
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

                <div
                    className="
            relative
            mx-auto mt-14
            max-w-[1050px]
            overflow-hidden
            rounded-[28px]
            bg-[#07152e]
            shadow-[0_25px_70px_rgba(7,21,46,0.18)]
          "
                >
                    {/* background gradients */}

                    <div
                        className="
              pointer-events-none
              absolute
              -left-20 -top-24
              h-[260px] w-[260px]
              rounded-full
              bg-blue-600/30
              blur-[80px]
            "
                    />

                    <div
                        className="
              pointer-events-none
              absolute
              -bottom-28 right-0
              h-[300px] w-[300px]
              rounded-full
              bg-violet-600/30
              blur-[90px]
            "
                    />

                    {/* grid */}
                    <div
                        className="
              pointer-events-none
              absolute inset-0
              opacity-[0.08]
              [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
              [background-size:35px_35px]
            "
                    />

                    <div
                        className="
              relative
              flex flex-col
              gap-7
              p-7
              sm:p-8
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:p-10
            "
                    >
                        {/* left */}

                        <div className="flex items-start gap-4">
                            <div
                                className="
                  flex h-[54px] w-[54px]
                  shrink-0
                  items-center justify-center
                  rounded-[17px]
                  border border-white/15
                  bg-white/10
                  text-blue-300
                  backdrop-blur-xl
                "
                            >
                                <BadgeCheck size={23} />
                            </div>

                            <div>
                                <div
                                    className="
                    mb-2
                    inline-flex items-center gap-1.5
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.15em]
                    text-blue-300
                  "
                                >
                                    <Zap size={12} />

                                    Ready to Explore
                                </div>

                                <h3
                                    className="
                    text-[22px]
                    font-black
                    tracking-[-0.025em]
                    text-white
                    sm:text-[25px]
                  "
                                >
                                    Find an option worth exploring.
                                </h3>

                                <p
                                    className="
                    mt-2
                    max-w-[570px]
                    text-[12.5px]
                    font-medium
                    leading-6
                    text-slate-300
                  "
                                >
                                    Browse the available offers, compare important information,
                                    and review the provider's complete terms before proceeding.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}

                        <button
                            type="button"
                            onClick={scrollToOffers}
                            className="
                group relative
                flex h-[54px]
                w-full shrink-0
                items-center justify-center
                gap-2.5
                overflow-hidden
                rounded-[15px]
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-violet-600
                px-7
                text-[13px]
                font-extrabold
                text-white
                shadow-[0_12px_30px_rgba(37,99,235,0.30)]
                transition-all duration-300

                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(79,70,229,0.38)]

                lg:w-auto
              "
                        >
                            {/* shine */}

                            <span
                                className="
                  absolute
                  -left-14 top-[-30%]
                  h-[160%] w-9
                  rotate-[18deg]
                  bg-white/20
                  blur-sm
                  transition-all duration-700
                  group-hover:left-[120%]
                "
                            />

                            <span className="relative">
                                Explore Premium Offers
                            </span>

                            <ArrowRight
                                size={16}
                                className="
                  relative
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* =====================================================
   MINI INFO
====================================================== */

const MiniInfo = ({ text }) => {
    return (
        <div
            className="
        flex items-center gap-2
        text-[11px]
        font-bold
        text-slate-500
      "
        >
            <span
                className="
          flex h-5 w-5
          items-center justify-center
          rounded-full
          bg-blue-50
          text-blue-600
        "
            >
                <BadgeCheck size={12} />
            </span>

            {text}
        </div>
    );
};

export default HowItWorks;