import { TrendingUp, ChartNoAxesCombined, ShieldCheck, HeartPulse, House, Leaf, WalletCards } from "lucide-react";

// THE ONLY CATEGORY LIST: Navbar, sidebar, Footer, Hero and Offers share it.
// Keep the first three categories pinned; keep remaining entries alphabetical.
// Navigation automatically includes categories whose JSX contains a card.
// allOffersOrder preserves the separate Home / All Offers campaign order.
// New categories may omit allOffersOrder to appear after existing campaigns.
export const offerCategories = [
  { id: "building-your-credit-score", label: "Building Your Credit Score", slug: "building-your-credit-score", icon: TrendingUp, description: "Review programs designed to build your credit score.", allOffersOrder: 1 },
  { id: "credit-monitoring", label: "Credit Monitoring", slug: "credit-monitoring", icon: ChartNoAxesCombined, description: "Explore credit score, report and monitoring information from participating providers.", allOffersOrder: 3 },
  { id: "health-wellness", label: "Health & Wellness", slug: "health-wellness", icon: HeartPulse, description: "Explore health and wellness offers.", allOffersOrder: 2 },
  { id: "credit-repair", label: "Credit Repair", slug: "credit-repair", icon: ShieldCheck, description: "Review credit repair services and provider details." },
  { id: "health-insurance", label: "Health Insurance", slug: "health-insurance", icon: HeartPulse, description: "Explore health insurance options and coverage details." },
  { id: "mortgage-refinance", label: "Mortgage Refinance", slug: "mortgage-refinance", icon: House, description: "Review mortgage refinance options and provider terms." },
  { id: "nutraceuticals", label: "Nutraceuticals", slug: "nutraceuticals", icon: Leaf, description: "Review product information and provider details for nutraceuticals." },
  { id: "personal-loans", label: "Personal Loans", slug: "personal-loans", icon: WalletCards, description: "Compare available loan options and review eligibility, rates, fees and lender terms.", allOffersOrder: 0 },
];

export const getOfferCategory = slug => offerCategories.find(category => category.slug === slug);
