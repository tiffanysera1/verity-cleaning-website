import { ArrowRight, Sparkle } from "./Icons";
import TransformSlider from "./TransformSlider";
import { TRANSFORM_PAIRS } from "./transformPairs";

export default function BeforeAfterSlider() {
  return (
    <section className="section" id="transformations">
      <div className="wrap">
        <div className="center section-head reveal">
          <h2 className="section-title">
            Real Homes. Real Results.
            <Sparkle aria-hidden="true" />
          </h2>
          <p className="lead">
            Drag any photo to see the difference. These are real Verity jobs.
          </p>
        </div>

        <div className="homes-panel reveal">
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
            Proudly serving <a href="/areas/pelham/">Pelham</a>,{" "}
            <a href="/areas/hoover/">Hoover</a>, <a href="/areas/helena/">Helena</a>,{" "}
            <a href="/areas/alabaster/">Alabaster</a>, and{" "}
            <a href="/areas/">surrounding areas</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
