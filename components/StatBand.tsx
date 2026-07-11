import { Shield, Users, CheckCircle, Clock } from "./Icons";

const STATS = [
  { icon: Shield, title: "Licensed & Bonded", sub: "Full peace of mind" },
  { icon: Users, title: "Trained Cleaners", sub: "Background-checked staff" },
  { icon: CheckCircle, title: "100% Guaranteed", sub: "We make it right, always" },
  { icon: Clock, title: "On-Time Guarantee", sub: "We respect your schedule" },
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
