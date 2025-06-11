import React from 'react';
import {
  FileJson,
  CheckSquare,
  Smartphone,
  BarChart,
  Play,
  CreditCard,
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  thumbnail: string;
  demoLink?: string;
  codeLink?: string;
  subtitle: string;
  client: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "json-file-manager",
    title: "JSON File Manager",
    description:
      "JSON file management application with upload, delete, modify capabilities and FTP server integration for remote file storage.",
    technologies: ["React", "Node.js", "MongoDB"],
    icon: <FileJson className="w-6 h-6" />,
    thumbnail:
      "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749566825/Capture_d_%C3%A9cran_2025-06-10_162716_gbl81m.png",
    demoLink: "https://stream-easy.vercel.app/",
    codeLink: "https://github.com/johannes60-sk/stream-easy/tree/dev",
    subtitle: "File Management Solution",
    client: "Personal Project",
    image: "https://res.cloudinary.com/dpvoo7j4v/image/upload/v1749566825/Capture_d_%C3%A9cran_2025-06-10_162716_gbl81m.png"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "NestJS", "Socket.IO"],
    icon: <CheckSquare />,
    thumbnail:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    demoLink: "#",
    codeLink: "#",
    subtitle: "Team Collaboration Tool",
    client: "Enterprise Solutions",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "react-native-app",
    title: "React Native App",
    description:
      "Cross-platform mobile application with native performance and beautiful user interface.",
    technologies: ["React Native", "Firebase", "Expo"],
    icon: <Smartphone />,
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    demoLink: "#",
    codeLink: "#",
    subtitle: "Mobile Application",
    client: "Mobile Solutions Inc",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with data visualization and reporting capabilities.",
    technologies: ["Vue.js", "PHP", "MySQL"],
    icon: <BarChart />,
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    demoLink: "#",
    codeLink: "#",
    subtitle: "Data Analytics Platform",
    client: "Data Insights Corp",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "streaming-platform",
    title: "Streaming Platform POC",
    description:
      "Kids-friendly content streaming platform with parental controls and content management.",
    technologies: ["React", "Node.js", "Video.js"],
    icon: <Play />,
    thumbnail:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    demoLink: "#",
    codeLink: "#",
    subtitle: "Content Streaming Solution",
    client: "Media Entertainment Ltd",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway",
    description:
      "Secure payment processing system with multiple payment methods and transaction management.",
    technologies: ["React", "Python", "Stripe"],
    icon: <CreditCard />,
    thumbnail:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    demoLink: "#",
    codeLink: "#",
    subtitle: "Payment Processing System",
    client: "FinTech Solutions",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  }
]; 