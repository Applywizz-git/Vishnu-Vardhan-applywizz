import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/resumeData';

const roles = [
  "Generative AI Engineer",
  "Machine Learning Specialist", 
  "Data Scientist",
  "AI/ML Solutions Architect"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const useDownload = () => {
  const downloadFile = (filePath: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return downloadFile;
};
const downloadFile = useDownload();

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentWord = roles[currentRole];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-center lg:text-left py-20">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                VISHNU VARDHAN
              </span>
              <br />
              <span className="text-white">REDDY MUKKARA</span>
            </motion.h1>

            <motion.div
              className="h-20 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl md:text-3xl text-emerald-400 font-semibold">
                {displayText}
                <motion.span
                  className="inline-block ml-1 w-0.5 h-8 bg-emerald-400"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </p>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-2xl lg:max-w-none mb-12 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting the future of AI with cutting-edge generative models, RAG pipelines, 
              and transformer architectures. Transforming complex data into intelligent solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* <motion.a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 193, 7, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Portfolio</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a> */}
              <motion.a
  href="#projects" // Add ID to your projects section
  className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 text-black font-bold rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 193, 7, 0.5)" }}
  whileTap={{ scale: 0.95 }}
>
  <span>View Projects</span>
  <ExternalLink className="w-5 h-5" />
</motion.a>
              
              {/* <motion.button
                className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download CV</span>
                <Download className="w-5 h-5" />
              </motion.button> */}

              <motion.button
  onClick={() => downloadFile('public/RESUME_VISHNU VARDHAN REDDY MUKKARA_GenAI.pdf', 'VISHNU VARDHAN REDDY MUKKARA ')}
  className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <span>Download Resume</span>
  <Download className="w-5 h-5" />
</motion.button>
            </motion.div>
          </div>

          {/* Right Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              whileHover={{ 
                rotateY: 15,
                rotateX: -10,
                scale: 1.05
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Glow Effect Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-amber-500/20 to-orange-600/30 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Profile Container */}
              <motion.div
                className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-3xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl"
                initial={{ rotateX: 20, rotateY: -20 }}
                animate={{ rotateX: 0, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 z-10" />
                
                {/* Profile Image */}
                <motion.img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Vishnu Vardhan Reddy Mukkara"
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center z-20"
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white font-bold text-lg">AI</span>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center z-20"
                  animate={{
                    y: [10, -10, 10],
                    rotate: [360, 180, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <span className="text-white font-bold text-sm">ML</span>
                </motion.div>
              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link to="about" smooth={true} duration={500} offset={-100}>
            <motion.div
              className="cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-white/60" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}