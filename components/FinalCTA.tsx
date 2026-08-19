import Image from "next/image";
import { Shield, ArrowRight, CurvedArrow } from "./Icons";
import { QUOTE_FORM_URL } from "./quoteLink";
import CallLine from "./CallLine";

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="final-cta-card">
          <div className="final-cta-body">
            <h2 className="reveal">
              Ready for a
              <br />
              clean home and
              <br />
              more time for you?
            </h2>
            <p className="lead reveal">
              Tell us about your home and we&rsquo;ll create a personalized quote based on the
              information and photos you provide.
            </p>
            <div className="final-cta-actions reveal">
              <a href={QUOTE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
                Get My Personalized Quote
                <ArrowRight />
              </a>
              <CallLine />
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
          <div className="final-cta-photo reveal">
            <Image
              src="/final-cta.jpg"
              alt="A glass vase of soft pink flowers beside a lit candle"
              fill
              sizes="(max-width: 1080px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
