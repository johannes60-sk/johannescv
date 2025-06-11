import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { projects, IconName } from "@/data/projects";
import * as Icons from "lucide-react";

interface ProjectProps {
  index: string;
  title: string;
  description: string;
  technologies: string[];
  icon: IconName;
  thumbnail: string;
  demoLink?: string;
  codeLink?: string;
}

function ProjectCard({
  index,
  title,
  description,
  technologies,
  icon,
  thumbnail,
  demoLink,
  codeLink,
}: ProjectProps) {
  const IconComponent = Icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{
        y: -15,
        rotateY: 8,
        rotateX: 5,
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className="perspective-1000"
    >
      <Link href={`/project/${index}`}>
        <Card className="h-full hover:shadow-2xl transition-all duration-500 overflow-hidden transform-3d cursor-pointer">
          <motion.div
            className="h-48 relative overflow-hidden"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <motion.div
                className="text-white text-4xl z-10"
                animate={{
                  rotateY: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <IconComponent className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
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
                  onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="mr-1 h-4 w-4" />
                  Code
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export function ProjectsSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of innovative solutions and technical achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} index={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
