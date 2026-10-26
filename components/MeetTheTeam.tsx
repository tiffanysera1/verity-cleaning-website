import Image from "next/image";
import { ArrowRight } from "./Icons";
import { QUOTE_URL } from "./quoteLink";
import CallLine from "./CallLine";

/* Text beside a large team photo, with a quote button, on a sky band so it
   reads as its own section after Meet the Owner. Every line restates
   something already published on the site (trust strip, footer, quote
   process); add team names once they are happy to be named. */
export default function MeetTheTeam() {
  return (
    <section className="section tone-sky" id="team">
      <div className="wrap">
        <div className="team-grid">
          <div className="team-copy reveal">
            <h2 className="section-title">A local team you can trust in your home</h2>
            <p className="lead">
              Tell us about your home and we&rsquo;ll send a personalized quote &mdash; no
              hidden fees, and you don&rsquo;t pay until the work is done.
            </p>

            <h3>Professional cleaning, with a personal touch</h3>
            <p>
              Every cleaner passes a background check before entering your home. We&rsquo;re
              licensed, bonded and insured, and locally owned and operated right here in
              Pelham, AL.
            </p>

            <div className="team-actions">
              <a className="btn btn--primary btn--lg" href={QUOTE_URL}>
                Get My Free Quote
                <ArrowRight aria-hidden="true" />
              </a>
              <CallLine />
            </div>
          </div>

          <div className="team-photo reveal">
            <Image
              src="/verity-cleaning-team.webp"
              alt="Tiffany, founder of Verity Cleaning, with two members of the Verity team in front of a car loaded with cleaning supplies"
              width={1000}
              height={1000}
              sizes="(max-width: 860px) 100vw, 520px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
