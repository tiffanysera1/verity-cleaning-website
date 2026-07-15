import { ArrowRight, Star, Pin, Sparkle } from "./Icons";
import TransformSlider from "./TransformSlider";
import { TRANSFORM_PAIRS } from "./transformPairs";

/* PLACEHOLDER TESTIMONIAL — replace with a real customer quote/name
   before launch. Approved as a temporary placeholder while Verity is
   still building its review base. */
const TESTIMONIAL = {
  quote:
    "Verity is hands down the best cleaning service we've ever used. The communication is amazing, the team is so kind, and our home has never felt this clean.",
  author: "Sarah M.",
};

export default function BeforeAfterSlider() {
  return (
    <section className="section" id="reviews">
      <div className="wrap homes-grid">
        <div className="homes-panel reveal">
          <h3>Real Homes. Real Results.</h3>

          <div className="transform-grid">
            {TRANSFORM_PAIRS.map(({ key, before, after }) => (
              <TransformSlider key={key} before={before} after={after} />
            ))}
          </div>

          <p className="homes-more">
            <a href="/#services">See More Transformations <ArrowRight /></a>
          </p>

          <p className="homes-service-area">
            <Sparkle aria-hidden="true" />
            Proudly serving Pelham, Hoover, Helena, Alabaster, and surrounding areas.
          </p>
        </div>

        <div className="review-panel reveal">
          <h3>What Your Neighbors Say</h3>
          <span className="review-quote-mark" aria-hidden="true">&ldquo;</span>
          <p className="review-text">{TESTIMONIAL.quote}</p>
          <div className="review-stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
          </div>
          <p className="review-author">&mdash; {TESTIMONIAL.author}</p>
          <a href="/#reviews" className="review-more">Read More Reviews <ArrowRight /></a>
          <p className="review-placeholder-note">
            <Pin aria-hidden="true" style={{ width: 12, height: 12, verticalAlign: "-1px", marginRight: 4 }} />
            Sample review shown for layout purposes — real reviews coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
