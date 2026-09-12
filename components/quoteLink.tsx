/* The GoHighLevel quote survey. Every "get a quote" call to action on the site
   points here, so leads land in the CRM as a Contact and an Opportunity
   instead of being drafted into a text the customer has to send themselves.

   Deliberately a link out, not the embed snippet GHL supplies. The survey
   collects a phone number and an SMS consent checkbox; iframing it would place
   that form on pages carrying the LeadConnector chat widget, which is exactly
   what GHL's A2P 10DLC website compliance checklist prohibits. Hosted
   off-domain, it is unambiguously not a form on our pages. If anyone is ever
   tempted to embed it for a smoother flow, that is the reason not to.

   Replaced the earlier form, which never asked how big the home was — so it
   could not actually produce the personalized quote the site promises. This
   one opens on square footage, bedrooms and bathrooms, then covers service
   type, recurring interest, occupants, pets, a condition rating and when the
   home was last cleaned professionally. */
export const QUOTE_FORM_URL =
  "https://link.veritycleaning.co/widget/survey/J7e942vcUtuGMIlHPv2t";
