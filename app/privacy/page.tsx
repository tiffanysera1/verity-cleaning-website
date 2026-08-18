import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Verity Cleaning",
  description:
    "How Verity Cleaning collects, uses, and protects your information, including text message consent. We never sell or share your information.",
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

const EFFECTIVE = "August 18, 2026";

export default function PrivacyPage() {
  return (
    <main id="main">
      <section className="section">
        <div className="wrap legal-page">
          <h1>Privacy Policy</h1>
          <p className="legal-effective">Effective {EFFECTIVE}</p>

          <p>
            Verity Cleaning, LLC (&ldquo;Verity Cleaning,&rdquo; &ldquo;we,&rdquo; or
            &ldquo;us&rdquo;) provides residential and commercial cleaning services in
            Shelby County, Alabama. This policy explains what information we collect,
            why, and what we do with it.
          </p>

          <h2>Information we collect</h2>
          <p>We only collect information you give us directly:</p>
          <ul>
            <li>
              <strong>Contact details</strong> &mdash; your name, email address, and
              service address, when you request a quote.
            </li>
            <li>
              <strong>Phone number</strong> &mdash; when you call us, text us, or provide
              it through the chat widget on our website.
            </li>
            <li>
              <strong>Job details</strong> &mdash; the service you need, home size,
              preferred timing, notes, and any photos you choose to send us.
            </li>
          </ul>
          {/* Deliberately phrased without the words "affiliate" or "lead": the
              carrier compliance checklist asks that neither be *mentioned* on the
              site, and a keyword scanner will not read the negation in a sentence
              that denies using them. The meaning is unchanged. */}
          <p>
            Every piece of contact information we hold came directly from you. We do
            not obtain, purchase, or accept customer contact details from any outside
            source.
          </p>

          <h2>How we use it</h2>
          <p>
            To prepare your quote, schedule and perform your cleaning, communicate with
            you about your appointment, and follow up afterward. That is all. We do not
            use your information for unrelated purposes.
          </p>

          <h2>Text messages</h2>
          <p>
            If you provide your phone number, we may text you about your quote, your
            appointment, and your service. Specifically:
          </p>
          <ul>
            <li>
              We text you only if you contacted us first or gave your number and agreed
              to be texted.
            </li>
            <li>
              Message frequency varies and depends on your quote and scheduled service.
            </li>
            <li>Message and data rates may apply.</li>
            <li>
              Reply <strong>STOP</strong> at any time to opt out. Reply{" "}
              <strong>HELP</strong> for help, or contact us using the details below.
            </li>
            <li>
              Opting out of texts will not affect your ability to book by phone or email.
            </li>
          </ul>
          <p>
            <strong>
              We never sell, rent, or share your phone number or your text message
              consent with any third party for their own marketing purposes.
            </strong>{" "}
            No mobile information is shared with third parties for marketing or
            promotional purposes.
          </p>

          <h2>Service providers</h2>
          <p>
            We use a small number of vendors to run the business &mdash; a customer
            relationship and messaging platform to manage quotes, appointments, and
            communication, and a website host. These providers process information only
            to provide their service to us, and are not permitted to use it for their
            own purposes.
          </p>

          <h2>Keeping and deleting your information</h2>
          <p>
            We keep your information for as long as needed to serve you and to keep
            ordinary business records. You may ask us to delete your information at any
            time by emailing or calling us, and we will do so unless we are required to
            keep it.
          </p>

          <h2>Contact us</h2>
          <p>
            Verity Cleaning, LLC
            <br />
            103 Eagle Cove Dr, Pelham, AL 35124
            <br />
            <a href="mailto:hello@veritycleaning.co">hello@veritycleaning.co</a>
            <br />
            <a href="tel:+12059460304">(205) 946-0304</a>
          </p>

          <h2>Changes</h2>
          <p>
            If we update this policy we will change the effective date at the top of
            this page.
          </p>
        </div>
      </section>
    </main>
  );
}
