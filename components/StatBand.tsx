import { Users, CheckCircle, Shield, Heart } from "./Icons";

const STATS = [
  { icon: Users, title: "Background Checked Cleaners", sub: "Every cleaner vetted" },
  { icon: CheckCircle, title: "100% Satisfaction Guaranteed", sub: "We make it right, always" },
  { icon: Shield, title: "Insured for Your Peace of Mind", sub: "Licensed, bonded & insured" },
  { icon: Heart, title: "Locally Owned & Operated", sub: "Based in Pelham, AL" },
];

export default function StatBand() {
  return (
    <section className="statband" aria-label="Credentials">
      <div className="wrap">
        <div className="row">
          {STATS.map(({ icon: Icon, title, sub }) => (
            <div className="stat" key={title}>
              <span className="ic">
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
    </section>
  );
}
