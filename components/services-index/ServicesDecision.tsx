import { ArrowRight, Sparkle } from "../Icons";
import { DECISION_PATHS } from "./servicesIndexData";

export default function ServicesDecision() {
  return (
    <section className="section svc-decision-section">
      <div className="wrap">
        <div className="center section-head reveal">
          <h2 className="section-title">
            Which Service Do I Need?
            <Sparkle aria-hidden="true" />
          </h2>
          <p className="lead">Follow the path that matches your home.</p>
        </div>

        <div className="decision-grid">
          {DECISION_PATHS.map(({ question, answer, resultSlug, resultTitle }) => (
            <div className="decision-path reveal" key={resultSlug}>
              <div className="decision-q">{question}</div>
              <span className="decision-arrow" aria-hidden="true">
                <ArrowRight />
              </span>
              <div className="decision-a">{answer}</div>
              <span className="decision-arrow" aria-hidden="true">
                <ArrowRight />
              </span>
              <a href={`/services/${resultSlug}/`} className="decision-result">
                {resultTitle}
                <ArrowRight aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
