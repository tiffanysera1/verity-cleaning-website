const FAQS = [
  {
    q: "What areas do you serve?",
    a: "We serve Pelham, Helena, Alabaster, Hoover, Columbiana, Chelsea, Calera, and surrounding Shelby County, AL communities. If you aren't sure if you're in our service area, give us a call or text at (205) 888-0199.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Verity Cleaning is fully licensed, bonded, and insured. We conduct rigorous background checks and training for every member of our team so you can feel completely secure welcoming us into your space.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No, you do not. Many of our clients are at work or running errands during their scheduled clean. You can provide us with a door code, key, or lockbox instructions. However, you are always welcome to be home if you prefer!",
  },
  {
    q: "Do you bring your own cleaning supplies?",
    a: "Yes. We bring all professional-grade cleaning supplies and high-quality equipment. If you have specific products you'd like us to use in your home, just let us know in advance.",
  },
  {
    q: "What is your satisfaction guarantee?",
    a: "Verity means truth and excellence. If any area we clean isn't up to your standard, let us know within 24 hours and we will return to re-clean that specific spot at no additional charge to you.",
  },
  {
    q: "How do you calculate your estimates?",
    a: "We provide upfront, transparent estimates based on the square footage of your space, the number of bedrooms/bathrooms, and the type of cleaning (regular maintenance, deep clean, or move-out). What we quote is what you pay—no surprise add-ons.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We understand that schedules change. We kindly request at least a 24-hour notice for cancellations or rescheduling. This allows us to offer the slot to another client and keep our team's schedule full.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="section faq" id="faq">
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">Got Questions?</span>
          <h2 style={{ fontSize: "clamp(2.1rem,4.4vw,3rem)", textTransform: "uppercase", marginTop: "12px", color: "var(--navy)" }}>
            Frequently Asked Questions
          </h2>
          <p className="lead" style={{ marginTop: "12px" }}>
            Quick answers for Shelby County homeowners &amp; business owners &mdash; or call/text anytime.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((f) => (
            <details className="faq-item reveal" key={f.q}>
              <summary>
                <span>{f.q}</span>
                <span className="faq-ic" aria-hidden="true">+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
