import Image from "next/image";
import { ArrowRight, Sparkle } from "../Icons";
import { TRANSFORMATIONS } from "../transformationsData";

/* Before/after photos on a service page, picked by the `tag` each entry in
   transformationsData already carries. Only services listed here get the
   section; add a slug when another service has enough photos of its own. */
const PROOF_TAG: Record<string, { tag: string; title: string }> = {
  "move-in-move-out": { tag: "Move-out clean", title: "Real move-out cleans" },
};

export function hasServiceProof(slug: string) {
  return slug in PROOF_TAG;
}

export default function ServiceProof({ slug }: { slug: string }) {
  const config = PROOF_TAG[slug];
  if (!config) return null;
  const photos = TRANSFORMATIONS.filter((t) => t.tag === config.tag);
  if (!photos.length) return null;

  return (
    <>
      <div className="center section-head">
        <h2 className="section-title">
          {config.title}
          <Sparkle aria-hidden="true" />
        </h2>
        <p className="lead">
          Real Verity jobs, no stock photos &mdash; the work every move-out clean covers.
        </p>
      </div>
      <div className="ba-grid ba-grid--dense">
        {photos.map((t) => (
          <figure className={`ba-card reveal${t.wide ? " ba-card--wide" : ""}`} key={t.image}>
            <Image
              src={t.image}
              alt={t.alt}
              width={t.wide ? 2000 : 1000}
              height={1000}
              sizes={t.wide ? "(max-width: 760px) 100vw, 1140px" : "(max-width: 760px) 100vw, 560px"}
            />
            <figcaption>
              <b>{t.title}</b>
              <p>{t.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="homes-more">
        <a href="/before-and-after/">See all before &amp; after photos <ArrowRight /></a>
      </p>
    </>
  );
}
