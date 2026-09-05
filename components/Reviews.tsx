import { ArrowRight, Sparkle } from "./Icons";
import { GOOGLE_REVIEWS_URL } from "./googleBusiness";

/* Reviews come from the GoHighLevel reputation widget, which syncs the live
   Google Business Profile listing. It replaced two hand-copied reviews once
   the listing passed a dozen — at that point the count itself is the proof,
   and keeping a hand-maintained copy current stopped being worth it.

   Two consequences worth knowing before changing anything here:

   1. The review text lives in a cross-origin iframe, so it is NOT in this
      page's HTML and search engines and AI crawlers cannot read it. The
      heading, intro line and Google link below are deliberately real markup
      so the section still says something crawlable about what it contains.

   2. Still no Review or aggregateRating structured data, and none should be
      added. Google discards self-serving review markup on your own
      LocalBusiness, so it earns no rich result while carrying manual-action
      risk. The stars shown in search come from the Business Profile, which
      Google reads directly.

   The <script> is a plain server-rendered tag rather than next/script, for
   the same reason as ChatWidget: it must be present in the static HTML so it
   runs on load and sizes the iframe. GHL's loader handles the height via
   postMessage, which is why the iframe carries scrolling="no". */
const WIDGET_SRC = "https://link.veritycleaning.co/reputation/widgets/review_widget/JAv7zXgBbtrbB9rtMj4X";
const WIDGET_LOADER = "https://link.veritycleaning.co/reputation/assets/review-widget.js";

export default function Reviews() {
  return (
    <section className="section tone-sky" id="reviews">
      <div className="wrap">
        <div className="center section-head reveal">
          {/* Deliberately not "What Your Neighbors Say" any more: the GHL
              widget renders its own near-identical title, and two headings
              saying the same thing stacked on top of each other ate most of
              the first mobile screen. This wording stays distinct, keeps a
              real crawlable h2 in a section whose review text now lives in a
              cross-origin iframe, and carries the local terms naturally. If
              the widget's own title is ever switched off in GHL, the original
              heading can come back. */}
          <h2 className="section-title">
            Trusted by Homeowners Across Shelby County
            <Sparkle aria-hidden="true" />
          </h2>
          <p className="lead">
            Verified Google reviews from real Verity customers, synced live
            from our Business Profile.
          </p>
        </div>

        <div className="reviews-widget reveal">
          <iframe
            className="lc_reviews_widget"
            src={WIDGET_SRC}
            title="Verity Cleaning reviews on Google"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%" }}
          />
        </div>
        <script src={WIDGET_LOADER} type="text/javascript" />

        <p className="homes-more">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            Read all reviews on Google <ArrowRight />
          </a>
        </p>
      </div>
    </section>
  );
}
