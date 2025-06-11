import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, Eye } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { Avatar3D } from "@/components/3d-avatar";

export function HeroSection() {
  const handleDownloadCV = async () => {
    try {
      const response = await apiRequest("GET", "/api/cv/download");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Johannes_Houenou_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CV:", error);
      // Fallback - open in new tab
      window.open("/api/cv/download", "_blank");
    }
  };

  const handleContactClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Enhanced 3D Background Animation */}
      <div className="absolute inset-0 overflow-hidden perspective-1000">
        {/* Floating 3D Spheres */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-600 dark:to-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 transform-3d"
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 15, 0],
            rotateY: [0, 25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 transform-3d"
          animate={{
            y: [0, -25, 0],
            rotateX: [0, -20, 0],
            rotateY: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 transform-3d"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
          animate={{
            y: [-20, 20, -20],
            rotateZ: [0, 180, 360],
            rotateX: [0, 45, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 opacity-15 rounded-lg transform-3d"
          animate={{
            x: [-15, 15, -15],
            rotateY: [0, 180, 360],
            rotateZ: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-32 right-20 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 opacity-20 rounded-full transform-3d"
          animate={{
            y: [15, -15, 15],
            scale: [1, 1.5, 1],
            rotateX: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <motion.div
          className="absolute bottom-40 left-32 w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 opacity-12 transform-3d"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
          animate={{
            x: [20, -20, 20],
            rotateY: [0, 180, 360],
            rotateZ: [0, -90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Code-inspired floating elements */}
        <motion.div
          className="absolute top-60 left-40 text-2xl font-mono text-cyan-400 opacity-10"
          animate={{
            y: [-10, 10, -10],
            rotateZ: [0, 5, -5, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {"</>"}
        </motion.div>

        <motion.div
          className="absolute bottom-60 right-40 text-lg font-mono text-purple-400 opacity-15"
          animate={{
            x: [-5, 5, -5],
            rotateY: [0, 15, -15, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          {"{ }"}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 3D Professional Avatar */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Avatar3D size="xl" className="animate-tilt" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Johannes Houenou</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fullstack Developer
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate fullstack developer specialized in JavaScript with solid
            experience in React.js, Node.js, NestJS and React Native. I build
            performant, maintainable and scalable web and mobile applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="/cv_johannes.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Eye className="mr-2 h-4 w-4" />
                Voir CV
              </Button>
            </a>
            <a href="/cv_johannes.pdf" download>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href="https://www.linkedin.com/in/johannes60/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/johannes60-sk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary text-2xl transition-colors duration-200 transform hover:scale-110"
            >
              <Github />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
