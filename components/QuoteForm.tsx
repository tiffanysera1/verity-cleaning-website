"use client";

import { useState } from "react";
import { Sms } from "./Icons";

const PHONE = "2058880199";

function buildSmsHref(
  name: string,
  phone: string,
  service: string,
  bedrooms: string,
  bathrooms: string,
  message: string
) {
  const details = message.trim() ? ` Details: ${message.trim()}.` : "";
  const body = `Hi Verity Cleaning — I'd like a quote. My name is ${name || "(name)"}. Service needed: ${service}. Home size: ${bedrooms} bed / ${bathrooms} bath.${details} Best phone: ${phone || "(phone)"}.`;
  return `sms:+1${PHONE}?&body=${encodeURIComponent(body)}`;
}

export default function QuoteForm() {
  const [draftHref, setDraftHref] = useState<string | null>(null);

  function onSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const href = buildSmsHref(
      ((f.get("name") as string) || "").trim(),
      ((f.get("phone") as string) || "").trim(),
      (f.get("service") as string) || "",
      (f.get("bedrooms") as string) || "",
      (f.get("bathrooms") as string) || "",
      (f.get("message") as string) || ""
    );
    setDraftHref(href);
    window.location.href = href;
  }

  if (draftHref) {
    return (
      <div className="quote reveal" id="quote">
        <h2>Your text is ready</h2>
        <p className="note">
          We just opened your messaging app with the details filled in &mdash; review
          it and hit send. Didn&rsquo;t open?
        </p>
        <a className="btn btn--primary" href={draftHref} style={{ width: "100%" }}>
          <Sms />
          Open the text draft
        </a>
        <p className="or" style={{ marginTop: "12px" }}>
          or call <a href={`tel:+1${PHONE}`}>(205) 888-0199</a>
        </p>
        <button type="button" className="quote-edit" onClick={() => setDraftHref(null)}>
          &larr; Edit details
        </button>
      </div>
    );
  }

  return (
    <div className="quote reveal" id="quote">
      <h2>Tell us about your home</h2>
      <p className="note">Fill it out &mdash; we&rsquo;ll draft your text in one tap.</p>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="qn">Name</label>
          <input id="qn" name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="qp">Phone</label>
          <input id="qp" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(205) 555-0123" required />
        </div>
        <div className="quote-row">
          <div>
            <label htmlFor="qbed">Bedrooms</label>
            <select id="qbed" name="bedrooms" defaultValue="3">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
          <div>
            <label htmlFor="qbath">Bathrooms</label>
            <select id="qbath" name="bathrooms" defaultValue="2">
              <option>1</option>
              <option>1.5</option>
              <option>2</option>
              <option>2.5</option>
              <option>3+</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="qs">Service needed</label>
          <select id="qs" name="service" defaultValue="Residential Cleaning">
            <option>Residential Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move-In / Move-Out Cleaning</option>
            <option>Commercial &amp; Office Cleaning</option>
            <option>Post-Construction Cleaning</option>
            <option>Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="qm">
            Anything else we should know <span className="label-opt">(optional)</span>
          </label>
          <textarea
            id="qm"
            name="message"
            rows={3}
            placeholder="E.g., pets in the home, preferred schedule, specific areas to focus on."
          />
        </div>
        <button className="btn btn--primary" type="submit">
          <Sms />
          Get my personalized quote
        </button>

        <p className="or">
          or just call/text <a href={`tel:+1${PHONE}`}>(205) 888-0199</a>
        </p>
      </form>
    </div>
  );
}
