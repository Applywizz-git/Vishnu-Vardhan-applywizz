import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { personalInfo, professionalSummary } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Summary</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                {professionalSummary}
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span>{personalInfo.location}</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>{personalInfo.phone}</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-emerald-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="w-5 h-5 text-emerald-400" />
                  <a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { label: "AI Models Deployed", value: "15+" },
              { label: "Data Accuracy", value: "98%" },
              { label: "Performance Boost", value: "35%" },
              { label: "Projects Completed", value: "2" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-xl p-6 border border-white/20 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}