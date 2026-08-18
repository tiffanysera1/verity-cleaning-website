import { ArrowRight, Shield, CurvedArrow } from "../Icons";
import { QUOTE_FORM_URL } from "../quoteLink";

export default function ServiceCTA() {
  return (
    <div className="service-cta reveal">
      <div className="service-cta-text">
        <h2>Ready for a fresh start?</h2>
        <p className="lead">
          Tell us about your home and we&rsquo;ll create a personalized quote based on the
          information and photos you provide.
        </p>
      </div>
      <div className="service-cta-actions">
        <a href={QUOTE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
          Get My Personalized Quote
          <ArrowRight />
        </a>
        <div className="final-cta-note">
          <p className="payment-note" style={{ margin: 0 }}>
            <Shield aria-hidden="true" />
            No payment today. Pay after your service.
          </p>
          <CurvedArrow aria-hidden="true" style={{ width: 20, height: 20, color: "var(--blue)", opacity: 0.6 }} />
          <span className="hand-note">It&rsquo;s fast and easy!</span>
        </div>
      </div>
    </div>
  );
}
