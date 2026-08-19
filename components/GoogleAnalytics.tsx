import Script from "next/script";

/* GA4 measurement ID. Public by design — it appears in the page source of
   every site running Analytics, so it is not a secret and does not belong in
   an environment variable. */
export const GA_MEASUREMENT_ID = "G-4BPFFX4K01";

/* Google Analytics 4.

   afterInteractive rather than a plain <script>: Analytics has no reason to
   block first paint, and nothing external needs to find this tag in the raw
   HTML — GA verifies a property by receiving a hit, not by scanning markup.
   That is the opposite of the chat widget, which is a plain server-rendered
   tag precisely because a compliance scanner does read the HTML for it.

   Note this site also runs Vercel Analytics. The two measure different things
   (Vercel: page views and Web Vitals; GA4: sessions, sources, conversions)
   and do not conflict. */
export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
