/* Decorative sparkle watermark. Purely visual — aria-hidden,
   pointer-events:none, and sized/positioned via the `.watermark` CSS. */
export default function Watermark({ className }: { className?: string }) {
  return (
    <span className={className ? `watermark ${className}` : "watermark"} aria-hidden="true">
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" focusable="false">
        <path d="M100 15 L118 78 L181 100 L118 122 L100 185 L82 122 L19 100 L82 78 Z" />
      </svg>
    </span>
  );
}
