import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Verity Cleaning",
  description:
    "The terms that apply when you book cleaning with Verity Cleaning in Shelby County, AL — quotes, scheduling, payment, and our satisfaction guarantee.",
  alternates: { canonical: "/terms/" },
  robots: { index: true, follow: true },
};

const EFFECTIVE = "August 18, 2026";

export default function TermsPage() {
  return (
    <main id="main">
      <section className="section">
        <div className="wrap legal-page">
          <h1>Terms of Service</h1>
          <p className="legal-effective">Effective {EFFECTIVE}</p>

          <p>
            These terms apply when you request a quote from or book a cleaning with
            Verity Cleaning LLC in Shelby County, Alabama.
          </p>

          <h2>Quotes</h2>
          <p>
            Quotes are personalized and based on the information you give us &mdash;
            home size, service type, condition, and any add-ons. A quote is an estimate
            until we confirm your booking. If the home turns out to be substantially
            different from what was described, we will talk with you about the
            difference before doing additional work.
          </p>

          <h2>Scheduling and access</h2>
          <p>
            You are responsible for making sure we can access the property at the
            scheduled time. If we cannot get in, we will contact you to reschedule. If
            you need to change or cancel an appointment, let us know as early as you can
            so we can offer the slot to someone else.
          </p>

          <h2>Payment</h2>
          <p>
            No payment is due when you book. Payment is due after your service is
            complete, using the method arranged with you.
          </p>

          <h2>Satisfaction guarantee</h2>
          <p>
            If something was missed or is not up to standard, tell us within 24 hours of
            your cleaning and we will come back and put it right at no additional
            charge.
          </p>

          <h2>Things we do not do</h2>
          <p>
            Some tasks fall outside a standard cleaning &mdash; for example, work
            requiring specialist equipment or certification, moving heavy furniture, or
            handling biohazards. Individual service pages list what is and is not
            included. If you are unsure, ask us before booking.
          </p>

          <h2>Liability</h2>
          <p>
            Verity Cleaning is licensed, bonded, and insured. If we damage something
            while working in your home, tell us promptly and we will make it right
            through our insurance. We are not responsible for pre-existing damage, or
            for items that were already loose, worn, or improperly installed.
          </p>

          <h2>Communication</h2>
          <p>
            By contacting us, you agree we may reply by phone, text, or email about your
            quote and service. How we handle your information, and how to stop text
            messages, is described in our{" "}
            <a href="/privacy/">Privacy Policy</a>.
          </p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of the State of Alabama.</p>

          <h2>Contact us</h2>
          <p>
            Verity Cleaning LLC
            <br />
            103 Eagle Cove Drive, Pelham, AL 35124
            <br />
            <a href="mailto:hello@veritycleaning.co">hello@veritycleaning.co</a>
            <br />
            <a href="tel:+12059460304">(205) 946-0304</a>
          </p>

          <h2>Changes</h2>
          <p>
            If we update these terms we will change the effective date at the top of
            this page.
          </p>
        </div>
      </section>
    </main>
  );
}
