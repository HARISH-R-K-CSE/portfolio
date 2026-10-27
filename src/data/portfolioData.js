/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION - HARISH R K
 * ==============================================================================
 * This file serves as the Single Source of Truth for the entire website.
 * Whenever you learn new skills, launch projects, publish papers, or earn certificates,
 * simply update this file and the website (both Terminal & Modern UI) will update dynamically!
 */

export const portfolioData = {
  personal: {
    name: "HARISH R K",
    shortName: "Harish",
    handle: "harishrk",
    birthDate: "06 July 2007",
    headline: "Computer Science Engineering Student • AI & Data Science Developer • Researcher",
    tagline: "Solving complex algorithmic problems, building data-driven systems, and engineering practical AI solutions.",
    status: "Open to Internships, Research Collaborations & Tech Roles",
    location: "Chennai, Tamil Nadu, India",
    college: "Chennai Institute of Technology (CIT)",
    department: "Computer Science and Engineering",
    gpa: "8.30 / 10.0",
    phone: "+91 9361205099",
    emails: {
      primary: "harishrengasamyr@gmail.com",
      academic: "harishrk.cse2025@citchennai.net"
    },
    socials: {
      github: "https://github.com/harishrk",
      linkedin: "https://linkedin.com/in/harish-rk",
      leetcode: "https://leetcode.com/u/harish_rk",
      orcid: "https://orcid.org/",
      skillrack: "https://skillrack.com/profile/harishrk"
    },
    bio: [
      "Computer Science Engineering student with a strong foundation in data structures, algorithms, problem-solving, and software development.",
      "Adept at competitive coding through platforms like LeetCode (1679 contest rating, 400+ problems solved) and SkillRack, emphasizing algorithmic runtime and memory efficiency.",
      "Active researcher having co-authored a healthcare AI book chapter and conference paper on IoT telemetry. Passionate about applying computational intelligence to solve real-world problems."
    ]
  },

  // Key metrics showcased prominently
  metrics: [
    { label: "LeetCode Rating", value: "1679", detail: "Contest Rating" },
    { label: "DSA Problems Solved", value: "400+", detail: "LeetCode & SkillRack" },
    { label: "Engineering CGPA", value: "8.30", detail: "Chennai Inst. of Tech" },
    { label: "Research Publications", value: "2", detail: "Book Chapter & Conf. Paper" },
    { label: "Certifications", value: "10+", detail: "AI, ML, Python, Cyber" }
  ],

  // LeetCode specific analytics breakdown
  leetcodeStats: {
    username: "harish_rk",
    rating: 1679,
    solvedTotal: 400,
    breakdown: {
      easy: 185,
      medium: 180,
      hard: 35
    },
    rankingPercentile: "Top 12%",
    badges: ["50 Days Badge 2026", "100 Days Streak", "Algorithm Specialist"],
    recentSubmissions: [
      { problem: "Trapping Rain Water", difficulty: "Hard", tag: "Two Pointers / Stack" },
      { problem: "Course Schedule II", difficulty: "Medium", tag: "Graph / Topological Sort" },
      { problem: "Word Break", difficulty: "Medium", tag: "Dynamic Programming" },
      { problem: "Longest Palindromic Substring", difficulty: "Medium", tag: "String DP" }
    ]
  },

  // Education Details
  education: [
    {
      institution: "Chennai Institute of Technology",
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science and Engineering",
      duration: "2023 - 2027",
      gpa: "8.30 / 10.0",
      location: "Chennai, India",
      highlights: [
        "Specializing in Machine Learning, Algorithmic Thinking, and Distributed Architectures",
        "Active member of IEEE Student Committee; organized key research symposiums",
        "Core Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning"
      ]
    }
  ],

  // Work & Leadership Experience
  experience: [
    {
      role: "AI & Data Engineering Intern",
      organization: "AICTE – Eduskills Virtual Internship Program",
      location: "Chennai Institute of Technology",
      period: "April 2026 – June 2026",
      type: "Internship",
      highlights: [
        "Engineered end-to-end data preparation, cleaning, and preprocessing pipelines for machine learning models.",
        "Performed ML model deployment, monitoring, and validation across diverse enterprise datasets.",
        "Gained hands-on proficiency in RapidMiner AI Hub configuration, platform administration, and enterprise AI workflows."
      ],
      technologies: ["Python", "RapidMiner AI Hub", "Data Engineering", "Model Deployment", "MLOps"]
    },
    {
      role: "Event Coordinator – 'Idea to Paper'",
      organization: "IEEE Student Committee, Chennai Institute of Technology",
      location: "Chennai, India",
      period: "August 2026",
      type: "Leadership",
      highlights: [
        "Organized and spearheaded the flagship technical research event 'Idea to Paper' on 21/08/2026.",
        "Guided student cohorts on identifying research gaps, structuring academic papers, literature reviews, and publication channels.",
        "Coordinated guest speakers, technical review panels, and peer feedback sessions."
      ],
      technologies: ["Research Mentorship", "Scientific Writing", "Event Leadership", "Public Speaking"]
    }
  ],

  // Projects Showcase
  projects: [
    {
      id: "weather-prediction",
      title: "Weather Prediction Using ANN & Random Forest",
      subtitle: "Hybrid Machine Learning Rainfall Forecasting System",
      category: "Machine Learning & Full Stack",
      featured: true,
      description: "Developed an intelligent meteorological prediction pipeline leveraging ensemble Random Forest and Artificial Neural Networks (ANN/MLP) to forecast rainfall patterns with high accuracy.",
      points: [
        "Processed extensive historical climate telemetry using Scikit-learn and Pandas for feature extraction and scaling.",
        "Trained, validated, and evaluated ANN (Multi-Layer Perceptron) and Random Forest classifiers to capture non-linear weather dynamics.",
        "Architected a high-throughput FastAPI inference microservice seamlessly coupled with an interactive React frontend dashboard for live queries."
      ],
      techStack: ["Python", "Random Forest", "ANN / MLP", "Scikit-learn", "FastAPI", "React.js", "Pandas"],
      github: "https://github.com/harishrk/weather-prediction-ann-rf",
      liveDemo: null,
      terminalIcon: "🌦️"
    },
    {
      id: "ecoroute-carbon",
      title: "EcoRoute – Smart Micro-Logistics Carbon Monitoring",
      subtitle: "Enterprise Carbon Footprint Auditing & Route Analytics",
      category: "Systems & Enterprise Software",
      featured: true,
      description: "A comprehensive Java-based carbon emission tracking and logistics audit platform designed to optimize micro-delivery operations and quantify environmental impact.",
      points: [
        "Implemented real-time emission computation formulas factoring vehicle typology, payload weight, speed, and congestion indexes.",
        "Built modular layered architecture (Controller, Service, Repository, DAO) with clean RESTful API contracts.",
        "Engineered an administrative web dashboard displaying route-wise carbon indices, reduction recommendations, and fleet analytics."
      ],
      techStack: ["Java", "Spring Boot", "REST APIs", "Layered Architecture", "MySQL", "Web Dashboard"],
      github: "https://github.com/harishrk/ecoroute-carbon-monitor",
      liveDemo: null,
      terminalIcon: "🌱"
    },
    {
      id: "nammaroad-ai",
      title: "NammaRoad AI – Spatial Road Hazard & Safety Intelligence",
      subtitle: "Computer Vision & Geospatial Infrastructure Monitoring",
      category: "AI & Smart Cities",
      featured: true,
      description: "Smart municipal road monitoring ecosystem combining road condition detection, interactive geospatial mapping, and municipal analytics for safer transit.",
      points: [
        "Integrated dynamic interactive Leaflet mapping showing flagged potholes, road distress markers, and severity heatmaps.",
        "Built high-performance full-stack interface with React 19, Vite, Tailwind CSS, and Recharts statistical visualizations.",
        "Engineered REST endpoints for road defect submissions, telemetry ingestion, and civic grievance escalation."
      ],
      techStack: ["React", "Vite", "Tailwind CSS", "Leaflet", "Recharts", "FastAPI", "Python"],
      github: "https://github.com/harishrk/nammaroad-ai",
      liveDemo: null,
      terminalIcon: "🛣️"
    }
  ],

  // Publications & Research
  publications: [
    {
      type: "Authored Book Chapter",
      title: "Artificial Intelligence for Intelligent Healthcare Systems: Methods, Applications and Future Directions",
      publisher: "Academic / International Technical Publisher",
      year: "2026",
      status: "Published / In Press",
      description: "Explores state-of-the-art computational intelligence paradigms in healthcare, reviewing deep neural networks for medical imaging, predictive patient trajectories, and ethics in automated clinical decision-support.",
      tags: ["Artificial Intelligence", "Healthcare Systems", "Deep Learning", "Clinical Informatics"],
      orcidRef: true
    },
    {
      type: "Conference Paper & Presentation",
      title: "IoT Integrated Real-Time Healthcare Monitoring and Optimization System: A Review of AI-Driven Personalized Interventions",
      conference: "International Conference on IoT & Healthcare Computing",
      year: "2026",
      status: "Presented & Certified",
      description: "Comprehensive survey and architectural framework combining wearable IoT edge telemetry with real-time cloud AI algorithms to deliver tailored medical interventions during critical care anomalies.",
      tags: ["Internet of Things (IoT)", "Real-Time Telemetry", "Personalized Medicine", "Edge AI"],
      orcidRef: true
    }
  ],

  // Certifications
  certifications: [
    {
      title: "Machine Learning Professional Certification",
      issuer: "Professional AI / ML Consortium",
      domain: "Machine Learning & Modeling",
      badge: "ML-PRO"
    },
    {
      title: "Introduction to Modern AI",
      issuer: "Industry Accredited Course",
      domain: "Artificial Intelligence",
      badge: "AI-MOD"
    },
    {
      title: "Python Essentials 1",
      issuer: "Python Institute / Cisco Networking Academy",
      domain: "Python Programming",
      badge: "PY-ESS"
    },
    {
      title: "Introduction to Programming Using Python",
      issuer: "Technical Certification Board",
      domain: "Software Development",
      badge: "PY-CORE"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cyber Defense Academy",
      domain: "Security & Networks",
      badge: "SEC-FND"
    },
    {
      title: "Innovation Ambassador – Foundation Level",
      issuer: "Ministry of Education / Institution Innovation Council",
      domain: "Innovation & Entrepreneurship",
      badge: "INNOV-1"
    },
    {
      title: "Innovation Ambassador – Advance Level",
      issuer: "Ministry of Education / Institution Innovation Council",
      domain: "Innovation & Technology Transfer",
      badge: "INNOV-2"
    },
    {
      title: "Innovation Ambassador – Re-skilling Certificate",
      issuer: "Ministry of Education / Institution Innovation Council",
      domain: "Leadership & R&D",
      badge: "INNOV-3"
    }
  ],

  // Categorized Technical Skills
  skills: {
    "Programming Languages": [
      { name: "Python", level: 90, highlight: "ML, FastAPI, Scikit-learn" },
      { name: "Java", level: 85, highlight: "Spring Boot, OOP, Enterprise Systems" },
      { name: "C / C++", level: 88, highlight: "DSA, Competitive Programming" },
      { name: "JavaScript / ES6+", level: 82, highlight: "Modern Web, Async/Await" },
      { name: "SQL", level: 80, highlight: "MySQL, Relational Queries" }
    ],
    "Frameworks & Web Technologies": [
      { name: "React.js", level: 88, highlight: "Hooks, SPA, Component Architecture" },
      { name: "Next.js", level: 78, highlight: "SSR, Modern Frontend Workflows" },
      { name: "FastAPI", level: 85, highlight: "High-speed Python APIs, Swagger" },
      { name: "HTML5 & CSS3", level: 92, highlight: "Responsive, Semantic Markup" },
      { name: "Tailwind CSS", level: 90, highlight: "Utility-first, OLED Dark Themes" }
    ],
    "AI / ML & Data Engineering": [
      { name: "Scikit-learn", level: 86, highlight: "Random Forest, Regression, Classifiers" },
      { name: "ANN & Neural Networks", level: 82, highlight: "Multi-layer Perceptron, Deep Learning" },
      { name: "RapidMiner AI Hub", level: 80, highlight: "Workflow automation, Deployment" },
      { name: "Data Preprocessing", level: 88, highlight: "Pandas, Feature Engineering" }
    ],
    "Tools & Platforms": [
      { name: "GitHub & Version Control", level: 90, highlight: "Git Workflows, CI/CD Actions" },
      { name: "VS Code", level: 95, highlight: "Primary Development Environment" },
      { name: "MySQL Workbench", level: 82, highlight: "Database Design & Optimization" },
      { name: "Web Testing & QA", level: 80, highlight: "Unit Testing, Validation" }
    ],
    "Core Competencies & Soft Skills": [
      { name: "Data Structures & Algorithms", level: 92, highlight: "1679 LeetCode rating, 400+ solved" },
      { name: "Analytical Problem Solving", level: 94, highlight: "Algorithmic optimization" },
      { name: "Scientific Writing & Research", level: 85, highlight: "Book chapter & Conference paper" },
      { name: "Interdisciplinary Collaboration", level: 90, highlight: "Event coordination, Team leadership" }
    ]
  },

  // Terminal commands reference (for interactive shell on akashr.dev style)
  terminalCommands: [
    { cmd: "help", desc: "List all supported terminal commands" },
    { cmd: "about", desc: "Display personal bio and academic background" },
    { cmd: "projects", desc: "Browse full-stack and machine learning projects" },
    { cmd: "leetcode", desc: "Show live LeetCode rating and DSA metrics" },
    { cmd: "skills", desc: "List categorized programming and framework skills" },
    { cmd: "publications", desc: "Show authored book chapter and conference paper" },
    { cmd: "experience", desc: "View AICTE internship and IEEE coordination history" },
    { cmd: "certs", desc: "Display certifications and credentials" },
    { cmd: "education", desc: "Display Chennai Institute of Technology details" },
    { cmd: "contact", desc: "Show contact channels (email, phone, LinkedIn)" },
    { cmd: "resume", desc: "Print resume summary and trigger download" },
    { cmd: "cat profile.json", desc: "Output raw JSON profile schema" },
    { cmd: "matrix", desc: "Toggle animated green matrix rain background" },
    { cmd: "gui", desc: "Switch to Executive Modern Portfolio View" },
    { cmd: "theme", desc: "Toggle OLED theme accent colors" },
    { cmd: "clear", desc: "Clear the terminal screen" }
  ]
};
