import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileWarning } from "lucide-react";

const LegalPageLayout = ({ title, summary, updated, sections, children }) => (
  <main className="min-h-screen bg-[#f8faff]">
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-violet-100/60 blur-[120px]" />
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-5 py-12 sm:px-7 sm:py-16 lg:px-10">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition hover:text-violet-700"><ArrowLeft size={14} />Back to Home</Link>
        <div className="mt-7 max-w-[780px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-violet-700"><FileWarning size={13} />Draft for owner and legal review</span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-[46px]">{title}</h1>
          <p className="mt-4 max-w-[700px] text-sm leading-7 text-slate-500">{summary}</p>
          <p className="mt-4 text-[11px] font-semibold text-slate-400">Draft last updated: {updated}</p>
        </div>
      </div>
    </section>
    <section className="py-9 sm:py-14">
      <div className="mx-auto grid max-w-[1100px] items-start gap-6 px-5 sm:px-7 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8 lg:px-10">
        <details className="group rounded-[20px] border border-slate-200 bg-white shadow-sm lg:hidden">
          <summary className="cursor-pointer list-none px-4 py-3.5 text-sm font-bold text-slate-700 [&::-webkit-details-marker]:hidden">On this page <span className="float-right text-violet-600 transition group-open:rotate-180">⌄</span></summary>
          <div className="border-t border-slate-100 p-3"><SectionLinks sections={sections} /></div>
        </details>
        <aside className="sticky top-[100px] hidden self-start rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] lg:block">
          <h2 className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-slate-400">On this page</h2>
          <div className="mt-3"><SectionLinks sections={sections} /></div>
        </aside>
        <article className="min-w-0 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.04)]">
          <div className="border-b border-amber-200 bg-amber-50 px-5 py-4 text-xs leading-6 text-amber-950 sm:px-7">
            <strong>Owner review required before publication.</strong> Confirm actual data flows, vendors, business identity, contact channels and applicable legal requirements. Replace all review notes with verified details.
          </div>
          {children}
          {sections.map(({ id, icon: Icon, number, title: heading, content, reviewNote }, index) => (
            <section id={id} key={id} className={`scroll-mt-28 p-5 sm:p-8 ${index < sections.length - 1 ? "border-b border-slate-100" : ""}`}>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">{Icon && <Icon size={17} />}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3"><span className="text-[9px] font-extrabold tracking-[0.15em] text-violet-500">{number || String(index + 1).padStart(2,"0")}</span><h2 className="text-base font-extrabold text-slate-950 sm:text-lg">{heading}</h2></div>
                  <div className="mt-4 space-y-4 text-[13px] leading-7 text-slate-600 [&_ul]:ml-5 [&_ul]:list-disc [&_li]:mb-2">{content}</div>
                  {reviewNote && <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-[11px] font-semibold leading-5 text-amber-900">Owner review: {reviewNote}</p>}
                </div>
              </div>
            </section>
          ))}
        </article>
      </div>
    </section>
  </main>
);
const SectionLinks = ({ sections }) => <nav aria-label="On this page" className="flex max-h-[min(65vh,620px)] flex-col gap-1 overflow-y-auto">{sections.map(section => <a key={section.id} href={`#${section.id}`} className="rounded-lg px-3 py-2 text-[11px] font-semibold text-slate-500 transition hover:bg-violet-50 hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500">{section.title}</a>)}</nav>;
export default LegalPageLayout;
