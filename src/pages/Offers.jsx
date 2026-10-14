import React from "react";
import { Link, useParams } from "react-router-dom";
import { getOfferCategory } from "../data/offerCategories";
import CategoryNavigation from "../components/CategoryNavigation";
import OfferRenderer, { availableOfferCategories } from "../components/OfferRenderer";

const Offers = () => {
  // The URL is the only selected-category state: refresh and history work automatically.
  const { category: slug } = useParams();
  const category = getOfferCategory(slug);
  const hasOffers = slug ? availableOfferCategories.some(item => item.slug === slug) : availableOfferCategories.length > 0;
  const Icon = category?.icon;
  return (
    <main className="min-h-[60vh] bg-gradient-to-br from-slate-50 via-white to-violet-50/40 py-6 sm:py-8">
      <div className="mx-auto grid max-w-[1440px] items-start gap-7 px-5 sm:px-7 lg:grid-cols-[272px_minmax(0,1fr)] lg:gap-8 lg:px-8">
        <CategoryNavigation />
        <section className="min-w-0" aria-labelledby="offers-heading">
          <div className="mb-7 flex items-start gap-4">
            {Icon && <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br from-blue-50 to-violet-100 text-blue-600 sm:flex"><Icon size={22} /></div>}
            <div>
              <h1 id="offers-heading" className="text-2xl font-extrabold tracking-tight text-[#0B1F3A] md:text-3xl">{category?.label || (slug ? "Category not found" : "All Offers")}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">{category?.description || (slug ? "This category URL is not recognized. Choose an available category to explore published offers." : "Discover offers across multiple categories, compare important details and explore options from participating providers.")}</p>
            </div>
          </div>
          {category || !slug ? (
            hasOffers ? (
              <div data-campaign-grid className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
                <OfferRenderer selected={slug} />
              </div>
            ) : <OfferRenderer selected={slug} />
          ) : <Link to="/offers" className="inline-flex rounded-xl bg-blue-600 px-5 py-3 font-bold text-white">Explore Premium Offers</Link>}
        </section>
      </div>
    </main>
  );
};
export default Offers;
