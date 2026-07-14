import Image from "next/image";
import { Phone, Shield, ArrowRight } from "./Icons";

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta-card">
          <div className="cta-card-body">
            <h2 className="reveal">Ready for a clean home and more time for you?</h2>
            <p className="reveal">
              Tell us about your home and we&rsquo;ll create a personalized quote based on the
              information and photos you provide.
            </p>
            <div className="acts reveal">
              <a href="#quote" className="btn btn--primary btn--lg">
                Get My Personalized Quote
                <ArrowRight />
              </a>
              <a href="tel:+12058880199" className="btn btn--secondary btn--lg">
                <Phone />
                Call or text (205) 888-0199
              </a>
            </div>
            <p className="hero-payment-note reveal">
              <Shield aria-hidden="true" />
              No payment today. Pay after your service is complete.
              <span className="cta-flourish">It&rsquo;s fast and easy!</span>
            </p>
          </div>
          <div className="cta-card-photo reveal">
            <Image
              src="/hero-home.jpg"
              alt="A bright, tidy modern living room"
              fill
              sizes="(max-width: 960px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
