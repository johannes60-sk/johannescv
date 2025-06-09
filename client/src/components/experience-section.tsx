import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  isLeft?: boolean;
}

function ExperienceItem({ title, company, period, location, achievements, isLeft = true }: ExperienceProps) {
  return (
    <motion.div
      className={`relative flex items-center ${isLeft ? "" : "md:justify-end"}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background shadow-lg z-10" />
      
      <div className={`ml-20 md:ml-0 ${isLeft ? "md:w-1/2 md:pr-8" : "md:w-1/2 md:pl-8"}`}>
        <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold mb-2 md:mb-0">{title}</h3>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{period}</span>
            </div>
            <p className="text-lg font-semibold text-primary mb-2">{company}</p>
            <p className="text-sm text-muted-foreground mb-4">{location}</p>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="text-green-500 mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "Fullstack Developer",
      company: "Macaron | Saint Honoré, Paris",
      period: "2023 - 2025",
      location: "Paris, France",
      achievements: [
        "Developed React web interfaces with UI/UX improvements and performance optimization",
        "Built backend services with NestJS, MongoDB optimization, and third-party API integration",
        "Maintained existing projects with bug resolution and user experience enhancement",
      ],
      isLeft: true,
    },
    {
      title: "JavaScript Developer",
      company: "Bouygues Telecom | Meudon-la-Forêt",
      period: "2023",
      location: "Meudon-la-Forêt, France",
      achievements: [
        "Created POC for 'Kids' space integration in B.tv streaming application",
        "Built React.js interface and Node.js API for JSON file management via FTP",
        "Automated video stream deployment on internal testing platform",
      ],
      isLeft: false,
    },
    {
      title: "Fullstack Developer Intern",
      company: "RINTIO",
      period: "2021",
      location: "Remote",
      achievements: [
        "Developed React.js payment interface and Python API for complete transaction system",
        "Built and integrated PHP payment extension for e-commerce website",
      ],
      isLeft: true,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey as a fullstack developer across different industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
