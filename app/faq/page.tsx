import type { Metadata } from "next";
import { ArrowRight, Plus, Sparkle, Shield } from "@/components/Icons";
import { QUOTE_URL } from "@/components/quoteLink";
import CallLine from "@/components/CallLine";
import { SERVICES } from "@/components/servicesData";
import { SERVICE_DETAILS } from "@/components/service/serviceDetailData";
import { PM_FAQ } from "@/components/propertyManagerData";
import { QUOTE_FAQ } from "@/components/quoteFaq";

const PATH = "/faq/";
const BASE = "https://www.veritycleaning.co";

const TITLE = "Cleaning FAQ | Verity Cleaning";
const DESCRIPTION =
  "Answers about quotes, payment, scheduling and what each Verity Cleaning service includes — standard, deep, move-in/move-out, commercial and post-construction cleaning.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: "Frequently Asked Questions — Verity Cleaning", description: DESCRIPTION, url: PATH },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

type FaqGroup = {
  id: string;
  title: string;
  items: { q: string; a: string; link?: { href: string; text: string } }[];
  more?: { href: string; text: string };
};

/* Nothing here is written for this page. Every answer is read from the page
   that already publishes it, so editing a service FAQ updates both places.
   Service sections use the service slug as their id, which is what each
   service page's "View all FAQ" link jumps to. */
const GROUPS: FaqGroup[] = [
  { id: "quotes", title: "Quotes & payment", items: QUOTE_FAQ, more: { href: QUOTE_URL, text: "Get your free quote" } },
  ...SERVICES.flatMap((s) => {
    const detail = SERVICE_DETAILS[s.slug];
    if (!detail?.faq.length) return [];
    return [{
      id: s.slug,
      title: s.title,
      items: detail.faq,
      more: { href: `/services/${s.slug}/`, text: `What ${s.title.toLowerCase()} includes` },
    }];
  }),
  {
    id: "property-managers",
    title: "Property managers",
    items: PM_FAQ,
    more: { href: "/property-management-cleaning/", text: "Turnover cleaning for property managers" },
  },
];

function JsonLd() {
  /* If two source pages ever publish the same question, list it once. */
  const seen = new Set<string>();
  const questions = GROUPS.flatMap((g) => g.items).filter(({ q }) => {
    const key = q.toLowerCase().replace(/[^a-z]/g, "");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const graph = [
    {
      "@type": "FAQPage",
      "@id": `${BASE}${PATH}#faq`,
      url: `${BASE}${PATH}`,
      isPartOf: { "@id": `${BASE}/#business` },
      mainEntity: questions.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE}${PATH}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${BASE}${PATH}` },
      ],
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

export default function FaqPage() {
  return (
    <main id="main">
      <JsonLd />

      <section className="section area-hero">
        <div className="wrap">
          <h1>Frequently Asked Questions</h1>
          <p className="lead">
            Quotes, payment, scheduling and what each clean covers. Can&rsquo;t find your
            question? Call or text us and we&rsquo;ll answer it.
          </p>
          <div className="area-hero-actions">
            <a className="btn btn--primary btn--lg" href={QUOTE_URL}>
              Get My Free Quote
              <ArrowRight aria-hidden="true" />
            </a>
            <CallLine />
          </div>
          <nav className="faq-jump" aria-label="FAQ topics">
            {GROUPS.map((g) => (
              <a key={g.id} href={`#${g.id}`}>{g.title}</a>
            ))}
          </nav>
        </div>
      </section>

      {GROUPS.map((g, i) => (
        <section className={`section${i % 2 === 0 ? " tone-sky" : ""}`} id={g.id} key={g.id}>
          <div className="wrap">
            <div className="center section-head">
              <h2 className="section-title">
                {g.title}
                <Sparkle aria-hidden="true" />
              </h2>
            </div>
            <div className="faq-list area-faq-list">
              {g.items.map(({ q, a, link }) => (
                <details className="faq-item" key={q}>
                  <summary>
                    <span>{q}</span>
                    <span className="faq-ic" aria-hidden="true"><Plus /></span>
                  </summary>
                  <p>{a}</p>
                  {link && (
                    <p className="faq-link">
                      <a href={link.href}>{link.text} <ArrowRight /></a>
                    </p>
                  )}
                </details>
              ))}
            </div>
            {g.more && (
              <p className="homes-more">
                <a href={g.more.href}>{g.more.text} <ArrowRight /></a>
              </p>
            )}
          </div>
        </section>
      ))}

      <section className="section">
        <div className="wrap">
          <div className="area-cta">
            <div>
              <h2>Still have a question?</h2>
              <p>
                Call or text and we&rsquo;ll answer it, or tell us about your home and
                we&rsquo;ll send a personalized quote. No one needs to walk through your
                house first.
              </p>
            </div>
            <div className="area-cta-actions">
              <a className="btn btn--primary btn--lg" href={QUOTE_URL}>
                Get My Free Quote
                <ArrowRight aria-hidden="true" />
              </a>
              <CallLine />
              <p className="payment-note">
                <Shield aria-hidden="true" />
                <span>Licensed, bonded &amp; insured.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
