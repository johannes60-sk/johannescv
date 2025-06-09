import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShoppingCart, CheckSquare, Smartphone, BarChart, Play, CreditCard } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  demoLink?: string;
  codeLink?: string;
}

function ProjectCard({ title, description, technologies, icon, gradientFrom, gradientTo, demoLink, codeLink }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className={`h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center`}>
          <div className="text-white text-4xl">{icon}</div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-4">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium flex items-center"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            )}
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground font-medium flex items-center"
              >
                <Github className="mr-1 h-4 w-4" />
                Code
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database.",
      technologies: ["React", "Node.js", "MongoDB"],
      icon: <ShoppingCart />,
      gradientFrom: "from-blue-400",
      gradientTo: "to-purple-600",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "NestJS", "Socket.IO"],
      icon: <CheckSquare />,
      gradientFrom: "from-green-400",
      gradientTo: "to-emerald-600",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "React Native App",
      description: "Cross-platform mobile application with native performance and beautiful user interface.",
      technologies: ["React Native", "Firebase", "Expo"],
      icon: <Smartphone />,
      gradientFrom: "from-purple-400",
      gradientTo: "to-pink-600",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization and reporting capabilities.",
      technologies: ["Vue.js", "PHP", "MySQL"],
      icon: <BarChart />,
      gradientFrom: "from-orange-400",
      gradientTo: "to-red-600",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Streaming Platform POC",
      description: "Kids-friendly content streaming platform with parental controls and content management.",
      technologies: ["React", "Node.js", "Video.js"],
      icon: <Play />,
      gradientFrom: "from-indigo-400",
      gradientTo: "to-blue-600",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Payment Gateway",
      description: "Secure payment processing system with multiple payment methods and transaction management.",
      technologies: ["React", "Python", "Stripe"],
      icon: <CreditCard />,
      gradientFrom: "from-emerald-400",
      gradientTo: "to-teal-600",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of innovative solutions and technical achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
