import React from "react";
import PersonalLoans from "../pages/offersPages/PersonalLoans";
import CreditMonitoring from "../pages/offersPages/CreditMonitoring";
import CampaignGrid from "./CampaignGrid";
import { availableOffers, getCategoryOffers, getOfferCategory } from "../data/offerCategories";

// Optional custom layouts only. New standard categories use CampaignGrid automatically.
const customRenderers = { "personal-loans": PersonalLoans, "credit-monitoring": CreditMonitoring };
const OfferRenderer = ({ selected }) => {
  const category = getOfferCategory(selected);
  const campaignOffers = selected ? (category ? getCategoryOffers(category.id) : []) : availableOffers;
  if (!campaignOffers.length) {
    return (
      <div className="rounded-[26px] border border-blue-100 bg-white px-6 py-12 text-center shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">No offers currently available</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">There are currently no published campaigns {selected ? "in this category" : "available"}. Explore the available categories in Offer Categories.</p>
      </div>
    );
  }
  const CategoryPage = category && customRenderers[category.id];
  return CategoryPage ? <CategoryPage /> : <CampaignGrid offers={campaignOffers} />;
};
export default OfferRenderer;
