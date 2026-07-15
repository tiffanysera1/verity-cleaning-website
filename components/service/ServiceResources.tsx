import Image from "next/image";
import { ArrowRight, Plus, Sparkle } from "../Icons";
import TransformSlider from "../TransformSlider";
import { TRANSFORM_PAIRS } from "../transformPairs";
import type { BlogLink, FaqItem } from "./serviceDetailData";

export default function ServiceResources({
  serviceTitle,
  blogLinks,
  faq,
}: {
  serviceTitle: string;
  blogLinks: BlogLink[];
  faq: FaqItem[];
}) {
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
          <a href="/#reviews">See more before &amp; after transformations <ArrowRight /></a>
        </p>
      </div>

      <div className="resources-blog reveal">
        <h3>Continue Reading</h3>
        <ul className="blog-list">
          {blogLinks.map((post) => (
            <li key={post.title}>
              <a href="/#services">
                <span className="blog-thumb">
                  <Image src={post.image} alt="" fill sizes="56px" style={{ objectFit: "cover" }} />
                </span>
                <span>{post.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="homes-more">
          <a href="/#services">Visit our blog <ArrowRight /></a>
        </p>
        <p className="review-placeholder-note">
          <Sparkle aria-hidden="true" style={{ width: 12, height: 12, verticalAlign: "-1px", marginRight: 4 }} />
          Sample articles shown for layout purposes — real posts coming soon.
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
