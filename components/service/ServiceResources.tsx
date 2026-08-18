import Image from "next/image";
import { ArrowRight, Plus } from "../Icons";
import TransformSlider from "../TransformSlider";
import { TRANSFORM_PAIRS } from "../transformPairs";
import { SERVICES } from "../servicesData";
import type { FaqItem } from "./serviceDetailData";

export default function ServiceResources({
  serviceTitle,
  currentSlug,
  faq,
}: {
  serviceTitle: string;
  currentSlug: string;
  faq: FaqItem[];
}) {
  const otherServices = SERVICES.filter((s) => s.slug !== currentSlug);
  return (
    <div className="resources-grid">
      <div className="resources-homes reveal">
        <h3>Real Homes. Real Results.</h3>
        <div className="transform-grid transform-grid--compact">
          {TRANSFORM_PAIRS.map(({ key, before, after }) => (
            <TransformSlider key={key} before={before} after={after} />
          ))}
        </div>
        <p className="homes-more">
          <a href="/#transformations">See more before &amp; after transformations <ArrowRight /></a>
        </p>
      </div>

      {/* Was a list of sample blog posts that linked nowhere, under a note saying
          the articles were placeholders. Replaced with the other real services:
          nothing on the page announces itself as unfinished, every link resolves,
          and the service pages finally link to each other in-body rather than only
          through the shared nav and footer. */}
      <div className="resources-blog reveal">
        <h3>Other Services</h3>
        <ul className="blog-list">
          {otherServices.map((service) => (
            <li key={service.slug}>
              <a href={`/services/${service.slug}/`}>
                <span className="blog-thumb">
                  <Image src={service.photo} alt="" fill sizes="56px" style={{ objectFit: "cover" }} />
                </span>
                <span>{service.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="homes-more">
          <a href="/services/">Compare all services <ArrowRight /></a>
        </p>
      </div>

      <div className="resources-faq reveal">
        <h3>{serviceTitle} FAQ</h3>
        <div className="faq-list">
          {faq.map(({ q, a }) => (
            <details className="faq-item" key={q}>
              <summary>
                <span>{q}</span>
                <span className="faq-ic" aria-hidden="true"><Plus /></span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
        <p className="homes-more">
          <a href="/#services">View all FAQ <ArrowRight /></a>
        </p>
      </div>
    </div>
  );
}
