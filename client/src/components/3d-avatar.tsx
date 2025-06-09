import { motion } from "framer-motion";

interface Avatar3DProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
}

export function Avatar3D({ size = "md", className = "", animate = true }: Avatar3DProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32",
    xl: "w-48 h-48"
  };

  const avatarVariants = {
    idle: {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
    },
    hover: {
      rotateY: [0, 15, -15, 0],
      rotateX: [0, 5, -5, 0],
      scale: 1.05,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} perspective-1000 mx-auto`}
      variants={animate ? avatarVariants : undefined}
      initial="idle"
      animate={animate ? "hover" : "idle"}
      whileHover={animate ? "hover" : undefined}
    >
      <div className="w-full h-full transform-3d relative">
        {/* Main Avatar Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl shadow-2xl transform rotate-3">
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl m-1 flex items-center justify-center relative overflow-hidden">
            
            {/* Face */}
            <div className="relative w-3/4 h-3/4 flex flex-col items-center justify-center">
              {/* Eyes */}
              <div className="flex space-x-2 mb-2">
                <motion.div
                  className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(34, 211, 238, 0.8)",
                      "0 0 15px rgba(34, 211, 238, 1)",
                      "0 0 5px rgba(34, 211, 238, 0.8)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(34, 211, 238, 0.8)",
                      "0 0 15px rgba(34, 211, 238, 1)",
                      "0 0 5px rgba(34, 211, 238, 0.8)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.1,
                  }}
                />
              </div>
              
              {/* Mouth */}
              <motion.div
                className="w-4 h-1 bg-cyan-300 rounded-full opacity-70"
                animate={{
                  scaleX: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Code symbols floating around */}
              <motion.div
                className="absolute -top-2 -left-2 text-xs text-green-400 font-mono"
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {`{}`}
              </motion.div>
              
              <motion.div
                className="absolute -top-1 -right-2 text-xs text-blue-400 font-mono"
                animate={{
                  y: [5, -5, 5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                {`</>`}
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 left-0 text-xs text-purple-400 font-mono"
                animate={{
                  x: [-3, 3, -3],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                λ
              </motion.div>
            </div>
            
            {/* Glowing edges */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 rounded-2xl" />
          </div>
        </div>
        
        {/* 3D Shadow */}
        <div className="absolute inset-0 bg-black/30 rounded-2xl transform translate-x-1 translate-y-1 -z-10 blur-sm" />
      </div>
    </motion.div>
  );
}