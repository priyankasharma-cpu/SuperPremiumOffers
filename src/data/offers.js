import badCreditImage from "../images/unnamed.png";
import instantCashImage from "../images/redcard.png";
import emergencyLoanImage from "../images/MO.png";

// Optional approved creative: src/images/transunion-credit-essentials.png
// Prefer full approved creative; the supplied local logo is the current fallback.
const transunion = import.meta.glob(["../images/transunion-credit-essentials.png", "../images/trans.jpeg"], { eager: true, query: "?url", import: "default" });

export const offers = [
    {
        id: 1,
        status: "published",
        title: "Lending For Bad Credit",
        categoryId: "personal-loans",
        disclaimer: "Review eligibility, rates, fees and provider terms before continuing.",
        amount: "$100 – $40,000",
        description:
            "Submit a loan request through an online marketplace that connects consumers with participating lenders and lending partners. Loan availability and terms vary.",
        badge: "Featured",
        image: badCreditImage,
        link: "https://www.lendingforbadcredit.com/",
    },

    {
        id: 2,
        status: "published",
        title: "RedArrowLoans",
        categoryId: "personal-loans",
        disclaimer: "Review eligibility, rates, fees and provider terms before continuing.",
        amount: "$500 – $35,000",
        description:
            "Connect with lenders through RedArrowLoans' online network and review available loan options. Approval, rates, amounts and terms are determined by the lender.",
        badge: null,
        subtype: "Loan Marketplace",
        image: instantCashImage,
        link: "https://www.redarrowloans.com/",
    },

    {
        id: 3,
        status: "published",
        title: "MoneyMutual",
        categoryId: "personal-loans",
        disclaimer: "Review eligibility, rates, fees and provider terms before continuing.",
        amount: "Up to $5,000",
        description:
            "Connect with participating lenders through MoneyMutual's online marketplace and review available loan options and terms before accepting an offer.",
        badge: null,
        subtype: "Short-Term Loans",
        image: emergencyLoanImage,
        link: "https://moneymutual.com/",
    },
    {
        id: "transunion",
        status: "published",
        title: "TransUnion",
        categoryId: "credit-monitoring",
        image: transunion["../images/transunion-credit-essentials.png"] || transunion["../images/trans.jpeg"] || null,
        imageAlt: "TransUnion",
        description: "Get your FREE credit score, report and monitoring. Free from TransUnion®. No credit card payment required. Personalized credit card offers with CardMatch™ by Bankrate. Free credit alerts - sent anytime there's a critical change.",
        link: "https://www.transunion.com/credit-scores-reports/credit-essentials",
        buttonText: "Learn More",
    },
];
// Draft or disabled campaigns remain in the data, but never appear as live offers.
export const publishedOffers = offers.filter(offer => offer.status === "published");
