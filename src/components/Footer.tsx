import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-slate-800 to-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              VISHNU VARDHAN
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Generative AI Engineer passionate about building intelligent systems that transform industries and create meaningful impact through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {[
                // { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
                // { icon: ExternalLink, href: personalInfo.portfolio, label: 'Portfolio' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-yellow-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>{personalInfo.location}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.email}</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-400/10 via-amber-500/10 to-orange-600/10 border border-yellow-400/30">
              <p className="text-sm text-yellow-400 font-medium">
                Available for AI/ML consulting and full-time opportunities
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </motion.div>
            {/* <span>using React, Framer Motion & Tailwind CSS</span> */}
          {/* </div>  */}
          
          {/* <div className="text-gray-400 text-sm">
            © 2024 Vishnu Vardhan Reddy Mukkara. All rights reserved.
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
}