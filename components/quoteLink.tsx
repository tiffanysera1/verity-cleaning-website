/* The GoHighLevel quote form. Every "get a quote" call to action on the site
   points here, so leads land in the CRM as a Contact and an Opportunity
   instead of being drafted into a text the customer has to send themselves.

   Deliberately a link out, not an embedded iframe. The form collects a phone
   number and an SMS consent checkbox; iframing it would place that form on
   pages carrying the LeadConnector chat widget, which is exactly what GHL's
   A2P 10DLC website compliance checklist prohibits. Hosted off-domain, it is
   unambiguously not a form on our pages. */
export const QUOTE_FORM_URL =
  "https://api.leadconnectorhq.com/widget/form/FytDwp9PxMiMuv9nFSv7";
