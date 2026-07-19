import { Camera, FileText, Sms, HomeSparkle, CheckCircle, ArrowRight, Sparkle, CalendarCheck, Clock, CreditCard, MessageCircle } from "./Icons";

const STEPS = [
  {
    Icon: Camera,
    title: "Request a Quote",
    body: "Tell us about your home and upload photos.",
  },
  {
    Icon: FileText,
    title: "Receive Your Personalized Cleaning Plan",
    body: "We create a personalized quote just for you.",
  },
  {
    Icon: Sms,
    title: "Receive Updates",
    body: "Get notified when your cleaner is on the way, when the job starts, and when it's complete.",
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

const PORTAL_FEATURES = [
  { Icon: CalendarCheck, label: "Book cleanings" },
  { Icon: Clock, label: "Track your cleans" },
  { Icon: CreditCard, label: "Update card info" },
  { Icon: MessageCircle, label: "Reschedule or cancel" },
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

        <div className="portal-callout reveal">
          <div className="portal-callout-text">
            <b>Manage everything from your own portal</b>
            <p>
              Once you&rsquo;re a customer, we&rsquo;ll send you a link to create your free profile if
              you&rsquo;d like one &mdash; book new cleanings, track upcoming appointments, update your
              card on file, and reschedule or cancel anytime.
            </p>
          </div>
          <div className="portal-callout-features">
            {PORTAL_FEATURES.map(({ Icon, label }) => (
              <span key={label}>
                <Icon aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
