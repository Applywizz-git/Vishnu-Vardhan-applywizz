// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { Link } from 'react-scroll';
// import ThemeToggle from './ThemeToggle';

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     'About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Education', 'Contact'
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
//         isScrolled 
//           ? 'backdrop-blur-md bg-black/80 dark:bg-black/90 border-b border-white/10' 
//           : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <Link
//             to="hero"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer"
//           >
//             <motion.h1
//               className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent"
//               whileHover={{ scale: 1.05 }}
//             >
//               VISHNU
//             </motion.h1>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <motion.div
//                 key={item}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <Link
//                   to={item.toLowerCase()}
//                   smooth={true}
//                   duration={500}
//                   className="text-white/80 hover:text-white cursor-pointer transition-colors duration-300 font-medium"
//                   activeClass="text-yellow-400"
//                   spy={true}
//                   offset={-100}
//                 >
//                   {item}
//                 </Link>
//               </motion.div>
//             ))}
//             <ThemeToggle />
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center space-x-4">
//             <ThemeToggle />
//             <motion.button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="p-2 rounded-lg backdrop-blur-md bg-white/10 border border-white/20"
//               whileTap={{ scale: 0.95 }}
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.nav
//               className="md:hidden mt-4 py-4 backdrop-blur-md bg-black/90 rounded-lg border border-white/20"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {navItems.map((item, index) => (
//                 <motion.div
//                   key={item}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.05 }}
//                 >
//                   <Link
//                     to={item.toLowerCase()}
//                     smooth={true}
//                     duration={500}
//                     className="block px-4 py-2 text-white/80 hover:text-white cursor-pointer transition-colors duration-300"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     offset={-100}
//                   >
//                     {item}
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.header>
//   );
// }










import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    'About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Education', 'Contact'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-black/80 dark:bg-black/90 border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.h1
              className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              VISHNU
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-white/80 hover:text-white cursor-pointer transition-colors duration-300 font-medium"
                  activeClass="text-yellow-400"
                  spy={true}
                  offset={-100}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            {/* <ThemeToggle /> */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg backdrop-blur-md bg-white/10 border border-white/20"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 py-4 backdrop-blur-md bg-black/90 rounded-lg border border-white/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="block px-4 py-2 text-white/80 hover:text-white cursor-pointer transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                    offset={-100}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
