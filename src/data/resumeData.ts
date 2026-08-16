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
  isComingSoon?: boolean;
}

export interface AcademicAchievement {
  title: string;
  year: string;
  position: string;
  award: string;
  description: string;
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
  email: "[Your Email]",
  github: "https://github.com/Farjana02mim",
  githubUsername: "Farjana02mim",
  linkedin: "https://www.linkedin.com/in/farjana-akter-mim-1206a636",
  linkedinUsername: "farjana-akter-mim-1206a636",

  // PDF Configuration
  pdfPath: "/resume/Farjana_Akter_Mim_Resume.pdf",
  hasPdf: false, // Set to true when Farjana_Akter_Mim_Resume.pdf is placed in /resume/

  // Academic Education (Verified)
  education: {
    degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
    department: "Department of Computer Science & Engineering",
    institution: "Jamalpur Science and Technology University",
    cgpa: "3.20",
    period: "[Start Year – Expected Graduation Year]"
  },

  // Academic Achievements (Verified)
  academicAchievements: [
    {
      title: "1st Year — 2nd Position — Scholarship",
      year: "1st Year",
      position: "2nd Position",
      award: "Scholarship",
      description: "Secured 2nd position in 1st Year and received a scholarship."
    },
    {
      title: "2nd Year — 2nd Position — Scholarship Certificate",
      year: "2nd Year",
      position: "2nd Position",
      award: "Scholarship Certificate",
      description: "Secured 2nd position in 2nd Year and received a scholarship certificate."
    }
  ],

  // Technical Skills
  skills: {
    programming: ["C", "C++", "Python", "JavaScript"],
    frontend: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST API", "MongoDB"],
    machineLearning: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Data Preprocessing",
      "Model Evaluation"
    ],
    tools: ["Git", "GitHub", "Firebase", "Jupyter Notebook", "Google Colab", "Linux"],
    otherAreas: [
      "Computer Graphics",
      "Digital Image Processing",
      "Microprocessors",
      "System Analysis & Design"
    ]
  },

  // Projects
  projects: [
    {
      name: "Zap Shift",
      description:
        "Built as a hands-on full-stack project to practice modern frontend and backend development, API integration, database management, and responsive UI design.",
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST API"],
      githubUrl: "https://github.com/Farjana02mim/zap-shift-client",
      githubClientUrl: "https://github.com/Farjana02mim/zap-shift-client",
      githubServerUrl: "https://github.com/Farjana02mim/zap-shift-server",
      isComingSoon: true
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
        "Model Evaluation"
      ],
      githubUrl: undefined,
      isComingSoon: true
    },
    {
      name: "Computer Graphics Project",
      description:
        "Developed while learning fundamental computer graphics concepts, 2D/3D transformations, and interactive rendering algorithms in OpenGL.",
      technologies: ["C++", "OpenGL", "Computer Graphics", "Graphics Algorithms"],
      githubUrl: "https://github.com/Farjana02mim/Computer_Graphics_Project",
      isComingSoon: true
    },
    {
      name: "University Management System",
      description:
        "Built as a hands-on project to practice object-oriented programming, data structures, and file handling in C++.",
      technologies: ["C++", "OOP", "Data Structures", "File Handling"],
      githubUrl: "https://github.com/Farjana02mim/University_Management_System",
      isComingSoon: true
    }
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
    "Machine Learning"
  ],

  // Currently Learning
  currentlyLearning: [
    "Advanced Web Development",
    "Machine Learning",
    "Data Analysis",
    "Backend Development"
  ],

  // Notes
  certificationsNote: "Certifications will be added as I complete them.",
  experienceNote: "Currently building experience through academic and personal projects."
};

