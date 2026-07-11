import { Phone, Sparkles } from "./Icons";

export default function FinalCTA() {
  return (
    <section className="section cta">
      <div className="wrap">
        <h2 className="reveal" style={{ textTransform: "uppercase" }}>Ready for a Pristine Space?</h2>
        <p className="reveal">
          Experience the Verity standard of cleanliness. Honest, detailed cleaning for Shelby County families.
        </p>
        <div className="acts reveal">
          <a href="tel:+12058880199" className="btn btn--teal btn--lg">
            <Phone />
            Call or Text (205) 888-0199
          </a>
          <a href="#quote" className="btn btn--ghost-dark btn--lg">
            Get an Estimate Online
          </a>
        </div>
        <div className="reveal" style={{ marginTop: "20px" }}>
          <span className="emerg" style={{ color: "var(--teal-bright)" }}>
            <Sparkles style={{ width: "16px", height: "16px", color: "var(--teal-bright)", strokeWidth: 2 }} />
            100% Satisfaction Guarantee &bull; Licensed, Bonded &amp; Insured
          </span>
        </div>
      </div>
    </section>
  );
}
