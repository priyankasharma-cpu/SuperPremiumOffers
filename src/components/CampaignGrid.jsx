import React from "react";
import OfferCard from "./OfferCard";

// One layout for all category pages: never more than two desktop columns.
const CampaignGrid = ({ offers }) => (
  <div data-campaign-grid className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
    {offers.map((offer, index) => <OfferCard key={offer.id} offer={offer} index={index} />)}
  </div>
);
export default CampaignGrid;
