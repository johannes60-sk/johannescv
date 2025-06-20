import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Laptop, Code, Cpu } from "lucide-react";

interface EducationProps {
  title: string;
  institution: string;
  period: string;
  location: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

function EducationCard({ title, institution, period, location, icon, gradientFrom, gradientTo }: EducationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -15, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ 
        y: -10,
        rotateY: 8,
        rotateX: 5,
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      className="perspective-1000"
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-500 transform-3d">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <motion.div 
              className={`w-12 h-12 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center mr-4 transform-3d`}
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{
                scale: 1.2,
                rotateY: 180,
                transition: { duration: 0.4 }
              }}
            >
              <div className="text-white">{icon}</div>
            </motion.div>
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-muted-foreground">{period}</p>
            </div>
          </div>
          <p className="text-lg font-semibold text-primary mb-2">{institution}</p>
          <p className="text-foreground">{location}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function EducationSection() {
  const education = [
    {
      title: "Master CTO & Tech Lead",
      institution: "HETIC - École d'ingénieur",
      period: "2023 - 2025",
      location: "Paris, France",
      icon: <GraduationCap />,
      gradientFrom: "from-blue-500",
      gradientTo: "to-purple-600",
    },
    {
      title: "Bachelor Développement Web et Mobile",
      institution: "ECE - École d'ingénieur",
      period: "2022 - 2023",
      location: "Paris, France",
      icon: <Laptop />,
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
    },
    {
      title: " Formation d’initiation en développement web ",
      institution: "EIGB",
      period: "2021 - 2022",
      location: "Cotonou, Benin",
      icon: <Code />,
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
    },
    {
      title: "Licence en génie télécom et informatique",
      institution: "UCAO",
      period: "2018 - 2021",
      location: "Cotonou, Benin",
      icon: <Cpu />,
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <EducationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
