export type Project = {
  id: string
  title: string
  category: string
  summary: string
  tags: string[]
  highlights: string[]
  link?: string
  embedUrl?: string
}

export type CaseStudy = {
  id: string
  title: string
  type: string
  context: string
  problem: string
  task: string
  result: string
  steps: { title: string; detail: string }[]
  screens: string[]
}

export const portfolio = {
  name: "Kirk Zane Fernando",
  eyebrow: "Portfolio 2026",
  roles: ["Full Stack Developer", "Backend-Focused Developer", "Software Engineering Intern"],
  tagline:
    "Backend-focused intern building reliable APIs and scalable systems while preparing for full-time software engineering roles after graduation.",
  location: "Rizal, Philippines",
  email: "kirkzanemf@gmail.com",
  openTo: "Entry-level backend and full stack roles after graduation",
  availability: {
    status: "Internship in progress",
    statusDetail: "Expected to finish in April 2026 (3rd week).",
    ojtWindow: "December 2025 - April 2026 (3rd week, expected)",
    ojtDetail: "OJT at Gallium, focused on backend delivery, debugging, and feature reliability.",
    graduationTarget: "September 2026",
  },
  about:
    "I am Kirk Zane Fernando, a backend-focused developer currently completing my on-the-job training while finishing my studies at STI College Ortigas-Cainta. I enjoy designing clean APIs, building database-backed services, and writing maintainable code that supports real product needs. During my internship, I focus on understanding business requirements, implementing backend features, and improving reliability through structured testing and debugging. As I move toward graduation, I am preparing to contribute as an entry-level engineer who can support both backend systems and full stack delivery.",
  education: {
    school: "STI College Ortigas-Cainta",
    detail:
      "Rizal | Southern Luzon. Campus location: STI Academic Center, Ortigas Avenue Extension, Cainta, Rizal.",
    points: [
      "Current student at STI College Ortigas-Cainta.",
      "College programs offered by the campus include BS Information Technology and BS Computer Science.",
      "Preparing for graduation and full-time software engineering roles in 2026.",
    ],
  },
  focus: [
    "Building and testing REST APIs for reliable backend workflows",
    "Strengthening backend fundamentals: authentication, validation, and SQL data modeling",
    "Improving full stack delivery by connecting clean frontends to stable backend services",
  ],
  stackGroups: {
    Backend: ["Node.js", "Express.js", "NestJS", "REST API Design", "SQL Databases", "Error Handling"],
    FullStack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "API Integration"],
    Workflow: ["Git & GitHub", "Postman", "Debugging", "Documentation", "Agile Collaboration", "Code Review"],
  },
  projects: [
    {
      id: "gallium",
      title: "Gallium31 HMM/Abiso Platform (OJT)",
      category: "Internship",
      summary:
        "Contributing to an internal logistics platform spanning a React admin UI (MUI-based), a NestJS API with Sequelize + MariaDB, and an Nginx router orchestrated via Docker Compose.",
      tags: ["NestJS", "React", "MUI", "Sequelize", "MariaDB", "Nginx", "Docker"],
      highlights: [
        "Improved search and table behavior across multiple admin and role-based screens in the React UI.",
        "Standardized filter-state logic so empty results and data fallbacks are consistent across modules.",
        "Supported API-connected flows and routing reliability across UI, API, and router services during OJT.",
      ],
    },
    {
      id: "assumpta",
      title: "Web-Based Payroll Management System for Assumpta Dog & Cat Clinic Cainta Branch",
      category: "Capstone",
      summary:
        "Built during 4th year as a capstone to automate attendance, payroll, payslips, and leave workflows for Assumpta Dog & Cat Clinic Cainta branch.",
      tags: ["Payroll Automation", "Attendance QR", "Leave Management", "Vercel", "Render", "Neon"],
      highlights: [
        "Implemented admin/employee login with role-based access for HR and staff workflows.",
        "Added attendance monitoring with QR-based time in/time out and overtime-aware records.",
        "Built payroll and payslip modules with leave request/response processing and salary visibility.",
      ],
      link: "https://assumpta-payroll.vercel.app",
    },
    {
      id: "zgarage",
      title: "zGarage Interactive Web Experience",
      category: "Personal",
      summary: "A live interactive garage-themed web experience deployed on GitHub Pages for hands-on browsing.",
      tags: ["JavaScript", "Interactive UI", "GitHub Pages", "Web Animation"],
      highlights: [
        "Built as a browser-first interactive experience with user-driven controls and dynamic visual states.",
        "Published with zero-install access so reviewers can test it instantly from any device.",
        "Embedded directly in this portfolio for in-page live interaction.",
      ],
      link: "https://ecstazane.github.io/zGarage/",
      embedUrl: "https://ecstazane.github.io/zGarage/",
    },
  ] as Project[],
  caseStudies: [
    {
      id: "gallium-search-flow",
      title: "Role-Based Search Reliability Improvement",
      type: "NDA-safe Case Study",
      context:
        "Internal logistics admin platform with a React + MUI frontend, NestJS API (Sequelize + MariaDB), and an Nginx router for UI/API paths and websocket traffic.",
      problem:
        "Search and filter states behaved inconsistently across role-based screens, causing confusing empty results or fallback data.",
      task:
        "Align UI filter logic with API query results across role-based pages while preserving the existing UX and delivery timeline.",
      result:
        "Delivered consistent filter-state logic and clearer empty-state feedback, improving trust in filtered results and reducing operator confusion.",
      steps: [
        {
          title: "Audit existing search behavior",
          detail:
            "Mapped where modules used conditional result selection and identified mismatches between filtered output and default data rendering.",
        },
        {
          title: "Standardize filter-state checks",
          detail:
            "Applied a shared filter-state condition so view layers switch cleanly between default datasets and filtered datasets.",
        },
        {
          title: "Improve empty-state feedback",
          detail:
            "Adjusted screen feedback text to clearly distinguish 'no records' from 'no matching results' for faster operator decisions.",
        },
        {
          title: "Cross-role validation",
          detail:
            "Verified behavior across multiple role pages and data table/card variants to avoid regressions before handoff.",
        },
      ],
      screens: ["Search input and table state transition", "Role dashboard list view with filtered state", "No matching results feedback card"],
    },
    {
      id: "assumpta-employee-system",
      title: "Clinic Employee Management Capstone",
      type: "Academic Case Study",
      context:
        "4th-year capstone for Assumpta Dog & Cat Clinic Cainta branch, where payroll and employee records were previously managed manually in spreadsheets.",
      problem:
        "Manual payroll preparation caused delays and errors, while attendance, leave, and payslip handling required heavy admin effort.",
      task:
        "Build a web-based payroll management system with role-based access for admins and employees, including attendance, payroll, and leave modules.",
      result:
        "Delivered a centralized platform that improved payroll accuracy, attendance visibility, and leave processing based on testing with clinic staff.",
      steps: [
        {
          title: "Mapped clinic policies and roles",
          detail:
            "Translated clinic rules for employee types, payroll periods, and leave handling into clear admin and employee permissions.",
        },
        {
          title: "Implemented attendance and payroll modules",
          detail:
            "Built QR-based time in/time out attendance capture, payroll computations, and digital payslip generation in one web flow.",
        },
        {
          title: "Implemented leave and overtime workflows",
          detail:
            "Added leave request/approval handling and overtime-aware records so payroll adjustments could be processed consistently.",
        },
        {
          title: "Validated through alpha and beta testing",
          detail:
            "Tested login roles, attendance capture, payroll output, and leave transitions with clinic-side users before final turnover.",
        },
      ],
      screens: [
        "Admin dashboard with employee, attendance, and payroll overview",
        "Employee dashboard with attendance, leave, overtime, and payslip access",
        "Leave request and approval/decline workflow pages",
      ],
    },
  ] as CaseStudy[],
  socialLinks: [
    { label: "GitHub", url: "https://github.com/ecstazane" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kirk-zane-fernando-6613b6387/" },
    { label: "Gallium31", url: "https://www.gallium31.com/" },
  ],
}
