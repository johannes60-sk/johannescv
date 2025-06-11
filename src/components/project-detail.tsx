import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe,
  Code,
  Users,
  Home,
} from "lucide-react";
import { useRoute, Link } from "wouter";
import { projects } from "@/data/projects";

function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white font-inter flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-inter overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-12 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back to Home Button */}
        <motion.div className="mb-8" variants={itemVariants}>
          <Link href="/">
            <motion.button
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-all duration-300"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            {project.title}
            <span className="block text-gray-400 text-2xl md:text-3xl lg:text-4xl font-normal mt-2">
              ({project.subtitle})
            </span>
          </motion.h1>

          <motion.div
            className="flex items-center gap-2 text-blue-400 text-lg md:text-xl font-medium"
            variants={slideVariants}
          >
            <Code className="w-5 h-5" />
            Web Development
          </motion.div>
        </motion.div>

        {/* Description Section */}
        <motion.div className="mb-16" variants={itemVariants}>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </motion.div>

        {/* Project Details */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={itemVariants}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400 text-sm uppercase tracking-wider">
                Client
              </span>
            </div>
            <p className="text-xl font-semibold">{project.client}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400 text-sm uppercase tracking-wider">
                Technologies
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Screenshots */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="space-y-8">
            {project.capture.map((capture, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
                  <img
                    src={capture}
                    alt={`${project.title} Screenshot ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
          variants={itemVariants}
        >
          {/* Open Project Button */}
          {project.demoLink && (
            <motion.button
              className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(project.demoLink, "_blank")}
            >
              <span>Open Project</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          )}

          {/* Next Project Navigation */}
          <motion.div
            className="group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-right">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                Next Project
              </p>
              <div className="flex items-center gap-4">
                <Link href={`/project/${prevProject.id}`}>
                  <motion.button
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </motion.button>
                </Link>

                <Link href={`/project/${nextProject.id}`}>
                  <motion.div
                    className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {nextProject.title}
                  </motion.div>
                </Link>

                <Link href={`/project/${nextProject.id}`}>
                  <motion.button
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProjectDetail;
