import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-3xl font-bold gradient-text mb-4">JH</div>
          <p className="text-slate-400 mb-6">
            Fullstack Developer passionate about creating amazing web experiences
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://linkedin.com/in/johannes-houenou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 text-xl transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin />
            </motion.a>
            <motion.a
              href="https://github.com/johannes-houenou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 text-xl transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github />
            </motion.a>
            <motion.a
              href="mailto:houenoujohannes60@gmail.com"
              className="text-slate-400 hover:text-blue-400 text-xl transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail />
            </motion.a>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-500">
              © 2024 Johannes Houenou. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
