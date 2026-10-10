const paths = [
  // HR modules
  'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M22 21v-2a4 4 0 00-3-3.9 M16 3.1a4 4 0 010 7.8',
  // Billing modules
  'M6 2h12a1 1 0 011 1v19l-3-2-3 2-3-2-3 2V3a1 1 0 011-1z M9 8h6 M9 12h6',
  // Project management
  'M3 5a1 1 0 011-1h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5z M8 8v8 M12 8v5 M16 8v8',
  // CRM
  'M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z M8 12a2 2 0 100-4 2 2 0 000 4z M5.5 16c.5-1.5 1.5-2 2.5-2s2 .5 2.5 2 M14 9h4 M14 13h4',
  // Enterprise
  'M3 21h18 M5 21V5a1 1 0 011-1h8a1 1 0 011 1v16 M19 21V10h-4 M9 8h2 M9 12h2 M9 16h2',
  // App development
  'M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z M11 18h2',
  // SaaS
  'M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z M3 9h18 M7 6.5h.01 M10 6.5h.01',
  // Chatbots
  'M4 4h16a1 1 0 011 1v10a1 1 0 01-1 1h-9l-5 4v-4H4a1 1 0 01-1-1V5a1 1 0 011-1z M8 10h.01 M12 10h.01 M16 10h.01',
  // API integration
  'M8 7l-5 5 5 5 M16 7l5 5-5 5 M14 4l-4 16',
  // IoT
  'M12 9a3 3 0 100 6 3 3 0 000-6z M12 2v4 M12 18v4 M2 12h4 M18 12h4 M5 5l3 3 M16 16l3 3',
  // Digital marketing
  'M3 11v2a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1z M15 9a4 4 0 010 6 M18 6a8 8 0 010 12',
  // Performance marketing
  'M12 21a9 9 0 100-18 9 9 0 000 18z M12 16a4 4 0 100-8 4 4 0 000 8z M12 13a1 1 0 100-2 1 1 0 000 2z',
];

export default function Icon({ i, size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[i % paths.length]} />
    </svg>
  );
}
