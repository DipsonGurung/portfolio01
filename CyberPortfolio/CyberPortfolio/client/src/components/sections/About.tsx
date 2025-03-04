import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            Passionate cybersecurity professional with expertise in threat detection,
            incident response, and security architecture. Committed to protecting
            organizations from evolving cyber threats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Background</h3>
                <p className="text-muted-foreground">
                  With over 5 years of experience in cybersecurity, I've worked
                  across various domains including SOC operations, threat hunting,
                  and security tool implementation. My focus is on building robust
                  security postures and automating security workflows.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Security Information and Event Management (SIEM)</li>
                  <li>• Incident Response and Threat Hunting</li>
                  <li>• Security Tool Implementation and Integration</li>
                  <li>• Security Automation and Orchestration</li>
                  <li>• Threat Intelligence and Analysis</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
