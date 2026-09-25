export default function Brujula() {
  return (
    <svg className="brujula" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
      <path d="M50 8l7 35 35 7-35 7-7 35-7-35-35-7 35-7z" fill="currentColor" opacity=".85" />
      <circle cx="50" cy="50" r="4" fill="var(--papel)" />
      <text x="50" y="7" textAnchor="middle" fontSize="9" fill="currentColor" fontFamily="Rozha One">N</text>
    </svg>
  );
}
