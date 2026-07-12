import { Phone } from "./Icons";

export default function FinalCTA() {
  return (
    <section className="section cta">
      <div className="wrap">
        <h2 className="reveal">Ready for your time back?</h2>
        <p className="reveal">
          Let us take care of the cleaning, so you can get back to what matters.
        </p>
        <div className="acts reveal">
          <a href="tel:+12058880199" className="btn btn--secondary btn--lg">
            <Phone />
            Call or text (205) 888-0199
          </a>
          <a href="#quote" className="btn btn--ghost-dark btn--lg">
            Get my personalized quote
          </a>
        </div>
        <div className="reveal" style={{ marginTop: "20px" }}>
          <span className="emerg">
            100% satisfaction guarantee &bull; Licensed, bonded &amp; insured
          </span>
        </div>
      </div>
    </section>
  );
}
