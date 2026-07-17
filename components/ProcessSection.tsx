import { Camera, FileText, CalendarCheck, HomeSparkle, CheckCircle, ArrowRight, Sparkle } from "./Icons";

const STEPS = [
  {
    Icon: Camera,
    title: "Request a Quote",
    body: "Tell us about your home and upload photos.",
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
    <section className="section" id="how-it-works">
      <div className="wrap">
        <div className="center section-head reveal">
          <h2 className="section-title">
            How Verity Works
            <Sparkle aria-hidden="true" />
          </h2>
        </div>

        <div className="how-flow reveal">
          {STEPS.map(({ Icon, title, body }, i) => (
            <div className="how-step" key={title}>
              <div className="how-step-node">
                <span className="ic" aria-hidden="true">
                  <Icon />
                </span>
                <b>{title}</b>
                <p>{body}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="how-arrow" aria-hidden="true">
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
