export interface Layer { id: string; name: string; sub: string; text: string; chips: string[]; }
export interface Project { title: string; meta: string; text: string; tags: string[]; }
export interface Role { title: string; meta: string; points: string[]; }
export interface SkillGroup { name: string; items: string; }

export const PROFILE = {
  name: 'Darsha Naik',
  role: 'Angular + Node.js / .NET full stack developer',
  lede: 'I build Angular front ends, REST APIs and serverless backends, and own features from the first screen to the deployed service. Four years in, based in Bengaluru.',
  location: 'Bengaluru, Karnataka',
  email: 'darshanaik08@gmail.com',
  github: 'https://github.com/DarshaNaik08',
  linkedin: 'https://www.linkedin.com/in/darshanaik',
  certVerify: 'https://verify.skilljar.com/c/8whgoqvr4pod',
  facts: [
    { value: '4+ years', label: 'in software' },
    { value: '6+', label: 'enterprise projects' },
    { value: '10+', label: 'serverless services' },
  ],
};

export const LAYERS: Layer[] = [
  { id: 'ui', name: 'Interface', sub: 'Angular, Flutter',
    text: 'Reusable Angular components, Reactive Forms and RxJS, with lazy loading and route guards keeping large apps fast and safe. Firestore real-time updates drive live dashboards, and a Flutter app is live on Google Play.',
    chips: ['Angular 13–20', 'TypeScript', 'RxJS', 'Reactive Forms', 'Angular Material', 'Tailwind CSS', 'Flutter'] },
  { id: 'api', name: 'APIs', sub: 'Node.js, ASP.NET Core',
    text: 'REST APIs in Node.js and Express, plus ASP.NET Core (C#) services for a student event-tracking platform that captures participation data and produces stakeholder reports.',
    chips: ['Node.js', 'Express.js', 'ASP.NET Core', 'C#', 'REST design', 'Webhooks'] },
  { id: 'cloud', name: 'Serverless and data', sub: 'Firebase, Firestore, GCP',
    text: 'More than ten serverless services on Firebase Cloud Functions: HTTP APIs, scheduled jobs, report generation and notifications. I tune Firestore queries and functions to cut read costs.',
    chips: ['Cloud Functions', 'Firestore', 'GCP', 'Firebase Hosting', 'SQL', 'Realtime Database'] },
  { id: 'ai', name: 'Integrations and AI', sub: 'Third-party APIs, Claude Code',
    text: 'Shopify, Razorpay, WhatsApp Business, Slack, Keka and Google Workspace connected over REST and webhooks. On the AI side: OpenAI and Claude services, and engineering workflows built with Claude Code and MCP servers.',
    chips: ['Shopify', 'Razorpay', 'WhatsApp Business', 'Slack', 'Keka', 'OpenAI', 'Claude Code', 'MCP'] },
];

export const PROJECTS: Project[] = [
  { title: 'Google Meeting Manager', meta: 'Internal tool · ThinkTac',
    text: 'An internal tool that takes over meeting administration: co-host management, recording controls and workspace operations, built on the Google Meet and Calendar APIs.',
    tags: ['Google Meet API', 'Google Calendar API', 'Firebase Cloud Functions', 'Firestore'] },
  { title: 'Student event-tracking platform', meta: 'REST APIs · ThinkTac',
    text: 'ASP.NET Core (C#) REST APIs that capture student participation data and produce the reporting outputs internal stakeholders rely on.',
    tags: ['ASP.NET Core', 'C#', 'REST API design', 'Reporting'] },
  { title: 'LMS platforms and admin dashboards', meta: 'Angular 13–20 · ThinkTac',
    text: 'Reusable Angular architecture behind learning platforms, dashboards and reporting systems, with Firestore real-time updates. I tuned queries and Cloud Functions to cut database read costs and speed up dashboards.',
    tags: ['Angular', 'RxJS', 'Reactive Forms', 'Lazy loading', 'Route guards', 'Angular Material'] },
  { title: 'AI-assisted engineering workflows', meta: 'Developer tooling · ThinkTac',
    text: 'Workflows built with Claude Code and MCP servers, connected to Bitbucket, Jira and Playwright, that automate code review, documentation, requirement analysis and end-to-end test generation.',
    tags: ['Claude Code', 'MCP servers', 'Playwright', 'Jira', 'Bitbucket'] },
  { title: 'Stamp Paper Management Module', meta: 'Angular admin platform · Contractzy',
    text: 'A module for a legal documentation platform that automates document generation, workflow management and approvals. The platform used role-based access for admin, staff and client users.',
    tags: ['Angular', 'RBAC', 'Reactive Forms', 'REST APIs'] },
  { title: 'Mobile app on Google Play', meta: 'Flutter · ThinkTac',
    text: 'A Flutter app published on the Google Play Store, delivered alongside the web platforms.',
    tags: ['Flutter', 'Dart'] },
];

export const ROLES: Role[] = [
  { title: 'Full Stack Developer', meta: 'Tactile Education Services Pvt. Ltd. (ThinkTac) · Bengaluru · 09/2024 – 07/2026',
    points: [
      'Delivered end-to-end solutions across 6+ enterprise projects: LMS platforms, admin dashboards, reporting systems and a Flutter app.',
      'Designed and built ASP.NET Core (C#) REST APIs for a student event-tracking platform, capturing participation data and generating reporting outputs used by internal stakeholders.',
      'Built 10+ serverless services with Node.js, Express.js and Firebase Cloud Functions for HTTP APIs, scheduled jobs, reports and notifications.',
      'Integrated Shopify, Razorpay, WhatsApp Business API, Slack, Keka HRMS, Google Workspace APIs, OpenAI and Claude through REST and webhooks.',
      'Set up GA4, GTM and Firebase Analytics for user behaviour tracking.',
      'Mentored interns and junior developers through code reviews and Agile practice.',
    ] },
  { title: 'Junior Software Engineer', meta: 'Online Productivity Solutions Pvt. Ltd. · Verna, Goa · 11/2023 – 05/2024',
    points: [
      'Built responsive, accessible web applications in React and Angular.',
      'Worked directly with international clients to gather requirements, estimate effort and turn feedback into reusable UI components.',
      'Shipped production features in an Agile/Scrum team.',
    ] },
  { title: 'Junior Frontend Developer', meta: 'Contractzy (The Legal Capsule) · Goa · 05/2023 – 08/2023',
    points: [
      'Developed an Angular admin platform for legal documentation workflows with Reactive Forms, RBAC and reusable components.',
      'Built and deployed the Stamp Paper Management Module.',
      'Worked with backend developers to define and consume REST APIs.',
    ] },
  { title: 'Frontend Developer Intern', meta: 'Contractzy (The Legal Capsule) · Goa · 05/2022 – 05/2023',
    points: [
      'Built responsive Angular interfaces with attention to cross-browser compatibility.',
      'Integrated RESTful APIs in collaboration with backend teams.',
    ] },
];

export const SKILLS: SkillGroup[] = [
  { name: 'Frontend', items: 'Angular 13–20, TypeScript, JavaScript (ES6+), RxJS, Reactive Forms, ReactJS, HTML5, CSS3, SCSS, Angular Material, Bootstrap, Tailwind CSS' },
  { name: 'Backend', items: 'Node.js, Express.js, ASP.NET Core (.NET 10), C#,  Entity Framework Core, LINQ, Swagger / OpenAPI, Firebase Cloud Functions, RESTful APIs, webhooks' },
  { name: 'Data', items: 'MSSQL, MySQL, Firestore, Firebase Realtime Database, SQL, MongoDB' },
  { name: 'Cloud and tooling', items: 'Google Cloud Platform, Firebase Hosting, Git, GitHub, Bitbucket, Playwright, Postman, Chrome DevTools' },
  { name: 'Integrations', items: 'Shopify, Razorpay, WhatsApp Business, Slack, Keka, Google Maps, Google Meet, Google Calendar' },
  { name: 'AI-assisted development', items: 'Claude Code, MCP servers, GitHub Copilot, prompt engineering, agent-based workflows' },
  { name: 'Mobile', items: 'Flutter, Dart' },
  { name: 'Analytics', items: 'GA4, Google Tag Manager, Firebase Analytics, event and conversion tracking' },
];