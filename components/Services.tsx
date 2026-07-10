import {
  Home, Sparkles, Clock, Building, SprayBottle, Bucket, ArrowRight, Phone
} from "./Icons";

const SERVICES = [
  { 
    n: "01", 
    Icon: Home, 
    title: "Residential Cleaning", 
    slug: "residential-cleaning", 
    body: "Weekly, bi-weekly, or monthly cleaning custom-tailored to your household routine. Keep your home fresh and tidy." 
  },
  { 
    n: "02", 
    Icon: Sparkles, 
    title: "Deep Cleaning Services", 
    slug: "deep-cleaning", 
    body: "A meticulous, top-to-bottom scrub of your home. We cover baseboards, vents, appliances, and all hard-to-reach areas." 
  },
  { 
    n: "03", 
    Icon: Clock, 
    title: "Move-In / Move-Out Cleaning", 
    slug: "move-in-move-out", 
    body: "Detailed cleaning to prepare a home for new owners/tenants or to ensure you get your security deposit back." 
  },
  { 
    n: "04", 
    Icon: Building, 
    title: "Commercial & Office Cleaning", 
    slug: "commercial-cleaning", 
    body: "Clean, sanitized, and healthy workspaces for retail shops, corporate offices, and local businesses." 
  },
  { 
    n: "05", 
    Icon: SprayBottle, 
    title: "Post-Construction Clean", 
    slug: "post-construction", 
    body: "Remove heavy dust, paint splatters, and builder debris from your new home or renovation project." 
  },
  { 
    n: "06", 
    Icon: Bucket, 
    title: "Eco-Friendly Cleaning", 
    slug: "eco-friendly-cleaning", 
    body: "Safe, green, and non-toxic cleaning products that protect your family, pets, and the environment." 
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">Our Cleaning Services</span>
          <h2 style={{ fontSize: "clamp(2.1rem,4.4vw,3rem)", textTransform: "uppercase", marginTop: "12px" }}>
            Verity Cleaning Services
          </h2>
          <p className="lead" style={{ marginTop: "14px" }}>
            From regular housekeeping to detailed deep cleans, we bring integrity, 
            precision, and sparkles to every space.
          </p>
        </div>

        <div className="svc">
          {SERVICES.map(({ n, Icon, title, slug, body }) => (
            <article className="scard reveal" key={n}>
              <div className="scard-body">
                <div className="top">
                  <span className="num">
                    {n}
                  </span>
                  <span className="ic">
                    <Icon />
                  </span>
                </div>
                <h3>
                  <a href={`#quote`} className="scard-title-link">
                    {title}
                  </a>
                </h3>
                <p>{body}</p>
                <div className="scard-actions">
                  <a href={`#quote`} className="more" aria-label={`Get an estimate for ${title.toLowerCase()}`}>
                    Book Service <ArrowRight />
                  </a>
                  <a href="#quote" className="more more--secondary" aria-label={`Get an estimate for ${title.toLowerCase()}`}>
                    Get Estimate
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-cta-row reveal">
          <a href="tel:+12058880199" className="btn btn--teal btn--lg">
            <Phone />
            Call or Text (205) 888-0199
          </a>
          <a href="#quote" className="btn btn--ghost btn--lg">Get a Free Estimate Online</a>
        </div>
      </div>
    </section>
  );
}
