import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import { experience } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experience.map((job, index) => (
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
                className="absolute left-4 md:left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 rounded-full transform -translate-x-1/2 z-10"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              ></motion.div>

              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-8">
                  {index % 2 !== 0 && <div className="md:pl-8"></div>}
                  
                  <motion.div
                    className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-8 border border-white/20"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                      <TrendingUp className="w-6 h-6 text-emerald-400" />
                    </div>
                    
                    <div className="text-xl font-semibold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
                      {job.company}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-6">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {job.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 * i }}
                        >
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}