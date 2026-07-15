import Image from "next/image";
import { ArrowRight, Sparkle } from "./Icons";
import { HOMEPAGE_SERVICES } from "./servicesData";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="center section-head reveal">
          <h2 className="section-title">
            Our Services
            <Sparkle aria-hidden="true" />
          </h2>
        </div>

        <div className="services-grid">
          {HOMEPAGE_SERVICES.map(({ key, Icon, photo, title, summary, href }) => (
            <article className="service-card reveal" key={key}>
              <div className="service-card-photo">
                <Image src={photo} alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                <span className="service-card-icon" aria-hidden="true">
                  <Icon />
                </span>
              </div>
              <div className="service-card-body">
                <h3>{title}</h3>
                <p>{summary}</p>
                <a href={href} className="service-card-more" aria-label={`Learn more about ${title.toLowerCase()}`}>
                  Learn More <ArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="services-more reveal">
          <a href="/#services" className="btn btn--outline">View All Services</a>
        </div>
      </div>
    </section>
  );
}
