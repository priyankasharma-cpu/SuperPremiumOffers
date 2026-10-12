
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  BadgeCheck,
  ChevronRight,
  FileText,
  ShieldCheck,
  Sparkles,
  LayoutGrid,
  Mail,
  LockKeyhole,
  ExternalLink,
} from "lucide-react";

import logo from "../images/weblogo.png";

// Update this list when new categories become available.
// Ideally, import from your shared offerCategories configuration.
const footerCategories = [
  { label: "Credit Monitoring", slug: "credit-monitoring" },
  { label: "Personal Loans", slug: "personal-loans" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const goToSection = (sectionId) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const sectionId = decodeURIComponent(location.hash.slice(1));
    const frame = requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sectionLinkClass =
    "group flex w-fit items-center gap-2 text-[13px] font-medium text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white";

  return (
    <footer className="relative isolate overflow-hidden bg-[#070D1B] text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute -right-40 top-20 h-[460px] w-[460px] rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-indigo-600/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">

        {/* ================= TOP CTA STRIP ================= */}
        <div className="relative -mt-px border-b border-white/[0.08] py-9 sm:py-11">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300">
                <Sparkles size={23} />
              </div>

              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-400">
                  Explore More Opportunities
                </p>
                <h2 className="mt-1.5 text-[23px] font-black tracking-tight text-white sm:text-[29px]">
                  Find offers worth exploring.
                </h2>
                <p className="mt-2 max-w-[580px] text-[13px] leading-6 text-slate-400">
                  Browse available categories, compare key details, and learn more directly from participating providers.
                </p>
              </div>
            </div>

            <Link
              to="/offers"
              className="group inline-flex h-[52px] shrink-0 items-center justify-center gap-3 self-start rounded-[15px] bg-gradient-to-r from-[#1769FF] via-[#4D4CFF] to-[#7828F7] px-6 text-[13px] font-extrabold text-white shadow-[0_12px_30px_rgba(79,70,229,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(79,70,229,0.4)]"
            >
              Explore Premium Offers
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.4fr_0.75fr_0.9fr_0.65fr_1.25fr] lg:gap-8 lg:py-20">

          {/* BRAND */}
          <div className="max-w-[350px]">
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-flex items-center rounded-2xl border border-white/10 bg-white px-4 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-[1.025]"
            >
              <img
                src={logo}
                alt="Super Premium Offers"
                className="h-[62px] w-auto max-w-[230px] object-contain"
              />
            </Link>

            <p className="mt-6 text-[13px] leading-[1.9] text-slate-400">
              Your destination for exploring premium offers across multiple categories. Review available options and connect directly with participating providers.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/[0.07] px-3 py-2 text-[10px] font-bold text-blue-200">
                <LayoutGrid size={13} />
                Multiple Categories
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/[0.07] px-3 py-2 text-[10px] font-bold text-violet-200">
                <ShieldCheck size={13} />
                Review Provider Terms
              </span>
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <div className="mb-6">
              <h3 className="text-[13px] font-extrabold text-white">
                Explore
              </h3>
              <div className="mt-3 h-[3px] w-9 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: "Premium Offers", id: "offers" },
                { label: "Why Choose Us", id: "why-us" },
                { label: "How It Works", id: "how-it-works" },
                { label: "About Us", id: "about" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className={sectionLinkClass}
                >
                  <ChevronRight size={14} className="text-blue-400/70" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* OFFER CATEGORIES */}
          <div>
            <div className="mb-6">
              <h3 className="text-[13px] font-extrabold text-white">
                Offer Categories
              </h3>
              <div className="mt-3 h-[3px] w-9 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
            </div>

            <div className="flex flex-col gap-4">
              <Link to="/offers" className={sectionLinkClass}>
                <ChevronRight size={14} className="text-blue-400/70" />
                All Offers
              </Link>

              {footerCategories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/offers/${category.slug}`}
                  className={sectionLinkClass}
                >
                  <ChevronRight size={14} className="text-blue-400/70" />
                  {category.label}
                </Link>
              ))}
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <div className="mb-6">
              <h3 className="text-[13px] font-extrabold text-white">
                Legal
              </h3>
              <div className="mt-3 h-[3px] w-9 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
            </div>

            <div className="flex flex-col gap-4">
              <Link to="/privacy" className={sectionLinkClass}>
                <ChevronRight size={14} className="text-blue-400/70" />
                Privacy Policy
              </Link>

              <Link to="/terms" className={sectionLinkClass}>
                <ChevronRight size={14} className="text-blue-400/70" />
                Terms & Conditions
              </Link>

              <Link to="/contact" className={sectionLinkClass}>
                <ChevronRight size={14} className="text-blue-400/70" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* IMPORTANT INFORMATION */}
          <div>
            <div className="group relative overflow-hidden rounded-[22px] border border-white/[0.09] bg-white/[0.035] p-5 shadow-[0_15px_45px_rgba(0,0,0,0.1)] transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.055]">

              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/10 text-blue-300">
                  <FileText size={19} />
                </div>

                <h3 className="text-[13px] font-extrabold text-white">
                  Important Information
                </h3>
              </div>

              <p className="relative mt-5 text-[12px] leading-[1.85] text-slate-400">
                Super Premium Offers is an informational website. We do not determine provider eligibility, availability or final terms.
              </p>

              <div className="my-4 h-px bg-white/[0.07]" />

              <p className="relative text-[12px] leading-[1.85] text-slate-400">
                Offer details and availability may vary. Review the provider's complete terms and disclosures before proceeding.
              </p>

              <Link
                to="/terms"
                className="group/link relative mt-5 inline-flex items-center gap-2 text-[11px] font-bold text-blue-300 transition hover:text-white"
              >
                Read Our Terms
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* ================= DISCLAIMER ================= */}
        <div className="border-t border-white/[0.08] py-7">
          <div className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 sm:p-5">
            <ShieldCheck
              size={18}
              className="mt-0.5 shrink-0 text-blue-300"
            />

            <p className="text-[11px] leading-[1.9] text-slate-400">
              <span className="font-bold text-slate-300">
                Third-Party Provider Disclosure:
              </span>{" "}
              Super Premium Offers may feature links to third-party providers.
              If you choose to visit a provider, you will leave this website
              and become subject to that provider's terms, privacy policy,
              eligibility requirements, and other applicable disclosures.
              Inclusion of an offer does not guarantee approval or specific
              terms.
            </p>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col gap-5 border-t border-white/[0.08] py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[11px] text-slate-500">
            © {currentYear}{" "}
            <span className="font-semibold text-slate-300">
              Super Premium Offers.
            </span>{" "}
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/privacy"
              className="text-[11px] font-semibold text-slate-400 transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="text-[11px] font-semibold text-slate-400 transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="text-[11px] font-semibold text-slate-400 transition hover:text-white"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="group flex h-11 w-11 items-center justify-center rounded-[13px] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-600 hover:text-white hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)]"
            >
              <ArrowUp
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
