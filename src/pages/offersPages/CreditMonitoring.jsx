import React from "react";
import CampaignGrid from "../../components/CampaignGrid";
import { getCategoryOffers } from "../../data/offerCategories";

// Kept as an extension point for category-specific content.
const CreditMonitoring = () => <CampaignGrid offers={getCategoryOffers("credit-monitoring")} />;
export default CreditMonitoring;
