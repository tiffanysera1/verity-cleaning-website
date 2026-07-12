import Image from "next/image";
import { Check, Phone } from "./Icons";

const REASONS = [
  ["No hidden fees", "the price we quote is the price you pay — no surprise add-ons."],
  ["A detailed checklist", "our cleaners follow the same thorough process every visit."],
  ["Licensed &amp; insured", "every cleaner and every visit is fully covered for your peace of mind."],
  ["Background-checked staff", "trustworthy people you can feel comfortable welcoming into your home."],
];

export default function WhyUs() {
  return (
    <section className="section why tone-sky" id="why">
      <div className="wrap why-grid">
        <div className="why-art reveal">
          <Image
            src="/clean-home.png"
            alt="A tidy, sunlit home"
            width={800}
            height={600}
            style={{ width: "100%", height: "auto", borderRadius: "16px" }}
          />
          <span className="tag">Honest, from quote to clean</span>
        </div>

        <div className="reveal">
          <span className="eyebrow">Why Verity</span>
          <h2 style={{ marginTop: "12px" }}>We do what we say we&rsquo;ll do</h2>
          <p className="lead" style={{ marginTop: "14px" }}>
            &ldquo;Verity&rdquo; means truth. It&rsquo;s a simple idea we build everything
            around: transparent pricing, careful work, and a team you can trust in your home.
          </p>
          <ul className="checks">
            {REASONS.map(([title, rest]) => (
              <li key={title}>
                <span className="ck">
                  <Check />
                </span>
                <span>
                  <b>{title}</b> &mdash; {rest}
                </span>
              </li>
            ))}
          </ul>
          <div className="owners">
            <div className="owner">
              <b>Background-checked team</b>
              <span>Every cleaner vetted before they enter your home</span>
            </div>
            <div className="owner">
              <b>100% guaranteed</b>
              <span>Not happy? We&rsquo;ll make it right, free of charge</span>
            </div>
          </div>
          <div className="section-cta-row reveal" style={{ justifyContent: "flex-start", marginTop: "28px" }}>
            <a href="tel:+12058880199" className="btn btn--primary btn--lg">
              <Phone />
              Call or text (205) 888-0199
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
