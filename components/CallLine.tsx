import { Phone } from "./Icons";

export const PHONE_DISPLAY = "(205) 946-0304";
export const PHONE_HREF = "tel:+12059460304";

/* Shown under every quote button. The quote form is a good path, but a fair
   number of people would simply rather call — and a home-service site that
   only offers a form loses them.

   The tel: href is what makes the number open the dialer on a phone, so the
   number itself must be the link rather than plain text beside one. */
export default function CallLine({
  prefix = "Prefer to talk?",
  className = "",
}: {
  prefix?: string;
  className?: string;
}) {
  return (
    <p className={`call-line ${className}`.trim()}>
      <Phone aria-hidden="true" />
      <span>
        {prefix}{" "}
        <a href={PHONE_HREF}>
          Call or text {PHONE_DISPLAY}
        </a>
      </span>
    </p>
  );
}
