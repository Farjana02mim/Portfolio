import {
  Project,
  SkillCategory,
  MLConcept,
  TimelineItem,
  EducationItem,
  CertificationItem,
  AchievementItem,
  DeveloperProfile,
  GitHubRepo,
  StatItem,
} from "../types";

export const personalInfo = {
  name: "Farjana Akter Mim",
  shortName: "Farjana Mim",
  title: "Computer Science & Engineering Student",
  subtitle: "Aspiring Full-Stack Developer | ML Enthusiast",
  tagline:
    "I'm a CSE student passionate about web development, software engineering, machine learning, and building practical projects to solve real-world problems.",
  aboutBio: [
    "I’m a Computer Science and Engineering student who enjoys turning ideas into practical projects. I’m currently building my skills in web development, software engineering, machine learning, and problem solving through coursework and hands-on projects.",
    "My learning journey includes developing web applications, exploring machine learning workflows, working with computer graphics and digital image processing, and continuously improving my programming skills.",
  ],
  email: "farjanaaktermim330@gmail.com",
  github: "https://github.com/Farjana02mim",
  linkedin: "https://www.linkedin.com/in/farjana-akter-mim-1206a636b",
  location: "Bangladesh",
  status: "CSE Student • Open for Internships & Projects",
  resumeAvailable: true,
  resumePath: "/resume/Farjana_Akter_Mim_Resume.pdf",
  profileImagePath: "/images/profile.png",
};

export const quickStats: StatItem[] = [
  {
    label: "Academic & Personal Projects",
    value: "8+",
    subtext: "Web, ML & Graphics",
    icon: "FolderGit2",
  },
  {
    label: "Technologies Learned",
    value: "12+",
    subtext: "React, Node, Python, C++",
    icon: "Layers",
  },
  {
    label: "GitHub Repositories",
    value: "9+",
    subtext: "Open-source project code",
    icon: "GitPullRequest",
  },
  {
    label: "Currently Exploring",
    value: "ML & Full-Stack",
    subtext: "Hands-on practical systems",
    icon: "Sparkles",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: "Code2",
    description:
      "Core programming languages practiced through academic coursework, problem solving, and projects.",
    skills: [
      { name: "C", level: "Proficient", tag: "Procedural & Memory" },
      { name: "C++", level: "Proficient", tag: "OOP & Algorithms" },
      { name: "Python", level: "Proficient", tag: "ML & Scripting" },
      { name: "Java", level: "Proficient", tag: "OOP" },
      { name: "JavaScript", level: "Proficient", tag: "ES6+ & Web" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    description:
      "Modern technologies used for building responsive, accessible, and interactive user interfaces.",
    skills: [
      { name: "HTML", level: "Proficient", tag: "Semantic Markup" },
      { name: "CSS", level: "Proficient", tag: "Responsive Layouts" },
      {
        name: "TypeScript",
        level: "Proficient",
        tag: "JavaScript + Type System",
      },
      { name: "JavaScript", level: "Proficient", tag: "DOM & Logic" },
      { name: "React", level: "Proficient", tag: "Component Architecture" },
      { name: "Vite", level: "Proficient", tag: "Fast Build Tool" },
      { name: "Tailwind CSS", level: "Proficient", tag: "Utility Styling" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    description:
      "Server-side programming, RESTful API design, database schemas, and service integration.",
    skills: [
      { name: "Node.js", level: "Developing", tag: "Runtime Environment" },
      {
        name: "Express.js",
        level: "Developing",
        tag: "REST Routing Framework",
      },
      { name: "REST API", level: "Developing", tag: "Endpoint Architecture" },
      { name: "MongoDB", level: "Developing", tag: "NoSQL Database" },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning & Data",
    icon: "BrainCircuit",
    description:
      "Data analysis, numerical computing, machine learning pipelines, and model evaluation.",
    skills: [
      { name: "Python", level: "Proficient", tag: "Core Language" },
      { name: "Pandas", level: "Developing", tag: "Data Manipulation" },
      { name: "NumPy", level: "Developing", tag: "Numerical Arrays" },
      { name: "Scikit-learn", level: "Developing", tag: "ML Algorithms" },
      { name: "Matplotlib", level: "Developing", tag: "Data Visualization" },
      {
        name: "Data Preprocessing",
        level: "Developing",
        tag: "Pipelines & Scaling",
      },
      {
        name: "Model Evaluation",
        level: "Developing",
        tag: "Metrics & Validation",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "Wrench",
    description:
      "Version control, development environments, cloud notebooks, and platforms.",
    skills: [
      { name: "Git", level: "Proficient", tag: "Version Control" },
      { name: "GitHub", level: "Proficient", tag: "Code Collaboration" },
      { name: "Firebase", level: "Currently Learning", tag: "Auth & Storage" },
      {
        name: "Jupyter Notebook",
        level: "Developing",
        tag: "Data Experiments",
      },
      { name: "Google Colab", level: "Developing", tag: "Cloud GPU/Notebook" },
      { name: "Linux", level: "Currently Learning", tag: "CLI & Environment" },
    ],
  },
  {
    id: "other",
    title: "Other Areas",
    icon: "Layers",
    description:
      "Specialized academic computing domains and systems engineering coursework.",
    skills: [
      { name: "Computer Graphics", level: "Developing", tag: "2D/3D & OpenGL" },
      {
        name: "Digital Image Processing",
        level: "Developing",
        tag: "Filters & Transformations",
      },
      {
        name: "Microprocessors and Microcontrollers",
        level: "Developing",
        tag: "Architecture & Assembly",
      },
      {
        name: "System Analysis and Design",
        level: "Developing",
        tag: "UML & System Models",
      },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "zap-shift",
    title: "Zap Shift",
    category: "web",
    categoryLabel: "Web Development",
    description:
      "Built as a hands-on full-stack project to practice modern frontend and backend development, API integration, database management, and responsive UI design.",
    longDescription:
      "A full-stack parcel logistics web application built to practice modern frontend and backend development, user authentication, RESTful API design, MongoDB integration, and responsive Tailwind UI styling.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    githubClient: "https://github.com/Farjana02mim/zap-shift-client",
    githubServer: "https://github.com/Farjana02mim/zap-shift-server",
    github: "https://github.com/Farjana02mim/zap-shift-client",
    // TODO: এখানে আপনার deployed live link বসান, e.g. "https://zap-shift.vercel.app"
    liveDemo: undefined, // Coming Soon
    featured: true,
    badge: "Featured Project",
  },
  {
    id: "art-gallery",
    title: "Art Gallery",
    category: "web",
    categoryLabel: "Web Development",
    description:
      "Built as a hands-on full-stack project to practice modern frontend and backend development, API integration, database management, and responsive UI design.",
    longDescription:
      "A full-stack art gallery web application built to practice modern frontend and backend development, RESTful API design, MongoDB integration, and responsive Tailwind UI styling.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    githubClient: "https://github.com/Farjana02mim/Art-Gallery-Client",
    githubServer: "https://github.com/Farjana02mim/Art-Gallery-Server",
    github: "https://github.com/Farjana02mim/Art-Gallery-Client",
    liveDemo: "https://art-gallery-85d90.web.app/",
    featured: true,
    badge: "Featured Project",
  },
  {
    id: "pet-adoption-supply",
    title: "Pet Adoption Supply",
    category: "web",
    categoryLabel: "Web Development",
    description:
      "Built as a hands-on full-stack project to practice modern frontend and backend development, API integration, database management, and responsive UI design.",
    longDescription:
      "A full-stack pet adoption and supply platform built to practice modern frontend and backend development, RESTful API design, MongoDB integration, and responsive Tailwind UI styling.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    githubClient: "https://github.com/Farjana02mim/petAdoption-client",
    githubServer: "https://github.com/Farjana02mim/petAdoptionSupply-server",
    github: "https://github.com/Farjana02mim/petAdoption-client",
    liveDemo: "https://pet-adoption-supply.web.app/",
    featured: true,
    badge: "Featured Project",
  },
  {
    id: "rainfall-prediction",
    title: "Rainfall Prediction Classifier",
    category: "ml",
    categoryLabel: "Machine Learning",
    description:
      "Explored supervised classification workflows, weather data preprocessing, and model evaluation techniques using Scikit-learn.",
    longDescription:
      "A machine learning coursework project focused on predictive modeling, exploratory data analysis, feature engineering, and classification metrics using Scikit-learn.",
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
    github: "https://github.com/Farjana02mim/Rainfall_Prediction",
    liveDemo: undefined,
    featured: false,
    badge: "Coursework Project",
  },
  {
    id: "computer-graphics-project",
    title: "Computer Graphics Project",
    category: "graphics",
    categoryLabel: "Computer Graphics",
    description:
      "Developed while learning fundamental computer graphics concepts, 2D/3D transformations, and interactive rendering algorithms in OpenGL.",
    longDescription:
      "An academic computer graphics project focused on implementing and exploring fundamental computer graphics concepts, rendering pipelines, transformations, and geometric algorithms.",
    technologies: ["C++", "OpenGL", "Computer Graphics", "Graphics Algorithms"],
    github: "https://github.com/Farjana02mim/Computer_Graphics_Project",
    liveDemo: undefined,
    featured: false,
    badge: "Academic Project",
  },
  {
    id: "university-management",
    title: "University Management System",
    category: "other",
    categoryLabel: "Other",
    description:
      "Built as a hands-on project to practice object-oriented programming, data structures, and file handling in C++.",
    longDescription:
      "An academic project focused on implementing a university management system and applying core programming, class architecture, and file storage concepts.",
    technologies: ["C++", "OOP", "Data Structures", "File Handling"],
    github: "https://github.com/Farjana02mim/University_Management_System",
    liveDemo: undefined,
    featured: false,
    badge: "Academic Project",
  },
  {
    id: "basics-of-cg",
    title: "Basics of Computer Graphics",
    category: "graphics",
    categoryLabel: "Computer Graphics",
    description:
      "Explored core graphics algorithms including rasterization, line-drawing, clipping, and geometric rendering in C++.",
    longDescription:
      "A collection of fundamental computer graphics work created while learning core graphics programming concepts, coordinate mapping, and rasterization algorithms.",
    technologies: ["C++", "Computer Graphics", "Rasterization", "Algorithms"],
    github: "https://github.com/Farjana02mim/Basics_of_CG",
    liveDemo: undefined,
    featured: false,
    badge: "Learning Repository",
  },
  {
    id: "panda-project",
    title: "Panda Project",
    category: "other",
    categoryLabel: "Other",
    description:
      "Developed while exploring data analysis, pandas processing, and statistical methods in Python as part of my practical learning journey.",
    longDescription:
      "An academic programming project developed as part of my learning journey to explore data manipulation, tabular structures, and data analysis using Python.",
    technologies: ["Python", "Pandas", "Data Analysis", "Matplotlib"],
    github: "https://github.com/Farjana02mim/Panda_Project02",
    liveDemo: undefined,
    featured: false,
    badge: "Learning Repository",
  },
];

export const mlTopics: MLConcept[] = [
  {
    name: "Supervised Learning",
    category: "Supervised",
    description:
      "Training models on labeled datasets to learn mapping functions between feature matrices and ground truth target variables.",
  },
  {
    name: "Linear & Multiple Linear Regression",
    category: "Supervised",
    description:
      "Modeling linear relationships between continuous target variables and single or multi-dimensional independent features with residual error minimization.",
  },
  {
    name: "Logistic Regression",
    category: "Supervised",
    description:
      "Binary and multiclass probabilistic classification utilizing sigmoid/softmax activation functions for log-odds boundary estimation.",
  },
  {
    name: "K-Nearest Neighbors (KNN)",
    category: "Algorithms",
    description:
      "Instance-based non-parametric learning using distance metrics (Euclidean, Manhattan) for spatial proximity classification and regression.",
  },
  {
    name: "Support Vector Machines (SVM)",
    category: "Algorithms",
    description:
      "Finding optimal separating hyperplanes maximizing the margin between classes with linear and kernel-based decision boundaries.",
  },
  {
    name: "Random Forest & Ensembles",
    category: "Algorithms",
    description:
      "Bagging ensemble technique constructing multiple randomized decision trees to reduce variance, improve generalization, and rank feature importance.",
  },
  {
    name: "Data Preprocessing & Feature Engineering",
    category: "Pipeline",
    description:
      "Imputation of missing data, standard scaling/normalization, categorical one-hot encoding, and feature extraction for model readiness.",
  },
  {
    name: "Model Evaluation & Confusion Matrix",
    category: "Evaluation",
    description:
      "In-depth diagnostic evaluation evaluating True Positives, False Positives, False Negatives, Accuracy, Precision, Recall, and F1-Score.",
  },
  {
    name: "True Positive Rate (Sensitivity / Recall)",
    category: "Evaluation",
    description:
      "Critical evaluation metric (TPR = TP / (TP + FN)) ensuring high recall for critical prediction domains like precipitation and medical diagnostics.",
  },
];

export const learningJourney: TimelineItem[] = [
  {
    id: "programming-fundamentals",
    title: "Programming Fundamentals",
    period: "Core Foundations",
    category: "Foundational CS",
    description:
      "Structured programming and problem solving in C and C++, focusing on data structures, algorithms, memory, and OOP.",
    skills: [
      "C",
      "C++",
      "Data Structures",
      "Algorithms",
      "OOP",
      "Problem Solving",
    ],
    icon: "Terminal",
  },
  {
    id: "web-development",
    title: "Web Development",
    period: "Core Web Foundations",
    category: "Web Foundations",
    description:
      "Building foundational responsive web layouts with HTML5, CSS3, and core JavaScript DOM scripting.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    icon: "Layout",
  },
  {
    id: "react-frontend",
    title: "React & Frontend Development",
    period: "Modern UI Engineering",
    category: "Frontend Engineering",
    description:
      "Developing interactive, component-driven client applications using React, Vite, and Tailwind CSS.",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Component UI",
      "State Management",
    ],
    icon: "Code",
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    period: "Server & Databases",
    category: "Backend Engineering",
    description:
      "Designing RESTful backend APIs with Node.js and Express, implementing database persistence with MongoDB.",
    skills: ["Node.js", "Express.js", "REST API", "MongoDB", "Firebase"],
    icon: "Server",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    period: "Data & Intelligence",
    category: "Machine Learning & Data",
    description:
      "Data analysis, preprocessing, exploratory workflows, and predictive modeling using Python, Pandas, NumPy, and Scikit-learn.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Model Evaluation",
    ],
    icon: "BrainCircuit",
  },
  {
    id: "advanced-projects",
    title: "Advanced Projects",
    period: "Practical Systems",
    category: "Practical Systems & Graphics",
    description:
      "Building integrated software systems like Zap Shift, Art Gallery, Pet Adoption Supply, computer graphics renderers in OpenGL, and digital image processing applications.",
    skills: [
      "Full-Stack Systems",
      "Computer Graphics",
      "DIP",
      "Continuous Learning",
    ],
    icon: "Rocket",
  },
];

export const educationData: EducationItem = {
  degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
  field: "Computer Science and Engineering",
  institution: "Jamalpur Science and Technology University",
  cgpa: "3.81",
  period: "August 2023 – August 2027",
  status: "Undergraduate Student (CSE)",
  location: "Jamalpur, Bangladesh",
  semesterGrades: [
    {
      id: "sem-1-1",
      semester: "1st Year 1st Term",
      shortName: "1.1",
      gpa: 3.52,
      maxGpa: 4.0,
      year: "1st Year",
      term: "1st Term",
      percentage: 88.0,
      status: "Completed",
      trend: "steady",
    },
    {
      id: "sem-1-2",
      semester: "1st Year 2nd Term",
      shortName: "1.2",
      gpa: 3.87,
      maxGpa: 4.0,
      year: "1st Year",
      term: "2nd Term",
      achievement: "1st Year 2nd Position & Scholarship",
      percentage: 96.75,
      status: "Completed",
      trend: "up",
    },
    {
      id: "sem-2-1",
      semester: "2nd Year 1st Term",
      shortName: "2.1",
      gpa: 3.86,
      maxGpa: 4.0,
      year: "2nd Year",
      term: "1st Term",
      percentage: 96.5,
      status: "Completed",
      trend: "steady",
    },
    {
      id: "sem-2-2",
      semester: "2nd Year 2nd Term",
      shortName: "2.2",
      gpa: 3.97,
      maxGpa: 4.0,
      year: "2nd Year",
      term: "2nd Term",
      achievement: "2nd Year 2nd Position & Scholarship Certificate",
      percentage: 99.25,
      status: "Completed",
      trend: "peak",
    },
  ],
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
  highlights: [
    "Developing strong foundational skills in core computer science, algorithmic theory, and software engineering",
    "Hands-on laboratory coursework covering graphics algorithms, database schemas, and networking protocols",
    "Active participation in academic technical coursework, collaborative student projects, and code repositories",
  ],
  academicAchievements: [
    {
      id: "scholarship-1st-year",
      title: "1st Year — 2nd Position",
      year: "1st Year",
      position: "2nd Position",
      award: "Scholarship",
      description:
        "Secured 2nd position in 1st Year and received a scholarship.",
    },
    {
      id: "scholarship-2nd-year",
      title: "2nd Year — 2nd Position",
      year: "2nd Year",
      position: "2nd Position",
      award: "Scholarship",
      description:
        "Secured 2nd position in 2nd Year and received a scholarship.",
    },
  ],
};

export const certifications: CertificationItem[] = [
  {
    id: "ml-python-ibm",
    title: "Machine Learning with Python",
    issuer: "Coursera / IBM",
    date: "August 2026",
    description:
      "Applied machine learning coursework covering classification algorithms, regression, data preprocessing, and Scikit-learn evaluation metrics.",
    credentialUrl: "https://lnkd.in/gtn-9d7x",
    verified: true,
    skills: [
      "Python",
      "Scikit-learn",
      "Supervised Learning",
      "Model Evaluation",
    ],
    isPlaceholder: false,
    image: "/certificates/coursera-ml-python-ibm.jpg",
  },
  {
    id: "ieee-membership",
    title: "IEEE Membership",
    issuer: "IEEE",
    date: "2026",
    description:
      "Recognized as a Student Member in good standing, denoting a personal and professional commitment to the advancement of technology.",
    credentialUrl: undefined,
    verified: true,
    skills: ["Professional Development", "Technology Community", "Networking"],
    isPlaceholder: false,
    image: "/certificates/ieee-membership-2026.jpg",
  },
  {
    id: "ieee-wie-membership",
    title: "IEEE Women in Engineering (WIE) Membership",
    issuer: "IEEE Women in Engineering",
    date: "2026",
    description:
      "Student Member of IEEE Women in Engineering, a global network supporting and inspiring women in engineering and technology.",
    credentialUrl: undefined,
    verified: true,
    skills: ["Women in Tech", "Engineering Community", "Leadership"],
    isPlaceholder: false,
    image: "/certificates/ieee-wie-membership-2026.jpg",
  },
  {
    id: "cert-placeholder-1",
    title: "Add Certification",
    issuer: "[Add Platform / e.g. Udemy, edX, HackerRank]",
    date: "[Add Completion Date]",
    description:
      "Upcoming or completed certification covering specialized programming, full-stack development, or cloud technologies.",
    credentialUrl: undefined,
    verified: false,
    skills: ["[Add Key Skill 1]", "[Add Key Skill 2]"],
    isPlaceholder: true,
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "robotics-iot-workshop",
    title: "Workshop on Robotics & IoT",
    category: "Workshop",
    organization:
      "National Conference on Robotics & IoT, Dept. of CSE, BSFMSTU",
    date: "2024",
    description:
      "Participated in a national-level workshop exploring robotics and IoT concepts, hands-on sessions, and applied engineering practices.",
    icon: "Layers",
    isPlaceholder: false,
    image: "/certificates/robotics-iot-workshop-participation.jpg",
  },
  {
    id: "robotics-iot-poster",
    title: "Poster Presentation — Top Girls Team",
    category: "Competition",
    organization:
      "National Conference on Robotics & IoT, Dept. of CSE, BSFMSTU",
    date: "2024",
    description:
      "Presented a research poster at the National Conference on Robotics & IoT, recognized as part of the Top Girls Team.",
    icon: "Trophy",
    isPlaceholder: false,
    image: "/certificates/robotics-iot-poster-presentation.jpg",
  },
  {
    id: "innovation-showcasing-2024",
    title: "Innovation Showcasing Programme",
    category: "Project Showcase",
    organization: "E-Governance and Innovation Committee, BSFMSTU",
    date: "08 May 2024",
    description:
      "Participated in the Innovation Showcasing programme organized by the E-Governance and Innovation Committee at Bangamata Sheikh Fojilatunnesa Mujib Science & Technology University.",
    icon: "Sparkles",
    isPlaceholder: false,
    image: "/certificates/innovation-showcasing-2024.jpg",
  },
  {
    id: "july-uprising-day-2024",
    title: "July Uprising Day — Video Content Competition (3rd Place)",
    category: "Competition",
    organization: "Jamalpur Science & Technology University",
    date: "2024",
    description:
      'Secured 3rd position in a subject-based video content competition themed "Smriti, Sangram O Rashtrachinta: July-August 2024 Sмrone" on the July Uprising.',
    icon: "Award",
    isPlaceholder: false,
    image: "/certificates/july-uprising-day-2024.jpg",
  },
  {
    id: "ndf-bd-debate-2025",
    title: "First NDF BD Debate Festival",
    category: "Competition",
    organization:
      "National Debate Federation Bangladesh & JSTU Debating Society",
    date: "2025",
    description:
      "Actively participated in the First NDF BD Debate Festival organized by the JSTU Debating Society, engaging in the battle of ideas on an intellectual platform.",
    icon: "Award",
    isPlaceholder: false,
    image: "/certificates/ndf-bd-debate-festival-2025.jpg",
  },
  {
    id: "scholarship-1st-year",
    title: "1st Year — 2nd Position — Merit Scholarship",
    category: "Academic",
    organization: "Jamalpur Science and Technology University",
    date: "2023",
    description:
      "Awarded the Merit Scholarship-2023 for securing 2nd position at the 1st Year B.Sc Engineering Examination, Dept. of CSE.",
    icon: "GraduationCap",
    isPlaceholder: false,
    image: "/certificates/merit-scholarship-2023.jpg",
  },
  {
    id: "jstu-iupc-2025",
    title: "JSTU IUPC 2025 — Top Girls Team",
    category: "Competition",
    organization: "JSTU Programming Contest 2025",
    date: "2025",
    description:
      "Recognized as part of the Top Girls Team at the JSTU Inter-University Programming Contest (IUPC) 2025.",
    icon: "Trophy",
    isPlaceholder: false,
    image: "/certificates/jstu-iupc-2025-top-girls-team.jpg",
  },
  {
    id: "phire-dekha-july-2nd",
    title: '"Phire Dekha July" Essay & Quiz Competition — 2nd Place',
    category: "Competition",
    organization: "University-level Essay & Quiz Competition",
    date: "2024",
    description:
      'Grateful to have secured 2nd place in the "Phire Dekha July" Essay and Quiz Competition.',
    icon: "Award",
    isPlaceholder: false,
    image: "/certificates/phire-dekha-july-quiz-2nd-place.jpg",
  },
  {
    id: "ieee-paving-pathways-2026",
    title: "Paving Pathways to Professional Development through IEEE",
    category: "Workshop",
    organization: "IEEE JSTU Student Branch",
    date: "22 July 2026",
    description:
      'Participated in the seminar on "Paving Pathways to Professional Development and International Recognition through IEEE" at JSTU.',
    icon: "Layers",
    isPlaceholder: false,
    image: "/certificates/ieee-paving-pathways-seminar-2026.jpg",
  },
  {
    id: "ieee-beyond-membership-2026",
    title: "IEEE Beyond Membership Webinar",
    category: "Workshop",
    organization: "IEEE JSTU & IEEE PUST Student Branch",
    date: "2 August 2026",
    description:
      'Participated in the webinar "IEEE Beyond Membership: Unlocking Research, Innovation, Funding, Awards, and Leadership Opportunities."',
    icon: "Layers",
    isPlaceholder: false,
    image: "/certificates/ieee-beyond-membership-webinar-2026.jpg",
  },
];

export const developerProfiles: DeveloperProfile[] = [
  {
    id: "github",
    platform: "GitHub",
    username: "Farjana02mim",
    url: "https://github.com/Farjana02mim",
    description:
      "Explore my open-source code repositories, academic projects, computer graphics code, and machine learning pipelines.",
    icon: "Github",
    accentColor: "from-blue-500/20 to-indigo-500/10",
    stats: "9+ Repositories • Active Building",
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    username: "farjana-akter-mim-1206a636b",
    url: "https://www.linkedin.com/in/farjana-akter-mim-1206a636b",
    description:
      "Connect with me professionally, follow my academic progression, and collaborate on internships and engineering projects.",
    icon: "Linkedin",
    accentColor: "from-cyan-500/20 to-blue-500/10",
    stats: "CSE Student • Open for Opportunities",
  },
];

export const githubRepos: GitHubRepo[] = [
  {
    name: "zap-shift-client",
    description:
      "Modern, responsive React frontend for the Zap Shift parcel management and logistics platform.",
    language: "JavaScript / React",
    languageColor: "#f7df1e",
    stars: 1,
    forks: 0,
    url: "https://github.com/Farjana02mim/zap-shift-client",
    topics: ["react", "tailwindcss", "vite", "frontend", "parcel-management"],
    updatedAt: "Recently Updated",
  },
  {
    name: "zap-shift-server",
    description:
      "Robust Node.js and Express RESTful backend with authentication and database services for Zap Shift.",
    language: "JavaScript / Node.js",
    languageColor: "#68a063",
    stars: 1,
    forks: 0,
    url: "https://github.com/Farjana02mim/zap-shift-server",
    topics: ["nodejs", "express", "rest-api", "mongodb", "jwt-auth"],
    updatedAt: "Recently Updated",
  },
  {
    name: "Art-Gallery-Client",
    description:
      "React and Tailwind CSS frontend for the Art Gallery full-stack showcase application.",
    language: "JavaScript / React",
    languageColor: "#f7df1e",
    stars: 1,
    forks: 0,
    url: "https://github.com/Farjana02mim/Art-Gallery-Client",
    topics: ["react", "tailwindcss", "vite", "frontend", "art-gallery"],
    updatedAt: "Recently Updated",
  },
  {
    name: "Art-Gallery-Server",
    description:
      "Node.js and Express REST API backend with MongoDB for the Art Gallery application.",
    language: "JavaScript / Node.js",
    languageColor: "#68a063",
    stars: 1,
    forks: 0,
    url: "https://github.com/Farjana02mim/Art-Gallery-Server",
    topics: ["nodejs", "express", "rest-api", "mongodb"],
    updatedAt: "Recently Updated",
  },
  {
    name: "petAdoption-client",
    description:
      "React and Tailwind CSS frontend for the Pet Adoption Supply full-stack platform.",
    language: "JavaScript / React",
    languageColor: "#f7df1e",
    stars: 1,
    forks: 0,
    url: "https://github.com/Farjana02mim/petAdoption-client",
    topics: ["react", "tailwindcss", "vite", "frontend", "pet-adoption"],
    updatedAt: "Recently Updated",
  },
  {
    name: "petAdoptionSupply-server",
    description:
      "Node.js and Express REST API backend with MongoDB for the Pet Adoption Supply platform.",
    language: "JavaScript / Node.js",
    languageColor: "#68a063",
    stars: 1,
    forks: 0,
    url: "https://github.com/Farjana02mim/petAdoptionSupply-server",
    topics: ["nodejs", "express", "rest-api", "mongodb"],
    updatedAt: "Recently Updated",
  },
  {
    name: "Rainfall_Prediction",
    description:
      "Supervised classification workflows for rainfall prediction using weather data and Scikit-learn.",
    language: "Python",
    languageColor: "#3572A5",
    stars: 1,
    forks: 0,
    url: "https://github.com/Farjana02mim/Rainfall_Prediction",
    topics: ["python", "scikit-learn", "machine-learning", "classification"],
    updatedAt: "Active Repository",
  },
  {
    name: "University_Management_System",
    description:
      "Comprehensive system for managing student records, academic courses, and departmental operations.",
    language: "C++",
    languageColor: "#f34b7d",
    stars: 1,
    forks: 0,
    url: "https://github.com/Farjana02mim/University_Management_System",
    topics: ["cpp", "system-management", "oop", "data-structures"],
    updatedAt: "Active Repository",
  },
  {
    name: "Computer_Graphics_Project",
    description:
      "Interactive computer graphics application demonstrating 2D/3D transformations, projections, and lighting.",
    language: "C / C++",
    languageColor: "#555555",
    stars: 1,
    forks: 0,
    url: "https://github.com/Farjana02mim/Computer_Graphics_Project",
    topics: ["computer-graphics", "opengl", "transformations", "rendering"],
    updatedAt: "Active Repository",
  },
  {
    name: "Panda_Project02",
    description:
      "Exploratory data analysis and statistical processing repository leveraging Python Pandas and Matplotlib.",
    language: "Python",
    languageColor: "#3572A5",
    stars: 1,
    forks: 0,
    url: "https://github.com/Farjana02mim/Panda_Project02",
    topics: ["python", "pandas", "data-analysis", "eda", "matplotlib"],
    updatedAt: "Active Repository",
  },
  {
    name: "Basics_of_CG",
    description:
      "Implementations of foundational computer graphics algorithms (Bresenham, DDA, clipping, filling).",
    language: "C / C++",
    languageColor: "#555555",
    stars: 1,
    forks: 0,
    url: "https://github.com/Farjana02mim/Basics_of_CG",
    topics: ["algorithms", "bresenham", "dda", "computer-graphics"],
    updatedAt: "Active Repository",
  },
];
