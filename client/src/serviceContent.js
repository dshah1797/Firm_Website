// Detail-page content for each service, keyed by slug.
// builds / whyUs: [title, text] pairs. faqs: [question, answer] pairs.

export const comparison = [
  ['Tailored to your process', 'One-size-fits-all tools you have to adapt to'],
  ['Clear starting prices and scope', 'Vague quotes and surprise costs later'],
  ['Direct line to the team on WhatsApp or email', 'Ticket queues and long waits'],
  ['Built to grow with your business', 'A rebuild when you outgrow it'],
  ['Support and improvements after launch', 'Handed over and forgotten'],
];

export const serviceContent = {
  'hr-modules': {
    tagline: 'Run your people operations from one place.',
    overview: 'Our HR modules bring employee records, attendance, leave, payroll inputs and hiring into a single system shaped around how your company actually works. No more scattered spreadsheets or manual follow-ups.',
    builds: [
      ['Employee directory & records', 'Central profiles with documents, roles and history.'],
      ['Attendance & leave', 'Check-ins, leave requests and approvals with clear balances.'],
      ['Payroll inputs', 'Salary components, deductions and reports ready for payroll.'],
      ['Recruitment tracking', 'Openings, candidates and interview stages in one pipeline.'],
      ['Onboarding & exits', 'Checklists so every joiner and leaver is handled consistently.'],
      ['HR reports', 'Headcount, attrition and attendance insights at a glance.'],
    ],
    benefits: ['Less paperwork and manual follow-up', 'One source of truth for employee data', 'Faster approvals for leave and requests', 'Reports ready when you need them'],
    whyUs: [
      ['Built around your policies', 'Your leave rules, approval chains and structures, not a generic template.'],
      ['Role-based access', 'Employees, managers and HR each see only what they should.'],
      ['Starts simple, grows with you', 'Begin with the modules you need today and add more later.'],
      ['Support after launch', 'Direct access to our team for changes, questions and improvements.'],
    ],
    faqs: [
      ['Can you add only the modules we need?', 'Yes. We scope the modules around your priorities, for example attendance and leave first, and expand later.'],
      ['Can it match our company policies?', 'Yes. Leave types, approval flows and user roles are configured to your policies.'],
      ['Can it connect with our other tools?', 'We can link it with billing, accounting and other business systems through integrations.'],
    ],
  },

  'billing-modules': {
    tagline: 'Invoices, payments and billing, under control.',
    overview: 'Create professional invoices, track payments and keep your accounts organised. Our billing modules automate the repetitive parts of billing so you get paid faster and make fewer errors.',
    builds: [
      ['Invoices & quotations', 'Branded documents with taxes, discounts and terms.'],
      ['Payment tracking', 'Know what is paid, pending and overdue at a glance.'],
      ['Recurring billing', 'Automatic invoices for subscriptions and repeat clients.'],
      ['Customer & item records', 'Reusable client details, products and services.'],
      ['Reminders & notifications', 'Automated follow-ups for due and overdue invoices.'],
      ['Billing reports', 'Sales, outstanding amounts and tax summaries.'],
    ],
    benefits: ['Get paid faster', 'Fewer manual errors', 'A clear view of outstanding payments', 'Professional, consistent documents'],
    whyUs: [
      ['Fits how you bill', 'Per-client pricing, tax rules and invoice formats set up for your business.'],
      ['Clear, accurate reports', 'Numbers your accountant can use without rework.'],
      ['Connects to your systems', 'Link billing with CRM, projects and online payments.'],
      ['Direct support', 'Questions answered by the team that built it.'],
    ],
    faqs: [
      ['Can invoices carry our branding?', 'Yes. Logo, colours, terms and layout are designed to match your brand.'],
      ['Can it handle taxes such as GST?', 'Yes. Tax fields and calculations are set up for your business requirements.'],
      ['Can customers pay online?', 'We can integrate online payment options so customers can pay straight from the invoice.'],
    ],
  },

  'project-management-system': {
    tagline: 'Keep tasks, teams and projects aligned.',
    overview: 'A project management system built around your workflow: tasks, deadlines, files and team updates in one place, so everyone knows what to do next and where each project stands.',
    builds: [
      ['Projects & tasks', 'Break work into tasks with owners, priorities and due dates.'],
      ['Boards & timelines', 'Visual boards and schedules to track progress.'],
      ['Team collaboration', 'Comments, files and updates attached to the work.'],
      ['Time & workload tracking', 'See who is working on what and how long it takes.'],
      ['Client views', 'Share progress with clients without exposing internal details.'],
      ['Reports & dashboards', 'Progress, deadlines and team performance in one view.'],
    ],
    benefits: ['Clear ownership of every task', 'Fewer missed deadlines', 'Less time spent in status meetings', 'Visibility across all projects'],
    whyUs: [
      ['Mirrors your workflow', 'Stages, statuses and approvals named and arranged the way your team works.'],
      ['Simple for the team to adopt', 'Clean interfaces so people actually use it every day.'],
      ['Role-based visibility', 'Managers, members and clients each see the right level of detail.'],
      ['Evolves with you', 'Add automations and integrations as your team grows.'],
    ],
    faqs: [
      ['Can clients get access?', 'Yes. Clients can have a limited view of progress, files and approvals.'],
      ['Can we bring in our existing projects?', 'We can help move data from spreadsheets and other tools into the new system.'],
      ['Does it work on phones?', 'Yes. It is designed to work smoothly on desktop, tablet and mobile.'],
    ],
  },

  'crm-software': {
    tagline: 'Manage leads and customer relationships.',
    overview: 'Capture every lead, track every conversation and never lose a follow-up. Our CRM software is shaped around your sales process, so your team spends time selling instead of searching for information.',
    builds: [
      ['Lead capture', 'Collect enquiries from your website, forms and other channels.'],
      ['Sales pipeline', 'Stages from enquiry to closed deal, with a clear view of progress.'],
      ['Contacts & company records', 'The complete history of every customer interaction.'],
      ['Follow-up reminders', 'Tasks and reminders so no lead goes cold.'],
      ['Quotations & deal tracking', 'Create quotes and track their status.'],
      ['Sales reports', 'Conversion, team performance and revenue insights.'],
    ],
    benefits: ['Never miss a follow-up', 'A clear view of your pipeline', 'Better customer relationships', 'Insights to plan and forecast sales'],
    whyUs: [
      ['Your sales process, not a template', 'Pipeline stages, fields and workflows designed around how you sell.'],
      ['Connected to your website', 'Leads from your site flow straight into the CRM.'],
      ['Easy for the team', 'Simple screens so adoption is quick.'],
      ['Integrations ready', 'Connect billing, email, messaging and other tools you use.'],
    ],
    faqs: [
      ['Can leads come in from our website automatically?', 'Yes. Website forms can feed enquiries directly into your pipeline.'],
      ['Can it work with our billing?', 'Yes. We can connect the CRM with billing so quotes and invoices stay in sync.'],
      ['Can we import our existing contacts?', 'Yes. We can import contacts and history from spreadsheets or your current tool.'],
    ],
  },

  'enterprise-software': {
    tagline: 'Custom tools for business operations.',
    overview: 'When off-the-shelf software cannot match how your organisation operates, we build custom enterprise tools: secure, reliable and designed around your processes, teams and scale.',
    builds: [
      ['Custom business applications', 'Internal tools shaped to your operations.'],
      ['Workflow automation', 'Multi-step approvals and processes handled automatically.'],
      ['Roles & permissions', 'Fine-grained access for departments and levels.'],
      ['Dashboards & reporting', 'Live views of the metrics leadership cares about.'],
      ['System integrations', 'Connect with existing accounting, ERP and legacy systems.'],
      ['Audit & activity logs', 'A record of who did what and when.'],
    ],
    benefits: ['Software that matches your processes', 'Fewer manual steps and errors', 'Security and access control built in', 'Room to scale with the business'],
    whyUs: [
      ['Scoped before we build', 'Clear requirements and milestones agreed up front.'],
      ['Security first', 'Access control, data protection and audit trails planned from day one.'],
      ['Built to scale', 'Foundations that handle more users, data and modules over time.'],
      ['Long-term support', 'We stay on after launch for updates and improvements.'],
    ],
    faqs: [
      ['How is enterprise software priced?', 'Custom projects are quoted to scope once we understand your requirements.'],
      ['Can it integrate with our existing systems?', 'Yes. We connect new tools with the systems you already rely on.'],
      ['Will our team be guided through it?', 'Yes. We provide handover guidance so your team is comfortable using the system.'],
    ],
  },

  'app-development': {
    tagline: 'Bring your idea to an application.',
    overview: 'From concept to launch, we design and build mobile and web apps that are fast, intuitive and ready for real users, whether it is a customer-facing product or an internal tool.',
    builds: [
      ['Mobile apps', 'Apps for Android and iOS with a smooth, native feel.'],
      ['Web apps', 'Browser-based apps that work on any device.'],
      ['User accounts & profiles', 'Secure sign-in and personalised experiences.'],
      ['Payments & notifications', 'Online payments, push notifications and alerts.'],
      ['Admin dashboards', 'Manage users, content and data behind the scenes.'],
      ['Launch & updates', 'Store submission, release and continuous improvements.'],
    ],
    benefits: ['Idea to launch with one team', 'A smooth, user-friendly experience', 'Ready to grow with your users', 'Ongoing updates and support'],
    whyUs: [
      ['Design users enjoy', 'Clean, intuitive interfaces reviewed with you before development.'],
      ['Built for real use', 'Reliable performance on everyday phones and networks.'],
      ['Transparent milestones', 'See progress regularly and give feedback early.'],
      ['We help beyond launch', 'Maintenance, updates and new features as you grow.'],
    ],
    faqs: [
      ['Can you build for both Android and iOS?', 'Yes. We can build for both platforms, or start with one and add the other later.'],
      ['How long will it take?', 'It depends on the scope. We share a clear timeline after discussing your requirements.'],
      ['Who owns the app?', 'Ownership and handover terms are agreed up front as part of the project scope.'],
    ],
  },

  'saas-development': {
    tagline: 'Build software as an online service.',
    overview: 'Turn your idea into a subscription-ready online product. We build SaaS platforms with accounts, billing and dashboards, designed to serve many customers reliably and scale as you grow.',
    builds: [
      ['Multi-tenant platform', 'One product serving many customers securely.'],
      ['Subscriptions & billing', 'Plans, trials and recurring payments.'],
      ['User & team management', 'Accounts, roles and permissions per organisation.'],
      ['Customer dashboards', 'Clear, useful screens for your users.'],
      ['Admin & analytics', 'Monitor usage, revenue and customer activity.'],
      ['API & integrations', 'Let customers connect your product with their tools.'],
    ],
    benefits: ['Launch an MVP quickly', 'A recurring-revenue model ready to go', 'Scales as your customers grow', 'Clear analytics on usage'],
    whyUs: [
      ['Start with an MVP', 'Launch the core features first, learn from real users, then expand.'],
      ['Architecture for growth', 'Foundations that handle more customers without a rebuild.'],
      ['Business-minded', 'We think about pricing, onboarding and retention, not just code.'],
      ['Ongoing partnership', 'We keep improving the product with you after launch.'],
    ],
    faqs: [
      ['Can you build an MVP first?', 'Yes. We recommend starting with the essential features and growing from real feedback.'],
      ['Can it take subscription payments?', 'Yes. We integrate payment options for plans, trials and recurring billing.'],
      ['Can you help refine the idea?', 'Yes. Start with a discussion and we will help shape the scope and priorities.'],
    ],
  },

  chatbots: {
    tagline: 'Connect through conversational tools.',
    overview: 'Chatbots answer questions, capture leads and guide customers around the clock. We build conversational tools that fit your brand and connect with your website and business systems.',
    builds: [
      ['Website chatbots', 'Instant answers and guidance for your visitors.'],
      ['Lead capture bots', 'Collect enquiries and contact details automatically.'],
      ['FAQ & support assistants', 'Handle common questions so your team can focus on complex ones.'],
      ['AI-powered conversations', 'Natural, helpful replies based on your business information.'],
      ['Messaging integrations', 'Reach customers on the channels they already use.'],
      ['Handover to your team', 'A smooth transfer to a person when it matters.'],
    ],
    benefits: ['Always-on responses', 'Fewer repetitive support queries', 'More captured leads', 'Consistent, on-brand answers'],
    whyUs: [
      ['Trained on your business', 'Answers based on your services, pricing and policies.'],
      ['Connected to your systems', 'Leads and conversations flow into your CRM or inbox.'],
      ['Human handover', 'Customers can always reach your team.'],
      ['Improves over time', 'We review conversations and refine the responses.'],
    ],
    faqs: [
      ['Can the chatbot use our own information?', 'Yes. It is set up with your services, FAQs and policies so answers are accurate.'],
      ['Which channels can it work on?', 'Your website and popular messaging platforms. We confirm the options during scoping.'],
      ['Can it pass chats to a person?', 'Yes. Conversations can be handed over to your team whenever needed.'],
    ],
  },

  'api-integration': {
    tagline: 'Link applications, services and data.',
    overview: 'Stop copying data between tools. We connect your applications, payment systems and services so information flows automatically and your teams work from the same, up-to-date data.',
    builds: [
      ['Third-party integrations', 'Payments, messaging, accounting, shipping and more.'],
      ['Custom API development', 'Secure interfaces so your systems can talk to each other.'],
      ['Data synchronisation', 'Keep records consistent across all your tools.'],
      ['Webhooks & automation', 'Trigger actions automatically when something happens.'],
      ['Legacy system connections', 'Bring older systems into your modern workflow.'],
      ['Monitoring & error handling', 'Alerts and retries so integrations stay reliable.'],
    ],
    benefits: ['No more manual data entry', 'Real-time, consistent data', 'Fewer errors', 'Systems that work together'],
    whyUs: [
      ['Reliability first', 'Retries, logging and alerts so integrations never fail silently.'],
      ['Secure by design', 'Careful handling of keys, access and sensitive data.'],
      ['Clear documentation', 'You understand what is connected and how it works.'],
      ['Focused scopes', 'Well-defined integrations delivered step by step.'],
    ],
    faqs: [
      ['Can you integrate with any tool?', 'Most tools that offer an API or a standard integration route. We check feasibility first.'],
      ['Can you connect payment gateways?', 'Yes. Payments, invoicing and accounting tools are common integrations.'],
      ['What if a service changes its API?', 'We can maintain and update integrations so they keep working.'],
    ],
  },

  'iot-solutions': {
    tagline: 'Connect devices with your systems.',
    overview: 'We connect physical devices and sensors to software you can see and control, so you can monitor equipment, collect data in real time and automate decisions.',
    builds: [
      ['Device connectivity', 'Connect sensors and equipment to the cloud.'],
      ['Real-time dashboards', 'Live data, status and history in one view.'],
      ['Alerts & automation', 'Notifications and actions triggered by thresholds.'],
      ['Remote control', 'Operate devices from a web or mobile app.'],
      ['Data storage & analytics', 'Turn raw readings into trends and insights.'],
      ['Business system integration', 'Feed device data into your reports and other software.'],
    ],
    benefits: ['Real-time visibility', 'Less downtime through early alerts', 'Data-driven decisions', 'Remote monitoring from anywhere'],
    whyUs: [
      ['From device to dashboard', 'One team covering devices, connectivity and software.'],
      ['Reliable data flow', 'Built to handle continuous readings without gaps.'],
      ['Practical, not over-engineered', 'Solutions sized to your actual use case and budget.'],
      ['Support after installation', 'We help as your setup grows.'],
    ],
    faqs: [
      ['Which devices can you connect?', 'It depends on the hardware. We assess your devices and recommend the right approach.'],
      ['Can I view the data on my phone?', 'Yes. Dashboards are designed to work on desktop and mobile.'],
      ['Can it send alerts?', 'Yes. Alerts can be triggered by thresholds or events and sent to the right people.'],
    ],
  },

  'digital-marketing': {
    tagline: 'Build brand visibility across digital channels.',
    overview: 'We help your business get found, remembered and chosen online. From search visibility to social media and content, our digital marketing builds steady visibility for your brand.',
    builds: [
      ['Search engine optimisation', 'Improve visibility so customers find you when they search.'],
      ['Social media management', 'A consistent, on-brand presence on the right platforms.'],
      ['Content & creatives', 'Posts, graphics and copy that tell your story.'],
      ['Website & landing pages', 'Pages designed to turn visitors into enquiries.'],
      ['Email & messaging campaigns', 'Stay in touch with your audience.'],
      ['Reporting & insights', 'Clear updates on what is working.'],
    ],
    benefits: ['Stronger brand visibility', 'More qualified enquiries', 'A consistent online presence', 'Transparent reporting'],
    whyUs: [
      ['Website and marketing together', 'Because we also build websites, your marketing and your site work as one.'],
      ['Plain-language reporting', 'You understand what we did and what it achieved.'],
      ['Plans built around your goals', 'No cookie-cutter packages.'],
      ['Direct communication', 'Talk to the people running your campaigns.'],
    ],
    faqs: [
      ['How soon will I see results?', 'Some channels respond quickly, while search visibility builds over time. We set expectations up front.'],
      ['Do you manage our social media accounts?', 'Yes. We can plan, create and post content for the platforms that matter to your audience.'],
      ['Can you handle the website as well?', 'Yes. Websites, landing pages and marketing can all be handled together.'],
    ],
  },

  'performance-marketing': {
    tagline: 'Paid campaigns focused on measurable goals.',
    overview: 'Every rupee should work for you. Our performance marketing runs paid campaigns focused on clear goals such as leads, sales or sign-ups, with tracking so you can see exactly what you get.',
    builds: [
      ['Paid search & social ads', 'Targeted campaigns across major advertising platforms.'],
      ['Campaign strategy', 'Audiences, budgets and goals planned before launch.'],
      ['Landing pages', 'Pages built to convert ad traffic into enquiries.'],
      ['Conversion tracking', 'Measure leads, calls and sales accurately.'],
      ['Testing & optimisation', 'Continuous testing of creatives and audiences.'],
      ['Performance reports', 'Clear numbers: spend, results and cost per result.'],
    ],
    benefits: ['Measurable return on ad spend', 'Reach the right audience', 'Faster feedback on what works', 'Full control over your budget'],
    whyUs: [
      ['Goal-first planning', 'We agree what success looks like before any money is spent.'],
      ['Tracking built in', 'Because we also build websites, tracking is set up properly from day one.'],
      ['Transparent spending', 'You see exactly where the budget goes.'],
      ['Continuous optimisation', 'Campaigns are reviewed and improved, never set and forgotten.'],
    ],
    faqs: [
      ['What ad budget do I need?', 'It depends on your goals and platform. We advise a sensible starting budget after discussing your targets.'],
      ['Which platforms do you run ads on?', 'Major search and social platforms, chosen to match where your customers are.'],
      ['Can you also build the landing pages?', 'Yes. We design landing pages and set up tracking as part of the campaign.'],
    ],
  },
};
