import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, LayoutGrid, Sparkles } from "lucide-react";
import { availableOfferCategories, getOfferCategory } from "../data/offerCategories";

// Both sidebar and mobile selector read the same enabled, populated categories.
const CategoryLinks = ({ onSelect }) => (
  <nav aria-label="Offer categories" className="category-scroll max-h-[min(440px,calc(100dvh-250px))] space-y-1.5 overflow-y-auto overscroll-contain p-2">
    <NavLink end to="/offers" onClick={onSelect} className={({ isActive }) => categoryLinkClass(isActive)}>
      <LayoutGrid size={19} className="shrink-0" /><span className="flex-1">All Offers</span><ChevronRight size={16} />
    </NavLink>
    {availableOfferCategories.map(category => {
      const Icon = category.icon;
      return (
        <NavLink end key={category.id} to={`/offers/${category.slug}`} onClick={onSelect} className={({ isActive }) => categoryLinkClass(isActive)}>
          <Icon size={19} className="shrink-0" /><span className="min-w-0 flex-1">{category.label}</span><ChevronRight size={16} className="shrink-0 transition-transform group-hover:translate-x-0.5" />
        </NavLink>
      );
    })}
  </nav>
);
const categoryLinkClass = active => `group flex min-h-12 items-center gap-3 rounded-[14px] px-3.5 py-3 text-sm font-bold transition-all duration-300 ${active ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-blue-500/20" : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"}`;

const CategoryNavigation = () => {
  const location = useLocation();
  const category = getOfferCategory(location.pathname.split("/")[2]);
  const closePanel = event => event.currentTarget.closest("details")?.removeAttribute("open");
  return (
    <>
      <aside aria-label="Category sidebar" className="sticky top-[106px] hidden self-start rounded-[24px] border border-blue-100/90 bg-white p-3 shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:block">
        <div className="mb-2 flex items-center gap-2 border-b border-blue-100 px-3 py-4">
          <Sparkles size={17} className="text-blue-600" /><h2 className="text-sm font-extrabold text-[#0B1F3A]">Offer Categories</h2>
        </div>
        <CategoryLinks />
      </aside>
      {/* Native details supplies keyboard/touch expansion without a second selected-category state. */}
      <details key={location.pathname} className="group rounded-[20px] border border-blue-100 bg-white shadow-sm lg:hidden">
        <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-3 rounded-[20px] px-5 py-4 text-sm font-bold text-slate-700 [&::-webkit-details-marker]:hidden">
          <span><span className="block text-[10px] uppercase tracking-wider text-blue-600">Offer Categories</span><span className="mt-1 block">{category?.label || (location.pathname === "/offers" ? "All Offers" : "Choose a category")}</span></span>
          <ChevronDown size={19} className="shrink-0 text-blue-600 transition-transform group-open:rotate-180" />
        </summary>
        <div className="border-t border-blue-100 p-2"><CategoryLinks onSelect={closePanel} /></div>
      </details>
    </>
  );
};
export default CategoryNavigation;
