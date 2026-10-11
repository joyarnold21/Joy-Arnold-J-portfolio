import { DeveloperProfile, Project } from '../types/portfolio';

/**
 * =======================================================================
 * JOY ARNOLD J - PORTFOLIO DATA CONFIGURATION
 * =======================================================================
 * Updated with Joy's exact LinkedIn, LeetCode, email, projects, and Persevex internship.
 * 
 * TO ADD A NEW PROJECT IN THE FUTURE:
 * Simply append a new object to the `projects` array below!
 * It will automatically show up on the portfolio and receive its own
 * dedicated project details page at `/project/:id`.
 */

export const developerProfile: DeveloperProfile = {
  name: "Joy Arnold J",
  role: "B.Tech CSE (Applied AI) Student & Cloud Computing Intern",
  education: {
    degree: "B.Tech in Computer Science & Engineering (Applied AI)",
    institution: "Kalvium",
    currentStatus: "Undergraduate Student",
  },
  internship: {
    role: "Cloud Computing Intern",
    company: "Persevex",
    companyUrl: "https://www.persevex.com/",
    status: "Currently Interning",
    description:
      "Working on cloud computing infrastructure, scalable deployment workflows, and modern web systems at Persevex, translating academic learning into practical industry engineering.",
  },
  email: "joyarnold2008@gmail.com",
  about: {
    summary:
      "I am an undergraduate student pursuing B.Tech CSE in Applied AI at Kalvium and currently interning in Cloud Computing at Persevex. Passionate about crafting high-impact digital experiences across web development, UI/UX, and cloud technologies.",
    appliedAiFocus:
      "My core strengths lie in Python, HTML, CSS, JavaScript, React.js, and Frontend Web Development (FEWD). I have a strong eye for clean UI/UX and responsive aesthetics.",
    currentWork:
      "As a speed learner, I am actively expanding into backend development while advancing my hands-on cloud computing expertise through my internship at Persevex.",
  },
  interests: [
    "Web Development",
    "UI/UX Design",
    "Cloud Computing",
    "Applied AI & Machine Learning",
  ],
  skills: {
    mastered: [
      "Python",
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Frontend Web Dev (FEWD)",
      "UI/UX Design",
      "Tailwind CSS",
    ],
    learning: [
      "Backend Development",
      "Cloud Computing",
      "RESTful APIs",
      "Server Architecture",
    ],
  },
  socialLinks: {
    github: "https://github.com/joyarnold21",
    linkedin: "https://www.linkedin.com/in/joyarnold21/",
    leetcode: "https://leetcode.com/u/Joyyy21/",
  },
};

export const projects: Project[] = [
  {
    id: "instagram-clone",
    title: "Instagram Clone",
    tagline: "Feature-rich social media web application replicating modern Instagram feeds & interactions.",
    description:
      "A modern, responsive Instagram web clone featuring dynamic feeds, interactive post cards, stories preview, likes, comments, and a polished mobile-first UI with smooth transitions.",
    fullOverview:
      "Built with an emphasis on modern frontend web engineering and clean UI/UX principles. This project replicates key social feed interactions, media presentations, story strips, and interactive user engagement. Deployed on Vercel for high-speed edge delivery.",
    category: "Web Development & UI/UX",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "FEWD", "Vercel"],
    keyFeatures: [
      "Dynamic social feed with post cards, like toggling, and comment threads",
      "Interactive stories preview bar with modal viewing",
      "Responsive layout optimized for smartphones, tablets, and desktop displays",
      "Clean UI/UX design matching modern social media application aesthetics",
      "Fast edge deployment with production hosting on Vercel"
    ],
    liveUrl: "https://instagram-clone-virid-rho.vercel.app/",
    githubUrl: "https://github.com/joyarnold21",
  },
  {
    id: "hotel-menu-website",
    title: "Hotel Menu & Dining Platform",
    tagline: "Interactive culinary menu and dining website with categorized dish discovery.",
    description:
      "A sleek, modern hotel and restaurant menu application providing digital dish discovery, culinary category filtering, pricing displays, and an intuitive customer ordering UI.",
    fullOverview:
      "Designed to modernize restaurant dining with an appetizing, contactless digital menu experience. Visitors can explore culinary offerings across categories (starters, main course, desserts, drinks), inspect ingredients and pricing, and experience a smooth, responsive interface.",
    category: "Web Development & UI/UX",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design", "UI/UX", "Vercel"],
    keyFeatures: [
      "Categorized food menu browsing with instant filter transitions",
      "Appetizing visual dish cards with pricing, descriptions, and highlights",
      "Clean, touch-friendly navigation built for restaurant patrons on mobile devices",
      "Fast client-side rendering with zero sluggish reloads",
      "Live production deployment on Vercel"
    ],
    liveUrl: "https://hotelmenu-o3wl.vercel.app/",
    githubUrl: "https://github.com/joyarnold21",
  },
];
