import QuoteForm from "./QuoteForm";

export default function QuoteSection() {
  return (
    <section className="section quote-section tone-sky">
      <div className="wrap center">
        <span className="eyebrow">Get Your Quote</span>
        <h2 style={{ marginTop: "12px" }}>Every home is different</h2>
        <p className="lead" style={{ margin: "14px auto 0" }}>
          Tell us a little about your space and we&rsquo;ll put together pricing that
          actually fits it &mdash; no one-size-fits-all packages.
        </p>
        <div className="quote-wrap">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
