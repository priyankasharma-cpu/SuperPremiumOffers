import React from "react";
import PersonalLoans from "../pages/categories/PersonalLoans";
import CreditMonitoring from "../pages/categories/CreditMonitoring";
import HealthWellness from "../pages/categories/HealthWellness";
import BuildingYourCreditScore from "../pages/categories/BuildingYourCreditScore";
import CreditRepair from "../pages/categories/CreditRepair";
import HealthInsurance from "../pages/categories/HealthInsurance";
import MortgageRefinance from "../pages/categories/MortgageRefinance";
import Nutraceuticals from "../pages/categories/Nutraceuticals";
import { offerCategories } from "../data/offerCategories";

// NEW CATEGORY: import its JSX file above and add its URL slug below.
function renderCategory(selected, numberOffset = 0) {
  switch (selected) {
    case "building-your-credit-score":
      return <BuildingYourCreditScore numberOffset={numberOffset} />;
    case "credit-monitoring":
      return <CreditMonitoring numberOffset={numberOffset} />;
    case "health-wellness":
      return <HealthWellness numberOffset={numberOffset} />;
    case "credit-repair":
      return <CreditRepair numberOffset={numberOffset} />;
    case "health-insurance":
      return <HealthInsurance numberOffset={numberOffset} />;
    case "mortgage-refinance":
      return <MortgageRefinance numberOffset={numberOffset} />;
    case "nutraceuticals":
      return <Nutraceuticals numberOffset={numberOffset} />;
    case "personal-loans":
      return <PersonalLoans numberOffset={numberOffset} />;
    default:
      return null;
  }
}

// Category pages are pure JSX functions returning a fragment of complete cards.
// Read that fragment to count cards without a registry or manual global counts.
// Stateful custom UI can be used as child components inside a card.
function categoryContent(slug, numberOffset = 0) {
  const page = renderCategory(slug, numberOffset);
  return page ? page.type(page.props) : null;
}

function cardCount(content) {
  return React.Children.toArray(content?.props.children).length;
}

// Derived from the one category list and actual JSX; never edited separately.
// eslint-disable-next-line react-refresh/only-export-components -- Shared navigation availability belongs with this renderer.
export const availableOfferCategories = offerCategories.filter(category =>
  cardCount(categoryContent(category.slug)) > 0
);

const OfferRenderer = ({ selected }) => {
  if (selected) {
    const content = categoryContent(selected);
    if (cardCount(content)) return content;
  } else {
    // Home / All Offers share these exact cards and their original campaign order.
    // Counts update automatically when a category JSX card is added or removed.
    let numberOffset = 0;
    const categories = [...availableOfferCategories].sort((a, b) =>
      (a.allOffersOrder ?? Number.MAX_SAFE_INTEGER) - (b.allOffersOrder ?? Number.MAX_SAFE_INTEGER)
    );
    if (categories.length) {
      return <>{categories.map(category => {
        const content = categoryContent(category.slug, numberOffset);
        numberOffset += cardCount(content);
        return <React.Fragment key={category.slug}>{content}</React.Fragment>;
      })}</>;
    }
  }

  return (
    <div className="rounded-[26px] border border-blue-100 bg-white px-6 py-12 text-center shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">No offers currently available</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">There are currently no published campaigns {selected ? "in this category" : "available"}. Explore the available categories in Offer Categories.</p>
    </div>
  );
};

export default OfferRenderer;
