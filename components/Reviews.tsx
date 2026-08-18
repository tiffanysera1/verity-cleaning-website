import { ArrowRight, Star, Sparkle } from "./Icons";

/* Canonical link to the Google Business Profile listing (CID form — stable,
   unlike the coordinate URLs Maps generates when you share from the map). */
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps?cid=17576216227421438205";

/* Real 5-star Google reviews, verbatim as published. Never paraphrase, never
   stitch sentences together, and never add one that isn't on the listing —
   anyone can check the wording via GOOGLE_REVIEWS_URL.

   No Review or aggregateRating structured data accompanies these: Google
   discards self-serving review markup on LocalBusiness, so it earns no rich
   result while carrying manual-action risk. The stars shown in search come
   from the Business Profile, which Google reads directly. */
const REVIEWS = [
  {
    author: "Zach Robertson",
    body: [
      "Called Verity Cleaning to get a deep clean done before some family came into town, and I'm glad I did. Booking was quick, price was upfront, no hidden fees or weird surprises.",
      "Tiffany showed up on time and got straight to work. I added on the inside-fridge cleaning too, and honestly, worth every penny. She covered everything I wanted done, like baseboards, ceiling fans, and grout in the bathroom tile. Once she finished up, she walked me through everything she'd done, room by room, which I appreciated. Place looked completely different by the time she was done. My wife noticed it the second she walked in.",
      "Professional, easy to talk to, didn't waste time. You can tell she actually knows what she's doing and isn't just going through the motions.",
      "Already planning on having Verity back out for regular cleanings, and I'll be asking for Tiffany specifically. Solid company, would recommend to anyone on the fence.",
    ],
  },
  {
    author: "Chase G.",
    body: [
      "Trustworthy and reliable cleaners. Came out when they said and did a good job cleaning up our house! We have multiple pets so it wasn't easy, but they worked quickly and it looks great every time!",
    ],
  },
];

export default function Reviews() {
  return (
    <section className="section tone-sky" id="reviews">
      <div className="wrap">
        <div className="center section-head reveal">
          <h2 className="section-title">
            What Your Neighbors Say
            <Sparkle aria-hidden="true" />
          </h2>
          <p className="lead">
            Real reviews from real Verity customers on Google.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((review) => (
            <article className="review-card reveal" key={review.author}>
              <div className="review-stars" aria-label="Rated 5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} aria-hidden="true" />
                ))}
              </div>
              <div className="review-body">
                {review.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <p className="review-author">&mdash; {review.author}</p>
            </article>
          ))}
        </div>

        <p className="homes-more">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            Read all reviews on Google <ArrowRight />
          </a>
        </p>
      </div>
    </section>
  );
}
