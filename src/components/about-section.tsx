import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";
import { Avatar3D } from "@/components/3d-avatar";

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Développeur créatif, persévérant et esprit d'équipe avec une
            curiosité intellectuelle
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
              En tant que développeur fullstack passionné, je me spécialise dans
              la création d'applications web robustes et évolutives en utilisant
              les technologies JavaScript modernes. Mon expertise couvre à la
              fois le développement frontend et backend, me permettant de livrer
              des solutions complètes.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Avec une expérience dans des entreprises comme{" "}
              <a
                href="https://macaron.ai/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-primary transition-colors underline decoration-2 underline-offset-4"
              >
                Macaron
              </a>{" "}
              et{" "}
              <a
                href="https://www.bouyguestelecom.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-primary transition-colors underline decoration-2 underline-offset-4"
              >
                Bouygues Telecom
              </a>
              , j'ai travaillé sur divers projets allant des plateformes de
              streaming aux solutions e-commerce. Je suis toujours enthousiaste
              à l'idée de résoudre des problèmes concrets dans un environnement
              d'équipe.
            </p>

            <div className="flex justify-center pt-6">
              <Card className="text-center p-4 w-55">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            className="relative perspective-1000"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 3D Code Environment */}
            <motion.div
              className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 transform-3d"
              animate={{
                rotateY: [0, 5, -5, 0],
                rotateX: [0, 3, -3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full rounded-2xl bg-background dark:bg-slate-900 flex items-center justify-center relative overflow-hidden">
                {/* Floating Code Elements */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ctext x='10' y='20' font-size='12' font-family='monospace'%3E{'}'%3C/text%3E%3Ctext x='30' y='40' font-size='12' font-family='monospace'%3E&lt;/&gt;%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />

                {/* Central Avatar */}
                <Avatar3D size="md" className="z-10" />

                {/* Floating Code Symbols */}
                <motion.div
                  className="absolute top-4 left-4 text-cyan-400 font-mono text-lg"
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {`<>`}
                </motion.div>

                <motion.div
                  className="absolute top-8 right-6 text-purple-400 font-mono text-sm"
                  animate={{
                    x: [-5, 5, -5],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  const
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-8 text-green-400 font-mono text-lg"
                  animate={{
                    rotate: [0, 360],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  {`{}`}
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 text-orange-400 font-mono text-sm"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  =&gt;
                </motion.div>
              </div>
            </motion.div>

            {/* 3D Status Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-background dark:bg-slate-800 p-4 rounded-xl shadow-2xl border border-border perspective-1000"
              initial={{ opacity: 0, scale: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{
                rotateY: [0, 10, -10, 0],
                transition: { duration: 0.6 },
              }}
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 5px rgba(34, 197, 94, 0.5)",
                      "0 0 15px rgba(34, 197, 94, 0.8)",
                      "0 0 5px rgba(34, 197, 94, 0.5)",
                    ],
                  }}
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
