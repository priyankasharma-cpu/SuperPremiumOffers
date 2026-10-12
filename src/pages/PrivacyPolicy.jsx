import React from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    Database,
    ExternalLink,
    FileText,
    LockKeyhole,
    Scale,
    ShieldCheck,
} from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <main className="min-h-screen bg-[#f8faff]">
            {/* HERO */}
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
                            <ShieldCheck size={13} className="text-violet-600" />

                            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-violet-700">
                                Privacy & Information
                            </span>
                        </div>

                        <h1 className="text-[36px] font-extrabold tracking-[-0.04em] text-slate-950 sm:text-[46px]">
                            Privacy Policy
                        </h1>

                        <p className="mt-4 max-w-[650px] text-[14px] leading-7 text-slate-500">
                            This Privacy Policy explains how Super Premium Offers may
                            collect, use, and handle information when you interact with
                            this website.
                        </p>

                        <p className="mt-5 text-[11px] font-semibold text-slate-400">
                            Last updated: September 28, 2026
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
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
                                    ["overview", "Overview"],
                                    ["information", "Information"],
                                    ["usage", "How Information Is Used"],
                                    ["third-parties", "Third-Party Websites"],
                                    ["cookies", "Cookies"],
                                    ["security", "Data Security"],
                                    ["choices", "Your Choices"],
                                    ["children", "Children's Privacy"],
                                    ["changes", "Policy Changes"],
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

                    {/* POLICY */}
                    <article className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.04)]">

                        <LegalSection
                            id="overview"
                            icon={FileText}
                            number="01"
                            title="Overview"
                        >
                            <p>
                                Super Premium Offers provides information about offers that
                                may be available from third-party providers. This Privacy
                                Policy describes information practices associated with your
                                use of this website.
                            </p>

                            <p>
                                By using the website, you acknowledge the practices described
                                in this Privacy Policy.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="information"
                            icon={Database}
                            number="02"
                            title="Information We May Collect"
                        >
                            <p>
                                Depending on how you interact with the website, certain
                                technical information may be collected automatically,
                                including browser type, device information, referring pages,
                                pages visited, approximate location derived from technical
                                information, and similar usage data.
                            </p>

                            <p>
                                If the website provides a form or another feature where you
                                voluntarily submit information, the information you choose to
                                provide may also be processed for the purpose described at the
                                time of collection.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="usage"
                            icon={Scale}
                            number="03"
                            title="How Information May Be Used"
                        >
                            <p>Information may be used to:</p>

                            <ul>
                                <li>Operate and maintain the website.</li>
                                <li>Understand how visitors interact with website content.</li>
                                <li>Improve website functionality and user experience.</li>
                                <li>Detect technical, security, or operational issues.</li>
                                <li>
                                    Measure website and offer-related performance where
                                    applicable.
                                </li>
                            </ul>
                        </LegalSection>

                        <LegalSection
                            id="third-parties"
                            icon={ExternalLink}
                            number="04"
                            title="Third-Party Websites & Providers"
                        >
                            <p>
                                Super Premium Offers may contain links to third-party
                                websites, including offer providers. When you select an
                                external offer, you may leave Super Premium Offers and visit a
                                website operated independently by another company.
                            </p>

                            <p>
                                Third-party websites have their own privacy policies, terms,
                                data practices, and security procedures. Super Premium Offers
                                does not control those independent practices. Review the
                                provider's privacy policy and other disclosures before
                                submitting information.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="cookies"
                            icon={Database}
                            number="05"
                            title="Cookies & Similar Technologies"
                        >
                            <p>
                                The website may use cookies or similar technologies for
                                functionality, analytics, performance measurement, and other
                                website operations.
                            </p>

                            <p>
                                Your browser may allow you to control or disable cookies.
                                Disabling certain technologies may affect some website
                                functionality.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="security"
                            icon={LockKeyhole}
                            number="06"
                            title="Data Security"
                        >
                            <p>
                                Reasonable administrative and technical measures may be used
                                to help protect information handled through the website.
                                However, no method of internet transmission or electronic
                                storage can be guaranteed to be completely secure.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="choices"
                            icon={ShieldCheck}
                            number="07"
                            title="Your Choices"
                        >
                            <p>
                                Depending on applicable law and the information involved, you
                                may have certain rights or choices regarding personal
                                information. Browser settings may also provide controls for
                                cookies and similar technologies.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="children"
                            icon={ShieldCheck}
                            number="08"
                            title="Children's Privacy"
                        >
                            <p>
                                This website is not intended for children under 13, and we do
                                not knowingly seek to collect personal information from
                                children under 13 through this website.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="changes"
                            icon={FileText}
                            number="09"
                            title="Changes to This Privacy Policy"
                        >
                            <p>
                                This Privacy Policy may be updated periodically. When changes
                                are made, the updated version may be posted on this page with
                                a revised “Last updated” date.
                            </p>
                        </LegalSection>

                        <LegalSection
                            id="contact"
                            icon={FileText}
                            number="10"
                            title="Contact"
                            last
                        >
                            <p>
                                If you have questions about this Privacy Policy, use the
                                contact information provided by Super Premium Offers where
                                available.
                            </p>

                            <div className="mt-5 rounded-[16px] border border-violet-100 bg-violet-50/60 p-4">
                                <p className="text-[11px] font-bold text-violet-900">
                                    Super Premium Offers
                                </p>

                                <p className="mt-1 text-[10px] leading-5 text-violet-700">
                                    Add your verified business contact email and mailing
                                    information here before publishing if required.
                                </p>
                            </div>
                        </LegalSection>

                    </article>
                </div>
            </section>
        </main>
    );
};

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

export default PrivacyPolicy;