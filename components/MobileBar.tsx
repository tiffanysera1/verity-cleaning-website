import { Phone, Sms } from "./Icons";

/* Thumb-friendly fixed call/quote bar shown on small screens (< 760px). */
export default function MobileBar() {
  return (
    <div className="mbar" aria-label="Quick contact">
      <a href="tel:+12058880199" className="btn btn--teal">
        <Phone />
        Call Now
      </a>
      <a href="#quote" className="btn btn--navy">
        <Sms />
        Get Estimate
      </a>
    </div>
  );
}
