import { Users, CheckCircle, Shield, Heart } from "./Icons";

const ITEMS = [
  { icon: Users, title: "Background Checked Cleaners", sub: "Every cleaner passes a background check before entering your home." },
  { icon: CheckCircle, title: "100% Satisfaction Guaranteed", sub: "We make it right, always." },
  { icon: Shield, title: "Insured for Your Peace of Mind", sub: "Licensed, bonded & insured." },
  { icon: Heart, title: "Locally Owned & Operated", sub: "Based right here in Pelham, AL." },
];

export default function OperationalStrip() {
  return (
    <section className="trust-strip-section" id="trust">
      <div className="wrap">
        <div className="trust-strip-frame reveal">
          <div className="trust-strip">
            {ITEMS.map(({ icon: Icon, title, sub }) => (
              <div className="trust-item" key={title}>
                <span className="ic" aria-hidden="true">
                  <Icon />
                </span>
                <div>
                  <b>{title}</b>
                  <span>{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
