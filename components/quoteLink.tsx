/* Where every "get a quote" call to action on the site points.

   It used to be a link straight out to the GoHighLevel form, because A2P 10DLC
   verification was pending and GHL's website checklist prohibits a
   phone-collecting form sharing a page with the LeadConnector chat widget.
   Verification has since been granted, so the survey is now embedded on our
   own /quote/ page instead. That was worth doing: the old flow dropped people
   onto an unbranded white page on link.veritycleaning.co, in a new tab, at the
   exact moment it asked for their phone number.

   Two consequences worth knowing:

   1. The chat widget is sitewide, so /quote/ is a page where a form and the
      widget coexist. That is acceptable post-verification but it is the one
      page to look at first if GHL ever re-reviews the account.

   2. CTAs link to QUOTE_URL as an ordinary internal link — no target="_blank".
      Opening an internal page in a new tab is the sort of thing that gets
      "fixed" back in by accident, so it is called out here.

   SURVEY_EMBED_URL is used only by /quote/ itself. Nothing else should point
   at it directly; send people to QUOTE_URL so they land on our page with our
   header, footer and branding around the form. */

export const QUOTE_URL = "/quote/";

export const SURVEY_EMBED_URL =
  "https://link.veritycleaning.co/widget/survey/J7e942vcUtuGMIlHPv2t";

export const SURVEY_EMBED_SCRIPT =
  "https://link.veritycleaning.co/js/form_embed.js";
