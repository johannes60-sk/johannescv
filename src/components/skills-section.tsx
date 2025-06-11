import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Server, Database, Settings } from "lucide-react";

interface SkillProps {
  name: string;
  percentage: number;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: SkillProps[];
  gradientFrom: string;
  gradientTo: string;
}

function SkillCategory({ title, icon, skills, gradientFrom, gradientTo }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
      }}
      className="perspective-1000"
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-500 transform-3d">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <motion.div
              className={`w-16 h-16 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center mx-auto mb-4 transform-3d`}
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{
                scale: 1.1,
                rotateY: 180,
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-white text-2xl">{icon}</div>
            </motion.div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="skill-bar bg-muted rounded-full h-2">
                  <motion.div
                    className={`skill-progress bg-gradient-to-r ${gradientFrom} ${gradientTo} h-2 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor />,
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500",
      skills: [
        { name: "React.js", percentage: 65 },
        { name: "JavaScript", percentage: 60 },
        { name: "Vue.js", percentage: 40 },
        { name: "React Native", percentage: 55 },
      ],
    },
    {
      title: "Backend",
      icon: <Server />,
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
      skills: [
        { name: "Node.js", percentage: 65 },
        { name: "NestJS", percentage: 65 },
        { name: "PHP (Symfony)", percentage: 50 },
        { name: "Java", percentage: 55 },
      ],
    },
    {
      title: "Database",
      icon: <Database />,
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
      skills: [
        { name: "MongoDB", percentage: 65 },
        { name: "PostgreSQL", percentage: 60 },
        { name: "MySQL", percentage: 60 },
        { name: "Firebase", percentage: 55 },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Settings />,
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
      skills: [
        { name: "Git", percentage: 80 },
        { name: "Docker", percentage: 70 },
        { name: "Postman", percentage: 75 },
        { name: "SonarQube", percentage: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology stack for modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
