export const company = {
  name: 'Netra Dynamics',
  tagline: 'Ideas into digital experiences',
  email: 'netradynamics@gmail.com',
  whatsapp: [
    { display: '+91 97264 91557', number: '919726491557' },
    { display: '+91 84014 63795', number: '918401463795' },
    { display: '+91 79901 26127', number: '917990126127' },
  ],
};

export const waLink = (number = company.whatsapp[0].number, text = "Hi Netra Dynamics, I'd like to discuss a project.") =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

export const pillars = [
  { num: '01', label: 'Websites', title: 'Make your presence felt.', text: 'WordPress & full-stack websites' },
  { num: '02', label: 'Software', title: 'Connect your business.', text: 'Apps & business systems' },
  { num: '03', label: 'Automation', title: 'Work smarter.', text: 'AI, chatbots & integrations' },
];

export const packages = [
  { kind: 'wp', eyebrow: 'Business presence', title: 'WordPress websites', text: 'A professional website to showcase your business and services.', priceLabel: 'Package price', price: 5999 },
  { kind: 'fs', eyebrow: 'Custom web experiences', title: 'Full-stack websites', text: 'Frontend + backend development for your custom web project.', priceLabel: 'Starting from', price: 23999 },
  { kind: 'ai', eyebrow: 'Connected workflows', title: 'AI automation + full-stack', text: 'AI automation services integrated with your full-stack website.', priceLabel: 'Starting from', price: 28999 },
];

export const categories = ['All', 'Run your business', 'Build & connect', 'Marketing & growth'];

const baseServices = [
  { category: 'Run your business', title: 'HR modules', text: 'Organize people and HR workflows.' },
  { category: 'Run your business', title: 'Billing modules', text: 'Manage invoices and billing.' },
  { category: 'Run your business', title: 'Project management system', text: 'Keep tasks, teams and projects aligned.' },
  { category: 'Run your business', title: 'CRM software', text: 'Manage leads and customer relationships.' },
  { category: 'Run your business', title: 'Enterprise software', text: 'Custom tools for business operations.' },
  { category: 'Build & connect', title: 'App development', text: 'Bring your idea to an application.' },
  { category: 'Build & connect', title: 'SaaS development', text: 'Build software as an online service.' },
  { category: 'Build & connect', title: 'Chatbots', text: 'Connect through conversational tools.' },
  { category: 'Build & connect', title: 'API integration', text: 'Link applications, services and data.' },
  { category: 'Build & connect', title: 'IoT solutions', text: 'Connect devices with your systems.' },
  { category: 'Marketing & growth', title: 'Digital marketing', text: 'Build brand visibility across digital channels.' },
  { category: 'Marketing & growth', title: 'Performance marketing', text: 'Paid campaigns focused on measurable goals.' },
];

export const slugify = (t) => t.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export const services = baseServices.map((s) => ({ ...s, slug: slugify(s.title) }));

export const why = [
  { title: 'Clear starting prices', text: 'Package and starting prices up front, with custom projects quoted to scope.' },
  { title: 'One partner, end to end', text: 'Websites, software, automation and marketing from a single team.' },
  { title: 'Tailored to your business', text: 'Solutions shaped around your industry, technology and project scope.' },
  { title: 'Talk to us directly', text: 'Reach us on WhatsApp or email and discuss your requirements, no long forms.' },
];

export const industries = [
  { name: 'FinTech & Banking', image: '/images/ind-fintech.jpg', text: 'Payments, lending, dashboards' },
  { name: 'Healthcare', image: '/images/ind-healthcare.jpg', text: 'Telemedicine, records, scheduling' },
  { name: 'Retail & E-commerce', image: '/images/ind-retail.jpg', text: 'Storefronts, inventory, loyalty' },
  { name: 'Logistics', image: '/images/ind-logistics.jpg', text: 'Fleet tracking, route planning' },
  { name: 'Education', image: '/images/ind-education.jpg', text: 'Learning platforms and portals' },
  { name: 'Manufacturing', image: '/images/ind-manufacturing.jpg', text: 'IoT, ERP, quality analytics' },
  { name: 'Real Estate', image: '/images/ind-realestate.jpg', text: 'Listings, CRM, virtual tours' },
  { name: 'Travel & Hospitality', image: '/images/ind-travel.jpg', text: 'Booking engines and guest apps' },
];

export const process = [
  { step: '01', title: 'Discuss', text: 'Tell us what you want to build. We listen, ask questions and understand your goals.' },
  { step: '02', title: 'Design', text: 'Wireframes and prototypes agreed with you before development starts.' },
  { step: '03', title: 'Build', text: 'Development in clear milestones, with regular updates along the way.' },
  { step: '04', title: 'Launch & grow', text: 'We take your product live, then support and improve it as you grow.' },
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
  {
    title: 'The Velorna',
    tag: 'WordPress website',
    url: 'https://thevelorna.com/',
    image: '/projects/thevelorna.jpg',
    text: 'An online fashion store for a casual, Gen-Z streetwear brand, built on WordPress. Shoppers browse T-shirts, oversized tees and caps by collection, spot sale prices at a glance and add their picks to the cart.',
    points: [
      'Online shop with T-shirt, oversized tee and cap collections',
      'Bold, brand-led homepage with featured and newest products',
      'Sale pricing, product categories, search and cart',
      'Products and content managed easily from the WordPress dashboard',
    ],
  },
];
