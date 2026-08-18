import { ArrowRight, Star, Sparkle } from "./Icons";
import TransformSlider from "./TransformSlider";
import { TRANSFORM_PAIRS } from "./transformPairs";

/* Canonical link to the Google Business Profile listing (CID form — stable,
   unlike the coordinate URLs Maps generates when you share from the map). */
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps?cid=17576216227421438205";

/* Real 5-star Google reviews. `full` is the verbatim review as published on
   Google and is the source of truth; `excerpt` is a contiguous, unedited
   opening passage used because the side panel is too narrow for the full
   text — never stitch sentences together here, and never paraphrase. Anyone
   can check the wording against the listing via GOOGLE_REVIEWS_URL. */
const REVIEWS = [
  {
    author: "Zach Robertson",
    excerpt:
      "Called Verity Cleaning to get a deep clean done before some family came into town, and I'm glad I did. Booking was quick, price was upfront, no hidden fees or weird surprises. Tiffany showed up on time and got straight to work. I added on the inside-fridge cleaning too, and honestly, worth every penny.",
    full:
      "Called Verity Cleaning to get a deep clean done before some family came into town, and I'm glad I did. Booking was quick, price was upfront, no hidden fees or weird surprises.\n\nTiffany showed up on time and got straight to work. I added on the inside-fridge cleaning too, and honestly, worth every penny. She covered everything I wanted done, like baseboards, ceiling fans, and grout in the bathroom tile. Once she finished up, she walked me through everything she'd done, room by room, which I appreciated. Place looked completely different by the time she was done. My wife noticed it the second she walked in.\n\nProfessional, easy to talk to, didn't waste time. You can tell she actually knows what she's doing and isn't just going through the motions.\n\nAlready planning on having Verity back out for regular cleanings, and I'll be asking for Tiffany specifically. Solid company, would recommend to anyone on the fence.",
    truncated: true,
  },
  {
    author: "Chase G.",
    excerpt:
      "Trustworthy and reliable cleaners. Came out when they said and did a good job cleaning up our house! We have multiple pets so it wasn't easy, but they worked quickly and it looks great every time!",
    full:
      "Trustworthy and reliable cleaners. Came out when they said and did a good job cleaning up our house! We have multiple pets so it wasn't easy, but they worked quickly and it looks great every time!",
    truncated: false,
  },
];

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

          {REVIEWS.map((review) => (
            <article className="review-item" key={review.author}>
              <div className="review-stars" aria-label="Rated 5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} aria-hidden="true" />
                ))}
              </div>
              <p className="review-text">
                &ldquo;
                {review.truncated
                  ? /* drop the sentence-final period so it doesn't read as four dots */
                    `${review.excerpt.replace(/\.$/, "")}…`
                  : review.excerpt}
                &rdquo;
              </p>
              <p className="review-author">&mdash; {review.author}</p>
            </article>
          ))}

          <a
            href={GOOGLE_REVIEWS_URL}
            className="review-more"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all reviews on Google <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
