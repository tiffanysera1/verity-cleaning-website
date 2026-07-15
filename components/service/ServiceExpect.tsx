import { ArrowRight } from "../Icons";
import { EXPECT_STEPS } from "./serviceDetailData";

export default function ServiceExpect() {
  return (
    <div className="expect-card reveal">
      <h2 className="expect-title">What to Expect</h2>
      <div className="expect-flow">
        {EXPECT_STEPS.map(({ Icon, title, body }, i) => (
          <div className="expect-step" key={title}>
            <div className="expect-step-node">
              <span className="ic" aria-hidden="true"><Icon /></span>
              <b>{i + 1}. {title}</b>
              <p>{body}</p>
            </div>
            {i < EXPECT_STEPS.length - 1 && (
              <span className="expect-arrow" aria-hidden="true"><ArrowRight /></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
