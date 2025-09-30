import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Academic <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building a strong foundation through rigorous academic pursuits
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-400 via-amber-500 to-orange-600 transform md:-translate-x-1/2"></div>
              
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-4 md:left-1/2 top-8 w-6 h-6 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center"
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.2 }}
              >
                <GraduationCap className="w-3 h-3 text-black" />
              </motion.div>

              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-8">
                  {index % 2 !== 0 && <div className="md:pl-8"></div>}
                  
                  <motion.div
                    className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-8 border border-white/20"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div className="text-xl font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent mb-4">
                          {edu.institution}
                        </div>
                      </div>
                      <motion.div
                        className="p-3 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-600/20"
                        whileHover={{ rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <GraduationCap className="w-6 h-6 text-emerald-400" />
                      </motion.div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>

                    {/* Achievement Bars */}
                    <div className="space-y-3">
                      {['Academic Excellence', 'Research & Innovation', 'Technical Skills'].map((achievement, i) => (
                        <div key={achievement} className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex-1">
                            {achievement}
                          </span>
                          <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2 ml-4">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${85 + i * 5}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                            />
                          </div>
                          <span className="text-xs font-medium text-emerald-400 ml-2 w-8">
                            {85 + i * 5}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-4 backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-full px-8 py-4 border border-white/20">
            <GraduationCap className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Pursuing Excellence in Computer Science & AI
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}