import { Home, CheckCircle, Clock, Sms, Heart } from "./Icons";

const STEPS = [
  {
    Icon: Home,
    title: "Tell Us About Your Home",
    body: "Complete a simple questionnaire and optionally upload a few photos so we can understand your home's needs.",
  },
  {
    Icon: CheckCircle,
    title: "Receive Your Personalized Quote",
    body: "Every home is different. We carefully review your information and send a customized quote — no one-size-fits-all pricing.",
  },
  {
    Icon: Clock,
    title: "Schedule Your Cleaning",
    body: "Choose a date and time that works best for you.",
  },
  {
    Icon: Sms,
    title: "Stay Informed",
    body: "If you opt in, we'll keep you updated throughout the appointment.",
    checklist: ["Cleaner is on the way", "Cleaning has started", "Cleaning is complete"],
  },
  {
    Icon: Heart,
    title: "Enjoy Your Time Back",
    body: "Come home to a beautifully cleaned space and spend your time doing what matters most.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <div className="center reveal">
          <span className="eyebrow">What to Expect</span>
          <h2 style={{ marginTop: "12px" }}>Here&rsquo;s exactly what happens</h2>
          <p className="lead" style={{ margin: "14px auto 0" }}>
            No guesswork, no hidden steps. Here&rsquo;s the whole process, start to finish.
          </p>
        </div>

        <ol className="timeline">
          {STEPS.map(({ Icon, title, body, checklist }, i) => (
            <li className="tstep reveal" key={title}>
              <div className="tstep-card">
                <span className="sr-only">Step {i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                {checklist && (
                  <ul className="tstep-check">
                    {checklist.map((c) => (
                      <li key={c}>
                        <CheckCircle />
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <span className="tstep-node" aria-hidden="true">
                <Icon />
              </span>
              <span className="tstep-spacer" />
            </li>
          ))}
        </ol>

        <div className="section-cta-row reveal">
          <a href="#quote" className="btn btn--primary btn--lg">
            Get my personalized quote
          </a>
        </div>
      </div>
    </section>
  );
}
