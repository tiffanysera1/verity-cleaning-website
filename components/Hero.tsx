import Image from "next/image";
import { Heart, Sparkle, Shield, ArrowRight, Star } from "./Icons";
import { QUOTE_FORM_URL } from "./quoteLink";
import { GOOGLE_REVIEWS_URL, GOOGLE_RATING } from "./googleBusiness";
import CallLine from "./CallLine";

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

          <div className="hero-quote-wrap reveal" id="quote" style={{ scrollMarginTop: "96px" }}>
            <a
              href={QUOTE_FORM_URL}
              className="btn btn--primary hero-quote-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get My Free Quote
              <ArrowRight aria-hidden="true" />
            </a>
            {/* Links to the listing so the rating is checkable rather than
                decorative. Five painted stars with nothing behind them is the
                thing customers have learned to discount. */}
            <a
              className="hero-rating"
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hero-rating-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </span>
              <span className="hero-rating-text">
                <strong>{GOOGLE_RATING}</strong> on Google
              </span>
            </a>

            <CallLine />

            <p className="hero-quote-sub">
              Takes about a minute &mdash; tell us about your home and we&rsquo;ll get
              back to you within 24 hours.
            </p>
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
