/** Recruiter-facing copy — keep in sync with CV */
export const PERSON = {
  name: 'Gaurav Singh Bhidwal',
  roleShort: 'Senior Software Engineer',
  roleTitle: 'Java Full Stack Developer',
  location: 'Noida, India',
  experienceYears: '4+',
  email: 'gaurav.bhidwal@gmail.com',
  phoneDisplay: '+91-9971528971',
  phoneTel: '+919971528971',
  linkedIn: 'https://www.linkedin.com/in/gaurav2021',
  gitHubProject: 'https://github.com/GauravBhidwal/teachToTech',
  gitHubProfile: 'https://github.com/GauravBhidwal',
}

/** WhatsApp deep link (E.164 without +) */
export const WHATSAPP_URL = 'https://wa.me/919971528971'

/** Primary recruiter email CTA */
export const MAILTO_HIRE = `mailto:${PERSON.email}?subject=${encodeURIComponent('Opportunity — Gaurav Singh Bhidwal (Portfolio)')}`

/** Profile modal (click-to-expand) — skills & tagline */
export const PROFILE_MODAL = {
  skills: ['Java', 'Spring Boot', 'Microservices', 'React', 'SQL'],
  tagline:
    'Building scalable backend systems and high-performance applications',
}

export const HERO = {
  heading: 'Java Full Stack Developer',
  subheading:
    '4+ years of experience building scalable backend systems and high-performance applications using Spring Boot, Microservices, React, and SQL.',
  /** Shown directly under subheading — availability / intent */
  killerLine:
    'Currently working on scalable fintech systems and open to exciting backend opportunities.',
  tagline:
    'Focused on building scalable backend systems, designing efficient APIs, and optimizing performance for high-load applications.',
  availabilityBadge: '🟢 Available for opportunities',
  impactLine:
    'Hands-on production work on loan management systems, high-throughput backends, and APIs that scale with real transaction volume.',
}

/** Short capability list for recruiters */
export const WHAT_I_CAN_DO = [
  'Build scalable backend systems',
  'Optimize APIs and databases',
  'Design microservices architecture',
  'Deliver production-ready solutions',
]

export const CONTACT_COPY = {
  responseTime: 'Usually responds within 24 hours',
}

export const FINAL_CTA = {
  heading: "Let's build something scalable together 🚀",
  sub: 'Open to backend and full-stack Java roles, contract conversations, and technical discussions.',
  buttonLabel: 'Get in touch',
}

/** Key Achievements — quick scan for recruiters */
export const ACHIEVEMENTS = [
  'Built enterprise-grade loan management systems',
  'Worked on production-level APIs and backend systems',
  'Mentored developers and improved team code quality',
]

/**
 * Tech stack for icon grid — labels must match keys in TechStack.jsx ICON_MAP
 */
export const TECH_STACK_GROUPS = [
  { title: 'Backend', labels: ['Java', 'Spring Boot', 'Microservices'] },
  { title: 'Frontend', labels: ['React', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'DevOps', labels: ['Docker', 'Jenkins', 'Git'] },
  { title: 'Database', labels: ['MySQL', 'Oracle', 'PostgreSQL'] },
]

/** 3 cards — scannable in ~5s; **terms** render bold in SnapshotCard */
export const RECRUITER_SNAPSHOT = [
  {
    id: 'fintech-scale',
    eyebrow: 'LMS · High-volume lending',
    title: 'High-Scale Fintech Systems',
    body:
      'Owned **disbursal & reconciliation** paths on a live **Loan Management System**—built for rising **transaction throughput**, stable **SLAs**, and **audit-ready** workflows under production load.',
  },
  {
    id: 'performance',
    eyebrow: 'SQL · APIs · measurable gains',
    title: 'Performance Optimization',
    body:
      'Improved **API responsiveness** by tuning **SQL**, **indexes**, and service boundaries—fewer **slow queries** and clearer latency in **production monitoring** (before/after baselines).',
  },
  {
    id: 'architecture-delivery',
    eyebrow: 'Microservices · CI/CD · team',
    title: 'Architecture, Delivery & Leadership',
    body:
      'Shipped **Spring Boot microservices** and **REST APIs**; led **monolith → microservices** moves on critical modules. **CI/CD** with Git, Jenkins, Docker, GitHub Actions—plus **mentorship**, **code reviews**, and **secure coding** standards.',
  },
]

/** Key Highlights block (above snapshot cards) */
export const HIGHLIGHTS_SECTION = {
  title: 'Key Highlights',
  subtitle:
    'Production experience in scalable fintech systems, performance optimization, and backend architecture.',
}

/** About section — three short paragraphs for quick recruiter scan */
export const ABOUT_PARAGRAPHS = [
  'I am a Java Full Stack Developer with 4.5+ years of experience delivering scalable, production-grade systems.',
  'My core expertise lies in building fintech solutions, including loan management and onboarding platforms, where I have handled high-volume transactions, optimized backend performance, and designed microservices architectures.',
  'I am passionate about clean code, system design, and building reliable, efficient applications using Spring Boot, Microservices, React, and SQL.',
]

export const EXPERIENCE = [
  {
    id: 'aurionpro',
    company: 'Aurionpro Solutions Ltd.',
    timeframe: 'Nov 2023 – Present',
    role: 'Senior Software Engineer',
    location: PERSON.location,
    bullets: [
      'Designed scalable backend services for core business workflows.',
      'Managed CI/CD pipelines (Git, Jenkins, Docker).',
      'Improved performance and reduced downtime through tuning and monitoring.',
      'Integrated secure third-party APIs end-to-end.',
    ],
  },
  {
    id: 'asss',
    company: 'A S Software Services Pvt. Ltd.',
    timeframe: 'Oct 2021 – Oct 2023',
    role: 'Software Engineer',
    location: PERSON.location,
    bullets: [
      'Built Spring Boot enterprise applications for clients.',
      'Developed REST APIs and optimized SQL queries and stored procedures.',
      'Created loan onboarding and approval workflow modules.',
      'Worked in Agile and TDD environments with QA and DevOps.',
    ],
  },
]

export const PROJECTS = [
  {
    id: 'lms',
    title: 'Loan Management System (LMS)',
    description:
      'End-to-end loan disbursal platform: APIs, batch processing, and reconciliation in a high-compliance environment.',
    stack: ['Java', 'Spring Boot', 'Microservices', 'PL/SQL'],
    highlights: [
      'Built disbursal and reconciliation APIs.',
      'Migrated critical components from monolith to microservices.',
      'Integrated KYC and credit bureau APIs.',
      'Improved scalability and performance for growing volumes.',
    ],
    github: null,
    githubLabel: 'Private — available on request',
    demo: null,
    imageAlt: 'LMS project',
  },
  {
    id: 'los',
    title: 'Loan Origination System (LOS)',
    description:
      'Customer onboarding and approval workflows with strong validation and data integrity across teams.',
    stack: ['Spring MVC', 'MySQL', 'JavaScript'],
    highlights: [
      'Built onboarding workflow and approval logic.',
      'Designed SQL procedures and decision paths for applicant lifecycle.',
      'Improved customer onboarding experience with clearer UX flows.',
    ],
    github: null,
    githubLabel: 'Private — available on request',
    demo: null,
    imageAlt: 'LOS project',
  },
  {
    id: 'teachtotech',
    title: 'TeachToTech Platform',
    description:
      'Online learning platform with microservices, secure auth, and a responsive React experience.',
    stack: ['Spring Boot', 'React', 'Microservices'],
    highlights: [
      'Learning platform with JWT authentication and REST APIs.',
      'CI/CD using GitHub Actions for build and deployment.',
      'Scalable service architecture for courses, onboarding, and assessments.',
    ],
    github: PERSON.gitHubProject,
    githubLabel: 'View on GitHub',
    demo: null,
    imageAlt: 'TeachToTech platform',
  },
]

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

/** Navbar CTA — opens email client */
export const HIRE_ME = {
  label: 'Hire Me',
  href: MAILTO_HIRE,
}
