export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  slug: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDescription:
      "A modern e-commerce platform built with React and Node.js",
    description:
      "This project is a fully functional e-commerce platform with a responsive frontend built using React and a robust backend powered by Node.js. It features user authentication, product browsing, cart management, and secure checkout process. The platform integrates with popular payment gateways and provides an admin dashboard for managing products and orders.",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0070/7032/articles/ecommerce_20platforms_3c2ab809-41ff-4185-9fef-52df34de95e4.png?v=1730388944&originalWidth=1848&originalHeight=782&width=1200",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Stripe API",
    ],
    githubUrl: "https://github.com/Garnet-Owl/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.garnetowl.dev",
    slug: "ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    shortDescription:
      "Responsive task management app with drag-and-drop functionality",
    description:
      "A task management application that allows users to create, organize, and track their tasks. The app features a drag-and-drop interface for easy task prioritization, deadline reminders, and team collaboration capabilities. It's built with a React frontend and Firebase for real-time data synchronization, auth, and storage.",
    imageUrl:
      "https://cdn.dribbble.com/users/5132945/screenshots/18190117/media/0250bf839677bbf020cc68b91a444a65.jpg?resize=1600x1200&vertical=center",
    technologies: [
      "React",
      "Firebase",
      "Material-UI",
      "React DnD",
      "TypeScript",
    ],
    githubUrl: "https://github.com/Garnet-Owl/task-management-app",
    liveUrl: "https://tasks.garnetowl.dev",
    slug: "task-management-app",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    shortDescription:
      "Real-time weather dashboard with forecasting capabilities",
    description:
      "A weather dashboard application that provides real-time weather information and forecasts for locations worldwide. The app fetches data from multiple weather APIs and presents it in an intuitive, visually appealing interface. Users can save their favorite locations and receive weather alerts for severe conditions.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/12597211/file/original-1d4c8241e42e1384d06b724b9773723c.jpg?resize=1024x768&vertical=center",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "OpenWeatherMap API",
      "Chart.js",
    ],
    githubUrl: "https://github.com/Garnet-Owl/weather-dashboard",
    liveUrl: "https://weather.garnetowl.dev",
    slug: "weather-dashboard",
  },
  {
    id: 4,
    title: "Portfolio Website",
    shortDescription:
      "Personal portfolio website built with Next.js and Material-UI",
    description:
      "My personal portfolio website showcasing my skills, projects, and professional experience. It's built with Next.js and Material-UI, featuring a responsive design, dark/light theme switching, smooth animations, and optimized performance. The site is deployed on GitHub Pages and uses GitHub Actions for continuous integration and deployment.",
    imageUrl:
      "https://essential-addons.com/wp-content/uploads/2023/12/image-2.jpeg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Material-UI",
      "React",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/Garnet-Owl/Garnet-Owl.github.io",
    liveUrl: "https://garnet-owl.github.io/",
    slug: "portfolio-website",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    shortDescription: "Mobile-responsive fitness tracking application",
    description:
      "A comprehensive fitness tracking application that allows users to track their workouts, set fitness goals, and monitor their progress over time. The app features workout logging, progress charts, calorie tracking, and personalized workout recommendations based on user goals. It uses a React Native frontend for cross-platform compatibility and a Node.js backend with MongoDB for data storage.",
    imageUrl:
      "https://cdn.dribbble.com/userupload/3025224/file/original-c3c923a5440ddd97b6bb0a25240edb2c.png?resize=1024x768&vertical=center",
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Chart.js"],
    githubUrl: "https://github.com/Garnet-Owl/fitness-tracker",
    liveUrl: "https://fitness.garnetowl.dev",
    slug: "fitness-tracker",
  },
];
