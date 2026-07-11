import Image from "next/image";
import { Check, Phone } from "./Icons";

const REASONS = [
  ["Absolute Transparency", "no hidden fees, no guesswork. You see our honest pricing upfront."],
  ["Meticulous Checklist", "our trained cleaners follow a detailed, top-to-bottom sanitization process."],
  ["Licensed &amp; Insured", "every cleaner and every visit is fully covered for your peace of mind."],
  ["Background-Checked Staff", "trustworthy, bonded, and insured professionals clean your home."],
];

export default function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="wrap why-grid">
        <div className="why-art reveal">
          <Image 
            src="/clean-home.png" 
            alt="Verity Cleaning pristine home environment" 
            width={800} 
            height={600} 
            style={{ width: "100%", height: "auto", borderRadius: "12px" }}
          />
          <span className="tag">Absolute Integrity</span>
        </div>

        <div className="reveal">
          <span className="eyebrow">Why Verity Cleaning</span>
          <h2 style={{ marginTop: "12px" }}>Truth &amp; Integrity in Every Clean</h2>
          <p className="lead" style={{ marginTop: "14px" }}>
            "Verity" means truth and authenticity. As a locally owned cleaning service in Shelby County, AL, we operate with transparent standards, strict attention to detail, and a commitment to your satisfaction.
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
              <b>Background-Checked Team</b>
              <span>Every cleaner vetted before they enter your home</span>
            </div>
            <div className="owner">
              <b>100% Guaranteed</b>
              <span>Not happy? We will make it right, free of charge</span>
            </div>
          </div>
          <div className="section-cta-row reveal" style={{ justifyContent: "flex-start", marginTop: "28px" }}>
            <a href="tel:+12058880199" className="btn btn--teal btn--lg">
              <Phone />
              Call or Text (205) 888-0199
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
