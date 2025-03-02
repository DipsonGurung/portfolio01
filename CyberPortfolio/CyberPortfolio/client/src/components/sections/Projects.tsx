import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SOC Automation Framework",
    description: "Automated security operations workflow using TheHive, Cortex, and custom Python scripts for incident response automation.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    tags: ["Python", "TheHive", "Cortex", "Automation"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Security Detection Lab",
    description: "Comprehensive detection lab environment with Wazuh SIEM integration, custom detection rules, and attack simulation capabilities.",
    image: "https://images.unsplash.com/photo-1563452619267-bc16ef6cecec",
    tags: ["Wazuh", "ELK Stack", "Sigma Rules", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Threat Intel Platform",
    description: "Integrated threat intelligence platform combining multiple feeds with custom analytics and automated response workflows.",
    image: "https://images.unsplash.com/photo-1590494165264-1ebe3602eb80",
    tags: ["MISP", "Python", "OpenCTI", "API Integration"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in security automation, threat detection, and infrastructure development
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
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
