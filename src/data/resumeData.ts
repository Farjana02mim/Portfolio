import { ResumeData } from "../types";

export const initialResumeData: ResumeData = {
  name: "FARJANA AKTER MIM",
  title: "Computer Science & Engineering Student",
  subtitle: "B.Sc in CSE | Aspiring Full-Stack Developer & ML Enthusiast",
  summary:
    "Proactive Computer Science and Engineering undergraduate with strong foundations in algorithms, full-stack web development, and machine learning workflows. Experienced in developing scalable web applications using React, Node.js, Express, and MongoDB, alongside training predictive models with Python and Scikit-learn. Proven academic excellence with 2 consecutive Merit Scholarships (2nd Position) and recognized competitive team participation.",

  // Contact details
  email: "farjanaaktermim330@gmail.com",
  phone: "+880 1318-036509",
  location: "Jamalpur, Bangladesh",
  github: "https://github.com/Farjana02mim",
  githubUsername: "Farjana02mim",
  linkedin: "https://www.linkedin.com/in/farjana-akter-mim-1206a636b",
  linkedinUsername: "farjana-akter-mim-1206a636b",
  portfolioUrl: "https://farjana-akter-mim.vercel.app",

  // PDF Configuration
  pdfPath: "/resume/Farjana_Akter_Mim_Resume.pdf",
  hasPdf: true,
  photoUrl: "",
  showPhoto: false, // Default standard ATS format (photo optional via toggle)

  // Academic Education (Verified)
  education: {
    degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
    department: "Department of Computer Science & Engineering",
    institution: "Jamalpur Science and Technology University",
    cgpa: "3.81 / 4.00",
    period: "August 2023 – August 2027 (Expected)",
    location: "Jamalpur, Bangladesh",
    semesterBreakdown: [
      { semester: "1.1", gpa: "3.52" },
      { semester: "1.2", gpa: "3.87" },
      { semester: "2.1", gpa: "3.86" },
      { semester: "2.2", gpa: "3.97" },
    ],
  },

  // Academic Achievements (Verified)
  academicAchievements: [
    {
      title: "1st Year Merit Scholarship (2nd Position)",
      year: "1st Year",
      position: "2nd Position",
      award: "Merit Scholarship",
      organization: "Jamalpur Science and Technology University",
      date: "2023",
      description:
        "Awarded government merit scholarship for securing 2nd position in the 1st Year B.Sc Engineering examinations.",
    },
    {
      title: "2nd Year Merit Scholarship (2nd Position)",
      year: "2nd Year",
      position: "2nd Position",
      award: "Merit Scholarship",
      organization: "Jamalpur Science and Technology University",
      date: "2024",
      description:
        "Maintained academic excellence and secured 2nd position in the 2nd Year B.Sc Engineering examinations with scholarship.",
    },
  ],

  // Technical Skills formatted for ATS scanning
  skills: {
    programming: [
      "C",
      "C++",
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "Java",
    ],
    frontend: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive UI",
    ],
    backend: ["Node.js", "Express.js", "RESTful APIs", "MongoDB", "Firebase"],
    machineLearning: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Preprocessing",
      "Model Evaluation",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Linux / Bash",
    ],
    otherAreas: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Computer Graphics & OpenGL",
      "Digital Image Processing",
      "Microprocessors & Microcontrollers",
      "System Analysis & Design",
    ],
  },

  // Projects with detailed bullet points and clean links
  projects: [
    {
      id: "zap-shift",
      name: "Zap Shift — Parcel Delivery & Logistics Management System",
      category: "web",
      description:
        "Full-stack parcel delivery platform with role-based dashboard, order tracking, and dynamic pricing calculators.",
      bulletPoints: [
        "Architected responsive single-page client with React, Vite, and Tailwind CSS for seamless parcel booking.",
        "Implemented RESTful backend API using Node.js and Express.js with MongoDB database persistence.",
        "Integrated authentication workflows, status timeline trackers, and responsive mobile-first UI components.",
      ],
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
      liveUrl: undefined,
      featured: true,
    },
    {
      id: "art-gallery",
      name: "Art Gallery — Creative Showcase & Artist Marketplace",
      category: "web",
      description:
        "Interactive art portfolio and marketplace web application supporting craft categorization and user reviews.",
      bulletPoints: [
        "Developed modular React components with responsive Tailwind styling for high-resolution artwork exhibition.",
        "Engineered Express.js REST API with MongoDB to handle craft catalog indexing, search, and secure CRUD operations.",
        "Deployed live application with Firebase hosting and optimized static assets for fast load performance.",
      ],
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      githubUrl: "https://github.com/Farjana02mim/Art-Gallery-Client",
      githubClientUrl: "https://github.com/Farjana02mim/Art-Gallery-Client",
      githubServerUrl: "https://github.com/Farjana02mim/Art-Gallery-Server",
      liveUrl: "https://art-gallery-85d90.web.app/",
      featured: true,
    },
    {
      id: "pet-adoption",
      name: "Pet Adoption & Care Supply Platform",
      category: "web",
      description:
        "Community web platform connecting animal shelters with prospective adopters and pet care suppliers.",
      bulletPoints: [
        "Built intuitive pet catalog with dynamic filtering by species, breed, age, and adoption status in React.",
        "Created secure backend endpoints with Express and MongoDB for adoption applications and item inventory management.",
        "Integrated interactive feedback states, validation handling, and deployed full-stack live prototype.",
      ],
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
      featured: true,
    },
    {
      id: "rainfall-prediction",
      name: "Rainfall Prediction Classifier — Machine Learning Pipeline",
      category: "ml",
      description:
        "Supervised machine learning pipeline evaluating classification models for precipitation forecasting.",
      bulletPoints: [
        "Conducted end-to-end data preprocessing, missing-value imputation, and feature scaling using Pandas & NumPy.",
        "Trained and compared Logistic Regression and Random Forest classifiers utilizing Scikit-learn.",
        "Evaluated classification performance using Confusion Matrix, Accuracy, Precision, Recall, and ROC-AUC curves.",
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Logistic Regression",
        "Random Forest",
      ],
      githubUrl: "https://github.com/Farjana02mim/Rainfall_Prediction",
      liveUrl: undefined,
      featured: true,
    },
    {
      id: "computer-graphics",
      name: "Interactive Computer Graphics & 3D Rendering System",
      category: "graphics",
      description:
        "Academic computer graphics engine implementing 2D/3D transformations and custom rasterization algorithms in OpenGL.",
      bulletPoints: [
        "Implemented Bresenham's line and circle algorithms, polygon clipping, and geometric transformations in C++.",
        "Engineered OpenGL rendering pipeline featuring camera projections, lighting models, and viewport controls.",
      ],
      technologies: [
        "C++",
        "OpenGL",
        "Computer Graphics",
        "Geometric Transformations",
      ],
      githubUrl: "https://github.com/Farjana02mim/Computer_Graphics_Project",
      liveUrl: undefined,
      featured: false,
    },
    {
      id: "university-management",
      name: "University Student & Department Management System",
      category: "system",
      description:
        "Console-based object-oriented academic administration system built with C++ and binary file storage.",
      bulletPoints: [
        "Designed class hierarchies applying inheritance, encapsulation, and polymorphism principles in C++.",
        "Implemented persistent file storage mechanisms for managing student records, course enrollment, and grade calculation.",
      ],
      technologies: ["C++", "OOP", "Data Structures", "File Handling"],
      githubUrl: "https://github.com/Farjana02mim/University_Management_System",
      liveUrl: undefined,
      featured: false,
    },
  ],

  // Relevant Coursework
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Computer Networks",
    "Computer Architecture & Organization",
    "Operating Systems & System Programming",
    "Digital Signal & Image Processing (DIP)",
    "Computer Graphics & OpenGL",
    "System Analysis & Design",
    "Artificial Intelligence & Machine Learning",
    "Discrete Mathematics",
    "Microprocessors & Microcontrollers",
    "Design and Analysis of Algorithms",
  ],

  // Certifications
  certifications: [
    {
      name: "Machine Learning with Python",
      issuer: "Coursera / IBM",
      date: "August 2026",
      url: "/certificates/coursera-ml-python-ibm.jpg",
      description:
        "Covers supervised & unsupervised ML algorithms, regression, classification, clustering, and Scikit-learn pipelines.",
    },
    {
      name: "IEEE Student Membership",
      issuer: "Institute of Electrical and Electronics Engineers (IEEE)",
      date: "2026",
      url: "/certificates/ieee-membership-2026.jpg",
      description:
        "Active student member participating in international technical seminars and academic knowledge exchanges.",
    },
    {
      name: "IEEE Women in Engineering (WIE) Membership",
      issuer: "IEEE Women in Engineering",
      date: "2026",
      url: "/certificates/ieee-wie-membership-2026.jpg",
      description:
        "Member supporting women in engineering, research advancement, and leadership in technology.",
    },
  ],

  // Extra-curricular & Achievements
  extraCurricular: [
    {
      id: "robotics-iot-poster",
      title: "Poster Presentation — Top Girls Team Award",
      category: "Conference Presentation",
      organization:
        "National Conference on Robotics & IoT, Dept. of CSE, BSFMSTU",
      date: "2024",
      description:
        "Presented research poster on IoT applications and awarded Top Girls Team recognition at the national conference.",
      icon: "Award",
      isPlaceholder: false,
    },
    {
      id: "robotics-iot-workshop",
      title: "National Workshop on Robotics & IoT",
      category: "Technical Workshop",
      organization:
        "National Conference on Robotics & IoT, Dept. of CSE, BSFMSTU",
      date: "2024",
      description:
        "Participated in hands-on technical workshop covering microcontrollers, sensor interfacing, and IoT architecture.",
      icon: "Layers",
      isPlaceholder: false,
    },
    {
      id: "july-uprising-day-2024",
      title: "Video Content Competition — 3rd Place",
      category: "Media & Culture",
      organization: "Jamalpur Science & Technology University",
      date: "2024",
      description:
        "Awarded 3rd place in university-wide documentary and video storytelling competition.",
      icon: "Award",
      isPlaceholder: false,
    },
    {
      id: "ndf-bd-debate-2025",
      title: "1st NDF BD Debate Festival Participation",
      category: "Public Speaking",
      organization:
        "National Debate Federation Bangladesh & JSTU Debating Society",
      date: "2025",
      description:
        "Represented university in formal parliamentary style debates on technology and society.",
      icon: "Award",
      isPlaceholder: false,
    },
    {
      id: "jstu-iupc-2025",
      title: "JSTU IUPC 2025 — Top Girls Team",
      category: "Programming Contest",
      organization: "JSTU Inter-University Programming Contest",
      date: "2025",
      description:
        "Recognized as the Top Girls Team at the Inter-University Programming Contest 2025, solving competitive programming challenges.",
      icon: "Trophy",
      isPlaceholder: false,
    },
    {
      id: "jstu-iupc-2026",

      title: "JSTU IUPC 2026 — Participation Certificate",

      category: "Programming Contest",

      organization: "JSTU Inter-University Programming Contest",

      date: "2026",

      description:
        "Successfully participated in the Inter-University Programming Contest 2026, demonstrating enthusiasm, active engagement, and problem-solving skills in competitive programming.",

      icon: "Code2",

      isPlaceholder: false,
    },
    {
      id: "jstu-iupc-2026-top-girls",

      title: "JSTU IUPC 2026 — Top Girls Team",

      category: "Programming Contest",

      organization: "JSTU Inter-University Programming Contest",

      date: "2026",

      description:
        "Recognized as a member of the Top Girls Team for outstanding performance, active participation, and strong problem-solving skills in the Inter-University Programming Contest 2026.",

      icon: "Trophy",

      isPlaceholder: false,
    },
    {
      id: "jstu-seminar-2026-competitive-programming",

      title: "JSTU Seminar 2026 — Competitive Programming & Problem-Solving",

      category: "Seminar",

      organization: "Institutional Quality Assurance Cell (IQAC), JSTU",

      date: "2026",

      description:
        "Successfully participated in the seminar on Competitive Programming and Problem-Solving for Career Excellence, organized by the Institutional Quality Assurance Cell (IQAC), JSTU, with technical support from the Department of CSE, JSTU. The seminar featured Professor Dr. Md. Kaykobad, Distinguished Professor, Department of CSE, BRAC University, as the keynote speaker.",

      icon: "Code2",

      isPlaceholder: false,
    },
  ],

  // References
  references: [
    {
      name: "Faculty Advisor",
      title:
        "Associate Professor, Department of Computer Science & Engineering",
      institution: "Jamalpur Science and Technology University",
      email: "hasan.cse@bsfmstu.ac.bd",
      phone: "Available upon formal request",
    },
    {
      name: "JSTU Administration",
      title: "",
      institution: "Jamalpur Science and Technology University",
      email: "info@jstu.ac.bd",
      phone: "+8802-223377503",
    },
  ],

  // Currently Learning
  currentlyLearning: [
    "Full-Stack Web Architecture",
    "Machine Learning & Deep Learning",
    "Data Preprocessing & Analysis",
    "Open-Source Contribution",
  ],

  certificationsNote:
    "More certifications and course completions will be appended regularly.",
  experienceNote:
    "Building practical industry and academic experience through hands-on full-stack and machine learning software development.",
};

export const resumeData = initialResumeData;
export default initialResumeData;
