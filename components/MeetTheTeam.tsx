import Image from "next/image";

/* Sits directly under MeetTheOwner and mirrors it (text left, photo right)
   so the two read as one block. The copy only restates what the trust strip
   and footer already say; add names here once the team members are happy
   to be named. */
export default function MeetTheTeam() {
  return (
    <section className="section team-section">
      <div className="wrap">
        <div className="owner-grid team-grid">
          <div className="owner-copy reveal">
            <p className="owner-eyebrow">Meet the team</p>
            <h2 className="section-title">The people in your home</h2>
            <p>
              Every cleaner passes a background check before entering your home, and every
              visit is licensed, bonded and insured.
            </p>
            <p>Locally owned and operated, based right here in Pelham, AL.</p>
          </div>

          <div className="owner-photo reveal">
            <Image
              src="/verity-cleaning-team.webp"
              alt="Tiffany, founder of Verity Cleaning, with two members of the Verity team in front of a car loaded with cleaning supplies"
              width={1000}
              height={1000}
              sizes="(max-width: 860px) 100vw, 440px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
