import Image from "next/image";
import { ArrowRight, Sparkle } from "../Icons";
import { FEATURED_SERVICES } from "./servicesIndexData";

export default function ServicesHero() {
  return (
    <section className="section svc-hero">
      <div className="wrap">
        <div className="center section-head reveal">
          <h1 className="section-title svc-hero-h1">
            Cleaning Services in Shelby County, AL
            <Sparkle aria-hidden="true" />
          </h1>
          <p className="lead">
            Choose the cleaning service that best fits your home. Compare services, explore
            what&rsquo;s included, and customize your cleaning with optional add-ons.
          </p>
        </div>

        <div className="svc-card-grid">
          {FEATURED_SERVICES.map(({ slug, badge, title, description, chips, photo }) => (
            <article className="svc-card reveal" key={slug}>
              {badge && <span className="svc-card-badge">{badge}</span>}
              <div className="svc-card-photo">
                <Image src={photo} alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 20vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="svc-card-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="svc-card-chips">
                  {chips.map((chip) => (
                    <span className="svc-chip" key={chip}>{chip}</span>
                  ))}
                </div>
                <a href="/#quote" className="btn btn--primary svc-card-cta">
                  Get a Quote
                  <ArrowRight />
                </a>
                <a href={`/services/${slug}/`} className="svc-card-more">Learn more <ArrowRight /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
