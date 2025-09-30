import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Let's <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on cutting-edge AI projects? Let's discuss how we can build the future together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
                  { icon: Linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: personalInfo.linkedin }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-orange-600/20">
                      <item.icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.label === 'LinkedIn' ? '_blank' : undefined}
                          rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                          className="text-gray-900 dark:text-white hover:text-yellow-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-900 dark:text-white">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 dark:bg-white/5 border border-white/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 dark:bg-white/5 border border-white/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                      required
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 dark:bg-white/5 border border-white/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 dark:bg-white/5 border border-white/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}