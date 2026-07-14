import { Camera, FileText, CalendarCheck, HomeSparkle, CheckCircle, ArrowRight, Sparkle } from "./Icons";

const STEPS = [
  {
    Icon: Camera,
    title: "Request a Quote",
    body: "Tell us about your home and text us a few photos.",
  },
  {
    Icon: FileText,
    title: "Receive Your Quote",
    body: "We create a personalized quote just for you.",
  },
  {
    Icon: CalendarCheck,
    title: "Choose Your Time",
    body: "Request your preferred time and alternate dates.",
  },
  {
    Icon: HomeSparkle,
    title: "We Clean Your Home",
    body: "Our detail-focused team gets it done.",
  },
  {
    Icon: CheckCircle,
    title: "Pay After Completion",
    body: "You pay only after your service is complete.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">How It Works</span>
          <h2 style={{ marginTop: "12px" }}>
            How Verity Works
            <Sparkle className="h2-sparkle" aria-hidden="true" />
          </h2>
        </div>

        <div className="process-flow reveal">
          {STEPS.map(({ Icon, title, body }, i) => (
            <div className="process-step" key={title}>
              <div className="process-step-node">
                <span className="ic">
                  <Icon />
                </span>
                <b>{i + 1}. {title}</b>
                <p>{body}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="process-arrow" aria-hidden="true">
                  <ArrowRight />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
