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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center mr-4`}>
              <div className="text-white">{icon}</div>
            </div>
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
      title: "Bachelor Web & Mobile Development",
      institution: "ECE - École d'ingénieur",
      period: "2022 - 2023",
      location: "Paris, France",
      icon: <Laptop />,
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
    },
    {
      title: "Web Development Training",
      institution: "EIGB",
      period: "2021 - 2022",
      location: "Cotonou, Benin",
      icon: <Code />,
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
    },
    {
      title: "License Telecom & IT Engineering",
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
