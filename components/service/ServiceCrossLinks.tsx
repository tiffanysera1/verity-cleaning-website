import { ArrowRight, Pin, Sparkle } from "../Icons";
import { SERVICE_LINKS } from "./serviceLinks";

/* In-body links from a service page out to the towns where that service leads,
   and to the service most often paired with it. Deliberately prose with inline
   links rather than a card grid — links inside sentences carry more weight than
   links inside navigation furniture, which is the whole point of adding them. */
export default function ServiceCrossLinks({
  slug,
  serviceTitle,
}: {
  slug: string;
  serviceTitle: string;
}) {
  const links = SERVICE_LINKS[slug];
  if (!links) return null;

  return (
    <div className="service-crosslinks">
      <p className="service-crosslinks-line">
        <Pin aria-hidden="true" />
        <span>
          <strong>{serviceTitle} in your area.</strong> {links.areaNote} See{" "}
          {links.areas.map((area, i) => (
            <span key={area.slug}>
              {i > 0 && (i === links.areas.length - 1 ? " and " : ", ")}
              <a href={`/areas/${area.slug}/`}>{area.name}</a>
            </span>
          ))}
          , or <a href="/areas/">every town we serve</a>.
        </span>
      </p>

      {links.related && (
        <p className="service-crosslinks-line">
          <Sparkle aria-hidden="true" />
          <span>
            <strong>Often paired with {links.related.title}.</strong>{" "}
            {links.related.note}{" "}
            <a href={`/services/${links.related.slug}/`}>
              Compare the two <ArrowRight />
            </a>
          </span>
        </p>
      )}
    </div>
  );
}
