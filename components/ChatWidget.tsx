/* GoHighLevel / LeadConnector chat widget, rendered on every page from the
   root layout.

   Two things here are deliberate and worth not "tidying up":

   1. A plain server-rendered <script>, not next/script. GHL's compliance
      scanner reads the raw HTML; next/script injects client-side and leaves
      no tag in the served markup, which reads as "widget not integrated".

   2. The attributes match GHL's supplied snippet exactly, with nothing added
      — an earlier version carried `defer`, and matching their snippet removes
      any chance a strict checker fails on an unexpected attribute.

   It also has to be on the homepage, not just the form-free pages: the
   compliance check fetches the site's main URL. That reopens the checklist
   item about forms sharing a page with the widget, which the homepage quote
   form is only clear of because it no longer collects a phone number or any
   SMS opt-in consent. If that form ever regains a phone field, this pairing
   has to be revisited. */
export default function ChatWidget() {
  return (
    <script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a847f5543b7e145600ebff9"
      data-source="WEB_USER"
    />
  );
}
