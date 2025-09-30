import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/resumeData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification}
              className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px rgba(255, 193, 7, 0.2)"
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  className="p-3 rounded-xl bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-orange-600/20"
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Award className="w-6 h-6 text-yellow-400" />
                </motion.div>
                
                <motion.button
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </motion.button>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                {certification}
              </h3>
              
              <div className="flex items-center space-x-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                  <motion.div
                    className="h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
                <motion.span
                  className="text-xs font-medium text-emerald-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                >
                  Certified
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center space-x-4 backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-full px-8 py-4 border border-white/20">
            <Award className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {certifications.length} Professional Certifications Earned
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}