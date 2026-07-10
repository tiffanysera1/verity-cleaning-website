import { ArrowRight } from "./Icons";
import ReviewSlider from "./ReviewSlider";

export default function Reviews() {
  return (
    <section className="section reviews" id="reviews" style={{ background: "var(--surface)" }}>
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">Client Feedback</span>
          <h2 style={{ fontSize: "clamp(2.1rem,4.4vw,3rem)", textTransform: "uppercase", marginTop: "12px", color: "var(--navy)" }}>
            What Our Clients Say
          </h2>
          <p className="lead" style={{ marginTop: "12px" }}>
            Rated <b>4.9&#9733;</b> by 120+ Shelby County homeowners and businesses.
          </p>
        </div>

        <ReviewSlider />

        <div className="proof-cta reveal" style={{ marginTop: "32px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <a
            href="https://google.com"
            className="btn btn--teal btn--lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            See all Google reviews <ArrowRight />
          </a>
          <p className="proof-note" style={{ color: "var(--muted)", marginTop: "12px", fontSize: "0.9rem" }}>
            4.9&#9733; average &bull; 120+ verified reviews &bull; 100% Satisfaction Guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
