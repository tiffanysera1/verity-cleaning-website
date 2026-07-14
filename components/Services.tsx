import Image from "next/image";
import { ArrowRight, Phone, Sparkle } from "./Icons";
import { SERVICES } from "./servicesData";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">Services</span>
          <h2 style={{ marginTop: "12px" }}>
            Our Services
            <Sparkle className="h2-sparkle" aria-hidden="true" />
          </h2>
          <p className="lead" style={{ marginTop: "14px" }}>
            From a regular weekly visit to a full deep clean, we tailor each service to your space.
          </p>
        </div>

        <div className="svc svc--photo">
          {SERVICES.map(({ slug, Icon, photo, title, summary }) => (
            <article className="scard scard--photo reveal" key={slug}>
              <a href={`/services/${slug}/`} className="scard-photo" aria-hidden="true" tabIndex={-1}>
                <Image src={photo} alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                <span className="ic scard-photo-ic">
                  <Icon />
                </span>
              </a>
              <div className="scard-body">
                <h3>
                  <a href={`/services/${slug}/`} className="scard-title-link">{title}</a>
                </h3>
                <p>{summary}</p>
                <div className="scard-actions">
                  <a href={`/services/${slug}/`} className="more" aria-label={`Learn more about ${title.toLowerCase()}`}>
                    Learn More <ArrowRight />
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
