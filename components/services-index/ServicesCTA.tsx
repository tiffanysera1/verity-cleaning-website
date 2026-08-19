import { ArrowRight } from "../Icons";
import { QUOTE_FORM_URL } from "../quoteLink";
import CallLine from "../CallLine";

export default function ServicesCTA() {
  return (
    <section className="section svc-cta-section">
      <div className="wrap">
        <div className="svc-cta reveal">
          <span className="svc-cta-shape svc-cta-shape--a" aria-hidden="true" />
          <span className="svc-cta-shape svc-cta-shape--b" aria-hidden="true" />
          <div className="svc-cta-content">
            <h2>Ready to Enjoy More Free Time?</h2>
            <p className="lead">
              Let Verity handle the cleaning while you focus on what matters most.
            </p>
            <div className="svc-cta-actions">
              <a href={QUOTE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
                Get My Quote
                <ArrowRight />
              </a>
              <a href="/#footer-contact" className="btn btn--outline btn--lg">
                Contact Us
              </a>
            </div>
            <CallLine className="call-line--center" />
          </div>
        </div>
      </div>
    </section>
  );
}
