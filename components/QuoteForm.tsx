"use client";

import { useRef, useState } from "react";
import { Sms, Camera, X } from "./Icons";

const PHONE = "2058880199";
const MAX_PHOTOS = 8;

type Photo = { file: File; url: string };

function buildSmsHref(
  name: string,
  phone: string,
  email: string,
  address: string,
  service: string,
  bedrooms: string,
  bathrooms: string,
  message: string,
  photoCount: number
) {
  const details = message.trim() ? ` Details: ${message.trim()}.` : "";
  const emailPart = email.trim() ? ` Email: ${email.trim()}.` : "";
  const photoPart = photoCount > 0 ? ` I have ${photoCount} photo${photoCount === 1 ? "" : "s"} to attach.` : "";
  const body = `Hi Verity Cleaning — I'd like a quote. My name is ${name || "(name)"}. Address: ${address || "(address)"}. Service needed: ${service}. Home size: ${bedrooms} bed / ${bathrooms} bath.${details} Best phone: ${phone || "(phone)"}.${emailPart}${photoPart}`;
  return `sms:+1${PHONE}?&body=${encodeURIComponent(body)}`;
}

/* No backend exists on this static site — there's no way to pre-attach
   files to an `sms:` link, so this picker is for the customer's own
   reference. The confirmation screen reminds them to attach the same
   photos manually before sending the text. */
function PhotoPicker({ photos, onAdd, onRemove }: { photos: Photo[]; onAdd: (files: FileList) => void; onRemove: (i: number) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  return (
    <div>
      <label htmlFor="qphotos">
        Photos of your home <span className="label-opt">(optional)</span>
      </label>
      <div
        className={dragOver ? "photo-drop is-over" : "photo-drop"}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (e.dataTransfer.files?.length) onAdd(e.dataTransfer.files);
        }}
        role="button"
        tabIndex={0}
        aria-label="Add photos of your home"
      >
        <Camera aria-hidden="true" />
        <span>
          <b>Drop photos here</b> or click to upload
        </span>
        <input
          ref={inputRef}
          id="qphotos"
          type="file"
          accept="image/*"
          multiple
          className="sr-only"
          onChange={(e) => {
            if (e.target.files?.length) onAdd(e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {photos.length > 0 && (
        <div className="photo-grid">
          {photos.map((p, i) => (
            <div className="photo-thumb" key={p.url}>
              <img src={p.url} alt={`Uploaded photo ${i + 1}`} />
              <button type="button" aria-label={`Remove photo ${i + 1}`} onClick={() => onRemove(i)}>
                <X />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function QuoteForm() {
  const [draftHref, setDraftHref] = useState<string | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);

  function addFiles(fileList: FileList) {
    const incoming = Array.from(fileList).filter((f) => f.type.startsWith("image/"));
    setPhotos((current) => {
      const room = Math.max(0, MAX_PHOTOS - current.length);
      const next = incoming.slice(0, room).map((file) => ({ file, url: URL.createObjectURL(file) }));
      return [...current, ...next];
    });
  }

  function removePhoto(index: number) {
    setPhotos((current) => {
      const target = current[index];
      if (target) URL.revokeObjectURL(target.url);
      return current.filter((_, i) => i !== index);
    });
  }

  function onSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const href = buildSmsHref(
      ((f.get("name") as string) || "").trim(),
      ((f.get("phone") as string) || "").trim(),
      ((f.get("email") as string) || "").trim(),
      ((f.get("address") as string) || "").trim(),
      (f.get("service") as string) || "",
      (f.get("bedrooms") as string) || "",
      (f.get("bathrooms") as string) || "",
      (f.get("message") as string) || "",
      photos.length
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
        {photos.length > 0 && (
          <p className="photo-reminder">
            <Camera aria-hidden="true" />
            Don&rsquo;t forget to attach your {photos.length} photo{photos.length === 1 ? "" : "s"}{" "}
            using your messaging app&rsquo;s attachment button &mdash; we can&rsquo;t pre-attach them to the text.
          </p>
        )}
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
        <div>
          <label htmlFor="qe">
            Email <span className="label-opt">(optional)</span>
          </label>
          <input id="qe" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="qa">Home Address</label>
          <input
            id="qa"
            name="address"
            type="text"
            autoComplete="street-address"
            placeholder="123 Main St, Pelham, AL"
            required
          />
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
          <select id="qs" name="service" defaultValue="Recurring Cleaning">
            <option>Recurring Cleaning</option>
            <option>Deep Cleaning</option>
            <option>Move-In / Move-Out Cleaning</option>
            <option>Commercial &amp; Office Cleaning</option>
            <option>Post-Construction Cleaning</option>
            <option>Something else</option>
          </select>
        </div>
        <PhotoPicker photos={photos} onAdd={addFiles} onRemove={removePhoto} />
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
