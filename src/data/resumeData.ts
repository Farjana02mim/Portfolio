/**
 * Central Editable Resume Data Object for Farjana Akter Mim
 * Editable in a single location for easy future updates.
 */

export interface ResumeProject {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  githubClientUrl?: string;
  githubServerUrl?: string;
  liveUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  organization?: string;
  date: string;
  description: string;
  icon: string;
  isPlaceholder: boolean;
  image?: string;  
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  email: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  linkedinUsername: string;
  pdfPath: string;
  hasPdf: boolean; // Set to true when Farjana_Akter_Mim_Resume.pdf is uploaded to /resume/
  education: {
    degree: string;
    department: string;
    institution: string;
    cgpa: string;
    period: string; // Placeholder [Start Year – Expected Graduation Year]
  };
  academicAchievements: AcademicAchievement[];
  skills: {
    programming: string[];
    frontend: string[];
    backend: string[];
    machineLearning: string[];
    tools: string[];
    otherAreas: string[];
  };
  projects: ResumeProject[];
  coursework: string[];
  certifications?: Array<{
    name: string;
    issuer?: string;
    date?: string;
    url?: string;
  }>;
  currentlyLearning: string[];
  certificationsNote: string;
  experienceNote: string;
}

export const resumeData: ResumeData = {
  name: "Farjana Akter Mim",
  title: "Computer Science & Engineering Student",
  summary:
    "I'm a Computer Science and Engineering student who enjoys turning ideas into practical projects. I'm currently building my skills in web development, software engineering, machine learning, and problem solving through coursework and hands-on projects.",

  // Contact details
  email: "farjanaaktermim330@gmail.com",
  github: "https://github.com/Farjana02mim",
  githubUsername: "Farjana02mim",
  linkedin: "https://www.linkedin.com/in/farjana-akter-mim-1206a636",
  linkedinUsername: "farjana-akter-mim-1206a636",

  // PDF Configuration
  pdfPath: "/resume/Farjana_Akter_Mim_Resume.pdf",
  hasPdf: true, // PDF has been placed in /public/resume/

  // Academic Education (Verified)
  education: {
    degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
    department: "Department of Computer Science & Engineering",
    institution: "Jamalpur Science and Technology University",
    cgpa: "3.81",
    period: "August 2023 – August 2027",
  },

  // Academic Achievements (Verified)
  academicAchievements: [
    {
      title: "1st Year — 2nd Position — Scholarship",
      year: "1st Year",
      position: "2nd Position",
      award: "Scholarship",
      description:
        "Secured 2nd position in 1st Year and received a scholarship.",
    },
    {
      title: "2nd Year — 2nd Position — Scholarship Certificate",
      year: "2nd Year",
      position: "2nd Position",
      award: "Scholarship",
      description:
        "Secured 2nd position in 2nd Year and received a scholarship.",
    },
  ],

  // Technical Skills
  skills: {
    programming: ["C", "C++", "Python", "JavaScript", "Java", "TypeScript"],
    frontend: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST API", "MongoDB"],
    machineLearning: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Data Preprocessing",
      "Model Evaluation",
    ],
    tools: [
      "Git",
      "GitHub",
      "Firebase",
      "Jupyter Notebook",
      "Google Colab",
      "Linux",
    ],
    otherAreas: [
      "Structured Programming Language",
      "Object Oriented Programming",
      "Discrete Mathematics",
      "Computer Architecture",
      "Data Structure",
      "Basic Electronics, Digital Electronics",
      "Competitive Programming",
      "Industrial Economics,Management & Accounting,Sociology",
      "Design and Analysis of Algorithm",
      "Numerical Methods",
      "Database Management System",
      "Data Communication",
      "Computer Networks",
      "Operating System and System Programming",
      "Digital Signal Processing",
      "Artificial Intelligence(AI)",
      "Computer Graphics",
      "Digital Image Processing",
      "Microprocessors & Microcontrollers",
      "System Analysis & Design",
    ],
  },

  // Projects
  projects: [
    {
      name: "Zap Shift",
      description:
        "Built as a hands-on full-stack project to practice modern frontend and backend development, API integration, database management, and responsive UI design.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],
      githubUrl: "https://github.com/Farjana02mim/zap-shift-client",
      githubClientUrl: "https://github.com/Farjana02mim/zap-shift-client",
      githubServerUrl: "https://github.com/Farjana02mim/zap-shift-server",
      // TODO: এখানে আপনার deployed live link বসান, e.g. "https://zap-shift.vercel.app"
      liveUrl: undefined,
    },
    {
      name: "Art Gallery",
      description:
        "Built as a hands-on full-stack project to practice modern frontend and backend development, API integration, database management, and responsive UI design.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],
      githubUrl: "https://github.com/Farjana02mim/Art-Gallery-Client",
      githubClientUrl: "https://github.com/Farjana02mim/Art-Gallery-Client",
      githubServerUrl: "https://github.com/Farjana02mim/Art-Gallery-Server",
      liveUrl: "https://art-gallery-85d90.web.app/",
    },
    {
      name: "Pet Adoption Supply",
      description:
        "Built as a hands-on full-stack project to practice modern frontend and backend development, API integration, database management, and responsive UI design.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],
      githubUrl: "https://github.com/Farjana02mim/petAdoption-client",
      githubClientUrl: "https://github.com/Farjana02mim/petAdoption-client",
      githubServerUrl:
        "https://github.com/Farjana02mim/petAdoptionSupply-server",
      liveUrl: "https://pet-adoption-supply.web.app/",
    },
    {
      name: "Rainfall Prediction Classifier",
      description:
        "Explored supervised classification workflows, weather data preprocessing, and model evaluation techniques using Scikit-learn.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Logistic Regression",
        "Random Forest",
        "Data Preprocessing",
        "Model Evaluation",
      ],
      githubUrl: "https://github.com/Farjana02mim/Rainfall_Prediction",
      liveUrl: undefined,
    },
    {
      name: "Computer Graphics Project",
      description:
        "Developed while learning fundamental computer graphics concepts, 2D/3D transformations, and interactive rendering algorithms in OpenGL.",
      technologies: [
        "C++",
        "OpenGL",
        "Computer Graphics",
        "Graphics Algorithms",
      ],
      githubUrl: "https://github.com/Farjana02mim/Computer_Graphics_Project",
      liveUrl: undefined,
    },
    {
      name: "University Management System",
      description:
        "Built as a hands-on project to practice object-oriented programming, data structures, and file handling in C++.",
      technologies: ["C++", "OOP", "Data Structures", "File Handling"],
      githubUrl:
        "https://github.com/Farjana02mim/University_Management_System",
      liveUrl: undefined,
    },
  ],

  // Relevant Coursework
  coursework: [
    "Data Structures & Algorithms",
    "Database Systems",
    "Computer Networks",
    "Computer Architecture",
    "Microprocessors",
    "Digital Image Processing",
    "Computer Graphics",
    "System Analysis & Design",
    "Machine Learning",
  ],

  // Certifications
  certifications: [
    {
      name: "Machine Learning with Python",
      issuer: "Coursera / IBM",
      date: "August 2026",
      url: "https://lnkd.in/gtn-9d7x",
    },
    {
      name: "IEEE Membership",
      issuer: "IEEE",
      date: "2026",
      url: "/certificates/ieee-membership-2026.jpg",
    },
    {
      name: "IEEE Women in Engineering (WIE) Membership",
      issuer: "IEEE Women in Engineering",
      date: "2026",
      url: "/certificates/ieee-wie-membership-2026.jpg",
    },
  ],

  // Currently Learning
  currentlyLearning: [
    "Advanced Web Development",
    "Machine Learning",
    "Data Analysis",
    "Deep Learning",
    "Research",
  ],

  // Notes
  certificationsNote: "More certifications will be added as I complete them.",
  experienceNote:
    "Currently building experience through academic and personal projects.",
};