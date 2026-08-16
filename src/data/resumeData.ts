/**
 * Central Resume Data Object for Farjana Akter Mim
 * Editable in a single location for easy future updates.
 */

export interface ResumeProject {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  isComingSoon?: boolean;
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
    institution: string; // Placeholder [University Name]
    period: string; // Placeholder [Start Year – Expected Graduation Year]
  };
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
}

export const resumeData: ResumeData = {
  name: "Farjana Akter Mim",
  title: "Computer Science & Engineering Student",
  summary: "CSE student interested in web development, software engineering, machine learning, and problem solving. I enjoy learning through hands-on projects and continuously improving my technical skills.",
  
  // Contact details
  email: "farjanaaktermim330@gmail.com", // Or "[Your Email]"
  github: "https://github.com/Farjana02mim",
  githubUsername: "Farjana02mim",
  linkedin: "https://www.linkedin.com/in/farjana-akter-mim-1206a636b",
  linkedinUsername: "farjana-akter-mim-1206a636b",
  
  // PDF Configuration
  pdfPath: "/resume/Farjana_Akter_Mim_Resume.pdf",
  hasPdf: false, // Set to true when PDF file is placed in /resume/Farjana_Akter_Mim_Resume.pdf

  // Academic Education (honest placeholders as requested)
  education: {
    degree: "Computer Science & Engineering (CSE)",
    department: "Department of Computer Science & Engineering",
    institution: "[University Name]",
    period: "[Start Year – Expected Graduation Year]"
  },

  // Technical Skills categorization
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

  // Selected Projects for Resume Display
  projects: [
    {
      name: "Zap Shift",
      description: "A full-stack web application built to practice modern frontend and backend development, authentication, API integration, database management, and responsive UI design.",
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
      githubUrl: "https://github.com/Farjana02mim/zap-shift-client",
      isComingSoon: true
    },
    {
      name: "Computer Graphics Project",
      description: "An academic computer graphics project focused on implementing and exploring fundamental computer graphics concepts and algorithms.",
      technologies: ["C++", "OpenGL", "Computer Graphics", "Graphics Algorithms"],
      githubUrl: "https://github.com/Farjana02mim/Computer_Graphics_Project",
      isComingSoon: true
    },
    {
      name: "Panda Project",
      description: "An academic programming project developed as part of learning and practical software development experience.",
      technologies: ["Python", "Pandas", "Data Analysis", "Academic Project"],
      githubUrl: "https://github.com/Farjana02mim/Panda_Project02",
      isComingSoon: true
    },
    {
      name: "University Management System",
      description: "An academic project focused on implementing a university management system and applying object-oriented programming concepts.",
      technologies: ["C++", "OOP", "Data Structures", "File Handling"],
      githubUrl: "https://github.com/Farjana02mim/University_Management_System",
      isComingSoon: true
    },
    {
      name: "Basics of Computer Graphics",
      description: "A collection of fundamental computer graphics work created while learning core graphics programming and rasterization.",
      technologies: ["C++", "Computer Graphics", "Rasterization", "Algorithms"],
      githubUrl: "https://github.com/Farjana02mim/Basics_of_CG",
      isComingSoon: true
    },
    {
      name: "Rainfall Prediction Classifier",
      description: "A machine learning coursework project focused on predictive modeling, exploratory data analysis, and classification metrics using Scikit-learn.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML"],
      githubUrl: "https://github.com/Farjana02mim",
      isComingSoon: true
    }
  ],

  // Academic Coursework
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
  ]
};
