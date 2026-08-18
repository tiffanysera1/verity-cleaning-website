/* GoHighLevel / LeadConnector chat widget.

   Scoped deliberately: this is rendered by app/services/layout.tsx, NOT the
   root layout, so it appears on /services/ and the service pages but never on
   the homepage. GHL's A2P 10DLC website compliance checklist requires that no
   form collecting phone numbers or SMS opt-in consent — "contact forms, lead
   forms, landing page forms, and appointment forms" — exists on any page where
   the widget is embedded. The homepage carries the quote form, so keeping the
   widget off it makes that statement literally true rather than arguable.

   A plain <script defer>, not next/script: compliance review may be automated
   against raw HTML, and next/script injects client-side, leaving no tag in the
   served markup. */
export default function ChatWidget() {
  return (
    <script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a847f5543b7e145600ebff9"
      data-source="WEB_USER"
      defer
    />
  );
}
