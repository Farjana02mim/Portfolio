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
  StatItem
} from '../types';

export const personalInfo = {
  name: 'Farjana Akter Mim',
  shortName: 'Farjana Mim',
  title: 'Computer Science & Engineering Student',
  subtitle: 'Aspiring Full-Stack Developer | ML Enthusiast',
  tagline: "I'm a CSE student passionate about web development, software engineering, machine learning, and building practical projects to solve real-world problems.",
  aboutBio: [
    "I’m a Computer Science and Engineering student who enjoys turning ideas into practical projects. I’m currently building my skills in web development, software engineering, machine learning, and problem solving through coursework and hands-on projects.",
    "My learning journey includes developing web applications, exploring machine learning workflows, working with computer graphics and digital image processing, and continuously improving my programming skills."
  ],
  email: 'farjanaaktermim330@gmail.com',
  github: 'https://github.com/Farjana02mim',
  linkedin: 'https://www.linkedin.com/in/farjana-akter-mim-1206a636b',
  location: 'Bangladesh',
  status: 'CSE Student • Open for Internships & Projects',
  resumeAvailable: true,
  resumePath: '/resume/Farjana_Akter_Mim_Resume.pdf',
  profileImagePath: '/images/profile.png',
};

export const quickStats: StatItem[] = [
  {
    label: 'Academic & Personal Projects',
    value: '6+',
    subtext: 'Web, ML & Graphics',
    icon: 'FolderGit2'
  },
  {
    label: 'Technologies Learned',
    value: '12+',
    subtext: 'React, Node, Python, C++',
    icon: 'Layers'
  },
  {
    label: 'GitHub Repositories',
    value: '6+',
    subtext: 'Open-source project code',
    icon: 'GitPullRequest'
  },
  {
    label: 'Currently Exploring',
    value: 'ML & Full-Stack',
    subtext: 'Hands-on practical systems',
    icon: 'Sparkles'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    icon: 'Code2',
    description: 'Core programming languages practiced through academic coursework, problem solving, and projects.',
    skills: [
      { name: 'C', level: 'Proficient', tag: 'Procedural & Memory' },
      { name: 'C++', level: 'Proficient', tag: 'OOP & Algorithms' },
      { name: 'Python', level: 'Proficient', tag: 'ML & Scripting' },
      { name: 'JavaScript', level: 'Proficient', tag: 'ES6+ & Web' },
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'Layout',
    description: 'Modern technologies used for building responsive, accessible, and interactive user interfaces.',
    skills: [
      { name: 'HTML', level: 'Proficient', tag: 'Semantic Markup' },
      { name: 'CSS', level: 'Proficient', tag: 'Responsive Layouts' },
      { name: 'JavaScript', level: 'Proficient', tag: 'DOM & Logic' },
      { name: 'React', level: 'Proficient', tag: 'Component Architecture' },
      { name: 'Vite', level: 'Proficient', tag: 'Fast Build Tool' },
      { name: 'Tailwind CSS', level: 'Proficient', tag: 'Utility Styling' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'Server',
    description: 'Server-side programming, RESTful API design, database schemas, and service integration.',
    skills: [
      { name: 'Node.js', level: 'Developing', tag: 'Runtime Environment' },
      { name: 'Express.js', level: 'Developing', tag: 'REST Routing Framework' },
      { name: 'REST API', level: 'Developing', tag: 'Endpoint Architecture' },
      { name: 'MongoDB', level: 'Developing', tag: 'NoSQL Database' },
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning & Data',
    icon: 'BrainCircuit',
    description: 'Data analysis, numerical computing, machine learning pipelines, and model evaluation.',
    skills: [
      { name: 'Python', level: 'Proficient', tag: 'Core Language' },
      { name: 'Pandas', level: 'Developing', tag: 'Data Manipulation' },
      { name: 'NumPy', level: 'Developing', tag: 'Numerical Arrays' },
      { name: 'Scikit-learn', level: 'Developing', tag: 'ML Algorithms' },
      { name: 'Matplotlib', level: 'Developing', tag: 'Data Visualization' },
      { name: 'Data Preprocessing', level: 'Developing', tag: 'Pipelines & Scaling' },
      { name: 'Model Evaluation', level: 'Developing', tag: 'Metrics & Validation' },
    ]
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'Wrench',
    description: 'Version control, development environments, cloud notebooks, and platforms.',
    skills: [
      { name: 'Git', level: 'Proficient', tag: 'Version Control' },
      { name: 'GitHub', level: 'Proficient', tag: 'Code Collaboration' },
      { name: 'Firebase', level: 'Currently Learning', tag: 'Auth & Storage' },
      { name: 'Jupyter Notebook', level: 'Developing', tag: 'Data Experiments' },
      { name: 'Google Colab', level: 'Developing', tag: 'Cloud GPU/Notebook' },
      { name: 'Linux', level: 'Currently Learning', tag: 'CLI & Environment' },
    ]
  },
  {
    id: 'other',
    title: 'Other Areas',
    icon: 'Layers',
    description: 'Specialized academic computing domains and systems engineering coursework.',
    skills: [
      { name: 'Computer Graphics', level: 'Developing', tag: '2D/3D & OpenGL' },
      { name: 'Digital Image Processing', level: 'Developing', tag: 'Filters & Transformations' },
      { name: 'Microprocessors', level: 'Developing', tag: 'Architecture & Assembly' },
      { name: 'System Analysis and Design', level: 'Developing', tag: 'UML & System Models' },
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'zap-shift',
    title: 'Zap Shift',
    category: 'web',
    categoryLabel: 'Web Development',
    description: 'A full-stack web application built to practice modern frontend and backend development, authentication, API integration, database management, and responsive UI design.',
    longDescription: 'A full-stack web application built to practice modern frontend and backend development, authentication, API integration, database management, and responsive UI design.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    githubClient: 'https://github.com/Farjana02mim/zap-shift-client',
    githubServer: 'https://github.com/Farjana02mim/zap-shift-server',
    github: 'https://github.com/Farjana02mim/zap-shift-client',
    liveDemo: undefined, // Coming Soon
    featured: true,
    badge: 'Featured Project'
  },
  {
    id: 'computer-graphics-project',
    title: 'Computer Graphics Project',
    category: 'graphics',
    categoryLabel: 'Computer Graphics',
    description: 'An academic computer graphics project focused on implementing and exploring fundamental computer graphics concepts.',
    longDescription: 'An academic computer graphics project focused on implementing and exploring fundamental computer graphics concepts.',
    technologies: ['C++', 'OpenGL', 'Computer Graphics', 'Graphics Algorithms'],
    github: 'https://github.com/Farjana02mim/Computer_Graphics_Project',
    liveDemo: undefined,
    featured: false,
    badge: 'Academic Project'
  },
  {
    id: 'panda-project',
    title: 'Panda Project',
    category: 'academic',
    categoryLabel: 'Academic Projects',
    description: 'An academic programming project developed as part of my learning journey and practical software development experience.',
    longDescription: 'An academic programming project developed as part of my learning journey and practical software development experience.',
    technologies: ['Python', 'Pandas', 'Data Analysis', 'Academic Project'],
    github: 'https://github.com/Farjana02mim/Panda_Project02',
    liveDemo: undefined,
    featured: false,
    badge: 'Academic Project'
  },
  {
    id: 'university-management',
    title: 'University Management System',
    category: 'academic',
    categoryLabel: 'Academic Projects',
    description: 'An academic project focused on implementing a university management system and applying programming and software development concepts.',
    longDescription: 'An academic project focused on implementing a university management system and applying programming and software development concepts.',
    technologies: ['C++', 'OOP', 'Data Structures', 'File Handling'],
    github: 'https://github.com/Farjana02mim/University_Management_System',
    liveDemo: undefined,
    featured: false,
    badge: 'Academic Project'
  },
  {
    id: 'basics-of-cg',
    title: 'Basics of Computer Graphics',
    category: 'graphics',
    categoryLabel: 'Computer Graphics',
    description: 'A collection of fundamental computer graphics work created while learning core graphics programming concepts.',
    longDescription: 'A collection of fundamental computer graphics work created while learning core graphics programming concepts.',
    technologies: ['C++', 'Computer Graphics', 'Rasterization', 'Algorithms'],
    github: 'https://github.com/Farjana02mim/Basics_of_CG',
    liveDemo: undefined,
    featured: false,
    badge: 'Learning Repository'
  },
  {
    id: 'rainfall-prediction',
    title: 'Rainfall Prediction Classifier',
    category: 'ml',
    categoryLabel: 'Machine Learning',
    description: 'A machine learning coursework project focused on predictive modeling, exploratory data analysis, and classification metrics using Scikit-learn.',
    longDescription: 'A machine learning coursework project focused on predictive modeling, exploratory data analysis, and classification metrics using Scikit-learn.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning'],
    github: 'https://github.com/Farjana02mim',
    liveDemo: undefined,
    featured: false,
    badge: 'Coursework Project'
  }
];

export const mlTopics: MLConcept[] = [
  {
    name: 'Supervised Learning',
    category: 'Supervised',
    description: 'Training models on labeled datasets to learn mapping functions between feature matrices and ground truth target variables.'
  },
  {
    name: 'Linear & Multiple Linear Regression',
    category: 'Supervised',
    description: 'Modeling linear relationships between continuous target variables and single or multi-dimensional independent features with residual error minimization.'
  },
  {
    name: 'Logistic Regression',
    category: 'Supervised',
    description: 'Binary and multiclass probabilistic classification utilizing sigmoid/softmax activation functions for log-odds boundary estimation.'
  },
  {
    name: 'K-Nearest Neighbors (KNN)',
    category: 'Algorithms',
    description: 'Instance-based non-parametric learning using distance metrics (Euclidean, Manhattan) for spatial proximity classification and regression.'
  },
  {
    name: 'Support Vector Machines (SVM)',
    category: 'Algorithms',
    description: 'Finding optimal separating hyperplanes maximizing the margin between classes with linear and kernel-based decision boundaries.'
  },
  {
    name: 'Random Forest & Ensembles',
    category: 'Algorithms',
    description: 'Bagging ensemble technique constructing multiple randomized decision trees to reduce variance, improve generalization, and rank feature importance.'
  },
  {
    name: 'Data Preprocessing & Feature Engineering',
    category: 'Pipeline',
    description: 'Imputation of missing data, standard scaling/normalization, categorical one-hot encoding, and feature extraction for model readiness.'
  },
  {
    name: 'Model Evaluation & Confusion Matrix',
    category: 'Evaluation',
    description: 'In-depth diagnostic evaluation evaluating True Positives, False Positives, False Negatives, Accuracy, Precision, Recall, and F1-Score.'
  },
  {
    name: 'True Positive Rate (Sensitivity / Recall)',
    category: 'Evaluation',
    description: 'Critical evaluation metric (TPR = TP / (TP + FN)) ensuring high recall for critical prediction domains like precipitation and medical diagnostics.'
  }
];

export const learningJourney: TimelineItem[] = [
  {
    id: 'programming-fundamentals',
    title: 'Programming Fundamentals',
    period: 'Core Foundations',
    category: 'Foundational CS',
    description: 'Structured programming and problem solving in C and C++, focusing on data structures, algorithms, memory, and OOP.',
    skills: ['C', 'C++', 'Data Structures', 'Algorithms', 'OOP', 'Problem Solving'],
    icon: 'Terminal'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    period: 'Core Web Foundations',
    category: 'Web Foundations',
    description: 'Building foundational responsive web layouts with HTML5, CSS3, and core JavaScript DOM scripting.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    icon: 'Layout'
  },
  {
    id: 'react-frontend',
    title: 'React & Frontend Development',
    period: 'Modern UI Engineering',
    category: 'Frontend Engineering',
    description: 'Developing interactive, component-driven client applications using React, Vite, and Tailwind CSS.',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Component UI', 'State Management'],
    icon: 'Code'
  },
  {
    id: 'backend-api',
    title: 'Backend & API Development',
    period: 'Server & Databases',
    category: 'Backend Engineering',
    description: 'Designing RESTful backend APIs with Node.js and Express, implementing database persistence with MongoDB.',
    skills: ['Node.js', 'Express.js', 'REST API', 'MongoDB', 'Firebase'],
    icon: 'Server'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    period: 'Data & Intelligence',
    category: 'Machine Learning & Data',
    description: 'Data analysis, preprocessing, exploratory workflows, and predictive modeling using Python, Pandas, NumPy, and Scikit-learn.',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Model Evaluation'],
    icon: 'BrainCircuit'
  },
  {
    id: 'advanced-projects',
    title: 'Advanced Projects',
    period: 'Practical Systems',
    category: 'Practical Systems & Graphics',
    description: 'Building integrated software systems like Zap Shift, computer graphics renderers in OpenGL, and digital image processing applications.',
    skills: ['Full-Stack Systems', 'Computer Graphics', 'DIP', 'Continuous Learning'],
    icon: 'Rocket'
  }
];

export const educationData: EducationItem = {
  degree: 'Computer Science & Engineering (CSE)',
  field: 'Computer Science and Engineering',
  institution: '[Add University Name]', // Editable placeholder
  period: '[Add Start Year – Expected Graduation Year]', // Editable placeholder
  status: 'Undergraduate Student (CSE)',
  location: '[Campus Location]',
  coursework: [
    'Data Structures & Algorithms',
    'Database Systems',
    'Computer Networks',
    'Computer Architecture',
    'Microprocessors',
    'Digital Image Processing',
    'Computer Graphics',
    'System Analysis & Design',
    'Machine Learning'
  ],
  highlights: [
    'Developing strong foundational skills in core computer science, algorithmic theory, and software engineering',
    'Hands-on laboratory coursework covering graphics algorithms, database schemas, and networking protocols',
    'Active participation in academic technical coursework, collaborative student projects, and code repositories'
  ]
};

export const certifications: CertificationItem[] = [
  {
    id: 'ml-python',
    title: 'Machine Learning with Python',
    issuer: 'Coursera / IBM',
    date: '[Add Completion Date]',
    description: 'Applied machine learning coursework covering classification algorithms, regression, data preprocessing, and Scikit-learn evaluation metrics.',
    credentialUrl: undefined, // Editable link placeholder
    verified: true,
    skills: ['Python', 'Scikit-learn', 'Supervised Learning', 'Model Evaluation'],
    isPlaceholder: false
  },
  {
    id: 'cert-placeholder-1',
    title: 'Add Certification',
    issuer: '[Add Platform / e.g. Coursera, edX, HackerRank]',
    date: '[Add Completion Date]',
    description: 'Upcoming or completed certification covering specialized programming, full-stack development, or cloud technologies.',
    credentialUrl: undefined,
    verified: false,
    skills: ['[Add Key Skill 1]', '[Add Key Skill 2]'],
    isPlaceholder: true
  },
  {
    id: 'cert-placeholder-2',
    title: 'Add Certification',
    issuer: '[Add Platform / e.g. Udemy, freeCodeCamp]',
    date: '[Add Completion Date]',
    description: 'Technical coursework or specialization covering software engineering, algorithms, or data structures.',
    credentialUrl: undefined,
    verified: false,
    skills: ['[Add Key Skill 1]', '[Add Key Skill 2]'],
    isPlaceholder: true
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: 'achieve-academic-1',
    title: 'Academic Milestone / Coursework Project',
    category: 'Academic',
    organization: '[Add University / Department Name]',
    date: '[Add Semester / Year]',
    description: 'Recognized academic project showcase or technical coursework distinction in computer science disciplines.',
    icon: 'GraduationCap',
    isPlaceholder: true
  },
  {
    id: 'achieve-comp-1',
    title: 'Coding Competition / Problem Solving Contest',
    category: 'Competition',
    organization: '[Add Platform / Contest Name]',
    date: '[Add Date]',
    description: 'Participation in algorithmic programming contests, university programming camps, or online problem solving challenges.',
    icon: 'Trophy',
    isPlaceholder: true
  },
  {
    id: 'achieve-workshop-1',
    title: 'Technical Workshop / Seminar Participation',
    category: 'Workshop',
    organization: '[Add Organizer / Tech Community]',
    date: '[Add Date]',
    description: 'Hands-on technical workshop focused on web engineering, machine learning pipelines, or emerging software tools.',
    icon: 'Award',
    isPlaceholder: true
  },
  {
    id: 'achieve-showcase-1',
    title: 'Project Showcase / Technical Demonstration',
    category: 'Project Showcase',
    organization: '[Add University / Event]',
    date: '[Add Date]',
    description: 'Demonstrated software systems, computer graphics renderers, or full-stack web applications to peers and faculty.',
    icon: 'Sparkles',
    isPlaceholder: true
  }
];

export const developerProfiles: DeveloperProfile[] = [
  {
    id: 'github',
    platform: 'GitHub',
    username: 'Farjana02mim',
    url: 'https://github.com/Farjana02mim',
    description: 'Explore my open-source code repositories, academic projects, computer graphics code, and machine learning pipelines.',
    icon: 'Github',
    accentColor: 'from-blue-500/20 to-indigo-500/10',
    stats: '6+ Repositories • Active Building'
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    username: 'farjana-akter-mim-1206a636b',
    url: 'https://www.linkedin.com/in/farjana-akter-mim-1206a636b',
    description: 'Connect with me professionally, follow my academic progression, and collaborate on internships and engineering projects.',
    icon: 'Linkedin',
    accentColor: 'from-cyan-500/20 to-blue-500/10',
    stats: 'CSE Student • Open for Opportunities'
  }
];

export const githubRepos: GitHubRepo[] = [
  {
    name: 'zap-shift-client',
    description: 'Modern, responsive React frontend for the Zap Shift parcel management and logistics platform.',
    language: 'JavaScript / React',
    languageColor: '#f7df1e',
    stars: 1,
    forks: 0,
    url: 'https://github.com/Farjana02mim/zap-shift-client',
    topics: ['react', 'tailwindcss', 'vite', 'frontend', 'parcel-management'],
    updatedAt: 'Recently Updated'
  },
  {
    name: 'zap-shift-server',
    description: 'Robust Node.js and Express RESTful backend with authentication and database services for Zap Shift.',
    language: 'JavaScript / Node.js',
    languageColor: '#68a063',
    stars: 1,
    forks: 0,
    url: 'https://github.com/Farjana02mim/zap-shift-server',
    topics: ['nodejs', 'express', 'rest-api', 'mongodb', 'jwt-auth'],
    updatedAt: 'Recently Updated'
  },
  {
    name: 'University_Management_System',
    description: 'Comprehensive system for managing student records, academic courses, and departmental operations.',
    language: 'C++',
    languageColor: '#f34b7d',
    stars: 1,
    forks: 0,
    url: 'https://github.com/Farjana02mim/University_Management_System',
    topics: ['cpp', 'system-management', 'oop', 'data-structures'],
    updatedAt: 'Active Repository'
  },
  {
    name: 'Computer_Graphics_Project',
    description: 'Interactive computer graphics application demonstrating 2D/3D transformations, projections, and lighting.',
    language: 'C / C++',
    languageColor: '#555555',
    stars: 1,
    forks: 0,
    url: 'https://github.com/Farjana02mim/Computer_Graphics_Project',
    topics: ['computer-graphics', 'opengl', 'transformations', 'rendering'],
    updatedAt: 'Active Repository'
  },
  {
    name: 'Panda_Project02',
    description: 'Exploratory data analysis and statistical processing repository leveraging Python Pandas and Matplotlib.',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 1,
    forks: 0,
    url: 'https://github.com/Farjana02mim/Panda_Project02',
    topics: ['python', 'pandas', 'data-analysis', 'eda', 'matplotlib'],
    updatedAt: 'Active Repository'
  },
  {
    name: 'Basics_of_CG',
    description: 'Implementations of foundational computer graphics algorithms (Bresenham, DDA, clipping, filling).',
    language: 'C / C++',
    languageColor: '#555555',
    stars: 1,
    forks: 0,
    url: 'https://github.com/Farjana02mim/Basics_of_CG',
    topics: ['algorithms', 'bresenham', 'dda', 'computer-graphics'],
    updatedAt: 'Active Repository'
  }
];
