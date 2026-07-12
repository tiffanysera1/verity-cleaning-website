import { Pin, Map, Phone } from "./Icons";

const TOWNS = ["Pelham", "Helena", "Alabaster", "Hoover", "Columbiana", "Chelsea", "Calera"];

export default function ServiceArea() {
  return (
    <section className="section" id="area">
      <div className="wrap area-grid">
        <div className="reveal">
          <span className="eyebrow">Where We Clean</span>
          <h2 style={{ marginTop: "12px" }}>Serving Shelby County</h2>
          <p className="lead" style={{ marginTop: "14px" }}>
            We clean homes and offices across these communities &mdash; and everywhere in between.
          </p>
          <div className="chips">
            {TOWNS.map((t) => (
              <span className="chip2" key={t}>
                <Pin />
                {t}
              </span>
            ))}
            <span className="chip2">+ Nearby</span>
          </div>
          <div className="section-cta-row reveal" style={{ justifyContent: "flex-start", marginTop: "28px" }}>
            <a href="tel:+12058880199" className="btn btn--primary btn--lg">
              <Phone />
              Call or text now
            </a>
          </div>
        </div>

        <div className="areacard reveal">
          <div className="ic">
            <Map />
          </div>
          <h3>Proudly serving</h3>
          <div className="county">Shelby County, AL</div>
        </div>
      </div>
    </section>
  );
}
