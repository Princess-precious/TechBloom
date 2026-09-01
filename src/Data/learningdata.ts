export type Module = {
  id: number;
  title: string;
  description: string;
  status: "completed" | "current" | "locked";
};

export type Resource = {
  title: string;
  description: string;
  url: string;
};

export type Course = {
  title: string;
  description: string;
  level: string;
  icon: string;
  path: string;
  modules: Module[];
  resources: Resource[];
};

export const courses: Course[] = [
  {
    title: " 💻 Web Development",
    description:
      "Learn how to build modern websites and web applications.",
    level: "Beginner",
    icon: "",
    path: "/learning/web-development",

    modules: [
      {
        id: 1,
        title: "HTML & CSS",
        description:
          "Learn the fundamentals of creating and styling websites.",
        status: "completed",
      },
      {
        id: 2,
        title: "JavaScript",
        description:
          "Learn programming fundamentals and make websites interactive.",
        status: "current",
      },
      {
        id: 3,
        title: "React",
        description:
          "Learn how to build modern interfaces with React.",
        status: "locked",
      },
    ],
    resources: [
  {
    title: "MDN Web Docs",
    description: "Learn HTML, CSS and JavaScript from detailed web documentation.",
    url: "https://developer.mozilla.org/",
  },
  {
    title: "freeCodeCamp",
    description: "Practice web development through interactive lessons and projects.",
    url: "https://www.freecodecamp.org/",
  },
  {
    title: "W3Schools",
    description: "Learn web technologies through simple tutorials and examples.",
    url: "https://www.w3schools.com/",
  },
],

  },

  {
    title: " 📊 Data Science",
    description:
      "Explore data analysis, statistics and machine learning.",
    level: "Intermediate",
    icon: "",
    path: "/learning/data-science",

    modules: [
      {
        id: 1,
        title: "Introduction to Data Science",
        description:
          "Understand the fundamentals of data science and its applications.",
        status: "current",
      },
      {
        id: 2,
        title: "Python for Data Science",
        description:
          "Learn Python programming for working with data.",
        status: "locked",
      },
      {
        id: 3,
        title: "Data Analysis",
        description:
          "Learn how to clean, analyze and interpret datasets.",
        status: "locked",
      },
      {
        id: 4,
        title: "Data Visualization",
        description:
          "Learn how to communicate insights using charts and visualizations.",
        status: "locked",
      },
    ],
    resources: [
  {
    title: "Kaggle",
    description: "Practice data science with datasets, notebooks and competitions.",
    url: "https://www.kaggle.com/",
  },
  {
    title: "Python Documentation",
    description: "Official documentation for learning Python.",
    url: "https://docs.python.org/3/",
  },
  {
    title: "Google Colab",
    description: "Run Python and data science notebooks in your browser.",
    url: "https://colab.research.google.com/",
  },
],

  },

  {
    title: " 🎨 UI/UX Design",
    description:
      "Learn how to design useful and beautiful digital experiences.",
    level: "Beginner",
    icon: "",
    path: "/learning/ui-ux-design",

    modules: [
      {
        id: 1,
        title: "Introduction to UI/UX",
        description:
          "Understand user interface and user experience design.",
        status: "current",
      },
      {
        id: 2,
        title: "User Research",
        description:
          "Learn how to understand users and their needs.",
        status: "locked",
      },
      {
        id: 3,
        title: "Wireframing & Prototyping",
        description:
          "Learn how to create wireframes and interactive prototypes.",
        status: "locked",
      },
      {
        id: 4,
        title: "Design Systems",
        description:
          "Learn how to create consistent and reusable designs.",
        status: "locked",
      },
    ],
    resources: [
  {
    title: "Figma",
    description: "Practice interface design and create interactive prototypes.",
    url: "https://www.figma.com/",
  },
  {
    title: "Nielsen Norman Group",
    description: "Learn about user experience research and design principles.",
    url: "https://www.nngroup.com/",
  },
  {
    title: "Interaction Design Foundation",
    description: "Learn UX design principles and methodologies.",
    url: "https://www.interaction-design.org/",
  },
],
  },

  {
    title: " 🔐 Cyber Security",
    description:
      "Learn how to protect systems, networks and digital information.",
    level: "Intermediate",
    icon: "",
    path: "/learning/cyber-security",

    modules: [
      {
        id: 1,
        title: "Introduction to Cyber Security",
        description:
          "Understand cyber security concepts, threats and risks.",
        status: "current",
      },
      {
        id: 2,
        title: "Networking Fundamentals",
        description:
          "Learn how networks and devices communicate.",
        status: "locked",
      },
      {
        id: 3,
        title: "Cyber Threats & Attacks",
        description:
          "Learn about common cyber threats and attacks.",
        status: "locked",
      },
      {
        id: 4,
        title: "Security Fundamentals",
        description:
          "Learn the fundamentals of protecting systems and data.",
        status: "locked",
      },
    ],
    resources: [
  {
    title: "TryHackMe",
    description: "Practice cyber security through hands-on learning rooms.",
    url: "https://tryhackme.com/",
  },
  {
    title: "PortSwigger Web Security Academy",
    description: "Learn and practice web application security.",
    url: "https://portswigger.net/web-security",
  },
  {
    title: "OWASP",
    description: "Learn about web application security and common vulnerabilities.",
    url: "https://owasp.org/",
  },
],
  },

  {
    title: " 📱Mobile Development",
    description:
      "Learn how to build applications for mobile devices.",
    level: "Intermediate",
    icon: "",
    path: "/learning/mobile-development",

    modules: [
      {
        id: 1,
        title: "Introduction to Mobile Development",
        description:
          "Understand mobile applications and development.",
        status: "current",
      },
      {
        id: 2,
        title: "Mobile UI Design",
        description:
          "Learn how to design interfaces for mobile devices.",
        status: "locked",
      },
      {
        id: 3,
        title: "React Native",
        description:
          "Learn how to build mobile applications using React Native.",
        status: "locked",
      },
      {
        id: 4,
        title: "Building a Mobile App",
        description:
          "Apply your knowledge by building a complete mobile application.",
        status: "locked",
      },
    ],
    resources: [
  {
    title: "React Native",
    description: "Learn how to build mobile applications with React Native.",
    url: "https://reactnative.dev/",
  },
  {
    title: "Expo",
    description: "Build and develop React Native applications more easily.",
    url: "https://expo.dev/",
  },
],
  },

  {
    title: " 📋Project Management",
    description:
      "Learn how to plan, organize and manage technology projects.",
    level: "Beginner",
    icon: "",
    path: "/learning/project-management",

    modules: [
      {
        id: 1,
        title: "Introduction to Project Management",
        description:
          "Understand the fundamentals of managing projects.",
        status: "current",
      },
      {
        id: 2,
        title: "Project Planning",
        description:
          "Learn how to define goals, tasks and timelines.",
        status: "locked",
      },
      {
        id: 3,
        title: "Team Management",
        description:
          "Learn how to manage teams and project responsibilities.",
        status: "locked",
      },
      {
        id: 4,
        title: "Project Execution",
        description:
          "Learn how to monitor and successfully deliver projects.",
        status: "locked",
      },
    ],
    resources: [
  {
    title: "Atlassian",
    description: "Learn project management practices and agile methodologies.",
    url: "https://www.atlassian.com/",
  },
  {
    title: "Project Management Institute",
    description: "Explore project management resources and professional practices.",
    url: "https://www.pmi.org/",
  },
],

  },
]
  
    