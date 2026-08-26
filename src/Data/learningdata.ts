 export type ModuleStatus = "completed" | "current" | "locked";

 export type Module = {
  title: string;
  status: ModuleStatus;
};

export const initialModules: Module[] =[
    {
      title: "HTML & CSS Fundamentals",
      status: "completed",
    },
    {
      title: "JavaScript Essentials",
      status: "completed",
    },
    {
      title: "React Fundamentals",
      status: "current",
    },
    {
      title: "Building Real-World Projects",
      status: "locked",
    }
  ];

  
    export type Course = {
  title: string;
  description: string;
  level: string;
  path: string;
};

export const courses: Course[] = [
  {
    title: " 💻 Web Development",
    description: "Build modern websites and web applications.",
    level: "Beginner",
    
    path: "/learning/web-development",
  },

  {
    title:  " 📊 Data Science",
    description: "Explore data analysis and machine learning.",
    level: "Intermediate",
  
    path: "/learning/data-science",
  },

  {
    title: "  🎨 UX Design",
    description: "Learn user experience and interface design.",
    level: "Beginner",
   
    path: "/learning/ux-design",
  },

  {
    title: " 🔐 Cyber Security",
    description: "Learn how to protect digital systems.",
    level: "Intermediate",
  
    path: "/learning/cyber-security",
  },

  {
    title: "  📋 Project Management",
    description: "Learn how to plan, manage and deliver successful projects.",
    level: "Beginner",
    
    path: "/learning/project-management",
  },

  {
    title: " 🎨 UI/UX Design",
    description: "Design beautiful and user-friendly digital experiences.",
    level: "Beginner",
    
    path: "/learning/ui-ux-design",
  },

  {
    title: " 📱Mobile Development",
    description: "Learn how to build applications for mobile devices.",
    level: "Intermediate",
    path: "/learning/mobile-development",
  },

  {
    title: " 📈 Data Analytics",
    description: "Learn how to collect, analyze and visualize data.",
    level: "Beginner",
    path: "/learning/data-analytics",
  },
];

