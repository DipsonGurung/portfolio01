import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Network } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Securing Digital Frontiers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Cybersecurity Professional | SOC Analyst | Security Engineer
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Shield,
              title: "Threat Detection",
              description: "Advanced threat hunting and incident response",
            },
            {
              icon: Lock,
              title: "Security Operations",
              description: "24/7 SOC monitoring and analysis",
            },
            {
              icon: Network,
              title: "Security Architecture",
              description: "Designing robust security solutions",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-card p-6 rounded-lg border"
            >
              <item.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
