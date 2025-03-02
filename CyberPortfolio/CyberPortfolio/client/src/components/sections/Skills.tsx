import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiWireshark, SiSplunk, SiElasticsearch, SiKalilinux, SiGnubash, SiPython } from "react-icons/si";
import { Shield, AlertCircle, Network, Lock, Search, GitBranch } from "lucide-react";

const skills = [
  {
    category: "Security Tools",
    items: [
      { name: "Wireshark", icon: SiWireshark },
      { name: "Splunk", icon: SiSplunk },
      { name: "ELK Stack", icon: SiElasticsearch },
      { name: "Kali Linux", icon: SiKalilinux },
    ],
  },
  {
    category: "Core Competencies",
    items: [
      { name: "Threat Detection", icon: Shield },
      { name: "Incident Response", icon: AlertCircle },
      { name: "Network Security", icon: Network },
      { name: "Access Control", icon: Lock },
    ],
  },
  {
    category: "Technical Skills",
    items: [
      { name: "Bash Scripting", icon: SiGnubash },
      { name: "Python", icon: SiPython },
      { name: "Log Analysis", icon: Search },
      { name: "Version Control", icon: GitBranch },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skillset in cybersecurity tools, methodologies, and technical proficiencies
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={categoryIndex}
              variants={cardVariants}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4 bg-card rounded-lg border"
                      >
                        <skill.icon className="w-8 h-8 mb-2 text-primary" />
                        <span className="text-sm text-center">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
