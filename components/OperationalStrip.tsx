import { CalendarCheck, MessageCircle, Shield, CreditCard } from "./Icons";

const ITEMS = [
  { icon: CalendarCheck, title: "You choose your time", sub: "Request preferred and alternate times." },
  { icon: MessageCircle, title: "We communicate clearly", sub: "Updates from quote to completion." },
  { icon: Shield, title: "You approve, then we clean", sub: "Detail-focused pros who care." },
  { icon: CreditCard, title: "Pay only after your clean", sub: "Review your clean. Then pay securely." },
];

export default function OperationalStrip() {
  return (
    <section className="op-strip-section">
      <div className="wrap">
        <div className="op-strip reveal">
          {ITEMS.map(({ icon: Icon, title, sub }) => (
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
