import React from "react";
import CampaignGrid from "../../components/CampaignGrid";
import { getCategoryOffers } from "../../data/offerCategories";

// Kept as an extension point for category-specific content.
const PersonalLoans = () => <CampaignGrid offers={getCategoryOffers("personal-loans")} />;
export default PersonalLoans;
