import { TrendingUp, ChartNoAxesCombined, ShieldCheck, HeartPulse, House, Leaf, WalletCards } from "lucide-react";

import { publishedOffers } from "./offers";

// Generic categories need only approved campaign data, not a new page or route.
export const offerCategories = [
  { id: "building-your-credit-score", label: "Building Your Credit Score", slug: "building-your-credit-score", icon: TrendingUp, description: "Review programs designed to build your credit score.", status: "available", priority: 0 },
  { id: "credit-monitoring", label: "Credit Monitoring", slug: "credit-monitoring", icon: ChartNoAxesCombined, description: "Explore credit score, report and monitoring information from participating providers.", status: "available" },
  { id: "credit-repair", label: "Credit Repair", slug: "credit-repair", icon: ShieldCheck, description: "Review credit repair services and provider details.", status: "unavailable" },
  { id: "health-insurance", label: "Health Insurance", slug: "health-insurance", icon: HeartPulse, description: "Explore health insurance options and coverage details.", status: "unavailable" },
  { id: "mortgage-refinance", label: "Mortgage Refinance", slug: "mortgage-refinance", icon: House, description: "Review mortgage refinance options and provider terms.", status: "unavailable" },
  { id: "nutraceuticals", label: "Nutraceuticals", slug: "nutraceuticals", icon: Leaf, description: "Review product information and provider details for nutraceuticals.", status: "unavailable" },
  { id: "personal-loans", label: "Personal Loans", slug: "personal-loans", icon: WalletCards, description: "Compare available loan options and review eligibility, rates, fees and lender terms.", status: "available" },
].sort((a, b) => (a.priority ?? Number.MAX_SAFE_INTEGER) - (b.priority ?? Number.MAX_SAFE_INTEGER) || a.label.localeCompare(b.label));

// A category is visible only when enabled AND backed by a published campaign.
export const availableOfferCategories = offerCategories.filter(category =>
  category.status === "available" && publishedOffers.some(offer => offer.categoryId === category.id)
);
export const availableOffers = publishedOffers.filter(offer =>
  availableOfferCategories.some(category => category.id === offer.categoryId)
);
export const getCategoryOffers = categoryId => availableOffers.filter(offer => offer.categoryId === categoryId);
export const getOfferCategory = slug => offerCategories.find(category => category.slug === slug);
