import { motion } from 'framer-motion';
import { technicalSkills } from '../data/resumeData';

const skillColors = {
  "Generative AI & LLMs": "from-purple-500 to-pink-600",
  "Machine Learning & NLP": "from-blue-500 to-cyan-600", 
  "Deep Learning & CV": "from-green-500 to-teal-600",
  "MLOps & Data Eng": "from-orange-500 to-red-600",
  "Cloud & Databases": "from-indigo-500 to-purple-600",
  "Data Viz & BI": "from-yellow-500 to-orange-600",
  "Methodologies": "from-pink-500 to-rose-600"
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build next-generation AI solutions
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <motion.div
              key={category}
              className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-8 border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${skillColors[category as keyof typeof skillColors]} bg-clip-text text-transparent`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {category}
              </motion.h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium bg-white/10 dark:bg-white/5 text-gray-800 dark:text-gray-200 rounded-lg border border-white/20 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 5px 15px ${skillColors[category as keyof typeof skillColors].includes('purple') ? 'rgba(147, 51, 234, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
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
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  whileHover={{ scale: 1.5 }}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Always Learning, Always Growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}