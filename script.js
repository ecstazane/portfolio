const portfolioData = {
  name: "Kirk Zane Fernando",
  eyebrow: "Portfolio 2026",
  roles: [
    "Full Stack Developer",
    "Backend-Focused Developer",
    "Software Engineering Intern",
  ],
  tagline:
    "Backend-focused intern building reliable APIs and scalable systems while preparing for full-time software engineering roles after graduation.",
  location: "Rizal, Philippines",
  email: "kirkzanemf@gmail.com",
  openTo: "Entry-level backend and full stack roles after graduation",
  timezone: "Asia/Manila",
  availability: {
    status: "Internship in progress",
    statusDetail: "Expected to finish in April 2026 (3rd week).",
    ojtWindow: "December 2025 - April 2026 (3rd week, expected)",
    ojtDetail: "OJT at Gallium, focused on backend delivery, debugging, and feature reliability.",
    internshipStartDate: "2025-12-01T09:00:00+08:00",
    internshipEndDate: "2026-04-21T18:00:00+08:00",
    graduationTargetDate: "2026-09-30T00:00:00+08:00",
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
  recruiterBrief: {
    headline: "1-Minute Recruiter View",
    summary:
      "Backend-focused graduating intern with production exposure in API-connected enterprise logistics workflows at Gallium31 Corporation.",
    bullets: [
      "Experience: OJT from December 2025 to April 2026 (3rd week, expected completion)",
      "Education: STI College Ortigas-Cainta (Rizal, Southern Luzon)",
      "OJT company: Gallium31 Corporation (IT Services and IT Consulting, Makati City, founded 2005)",
      "Primary strength: backend logic, API flow, search/filter correctness, and reliability",
      "Stack exposure: NestJS, React, TypeScript, MariaDB, Docker",
      "Capstone: employee management system for Assumpta Dog and Cat Clinic (Cainta branch)",
      "Open to: entry-level backend and full stack software engineering roles",
    ],
  },
  journey: [
    {
      period: "Dec 2025 - Apr 2026 (3rd week, expected finish)",
      title: "Backend Development Intern - Gallium31 Corporation (OJT)",
      summary:
        "On-the-job training in progress at Gallium31 Corporation, focused on backend implementation, testing, and system reliability for enterprise logistics workflows.",
      deliverables: [
        "Improving search and table behavior across role-based admin pages.",
        "Validating API-connected screen flows and reducing UI data-state mismatches.",
        "Supporting debugging cycles and release-prep fixes with mentors.",
      ],
      learned: [
        "How to ship safer changes in a multi-role production-like workflow.",
        "How backend assumptions impact frontend state and search behaviors.",
        "How to document implementation decisions for team clarity.",
      ],
    },
    {
      period: "2024 - Present",
      title: "Full Stack Student Developer",
      summary:
        "Building strong engineering fundamentals while exploring end-to-end web development.",
      deliverables: [
        "Built API-connected practice features with server and UI layers.",
        "Structured codebases around reusable functions and modular logic.",
        "Applied version control and branch workflows for safer iteration.",
      ],
      learned: [
        "How to design cleaner request/response contracts.",
        "How to prioritize maintainability over quick but fragile fixes.",
        "How to trace bugs across both backend and frontend layers.",
      ],
    },
    {
      period: "2026 (Target)",
      title: "Incoming Graduate Software Engineer",
      summary: "Preparing for transition into a full-time engineering role after graduation.",
      deliverables: [
        "Expanding portfolio with backend-focused and full stack case studies.",
        "Refining testing and debugging discipline for production readiness.",
        "Practicing system design communication for technical interviews.",
      ],
      learned: [
        "How to present impact clearly without exposing confidential details.",
        "How to map company work into recruiter-friendly narratives.",
        "How to benchmark growth with measurable development goals.",
      ],
    },
  ],
  contactPitch:
    "I am currently completing my internship and preparing for graduation. If you are hiring for entry-level backend or full stack roles, I would love to connect.",
  stackGroups: {
    Backend: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST API Design",
      "SQL Databases",
      "Error Handling",
    ],
    FullStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "API Integration",
    ],
    Workflow: [
      "Git & GitHub",
      "Postman",
      "Debugging",
      "Documentation",
      "Agile Collaboration",
      "Code Review Readiness",
    ],
  },
  skillRadar: {
    labels: [
      "API Design",
      "Data Modeling",
      "Frontend Delivery",
      "System Design",
      "Team Workflow",
    ],
    profiles: {
      Backend: [94, 90, 62, 84, 82],
      FullStack: [84, 80, 88, 79, 81],
      Workflow: [74, 72, 70, 76, 92],
    },
    summaries: {
      Backend:
        "Highest confidence in API behavior, query logic, and backend reliability under real product workflows.",
      FullStack:
        "Balanced delivery across backend + UI integration with emphasis on stable end-to-end data flow.",
      Workflow:
        "Strong collaboration habits: debugging discipline, documentation quality, and release readiness.",
    },
  },
  projects: [
    {
      title: "Gallium31 HMM/Abiso Platform (OJT)",
      category: "Internship",
      summary:
        "At Gallium31 Corporation (IT Services and IT Consulting, Makati City), contributing to an internal logistics platform that uses a NestJS API, React admin interface, MariaDB, and Dockerized services.",
      tags: ["NestJS", "React", "TypeScript", "MariaDB", "Docker"],
      highlights: [
        "Implemented search and table behavior improvements across multiple admin and role-based screens.",
        "Standardized has-search logic so filtered states show correct results and clear 'No matching results' feedback.",
        "Supported backend-oriented work by validating API-connected flows and helping maintain stable module behavior during OJT.",
      ],
      link: "",
      caseStudyId: "gallium-search-flow",
    },
    {
      title:
        "Web-Based Payroll Management System for Assumpta Dog & Cat Clinic Cainta Branch",
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
      caseStudyId: "assumpta-employee-system",
    },
    {
      title: "zGarage Interactive Web Experience",
      category: "Personal",
      summary:
        "A live interactive garage-themed web experience deployed on GitHub Pages for hands-on browsing.",
      tags: ["JavaScript", "Interactive UI", "GitHub Pages", "Web Animation"],
      highlights: [
        "Built as a browser-first interactive experience with user-driven controls and dynamic visual states.",
        "Published with zero-install access so reviewers can test it instantly from any device.",
        "Embedded directly in this portfolio for in-page live interaction.",
      ],
      link: "https://ecstazane.github.io/zGarage/",
      caseStudyId: "",
      embedUrl: "https://ecstazane.github.io/zGarage/",
    },
  ],
  caseStudies: [
    {
      id: "gallium-search-flow",
      title: "Role-Based Search Reliability Improvement",
      type: "NDA-safe Case Study",
      context:
        "Internal logistics admin platform with multiple roles and shared table/search experiences.",
      problem:
        "Search states behaved inconsistently across screens, causing confusion when empty results or fallback table data appeared unexpectedly.",
      task:
        "Improve consistency of search behavior across role-based pages while preserving existing UX and release timeline.",
      result:
        "Delivered consistent has-search logic and clearer user feedback states, improving trust in filtered results and reducing operator confusion.",
      steps: [
        {
          title: "Audit existing search behavior",
          detail:
            "Mapped where pages used conditional result selection and identified mismatch patterns between empty search output and default data rendering.",
        },
        {
          title: "Standardize search-state checks",
          detail:
            "Applied a shared has-search condition to ensure view layers switch cleanly between default datasets and filtered datasets.",
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
      screens: [
        "Search input and table state transition",
        "Role dashboard list view with filtered state",
        "No matching results feedback card",
      ],
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
  ],
  socialLinks: [
    { label: "GitHub", url: "https://github.com/ecstazane" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kirk-zane-fernando-6613b6387/" },
    { label: "Gallium31", url: "https://www.gallium31.com/" },
    {
      label: "Gallium31 LinkedIn",
      url: "https://www.linkedin.com/company/gallium31-corporation/",
    },
  ],
};

const refs = {
  body: document.body,
  scrollProgress: document.getElementById("scrollProgress"),
  cursorGlow: document.getElementById("cursorGlow"),
  logoName: document.getElementById("logoName"),
  heroEyebrow: document.getElementById("heroEyebrow"),
  heroName: document.getElementById("heroName"),
  heroRole: document.getElementById("heroRole"),
  heroTagline: document.getElementById("heroTagline"),
  metaLocation: document.getElementById("metaLocation"),
  metaEmail: document.getElementById("metaEmail"),
  metaOpenTo: document.getElementById("metaOpenTo"),
  recruiterBrief: document.getElementById("recruiterBrief"),
  recruiterHeadline: document.getElementById("recruiterHeadline"),
  recruiterSummary: document.getElementById("recruiterSummary"),
  recruiterBullets: document.getElementById("recruiterBullets"),
  briefPdfBtn: document.getElementById("briefPdfBtn"),
  aboutText: document.getElementById("aboutText"),
  educationSchool: document.getElementById("educationSchool"),
  educationDetail: document.getElementById("educationDetail"),
  educationPoints: document.getElementById("educationPoints"),
  focusList: document.getElementById("focusList"),
  terminalForm: document.getElementById("terminalForm"),
  terminalOutput: document.getElementById("terminalOutput"),
  terminalInput: document.getElementById("terminalInput"),
  journeyTimeline: document.getElementById("journeyTimeline"),
  journeyDetail: document.getElementById("journeyDetail"),
  stackSwitch: document.getElementById("stackSwitch"),
  stackGrid: document.getElementById("stackGrid"),
  radarControls: document.getElementById("radarControls"),
  skillRadarCanvas: document.getElementById("skillRadarCanvas"),
  radarSummary: document.getElementById("radarSummary"),
  projectSearch: document.getElementById("projectSearch"),
  clearSearch: document.getElementById("clearSearch"),
  projectFilters: document.getElementById("projectFilters"),
  projectGrid: document.getElementById("projectGrid"),
  projectsSection: document.getElementById("projects"),
  previewTitle: document.getElementById("previewTitle"),
  previewSummary: document.getElementById("previewSummary"),
  previewHighlights: document.getElementById("previewHighlights"),
  previewLink: document.getElementById("previewLink"),
  previewCaseBtn: document.getElementById("previewCaseBtn"),
  previewAutoBtn: document.getElementById("previewAutoBtn"),
  previewEmbedWrap: document.getElementById("previewEmbedWrap"),
  previewEmbedFrame: document.getElementById("previewEmbedFrame"),
  previewEmbedCaption: document.getElementById("previewEmbedCaption"),
  caseStudyGrid: document.getElementById("caseStudyGrid"),
  contactPitch: document.getElementById("contactPitch"),
  contactEmailLink: document.getElementById("contactEmailLink"),
  copyEmail: document.getElementById("copyEmail"),
  contactBriefPdfBtn: document.getElementById("contactBriefPdfBtn"),
  socialLinks: document.getElementById("socialLinks"),
  footerName: document.getElementById("footerName"),
  footerYear: document.getElementById("footerYear"),
  themeToggle: document.getElementById("themeToggle"),
  recruiterToggle: document.getElementById("recruiterToggle"),
  commandOpen: document.getElementById("commandOpen"),
  mobileThemeToggle: document.getElementById("mobileThemeToggle"),
  mobileRecruiterToggle: document.getElementById("mobileRecruiterToggle"),
  mobileCommandOpen: document.getElementById("mobileCommandOpen"),
  menuToggle: document.querySelector(".menu-toggle"),
  siteHeader: document.querySelector(".site-header"),
  navLinks: [...document.querySelectorAll("#siteNav a")],
  revealBlocks: [...document.querySelectorAll(".reveal")],
  commandPalette: document.getElementById("commandPalette"),
  commandInput: document.getElementById("commandInput"),
  commandList: document.getElementById("commandList"),
  commandCloseButtons: [...document.querySelectorAll("[data-command-close]")],
  caseModal: document.getElementById("caseModal"),
  caseModalClose: document.getElementById("caseModalClose"),
  caseModalType: document.getElementById("caseModalType"),
  caseModalTitle: document.getElementById("caseModalTitle"),
  caseModalContext: document.getElementById("caseModalContext"),
  caseModalProblem: document.getElementById("caseModalProblem"),
  caseModalTask: document.getElementById("caseModalTask"),
  caseModalResult: document.getElementById("caseModalResult"),
  caseModalSteps: document.getElementById("caseModalSteps"),
  caseModalScreens: document.getElementById("caseModalScreens"),
  caseCloseButtons: [...document.querySelectorAll("[data-case-close]")],
  quickDock: document.getElementById("quickDock"),
  backToTop: document.getElementById("backToTop"),
  liveRegion: document.getElementById("liveRegion"),
};

const defaultProjectIndex = (() => {
  const firstEmbeddedProjectIndex = portfolioData.projects.findIndex((project) => Boolean(project.embedUrl));
  return firstEmbeddedProjectIndex >= 0 ? firstEmbeddedProjectIndex : 0;
})();

const state = {
  activeStack: Object.keys(portfolioData.stackGroups)[0],
  activeRadarGroup: Object.keys(portfolioData.skillRadar.profiles)[0],
  activeProjectCategory: "All",
  activeProjectIndex: defaultProjectIndex,
  projectSearchQuery: "",
  activeJourneyIndex: 0,
  activeRoleIndex: 0,
  activeCaseStudyId: portfolioData.caseStudies[0]?.id || "",
  commandActiveIndex: 0,
  commandOpen: false,
  commandResults: [],
  recruiterMode: false,
  projectAutoplayEnabled: false,
  projectAutoplayPaused: false,
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reducedData = window.matchMedia("(prefers-reduced-data: reduce)").matches;
const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

let roleRotationTimer;
let projectAutoplayTimer;
let radarFrame;
let radarCurrentValues = [];
let terminalCommands = {};
let commandCommands = [];
let lastFocusedElement = null;
let scrollSections = [];

function closeMenu() {
  if (!refs.siteHeader.classList.contains("menu-open")) {
    return;
  }
  refs.siteHeader.classList.remove("menu-open");
  refs.menuToggle.setAttribute("aria-expanded", "false");
}

function init() {
  refs.body.classList.toggle("reduced-data", reducedData);
  if (reducedData) {
    state.projectAutoplayEnabled = false;
  }

  paintProfile();
  renderQuickDock();
  renderJourney();
  renderStack();
  renderSkillRadar();
  renderProjectFilters();
  refreshProjects();
  renderCaseStudies();
  setupTerminalMode();
  setupCommands();

  wireProjectSearch();
  wireThemeToggle();
  wireRecruiterToggle();
  wireCopyEmail();
  wireBriefPdfButtons();
  wireMenuToggle();
  wireProjectKeyboardNavigation();
  wireJourneyKeyboardNavigation();
  wireProjectAutoplay();
  wireBackToTop();
  wireScrollProgressAndSpy();
  wireRoleCycle();
  wireCursorGlow();
  wireCaseModal();
  wireCommandPalette();

  startRevealAnimation();
  applyTiltEffects();

  refs.footerYear.textContent = new Date().getFullYear();

  restoreThemePreference();
  restoreRecruiterPreference();
}

function announce(message) {
  refs.liveRegion.textContent = "";
  window.setTimeout(() => {
    refs.liveRegion.textContent = message;
  }, 30);
}

function paintProfile() {
  refs.logoName.textContent = portfolioData.name.toUpperCase();
  refs.heroEyebrow.textContent = portfolioData.eyebrow;
  refs.heroName.textContent = portfolioData.name;
  refs.heroRole.textContent = portfolioData.roles[0] || "Your Role";
  refs.heroTagline.textContent = portfolioData.tagline;
  refs.metaLocation.textContent = portfolioData.location;
  refs.metaEmail.textContent = portfolioData.email;
  refs.metaOpenTo.textContent = portfolioData.openTo;
  refs.aboutText.textContent = portfolioData.about;
  refs.educationSchool.textContent = portfolioData.education.school;
  refs.educationDetail.textContent = portfolioData.education.detail;
  refs.contactPitch.textContent = portfolioData.contactPitch;
  refs.contactEmailLink.href = `mailto:${portfolioData.email}`;
  refs.contactEmailLink.textContent = `Email ${portfolioData.name.split(" ")[0]}`;
  refs.footerName.textContent = portfolioData.name;

  refs.recruiterHeadline.textContent = portfolioData.recruiterBrief.headline;
  refs.recruiterSummary.textContent = portfolioData.recruiterBrief.summary;
  refs.recruiterBullets.innerHTML = "";
  portfolioData.recruiterBrief.bullets.forEach((bullet) => {
    const li = document.createElement("li");
    li.textContent = bullet;
    refs.recruiterBullets.appendChild(li);
  });

  refs.focusList.innerHTML = "";
  portfolioData.focus.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    refs.focusList.appendChild(li);
  });

  refs.educationPoints.innerHTML = "";
  portfolioData.education.points.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    refs.educationPoints.appendChild(li);
  });

  renderSocialLinks();
}

function renderSocialLinks() {
  refs.socialLinks.innerHTML = "";

  portfolioData.socialLinks.forEach((item) => {
    const link = document.createElement("a");
    link.className = "social-link";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noreferrer noopener";
    link.textContent = item.label;
    refs.socialLinks.appendChild(link);
  });
}

function wireBriefPdfButtons() {
  if (refs.briefPdfBtn) {
    refs.briefPdfBtn.addEventListener("click", generateRecruiterBriefPdf);
  }

  if (refs.contactBriefPdfBtn) {
    refs.contactBriefPdfBtn.addEventListener("click", generateRecruiterBriefPdf);
  }
}

function generateRecruiterBriefPdf() {
  const popup = window.open("", "_blank", "width=980,height=1120");
  if (!popup) {
    announce("Popup blocked. Allow popups to generate recruiter brief PDF.");
    return;
  }

  const bulletsHtml = portfolioData.recruiterBrief.bullets
    .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
    .join("");

  const projectsHtml = portfolioData.projects
    .map(
      (project) => `
        <li>
          <strong>${escapeHtml(project.title)}</strong><br />
          <span>${escapeHtml(project.summary)}</span>
        </li>
      `,
    )
    .join("");

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Recruiter Brief - ${escapeHtml(portfolioData.name)}</title>
        <style>
          body { font-family: Arial, sans-serif; color: #1f2833; margin: 32px; line-height: 1.5; }
          h1, h2, h3 { margin: 0 0 8px; }
          h1 { font-size: 28px; }
          h2 { font-size: 18px; margin-top: 24px; }
          .meta { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-top: 16px; }
          .meta div { border: 1px solid #d7dee5; border-radius: 10px; padding: 10px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #5f6b79; display: block; }
          .value { font-weight: 700; margin-top: 4px; display: block; }
          ul { margin: 8px 0 0; padding-left: 20px; }
          li { margin-bottom: 8px; }
          .muted { color: #5f6b79; }
          .note { margin-top: 18px; font-size: 12px; color: #5f6b79; }
          @media print {
            body { margin: 18mm; }
          }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(portfolioData.name)}</h1>
        <p class="muted">${escapeHtml(portfolioData.roles[0])} | ${escapeHtml(portfolioData.location)}</p>
        <div class="meta">
          <div><span class="label">Email</span><span class="value">${escapeHtml(portfolioData.email)}</span></div>
          <div><span class="label">Availability</span><span class="value">${escapeHtml(
            portfolioData.availability.statusDetail,
          )}</span></div>
          <div><span class="label">Open To</span><span class="value">${escapeHtml(portfolioData.openTo)}</span></div>
        </div>

        <h2>Recruiter Summary</h2>
        <p>${escapeHtml(portfolioData.recruiterBrief.summary)}</p>
        <ul>${bulletsHtml}</ul>

        <h2>Focus Areas</h2>
        <ul>${portfolioData.focus.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>

        <h2>Highlighted Projects</h2>
        <ul>${projectsHtml}</ul>

        <h2>Profiles</h2>
        <p>
          GitHub: ${escapeHtml(portfolioData.socialLinks.find((x) => x.label === "GitHub")?.url || "")}<br />
          LinkedIn: ${escapeHtml(portfolioData.socialLinks.find((x) => x.label === "LinkedIn")?.url || "")}
        </p>
        <p class="note">Generated on ${new Date().toLocaleString("en-PH", { timeZone: portfolioData.timezone })}</p>
      </body>
    </html>
  `;

  popup.document.open();
  popup.document.write(html);
  popup.document.close();
  popup.focus();
  window.setTimeout(() => {
    popup.print();
  }, 280);

  announce("Recruiter brief ready. Use Save as PDF in print dialog.");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function setupTerminalMode() {
  if (!refs.terminalForm || !refs.terminalInput || !refs.terminalOutput) {
    return;
  }

  if (refs.terminalForm.dataset.bound === "true") {
    return;
  }

  refs.terminalForm.dataset.bound = "true";
  terminalCommands = {
    help: () => {
      pushTerminalLine(
        "system",
        "Commands: help, about, education, skills, projects, journey, contact, open github, open linkedin, recruiter on, recruiter off, case gallium, case capstone, radar backend|fullstack|workflow, pdf, clear",
      );
    },
    about: () => {
      pushTerminalLine("system", portfolioData.about);
    },
    education: () => {
      pushTerminalLine(
        "system",
        `${portfolioData.education.school}\n${portfolioData.education.detail}\n${portfolioData.education.points.join(
          "\n",
        )}`,
      );
    },
    skills: () => {
      const tracks = Object.entries(portfolioData.stackGroups)
        .map(([key, items]) => `${key}: ${items.join(", ")}`)
        .join("\n");
      pushTerminalLine("system", tracks);
    },
    projects: () => {
      const list = portfolioData.projects
        .map((project, index) => `${index + 1}. ${project.title} (${project.category})`)
        .join("\n");
      pushTerminalLine("system", list);
    },
    journey: () => {
      const current = portfolioData.journey[state.activeJourneyIndex];
      pushTerminalLine("system", `${current.period} | ${current.title}\n${current.summary}`);
    },
    contact: () => {
      const github = portfolioData.socialLinks.find((item) => item.label === "GitHub");
      const linkedIn = portfolioData.socialLinks.find((item) => item.label === "LinkedIn");
      pushTerminalLine(
        "system",
        `Email: ${portfolioData.email}\nGitHub: ${github?.url || "-"}\nLinkedIn: ${linkedIn?.url || "-"}`,
      );
    },
    pdf: () => {
      generateRecruiterBriefPdf();
      pushTerminalLine("system", "Recruiter brief generator opened.");
    },
    brief: () => {
      generateRecruiterBriefPdf();
      pushTerminalLine("system", "Recruiter brief generator opened.");
    },
  };

  seedTerminalWelcome();

  refs.terminalForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const raw = refs.terminalInput.value.trim();
    if (!raw) {
      return;
    }

    refs.terminalInput.value = "";
    pushTerminalLine("user", `kirk@portfolio:~$ ${raw}`);
    runTerminalCommand(raw);
  });
}

function seedTerminalWelcome() {
  if (refs.terminalOutput.children.length) {
    return;
  }

  pushTerminalLine("system", `Welcome, this is ${portfolioData.name}'s portfolio terminal.`);
  pushTerminalLine("system", "Type `help` to list available commands.");
}

function pushTerminalLine(type, text) {
  const line = document.createElement("pre");
  line.className = `terminal-line terminal-${type}`;
  line.textContent = text;
  refs.terminalOutput.appendChild(line);
  refs.terminalOutput.scrollTop = refs.terminalOutput.scrollHeight;
}

function runTerminalCommand(rawCommand) {
  const command = rawCommand.trim().toLowerCase();
  if (!command) {
    return;
  }

  if (command === "clear") {
    refs.terminalOutput.innerHTML = "";
    return;
  }

  if (terminalCommands[command]) {
    terminalCommands[command]();
    return;
  }

  if (command === "open github" || command === "github") {
    const github = portfolioData.socialLinks.find((item) => item.label === "GitHub");
    if (github) {
      window.open(github.url, "_blank");
      pushTerminalLine("system", "Opened GitHub.");
    }
    return;
  }

  if (command === "open linkedin" || command === "linkedin") {
    const linkedIn = portfolioData.socialLinks.find((item) => item.label === "LinkedIn");
    if (linkedIn) {
      window.open(linkedIn.url, "_blank");
      pushTerminalLine("system", "Opened LinkedIn.");
    }
    return;
  }

  if (command === "recruiter on") {
    toggleRecruiterMode(true);
    pushTerminalLine("system", "Recruiter mode enabled.");
    return;
  }

  if (command === "recruiter off") {
    toggleRecruiterMode(false);
    pushTerminalLine("system", "Recruiter mode disabled.");
    return;
  }

  if (command.startsWith("case ")) {
    const keyword = command.replace("case ", "").trim();
    const study = portfolioData.caseStudies.find(
      (item) => item.id.includes(keyword) || item.title.toLowerCase().includes(keyword),
    );
    if (study) {
      openCaseModal(study.id);
      pushTerminalLine("system", `Opened case study: ${study.title}`);
      return;
    }
  }

  if (command.startsWith("radar ")) {
    const keyword = command.replace("radar ", "").trim();
    const target = Object.keys(portfolioData.skillRadar.profiles).find(
      (group) => group.toLowerCase().replace(/\s+/g, "") === keyword.replace(/\s+/g, ""),
    );
    if (target) {
      selectRadarGroup(target);
      scrollToSection("skills");
      pushTerminalLine("system", `Radar switched to ${target}.`);
      return;
    }
  }

  pushTerminalLine("system", `Command not found: ${rawCommand}\nType 'help' for options.`);
}

function renderSkillRadar() {
  if (!refs.skillRadarCanvas || !refs.radarControls) {
    return;
  }

  const groups = Object.keys(portfolioData.skillRadar.profiles);
  if (!groups.length) {
    return;
  }

  if (!groups.includes(state.activeRadarGroup)) {
    state.activeRadarGroup = groups[0];
  }

  refs.radarControls.innerHTML = "";
  groups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `radar-btn${group === state.activeRadarGroup ? " active" : ""}`;
    button.textContent = group;
    button.addEventListener("click", () => {
      selectRadarGroup(group);
    });
    refs.radarControls.appendChild(button);
  });

  radarCurrentValues = [...portfolioData.skillRadar.profiles[state.activeRadarGroup]];
  refs.radarSummary.textContent = portfolioData.skillRadar.summaries[state.activeRadarGroup] || "";
  drawSkillRadar(radarCurrentValues);

  if (refs.skillRadarCanvas.dataset.bound !== "true") {
    refs.skillRadarCanvas.dataset.bound = "true";
    window.addEventListener("resize", () => {
      drawSkillRadar(radarCurrentValues);
    });
  }
}

function selectRadarGroup(group, silent = false) {
  const target = portfolioData.skillRadar.profiles[group];
  if (!target) {
    return;
  }

  state.activeRadarGroup = group;
  refs.radarSummary.textContent = portfolioData.skillRadar.summaries[group] || "";

  const buttons = [...refs.radarControls.querySelectorAll(".radar-btn")];
  buttons.forEach((button) => {
    button.classList.toggle("active", button.textContent === group);
  });

  if (reducedMotion || reducedData || !radarCurrentValues.length) {
    radarCurrentValues = [...target];
    drawSkillRadar(radarCurrentValues);
    if (!silent) {
      announce(`Radar switched to ${group}`);
    }
    return;
  }

  if (radarFrame) {
    cancelAnimationFrame(radarFrame);
  }

  const from = [...radarCurrentValues];
  const duration = 420;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    radarCurrentValues = target.map((value, index) => {
      const source = from[index] ?? value;
      return source + (value - source) * eased;
    });
    drawSkillRadar(radarCurrentValues);

    if (progress < 1) {
      radarFrame = requestAnimationFrame(tick);
      return;
    }

    radarCurrentValues = [...target];
    drawSkillRadar(radarCurrentValues);
    radarFrame = undefined;
  };

  radarFrame = requestAnimationFrame(tick);

  if (!silent) {
    announce(`Radar switched to ${group}`);
  }
}

function drawSkillRadar(values) {
  const canvas = refs.skillRadarCanvas;
  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  const rect = canvas.getBoundingClientRect();
  const width = Math.max(rect.width || canvas.width, 320);
  const height = Math.max(rect.height || canvas.height, 260);
  const dpr = window.devicePixelRatio || 1;

  if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
  }

  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  context.clearRect(0, 0, width, height);

  const style = getComputedStyle(refs.body);
  const accent = style.getPropertyValue("--accent").trim() || "#2f5c7a";
  const line = style.getPropertyValue("--line").trim() || "rgba(31, 40, 51, 0.14)";
  const text = style.getPropertyValue("--muted").trim() || "#5f6b79";

  const labels = portfolioData.skillRadar.labels;
  const count = labels.length;
  const centerX = width * 0.5;
  const centerY = height * 0.54;
  const radius = Math.min(width * 0.34, height * 0.36);

  const pointAt = (index, ratio) => {
    const angle = -Math.PI / 2 + (index * (Math.PI * 2)) / count;
    return {
      x: centerX + Math.cos(angle) * radius * ratio,
      y: centerY + Math.sin(angle) * radius * ratio,
      angle,
    };
  };

  context.lineWidth = 1;
  context.strokeStyle = line;
  for (let ring = 1; ring <= 5; ring += 1) {
    const ratio = ring / 5;
    context.beginPath();
    for (let i = 0; i < count; i += 1) {
      const point = pointAt(i, ratio);
      if (i === 0) {
        context.moveTo(point.x, point.y);
      } else {
        context.lineTo(point.x, point.y);
      }
    }
    context.closePath();
    context.stroke();
  }

  for (let i = 0; i < count; i += 1) {
    const outer = pointAt(i, 1);
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(outer.x, outer.y);
    context.stroke();
  }

  context.font = "600 12px 'DM Sans', sans-serif";
  context.fillStyle = text;
  labels.forEach((label, index) => {
    const labelPoint = pointAt(index, 1.14);
    const horizontalBias = Math.cos(labelPoint.angle);
    if (horizontalBias > 0.2) {
      context.textAlign = "left";
    } else if (horizontalBias < -0.2) {
      context.textAlign = "right";
    } else {
      context.textAlign = "center";
    }
    context.textBaseline = "middle";
    context.fillText(label, labelPoint.x, labelPoint.y);
  });

  context.beginPath();
  values.forEach((value, index) => {
    const ratio = Math.max(0, Math.min(1, value / 100));
    const point = pointAt(index, ratio);
    if (index === 0) {
      context.moveTo(point.x, point.y);
    } else {
      context.lineTo(point.x, point.y);
    }
  });
  context.closePath();
  context.fillStyle = `${accent}30`;
  context.strokeStyle = accent;
  context.lineWidth = 2;
  context.fill();
  context.stroke();

  values.forEach((value, index) => {
    const ratio = Math.max(0, Math.min(1, value / 100));
    const point = pointAt(index, ratio);
    context.beginPath();
    context.arc(point.x, point.y, 3.5, 0, Math.PI * 2);
    context.fillStyle = accent;
    context.fill();
  });
}

function renderQuickDock() {
  scrollSections = [...document.querySelectorAll("main section[id]")].filter(
    (section) => !section.hasAttribute("hidden"),
  );
  refs.quickDock.innerHTML = "";

  scrollSections.forEach((section) => {
    const heading = section.querySelector("h2");
    const label = heading?.textContent?.trim() || section.id;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "dock-dot";
    button.dataset.target = section.id;
    button.setAttribute("aria-label", `Go to ${label}`);
    button.innerHTML = `<span>${label}</span>`;
    button.addEventListener("click", () => {
      scrollToSection(section.id);
    });
    refs.quickDock.appendChild(button);
  });
}

function setActiveQuickDock(sectionId) {
  const dots = [...refs.quickDock.querySelectorAll(".dock-dot")];
  dots.forEach((dot) => {
    const targetSection = document.getElementById(dot.dataset.target);
    const isVisible = Boolean(targetSection && targetSection.offsetParent !== null);
    dot.hidden = !isVisible;
    dot.classList.toggle("active", dot.dataset.target === sectionId);
  });
}

function renderJourney() {
  refs.journeyTimeline.innerHTML = "";

  portfolioData.journey.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "journey-point";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(index === state.activeJourneyIndex));
    button.innerHTML = `
      <span class="journey-step">Stage ${index + 1}</span>
      <small>${item.period}</small>
      <strong>${item.title}</strong>
    `;
    button.addEventListener("click", () => selectJourney(index));
    refs.journeyTimeline.appendChild(button);
  });

  selectJourney(state.activeJourneyIndex);
}

function selectJourney(index) {
  if (!portfolioData.journey[index]) {
    return;
  }

  state.activeJourneyIndex = index;
  const item = portfolioData.journey[index];

  const tabs = [...refs.journeyTimeline.querySelectorAll(".journey-point")];
  tabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  const progress = Math.round(((index + 1) / portfolioData.journey.length) * 100);

  refs.journeyDetail.innerHTML = `
    <p class="journey-count">Stage ${index + 1} of ${portfolioData.journey.length}</p>
    <p class="eyebrow">${item.period}</p>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <div class="journey-progress" aria-hidden="true"><span style="width:${progress}%"></span></div>
    <div class="detail-columns">
      <div>
        <h4>Deliverables</h4>
        <ul>${item.deliverables.map((line) => `<li>${line}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>What I Learned</h4>
        <ul>${item.learned.map((line) => `<li>${line}</li>`).join("")}</ul>
      </div>
    </div>
  `;

  applyTiltEffects();
}

function renderStack() {
  const groups = Object.keys(portfolioData.stackGroups);

  refs.stackSwitch.innerHTML = "";
  groups.forEach((group) => {
    const btn = document.createElement("button");
    btn.className = `switch-btn${group === state.activeStack ? " active" : ""}`;
    btn.textContent = group;
    btn.type = "button";
    btn.addEventListener("click", () => {
      state.activeStack = group;
      renderStack();
      if (portfolioData.skillRadar.profiles[group]) {
        selectRadarGroup(group, true);
      }
    });
    refs.stackSwitch.appendChild(btn);
  });

  refs.stackGrid.innerHTML = "";
  portfolioData.stackGroups[state.activeStack].forEach((stackItem) => {
    const card = document.createElement("div");
    card.className = "stack-card";
    card.textContent = stackItem;
    card.setAttribute("data-tilt", "");
    refs.stackGrid.appendChild(card);
  });

  applyTiltEffects();
}

function renderProjectFilters() {
  if (!portfolioData.projects.length) {
    refs.projectFilters.innerHTML = "";
    return;
  }

  const categories = [
    "All",
    ...new Set(portfolioData.projects.map((project) => project.category)),
  ];

  refs.projectFilters.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = `filter-btn${category === state.activeProjectCategory ? " active" : ""}`;
    button.type = "button";
    button.textContent = category;
    button.addEventListener("click", () => {
      state.activeProjectCategory = category;
      renderProjectFilters();
      refreshProjects();
    });
    refs.projectFilters.appendChild(button);
  });
}

function wireProjectSearch() {
  refs.projectSearch.addEventListener("input", (event) => {
    state.projectSearchQuery = event.target.value.trim().toLowerCase();
    refreshProjects();
  });

  refs.clearSearch.addEventListener("click", () => {
    state.projectSearchQuery = "";
    refs.projectSearch.value = "";
    refreshProjects();
    refs.projectSearch.focus();
  });
}

function refreshProjects() {
  syncProjectToolsState();

  const visibleIndices = getVisibleProjectIndices();

  if (!visibleIndices.includes(state.activeProjectIndex)) {
    state.activeProjectIndex = visibleIndices[0] ?? -1;
  }

  renderProjects();
  selectProject(state.activeProjectIndex);
  updateProjectAutoplayButton();
}

function syncProjectToolsState() {
  const hasProjects = portfolioData.projects.length > 0;
  refs.projectSearch.disabled = !hasProjects;
  refs.clearSearch.disabled = !hasProjects;
  refs.projectSearch.placeholder = hasProjects
    ? "Search by title, tag, or keyword"
    : "No projects yet";

  if (!hasProjects) {
    state.projectSearchQuery = "";
    refs.projectSearch.value = "";
  }
}

function renderProjects() {
  refs.projectGrid.innerHTML = "";

  if (!portfolioData.projects.length) {
    refs.projectGrid.innerHTML =
      '<p class="empty-state">Projects are coming soon. I am currently in OJT and will publish backend-focused work here as I complete it.</p>';
    return;
  }

  const visibleProjects = portfolioData.projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => matchesProjectFilters(project));

  if (!visibleProjects.length) {
    refs.projectGrid.innerHTML =
      '<p class="empty-state">No projects matched your filter or search.</p>';
    return;
  }

  visibleProjects.forEach(({ project, index }) => {
    const card = document.createElement("article");
    card.className = `project-card${index === state.activeProjectIndex ? " active" : ""}`;
    card.tabIndex = 0;
    card.dataset.index = String(index);
    card.setAttribute("data-tilt", "");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open preview for ${project.title}`);

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    `;

    card.addEventListener("click", () => selectProject(index));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectProject(index);
      }
    });

    refs.projectGrid.appendChild(card);
  });

  applyTiltEffects();
}

function matchesProjectFilters(project) {
  const byCategory =
    state.activeProjectCategory === "All" || project.category === state.activeProjectCategory;

  const searchText = [
    project.title,
    project.category,
    project.summary,
    project.tags.join(" "),
    project.highlights.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  const bySearch = !state.projectSearchQuery || searchText.includes(state.projectSearchQuery);

  return byCategory && bySearch;
}

function getVisibleProjectIndices() {
  return portfolioData.projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => matchesProjectFilters(project))
    .map(({ index }) => index);
}

function selectProject(index) {
  const project = portfolioData.projects[index];
  if (index < 0 || !project || !matchesProjectFilters(project)) {
    refs.previewTitle.textContent = "Projects coming soon";
    refs.previewSummary.textContent =
      "I am currently building portfolio-ready backend and full stack projects during internship.";
    refs.previewHighlights.innerHTML = "";
    refs.previewLink.style.display = "none";
    refs.previewCaseBtn.style.display = "none";
    refs.previewCaseBtn.dataset.caseId = "";
    refs.previewEmbedWrap.hidden = true;
    refs.previewEmbedCaption.hidden = true;
    refs.previewEmbedFrame.removeAttribute("src");
    refs.previewEmbedFrame.title = "Project live preview";
    refs.previewAutoBtn.disabled = true;
    return;
  }

  state.activeProjectIndex = index;
  refs.previewTitle.textContent = project.title;
  refs.previewSummary.textContent = project.summary;

  refs.previewHighlights.innerHTML = "";
  project.highlights.forEach((highlight) => {
    const item = document.createElement("li");
    item.textContent = highlight;
    refs.previewHighlights.appendChild(item);
  });

  if (project.link) {
    refs.previewLink.href = project.link;
    refs.previewLink.style.display = "inline-flex";
  } else {
    refs.previewLink.style.display = "none";
  }

  if (project.caseStudyId) {
    refs.previewCaseBtn.style.display = "inline-flex";
    refs.previewCaseBtn.dataset.caseId = project.caseStudyId;
  } else {
    refs.previewCaseBtn.style.display = "none";
    refs.previewCaseBtn.dataset.caseId = "";
  }

  if (project.embedUrl) {
    refs.previewEmbedFrame.src = project.embedUrl;
    refs.previewEmbedFrame.title = `${project.title} live preview`;
    refs.previewEmbedWrap.hidden = false;
    refs.previewEmbedCaption.hidden = false;
  } else {
    refs.previewEmbedWrap.hidden = true;
    refs.previewEmbedCaption.hidden = true;
    refs.previewEmbedFrame.removeAttribute("src");
    refs.previewEmbedFrame.title = "Project live preview";
  }

  const cards = [...document.querySelectorAll(".project-card")];
  cards.forEach((card) => {
    const cardIndex = Number(card.dataset.index);
    card.classList.toggle("active", cardIndex === index);
  });
}

function updateProjectAutoplayButton() {
  const visible = getVisibleProjectIndices();
  const canAutoplay = visible.length > 1 && portfolioData.projects.length > 1;
  refs.previewAutoBtn.disabled = !canAutoplay;
  refs.previewAutoBtn.textContent = `Auto Preview: ${state.projectAutoplayEnabled ? "On" : "Off"}`;
}

function toggleProjectAutoplay(forceValue, silent = false) {
  state.projectAutoplayEnabled =
    typeof forceValue === "boolean" ? forceValue : !state.projectAutoplayEnabled;
  updateProjectAutoplayButton();

  if (!silent) {
    announce(`Auto preview ${state.projectAutoplayEnabled ? "enabled" : "disabled"}`);
  }
}

function wireProjectKeyboardNavigation() {
  document.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }

    if (state.commandOpen || !refs.caseModal.hidden) {
      return;
    }

    const activeElement = document.activeElement;
    if (activeElement && ["INPUT", "TEXTAREA"].includes(activeElement.tagName)) {
      return;
    }

    const sectionBounds = refs.projectsSection.getBoundingClientRect();
    const isProjectsNearView =
      sectionBounds.top < window.innerHeight * 0.75 && sectionBounds.bottom > 80;

    if (!isProjectsNearView) {
      return;
    }

    const visible = getVisibleProjectIndices();
    if (!visible.length) {
      return;
    }

    const currentPos = Math.max(visible.indexOf(state.activeProjectIndex), 0);
    const nextPos =
      event.key === "ArrowRight"
        ? (currentPos + 1) % visible.length
        : (currentPos - 1 + visible.length) % visible.length;

    event.preventDefault();
    selectProject(visible[nextPos]);
    announce(`Project changed to ${portfolioData.projects[visible[nextPos]].title}`);
  });
}

function wireProjectAutoplay() {
  refs.previewAutoBtn.addEventListener("click", () => {
    toggleProjectAutoplay(undefined, false);
  });

  if (reducedData) {
    toggleProjectAutoplay(false, true);
    return;
  }

  refs.projectsSection.addEventListener("pointerenter", () => {
    state.projectAutoplayPaused = true;
  });
  refs.projectsSection.addEventListener("pointerleave", () => {
    state.projectAutoplayPaused = false;
  });
  refs.projectsSection.addEventListener("focusin", () => {
    state.projectAutoplayPaused = true;
  });
  refs.projectsSection.addEventListener("focusout", () => {
    state.projectAutoplayPaused = false;
  });

  updateProjectAutoplayButton();

  projectAutoplayTimer = window.setInterval(() => {
    if (
      !state.projectAutoplayEnabled ||
      state.projectAutoplayPaused ||
      state.commandOpen ||
      !refs.caseModal.hidden
    ) {
      return;
    }

    const sectionBounds = refs.projectsSection.getBoundingClientRect();
    const isProjectsNearView =
      sectionBounds.top < window.innerHeight * 0.72 && sectionBounds.bottom > 90;

    if (!isProjectsNearView) {
      return;
    }

    const visible = getVisibleProjectIndices();
    if (visible.length < 2) {
      return;
    }

    const currentPos = Math.max(visible.indexOf(state.activeProjectIndex), 0);
    const nextPos = (currentPos + 1) % visible.length;
    selectProject(visible[nextPos]);
  }, 5500);
}

function wireJourneyKeyboardNavigation() {
  document.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") {
      return;
    }

    if (state.commandOpen || !refs.caseModal.hidden) {
      return;
    }

    const activeElement = document.activeElement;
    if (activeElement && ["INPUT", "TEXTAREA"].includes(activeElement.tagName)) {
      return;
    }

    const section = document.getElementById("journey");
    if (!section) {
      return;
    }

    const bounds = section.getBoundingClientRect();
    const isJourneyNearView = bounds.top < window.innerHeight * 0.72 && bounds.bottom > 90;
    if (!isJourneyNearView) {
      return;
    }

    event.preventDefault();
    const delta = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex =
      (state.activeJourneyIndex + delta + portfolioData.journey.length) % portfolioData.journey.length;
    selectJourney(nextIndex);
    announce(`Journey stage ${nextIndex + 1} selected`);
  });
}

function renderCaseStudies() {
  refs.caseStudyGrid.innerHTML = "";

  portfolioData.caseStudies.forEach((study) => {
    const card = document.createElement("article");
    card.className = "case-study-card";
    card.setAttribute("data-tilt", "");
    card.innerHTML = `
      <p class="eyebrow">${study.type}</p>
      <h3>${study.title}</h3>
      <p>${study.context}</p>
      <button class="ghost-btn" type="button" data-open-case="${study.id}">Open Case Study</button>
    `;

    refs.caseStudyGrid.appendChild(card);
  });

  refs.caseStudyGrid.addEventListener("click", (event) => {
    const target = event.target.closest("[data-open-case]");
    if (!target) {
      return;
    }
    const caseId = target.getAttribute("data-open-case");
    openCaseModal(caseId);
  });

  refs.previewCaseBtn.addEventListener("click", () => {
    const caseId = refs.previewCaseBtn.dataset.caseId;
    if (caseId) {
      openCaseModal(caseId);
    }
  });

  applyTiltEffects();
}

function wireCaseModal() {
  refs.caseModalClose.addEventListener("click", closeCaseModal);
  refs.caseCloseButtons.forEach((button) => {
    button.addEventListener("click", closeCaseModal);
  });
}

function openCaseModal(caseId) {
  const study = portfolioData.caseStudies.find((entry) => entry.id === caseId);
  if (!study) {
    return;
  }

  state.activeCaseStudyId = study.id;
  lastFocusedElement = document.activeElement;

  refs.caseModalType.textContent = study.type;
  refs.caseModalTitle.textContent = study.title;
  refs.caseModalContext.textContent = study.context;
  refs.caseModalProblem.textContent = study.problem;
  refs.caseModalTask.textContent = study.task;
  refs.caseModalResult.textContent = study.result;

  refs.caseModalSteps.innerHTML = study.steps
    .map(
      (step, index) => `
        <details ${index === 0 ? "open" : ""}>
          <summary>${step.title}</summary>
          <p>${step.detail}</p>
        </details>
      `,
    )
    .join("");

  refs.caseModalScreens.innerHTML = study.screens
    .map((screen) => `<div class="case-screen">${screen}</div>`)
    .join("");

  refs.caseModal.hidden = false;
  refs.body.classList.add("modal-open");
  refs.caseModalClose.focus();
  announce(`Opened case study: ${study.title}`);
}

function closeCaseModal() {
  if (refs.caseModal.hidden) {
    return;
  }

  refs.caseModal.hidden = true;
  refs.body.classList.remove("modal-open");
  announce("Closed case study modal");

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function setupCommands() {
  const socialGithub = portfolioData.socialLinks.find((link) => link.label === "GitHub");
  const socialLinkedIn = portfolioData.socialLinks.find((link) => link.label === "LinkedIn");

  commandCommands = [
    commandItem("Go to About", "Section", () => scrollToSection("about"), ["about", "profile"]),
    commandItem("Go to Education", "Section", () => scrollToSection("education"), [
      "education",
      "school",
      "sti",
    ]),
    commandItem("Go to Terminal", "Section", () => scrollToSection("terminalMode"), [
      "terminal",
      "console",
    ]),
    commandItem("Go to Projects", "Section", () => scrollToSection("projects"), ["projects", "work"]),
    commandItem("Go to Contact", "Section", () => scrollToSection("contact"), ["contact", "email"]),
    commandItem("Toggle Recruiter Mode", "View", toggleRecruiterMode, ["recruiter", "brief"]),
    commandItem("Toggle Theme", "View", () => refs.themeToggle.click(), ["theme", "night", "light"]),
    commandItem("Toggle Auto Preview", "Projects", toggleProjectAutoplay, ["autoplay", "project"]),
    commandItem("Generate Recruiter Brief PDF", "Action", generateRecruiterBriefPdf, [
      "pdf",
      "brief",
      "resume",
    ]),
    commandItem(
      "Focus Terminal Input",
      "Action",
      () => {
        scrollToSection("terminalMode");
        window.setTimeout(() => {
          refs.terminalInput?.focus();
        }, 220);
      },
      ["terminal", "input", "type"],
    ),
    commandItem(
      "Copy Email",
      "Action",
      async () => {
        await navigator.clipboard.writeText(portfolioData.email);
        announce("Email copied");
      },
      ["copy", "email"],
    ),
    commandItem(
      "Open Current Case Study",
      "Modal",
      () => {
        const project = portfolioData.projects[state.activeProjectIndex];
        if (project?.caseStudyId) {
          openCaseModal(project.caseStudyId);
        }
      },
      ["case", "modal"],
    ),
  ];

  if (socialGithub) {
    commandCommands.push(
      commandItem("Open GitHub", "External", () => window.open(socialGithub.url, "_blank"), ["github"]),
    );
  }

  if (socialLinkedIn) {
    commandCommands.push(
      commandItem(
        "Open LinkedIn",
        "External",
        () => window.open(socialLinkedIn.url, "_blank"),
        ["linkedin"],
      ),
    );
  }
}

function commandItem(label, hint, run, keywords = []) {
  return {
    label,
    hint,
    run,
    keywords,
  };
}

function wireCommandPalette() {
  refs.commandOpen.addEventListener("click", openCommandPalette);
  refs.mobileCommandOpen?.addEventListener("click", openCommandPalette);

  refs.commandCloseButtons.forEach((button) => {
    button.addEventListener("click", closeCommandPalette);
  });

  refs.commandInput.addEventListener("input", () => {
    renderCommandList(refs.commandInput.value.trim().toLowerCase());
  });

  refs.commandInput.addEventListener("keydown", (event) => {
    if (!state.commandResults.length) {
      if (event.key === "Escape") {
        closeCommandPalette();
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      state.commandActiveIndex = (state.commandActiveIndex + 1) % state.commandResults.length;
      paintCommandList();
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      state.commandActiveIndex =
        (state.commandActiveIndex - 1 + state.commandResults.length) % state.commandResults.length;
      paintCommandList();
    }

    if (event.key === "Enter") {
      event.preventDefault();
      executeCommand(state.commandResults[state.commandActiveIndex]);
    }

    if (event.key === "Escape") {
      closeCommandPalette();
    }
  });

  refs.commandList.addEventListener("click", (event) => {
    const item = event.target.closest("[data-command-index]");
    if (!item) {
      return;
    }
    const index = Number(item.dataset.commandIndex);
    executeCommand(state.commandResults[index]);
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();

      if (!refs.caseModal.hidden) {
        return;
      }

      if (state.commandOpen) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
      return;
    }

    if (event.key === "Escape") {
      if (state.commandOpen) {
        closeCommandPalette();
      }
      closeCaseModal();
    }
  });
}

function openCommandPalette() {
  if (!refs.caseModal.hidden) {
    return;
  }

  closeMenu();
  lastFocusedElement = document.activeElement;
  refs.commandPalette.hidden = false;
  state.commandOpen = true;
  refs.body.classList.add("modal-open");
  refs.commandInput.value = "";
  renderCommandList("");
  refs.commandInput.focus();
  announce("Command palette opened");
}

function closeCommandPalette() {
  if (!state.commandOpen) {
    return;
  }

  refs.commandPalette.hidden = true;
  state.commandOpen = false;
  refs.body.classList.remove("modal-open");
  announce("Command palette closed");

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function renderCommandList(query) {
  state.commandResults = commandCommands.filter((command) => {
    if (!query) {
      return true;
    }

    const haystack = [command.label, command.hint, ...command.keywords]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });

  state.commandActiveIndex = 0;
  paintCommandList();
}

function paintCommandList() {
  refs.commandList.innerHTML = "";

  if (!state.commandResults.length) {
    const empty = document.createElement("li");
    empty.className = "command-item";
    empty.textContent = "No command matched your search.";
    refs.commandList.appendChild(empty);
    return;
  }

  state.commandResults.forEach((command, index) => {
    const li = document.createElement("li");
    li.className = `command-item${index === state.commandActiveIndex ? " active" : ""}`;
    li.dataset.commandIndex = String(index);
    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", String(index === state.commandActiveIndex));
    li.innerHTML = `<span>${command.label}</span><small>${command.hint}</small>`;
    refs.commandList.appendChild(li);
  });
}

function executeCommand(command) {
  if (!command) {
    return;
  }

  closeCommandPalette();
  command.run();
  announce(`Executed command: ${command.label}`);
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function wireRecruiterToggle() {
  refs.recruiterToggle.addEventListener("click", () => {
    toggleRecruiterMode(undefined, false);
  });

  refs.mobileRecruiterToggle?.addEventListener("click", () => {
    toggleRecruiterMode(undefined, false);
  });
}

function toggleRecruiterMode(forceValue, silent = false) {
  state.recruiterMode = typeof forceValue === "boolean" ? forceValue : !state.recruiterMode;
  refs.body.classList.toggle("recruiter-mode", state.recruiterMode);
  refs.recruiterBrief.hidden = !state.recruiterMode;
  const recruiterLabel = state.recruiterMode ? "Full Portfolio" : "Recruiter Mode";
  [refs.recruiterToggle, refs.mobileRecruiterToggle].forEach((button) => {
    if (!button) {
      return;
    }
    button.setAttribute("aria-pressed", String(state.recruiterMode));
    button.textContent = recruiterLabel;
  });

  if (state.recruiterMode) {
    localStorage.setItem("portfolio-recruiter-mode", "on");
    if (!silent) {
      announce("Recruiter mode enabled");
    }
  } else {
    localStorage.removeItem("portfolio-recruiter-mode");
    if (!silent) {
      announce("Recruiter mode disabled");
    }
  }

  setActiveQuickDock(window.location.hash.replace("#", ""));
}

function restoreRecruiterPreference() {
  const stored = localStorage.getItem("portfolio-recruiter-mode");
  if (stored === "on") {
    toggleRecruiterMode(true, true);
  } else {
    toggleRecruiterMode(false, true);
  }
}

function wireThemeToggle() {
  const onThemeToggle = () => {
    refs.body.dataset.theme = refs.body.dataset.theme === "night" ? "" : "night";
    if (refs.body.dataset.theme === "night") {
      localStorage.setItem("portfolio-theme", "night");
    } else {
      localStorage.removeItem("portfolio-theme");
    }
    syncThemeButtonLabel();
  };

  refs.themeToggle.addEventListener("click", onThemeToggle);
  refs.mobileThemeToggle?.addEventListener("click", onThemeToggle);
}

function restoreThemePreference() {
  const storedTheme = localStorage.getItem("portfolio-theme");
  if (storedTheme === "night") {
    refs.body.dataset.theme = "night";
  }
  syncThemeButtonLabel();
}

function syncThemeButtonLabel() {
  const label = refs.body.dataset.theme === "night" ? "Light" : "Night";
  [refs.themeToggle, refs.mobileThemeToggle].forEach((button) => {
    if (button) {
      button.textContent = label;
    }
  });
}

function wireCopyEmail() {
  refs.copyEmail.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.email);
      const previous = refs.copyEmail.textContent;
      refs.copyEmail.textContent = "Copied";
      announce("Email copied to clipboard");
      setTimeout(() => {
        refs.copyEmail.textContent = previous;
      }, 1400);
    } catch {
      refs.copyEmail.textContent = portfolioData.email;
      setTimeout(() => {
        refs.copyEmail.textContent = "Copy Email";
      }, 2200);
    }
  });
}

function wireMenuToggle() {
  refs.menuToggle.addEventListener("click", () => {
    refs.siteHeader.classList.toggle("menu-open");
    const isOpen = refs.siteHeader.classList.contains("menu-open");
    refs.menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  refs.navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!refs.siteHeader.classList.contains("menu-open")) {
      return;
    }
    if (refs.siteHeader.contains(event.target)) {
      return;
    }
    closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });
}

function wireScrollProgressAndSpy() {
  const sections = scrollSections.length ? scrollSections : [...document.querySelectorAll("main section[id]")];

  const onScroll = () => {
    let current = "";

    sections.forEach((section) => {
      if (section.offsetParent === null) {
        return;
      }

      const top = section.offsetTop - 130;
      if (window.scrollY >= top) {
        current = section.id;
      }
    });

    refs.navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("active", isActive);
    });
    setActiveQuickDock(current);

    const fullHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = fullHeight > 0 ? window.scrollY / fullHeight : 0;
    refs.scrollProgress.style.transform = `scaleX(${Math.max(0, Math.min(1, progress))})`;
    refs.backToTop.classList.toggle("visible", window.scrollY > 420);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function wireBackToTop() {
  refs.backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function wireRoleCycle() {
  if (reducedMotion || reducedData || portfolioData.roles.length < 2) {
    return;
  }

  roleRotationTimer = window.setInterval(() => {
    refs.heroRole.classList.add("is-switching");

    window.setTimeout(() => {
      state.activeRoleIndex = (state.activeRoleIndex + 1) % portfolioData.roles.length;
      refs.heroRole.textContent = portfolioData.roles[state.activeRoleIndex];
      refs.heroRole.classList.remove("is-switching");
    }, 180);
  }, 2700);
}

function wireCursorGlow() {
  if (reducedMotion || reducedData || coarsePointer) {
    refs.cursorGlow.style.display = "none";
    return;
  }

  let nextX = 0;
  let nextY = 0;
  let glowFrame = 0;

  window.addEventListener(
    "pointermove",
    (event) => {
      nextX = event.clientX;
      nextY = event.clientY;
      if (glowFrame) {
        return;
      }

      glowFrame = requestAnimationFrame(() => {
        refs.cursorGlow.style.left = `${nextX}px`;
        refs.cursorGlow.style.top = `${nextY}px`;
        refs.cursorGlow.style.opacity = "1";
        glowFrame = 0;
      });
    },
    { passive: true },
  );

  document.addEventListener("pointerleave", () => {
    refs.cursorGlow.style.opacity = "0";
  });
}

function startRevealAnimation() {
  if (reducedMotion || reducedData) {
    refs.revealBlocks.forEach((block) => block.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  refs.revealBlocks.forEach((block) => observer.observe(block));
}

function applyTiltEffects() {
  if (reducedMotion || reducedData || coarsePointer) {
    return;
  }

  const targets = [...document.querySelectorAll("[data-tilt]")];

  targets.forEach((target) => {
    if (target.dataset.tiltBound === "true") {
      return;
    }

    target.dataset.tiltBound = "true";
    let tiltFrame = 0;
    let nextTransform = "perspective(720px) rotateX(0deg) rotateY(0deg)";

    target.addEventListener("pointermove", (event) => {
      const rect = target.getBoundingClientRect();
      const percentX = (event.clientX - rect.left) / rect.width - 0.5;
      const percentY = (event.clientY - rect.top) / rect.height - 0.5;
      const rotateY = percentX * 6;
      const rotateX = -percentY * 6;

      nextTransform = `perspective(720px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      if (tiltFrame) {
        return;
      }

      tiltFrame = requestAnimationFrame(() => {
        target.style.transform = nextTransform;
        tiltFrame = 0;
      });
    });

    target.addEventListener("pointerleave", () => {
      if (tiltFrame) {
        cancelAnimationFrame(tiltFrame);
        tiltFrame = 0;
      }
      target.style.transform = "perspective(720px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

init();
