# Category Developer Guide

Current guide: [MANUAL_CATEGORY_CAMPAIGN_GUIDE.md](./MANUAL_CATEGORY_CAMPAIGN_GUIDE.md).

Campaigns now live as complete, manually editable JSX in `src/pages/categories/`.
The only category list is `src/data/offerCategories.js`; `src/components/OfferRenderer.jsx`
uses explicit imports and a switch. Home and All Offers reuse the same campaign JSX.

The old `src/data/offers.js`, `OfferCard`, `CampaignGrid`, and `offersPages` wrappers
have been removed after migration and reference checks. Use the current guide for
category/campaign edits, numbering, image imports, routes, and build commands.
