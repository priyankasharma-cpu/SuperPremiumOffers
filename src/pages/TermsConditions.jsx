import React from "react";
import { Link } from "react-router-dom";

import {
    AlertCircle,
    ArrowLeft,
    ExternalLink,
    FileText,
    Landmark,
    Scale,
    ShieldCheck,
    UserCheck,
} from "lucide-react";

const TermsConditions = () => {
    return (
        <main className="min-h-screen bg-[#f8faff]">

            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden border-b border-slate-200/70 bg-white">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-violet-100/60 blur-[120px]" />

                    <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[120px]" />
                </div>

                <div className="relative mx-auto max-w-[1100px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10">

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[12px] font-bold text-slate-500 transition hover:text-violet-700"
                    >
                        <ArrowLeft size={14} />
                        Back to Home
                    </Link>

                    <div className="mt-8 max-w-[720px]">

                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-2">
                            <Scale size={13} className="text-violet-600" />

                            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-violet-700">
                                Website Terms
                            </span>
                        </div>

                        <h1 className="text-[36px] font-extrabold tracking-[-0.04em] text-slate-950 sm:text-[46px]">
                            Terms & Conditions
                        </h1>

                        <p className="mt-4 max-w-[650px] text-[14px] leading-7 text-slate-500">
                            These Terms & Conditions describe the rules and conditions
                            applicable to your use of the Super Premium Offers website.
                        </p>

                        <p className="mt-5 text-[11px] font-semibold text-slate-400">
                            Last updated: September 28, 2026
                        </p>

                    </div>
                </div>
            </section>

            {/* ================= CONTENT ================= */}

            <section className="py-12 sm:py-16">

                <div className="mx-auto grid max-w-[1100px] gap-8 px-5 sm:px-7 lg:grid-cols-[260px_1fr] lg:px-10">

                    {/* SIDEBAR */}

                    <aside className="lg:sticky lg:top-[100px] lg:self-start">

                        <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">

                            <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                                On this page
                            </p>

                            <nav className="mt-4 flex flex-col gap-1">

                                {[
                                    ["acceptance", "Acceptance of Terms"],
                                    ["service", "Website Purpose"],
                                    ["lender", "Not a Lender"],
                                    ["third-party", "Third-Party Providers"],
                                    ["eligibility", "Eligibility & Offers"],
                                    ["responsibilities", "User Responsibilities"],
                                    ["intellectual-property", "Intellectual Property"],
                                    ["disclaimer", "Disclaimer"],
                                    ["liability", "Limitation of Liability"],
                                    ["changes", "Changes to Terms"],
                                    ["contact", "Contact"],
                                ].map(([id, label]) => (
                                    <a
                                        key={id}
                                        href={`#${id}`}
                                        className="rounded-lg px-3 py-2 text-[11px] font-semibold text-slate-500 transition hover:bg-violet-50 hover:text-violet-700"
                                    >
                                        {label}
                                    </a>
                                ))}

                            </nav>
                        </div>

                    </aside>

                    {/* MAIN LEGAL CONTENT */}

                    <article className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.04)]">

                        <LegalSection
                            id="acceptance"
                            icon={FileText}
                            number="01"
                            title="Acceptance of Terms"
                        >
                            <p>
                                By accessing or using Super Premium Offers, you agree to these
                                Terms & Conditions and any policies referenced within them.
                            </p>

                            <p>
                                If you do not agree with these terms, you should discontinue
                                use of the website.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="service"
                            icon={ShieldCheck}
                            number="02"
                            title="Website Purpose"
                        >
                            <p>
                                Super Premium Offers provides an online informational
                                experience that allows visitors to explore offers and access
                                information about third-party products or services.
                            </p>

                            <p>
                                Information displayed on this website is provided for general
                                informational purposes and should be reviewed together with
                                the applicable provider's complete terms and disclosures.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="lender"
                            icon={Landmark}
                            number="03"
                            title="Super Premium Offers Is Not a Lender"
                        >
                            <p>
                                Super Premium Offers is not a bank or lender and does not
                                itself make credit decisions, approve or deny applications,
                                determine eligibility, establish interest rates, or determine
                                loan terms.
                            </p>

                            <p>
                                Any application, qualification process, approval decision, or
                                financial agreement is handled by the applicable third-party
                                provider under its own terms and requirements.
                            </p>

                            <Notice>
                                Viewing or selecting an offer on this website does not
                                guarantee approval, funding, a particular rate, or specific
                                loan terms.
                            </Notice>
                        </LegalSection>

                        <LegalSection
                            id="third-party"
                            icon={ExternalLink}
                            number="04"
                            title="Third-Party Providers & Links"
                        >
                            <p>
                                The website may contain links to independently operated
                                third-party websites and service providers.
                            </p>

                            <p>
                                When you select an external link, you may leave Super Premium
                                Offers. Third-party providers control their own websites,
                                products, application processes, privacy practices, fees,
                                eligibility requirements, and terms.
                            </p>

                            <p>
                                You should carefully review the provider's terms, disclosures,
                                privacy policy, and other applicable information before
                                submitting information or entering into an agreement.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="eligibility"
                            icon={UserCheck}
                            number="05"
                            title="Eligibility, Availability & Offer Information"
                        >
                            <p>
                                Offers, amounts, rates, fees, eligibility requirements,
                                repayment periods, and availability may vary by provider and
                                by applicant.
                            </p>

                            <p>
                                Information shown on Super Premium Offers should not be
                                interpreted as a promise that a particular product, amount,
                                rate, or term will be available to you.
                            </p>

                            <p>
                                Final terms are determined and presented by the applicable
                                provider.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="responsibilities"
                            icon={UserCheck}
                            number="06"
                            title="User Responsibilities"
                        >
                            <p>
                                When using this website, you agree not to misuse the website,
                                interfere with its operation, attempt unauthorized access, or
                                use website content for unlawful purposes.
                            </p>

                            <p>
                                You are responsible for reviewing and understanding any
                                third-party terms before choosing to proceed with an offer or
                                service.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="intellectual-property"
                            icon={FileText}
                            number="07"
                            title="Intellectual Property"
                        >
                            <p>
                                Unless otherwise indicated, website design, branding,
                                graphics, text, and original website content are owned by or
                                licensed to Super Premium Offers and may be protected by
                                applicable intellectual property laws.
                            </p>

                            <p>
                                Third-party names, trademarks, logos, and product information
                                remain the property of their respective owners.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="disclaimer"
                            icon={AlertCircle}
                            number="08"
                            title="Disclaimer"
                        >
                            <p>
                                The website and its content are provided on an “as available”
                                basis. Information may change and may not always reflect every
                                term or condition applicable to a third-party offer.
                            </p>

                            <p>
                                You should rely on the applicable provider's current
                                disclosures and agreement for final product information.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="liability"
                            icon={Scale}
                            number="09"
                            title="Limitation of Liability"
                        >
                            <p>
                                To the extent permitted by applicable law, Super Premium
                                Offers will not be responsible for decisions, products,
                                services, terms, actions, or omissions of independent
                                third-party providers.
                            </p>

                            <p>
                                Nothing in these Terms is intended to exclude or limit
                                liability that cannot legally be excluded or limited.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="changes"
                            icon={FileText}
                            number="10"
                            title="Changes to These Terms"
                        >
                            <p>
                                These Terms & Conditions may be updated periodically. Changes
                                may be posted on this page along with an updated revision
                                date.
                            </p>

                            <p>
                                Continued use of the website after updated terms become
                                effective constitutes acceptance of the revised terms to the
                                extent permitted by applicable law.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="contact"
                            icon={FileText}
                            number="11"
                            title="Contact"
                            last
                        >
                            <p>
                                Questions regarding these Terms & Conditions may be directed
                                using the verified contact information provided by Super
                                Premium Offers.
                            </p>

                            <div className="mt-5 rounded-[16px] border border-violet-100 bg-violet-50/60 p-4">

                                <p className="text-[11px] font-bold text-violet-900">
                                    Super Premium Offers
                                </p>

                                <p className="mt-1 text-[10px] leading-5 text-violet-700">
                                    Add the verified business contact email and mailing
                                    information here before publishing if applicable.
                                </p>

                            </div>
                        </LegalSection>

                    </article>

                </div>
            </section>

        </main>
    );
};

/* =====================================
   REUSABLE LEGAL SECTION
===================================== */

const LegalSection = ({
    id,
    icon:
    number,
    title,
    children,
    last = false,
}) => {
    return (
        <section
            id={id}
            className={`scroll-mt-28 p-6 sm:p-8 ${!last ? "border-b border-slate-100" : ""
                }`}
        >
            <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    <Icon size={17} />
                </div>

                <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-3">

                        <span className="text-[9px] font-extrabold tracking-[0.15em] text-violet-500">
                            {number}
                        </span>

                        <h2 className="text-[17px] font-extrabold text-slate-950 sm:text-[19px]">
                            {title}
                        </h2>

                    </div>

                    <div
                        className="
              mt-4 space-y-4
              text-[12.5px] leading-[1.8]
              text-slate-600
              [&_ul]:ml-5
              [&_ul]:list-disc
              [&_li]:mb-2
            "
                    >
                        {children}
                    </div>

                </div>
            </div>
        </section>
    );
};

/* =====================================
   NOTICE BOX
===================================== */

const Notice = ({ children }) => {
    return (
        <div className="mt-5 flex items-start gap-3 rounded-[16px] border border-amber-200 bg-amber-50 p-4">

            <AlertCircle
                size={16}
                className="mt-0.5 shrink-0 text-amber-600"
            />

            <p className="text-[11px] font-semibold leading-5 text-amber-900">
                {children}
            </p>

        </div>
    );
};

export default TermsConditions;