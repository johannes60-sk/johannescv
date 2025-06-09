import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Circle } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creative, perseverant, and team-spirited developer with intellectual curiosity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-foreground leading-relaxed">
              As a passionate fullstack developer, I specialize in creating robust and scalable web
              applications using modern JavaScript technologies. My expertise spans both frontend and
              backend development, allowing me to deliver complete solutions.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              With experience at companies like Macaron and Bouygues Telecom, I've worked on diverse
              projects from streaming platforms to e-commerce solutions. I'm always eager to solve
              concrete problems in a team environment.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <Card className="text-center p-4">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                <Code className="text-6xl text-muted-foreground" />
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-background p-4 rounded-xl shadow-lg border"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
