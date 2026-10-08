export const services = [
  { title: 'Full-Stack Development', text: 'End-to-end web products built with React, Node.js and modern databases, from MVP to scale.' },
  { title: 'Mobile Solutions', text: 'Native-feel iOS and Android apps built once with React Native and shipped to both stores.' },
  { title: 'AI & Automation', text: 'LLM assistants, intelligent workflows and process automation that cut manual work.' },
  { title: 'SaaS Development', text: 'Multi-tenant, subscription-ready platforms with billing, roles and analytics built in.' },
  { title: 'Cloud & DevOps', text: 'CI/CD, Docker, Kubernetes and AWS/Azure infrastructure with monitoring and auto-scaling.' },
  { title: 'API Integration', text: 'Secure REST and GraphQL APIs and seamless third-party integrations: payments, ERP, messaging.' },
  { title: 'CRM & ERP', text: 'Custom CRM and ERP systems that unify sales, inventory, finance and operations.' },
  { title: 'Data Analytics', text: 'Dashboards, pipelines and BI that turn raw data into confident business decisions.' },
  { title: 'IoT Solutions', text: 'Connected devices, real-time telemetry and remote control platforms for smart operations.' },
  { title: 'Enterprise Software', text: 'Secure, compliant and highly available systems engineered for large organisations.' },
  { title: 'Digital Transformation', text: 'Modernising legacy processes and systems into agile, cloud-native digital workflows.' },
  { title: 'Digital Marketing', text: 'SEO, performance ads and content strategy that drive qualified traffic and growth.' },
];

export const stats = [
  { value: 150, suffix: '+', label: 'Projects delivered' },
  { value: 60, suffix: '+', label: 'Enterprise & startup clients' },
  { value: 8, suffix: '+', label: 'Years of experience' },
  { value: 99, suffix: '%', label: 'On-time delivery rate' },
];

export const clients = ['FinTrack', 'MediConnect', 'ShopSphere', 'LogiFleet', 'EduNova', 'BuildRight', 'Voyago', 'AgriCore'];

export const why = [
  { title: 'Senior-led teams', text: 'Every project is staffed with experienced engineers, not a rotating bench of juniors.' },
  { title: 'Transparent delivery', text: 'Weekly demos, shared roadmaps and clear reporting so you always know where things stand.' },
  { title: 'Security by design', text: 'Threat modelling, code review and automated testing built into every sprint.' },
  { title: 'Long-term partnership', text: 'We stay after launch with monitoring, support and continuous improvement.' },
];

export const industries = [
  { name: 'FinTech & Banking', image: '/images/ind-fintech.jpg', text: 'Payments, lending, risk dashboards' },
  { name: 'Healthcare', image: '/images/ind-healthcare.jpg', text: 'Telemedicine, records, scheduling' },
  { name: 'Retail & E-commerce', image: '/images/ind-retail.jpg', text: 'Storefronts, inventory, loyalty' },
  { name: 'Logistics', image: '/images/ind-logistics.jpg', text: 'Fleet tracking, route optimisation' },
  { name: 'Education', image: '/images/ind-education.jpg', text: 'Learning platforms and portals' },
  { name: 'Manufacturing', image: '/images/ind-manufacturing.jpg', text: 'IoT, ERP, quality analytics' },
  { name: 'Real Estate', image: '/images/ind-realestate.jpg', text: 'Listings, CRM, virtual tours' },
  { name: 'Travel & Hospitality', image: '/images/ind-travel.jpg', text: 'Booking engines and guest apps' },
];

export const process = [
  { step: '01', title: 'Discover', text: 'We learn your goals, users and constraints through focused workshops.' },
  { step: '02', title: 'Design', text: 'Wireframes and clickable prototypes validated before any code is written.' },
  { step: '03', title: 'Build', text: 'Agile sprints with weekly demos, code review and automated testing.' },
  { step: '04', title: 'Launch & Grow', text: 'Zero-downtime deployment, monitoring and continuous improvement.' },
];

export const projects = [
  {
    title: 'Emergency QR',
    tag: 'Healthcare tech',
    url: 'https://emergencyqr-gen.vercel.app/',
    image: '/projects/emergency-qr.jpg',
    text: 'A full-stack emergency profile system. Users create a single profile that generates one stable QR code for instant, read-only access during emergencies. Built for reliability and quick access when it matters most.',
    points: [
      'Public emergency view showing only critical data',
      'Owner-only edits via per-profile edit tokens',
      'Mobile-first UI with English, Hindi and Gujarati',
    ],
  },
  {
    title: 'OverClocked',
    tag: 'E-commerce platform',
    url: 'https://over-clocked.vercel.app/',
    image: '/projects/overclocked.jpg',
    text: 'A specialised e-commerce platform for PC builders, gamers and hardware enthusiasts. Customers browse GPUs, CPUs, RAM, SSDs and cooling, manage cart and wishlist, and pay securely via Razorpay.',
    points: [
      'Three roles (Customer, Seller, Admin), each with a dedicated dashboard',
      'Sellers list hardware with detailed specs, manage inventory and track orders',
      'Admins control users, seller approvals and platform analytics',
      'Secure sign-in, product image management and automated email notifications',
    ],
  },
];
