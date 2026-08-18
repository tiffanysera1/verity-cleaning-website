import { Phone, Sms } from "./Icons";
import { QUOTE_FORM_URL } from "./quoteLink";

/* Thumb-friendly fixed call/quote bar shown on small screens (< 760px). */
export default function MobileBar() {
  return (
    <div className="mbar" aria-label="Quick contact">
      <a href="tel:+12059460304" className="btn btn--primary">
        <Phone />
        Call now
      </a>
      <a href={QUOTE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
        <Sms />
        Get quote
      </a>
    </div>
  );
}
