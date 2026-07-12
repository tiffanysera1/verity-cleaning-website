import {
  Home, Sparkles, Clock, Building, SprayBottle, ArrowRight, Phone
} from "./Icons";

const SERVICES = [
  {
    Icon: Home,
    title: "Residential Cleaning",
    body: "Weekly, biweekly, or monthly visits built around your household's routine.",
  },
  {
    Icon: Sparkles,
    title: "Deep Cleaning",
    body: "A thorough, top-to-bottom clean that covers baseboards, vents, and every hard-to-reach corner.",
  },
  {
    Icon: Clock,
    title: "Move-In / Move-Out Cleaning",
    body: "A detailed clean to help you settle into a new place or hand off your old one.",
  },
  {
    Icon: Building,
    title: "Commercial & Office Cleaning",
    body: "Clean, welcoming workspaces for offices, shops, and local businesses.",
  },
  {
    Icon: SprayBottle,
    title: "Post-Construction Cleaning",
    body: "We clear away dust, debris, and residue after a renovation or new build.",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">Services</span>
          <h2 style={{ marginTop: "12px" }}>Cleaning for every kind of home</h2>
          <p className="lead" style={{ marginTop: "14px" }}>
            From a regular weekly visit to a full deep clean, we tailor each service to your space.
          </p>
        </div>

        <div className="svc">
          {SERVICES.map(({ Icon, title, body }) => (
            <article className="scard reveal" key={title}>
              <div className="scard-body">
                <span className="ic">
                  <Icon />
                </span>
                <h3>
                  <a href="#quote" className="scard-title-link">{title}</a>
                </h3>
                <p>{body}</p>
                <div className="scard-actions">
                  <a href="#quote" className="more" aria-label={`Get a quote for ${title.toLowerCase()}`}>
                    Get a quote <ArrowRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-cta-row reveal">
          <a href="tel:+12058880199" className="btn btn--primary btn--lg">
            <Phone />
            Call or text (205) 888-0199
          </a>
          <a href="#quote" className="btn btn--ghost btn--lg">Get your quote online</a>
        </div>
      </div>
    </section>
  );
}
