import { Clock, SprayBottle, Sparkles, Phone } from "./Icons";
import Watermark from "./Watermark";

const STEPS = [
  {
    label: "Step 01",
    Icon: Clock,
    title: "Book & Schedule",
    body: "Choose a cleaning plan that matches your space and needs. Let us know your preferred schedule—whether weekly, deep clean, or move-out.",
    active: true,
  },
  {
    label: "Step 02",
    Icon: SprayBottle,
    title: "We Clean & Refine",
    body: "Our background-checked, insured cleaners arrive on schedule. Armed with a comprehensive checklist, we clean every corner with detail.",
    active: true,
  },
  {
    label: "Step 03",
    Icon: Sparkles,
    title: "Enjoy the Freshness",
    body: "Walk into a clean, sanitized space that feels and smells brand new. If anything isn't absolutely perfect, we'll return to fix it immediately.",
    active: true,
  },
];

export default function ProcessSection() {
  return (
    <section className="section process" id="process">
      <Watermark />
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">Our Method</span>
          <h2 style={{ fontSize: "clamp(2.1rem,4.4vw,3rem)", textTransform: "uppercase", marginTop: "12px" }}>
            Our 3-Step Cleaning Path
          </h2>
          <p className="lead" style={{ marginTop: "14px" }}>
            We believe cleaning should be simple, predictable, and exceptionally high quality. 
            Here is what you can expect from start to finish.
          </p>
        </div>

        <ol className="steps">
          {STEPS.map(({ label, Icon, title, body, active }) => (
            <li className={active ? "step step--active reveal" : "step reveal"} key={label}>
              <span className="step-node">
                <Icon />
              </span>
              <span className="step-label">{label}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>

        <div className="section-cta-row reveal">
          <a href="tel:+12058880199" className="btn btn--teal btn--lg">
            <Phone />
            Schedule Your Clean — Call or Text
          </a>
        </div>
      </div>
    </section>
  );
}
