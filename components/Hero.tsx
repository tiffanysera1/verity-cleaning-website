import Image from "next/image";
import { Heart, Sparkle, Shield } from "./Icons";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-photo" aria-hidden="true">
        <Image
          src="/clean-home.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>

      <div className="wrap hero-inner">
        <div className="hero-text">
          <h1>
            Get your
            <br />
            <span className="accent">
              weekends back.
              <Sparkle className="h1-sparkle" aria-hidden="true" />
            </span>
          </h1>
          <p className="sub">
            House cleaning in Pelham, Alabaster, Helena &amp; Hoover &mdash; we clean with
            care so you can focus on what matters most.
          </p>

          <div className="hero-quote-wrap reveal">
            <QuoteForm />
            <p className="payment-note hero-payment-note">
              <Shield aria-hidden="true" />
              <span><strong>No payment today.</strong> Pay after your service is complete.</span>
            </p>
          </div>
        </div>

        <div className="hero-card reveal">
          <span className="hero-card-icon" aria-hidden="true"><Heart /></span>
          <div>
            <b>A clean home feels good.</b>
            <p>Having your time back feels even better.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
