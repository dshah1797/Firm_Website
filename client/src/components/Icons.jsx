const paths = [
  // full-stack: layers
  'M12 2l9 5-9 5-9-5 9-5z M3 12l9 5 9-5 M3 17l9 5 9-5',
  // mobile
  'M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z M11 18h2',
  // AI chip
  'M8 7h8a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1z M9 2v3 M15 2v3 M9 19v3 M15 19v3 M2 9h3 M2 15h3 M19 9h3 M19 15h3',
  // SaaS window
  'M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z M3 9h18 M7 6.5h.01 M10 6.5h.01',
  // cloud
  'M7 19a4.5 4.5 0 010-9 6 6 0 0111.5 1.5A3.8 3.8 0 0117.5 19H7z',
  // API
  'M8 7l-5 5 5 5 M16 7l5 5-5 5 M14 4l-4 16',
  // CRM/ERP users
  'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M22 21v-2a4 4 0 00-3-3.9 M16 3.1a4 4 0 010 7.8',
  // analytics
  'M3 3v18h18 M8 17v-6 M13 17V7 M18 17v-4',
  // IoT
  'M2 9a15 15 0 0120 0 M5 12.5a10 10 0 0114 0 M8.5 16a5 5 0 017 0 M12 20h.01',
  // enterprise building
  'M3 21h18 M5 21V5a1 1 0 011-1h8a1 1 0 011 1v16 M19 21V10h-4 M9 8h2 M9 12h2 M9 16h2',
  // transformation
  'M21 12a9 9 0 01-15.5 6.2 M3 12a9 9 0 0115.5-6.2 M19 2v4h-4 M5 22v-4h4',
  // marketing
  'M3 17l6-6 4 4 8-8 M15 7h6v6',
];

export default function Icon({ i, size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[i % paths.length]} />
    </svg>
  );
}
