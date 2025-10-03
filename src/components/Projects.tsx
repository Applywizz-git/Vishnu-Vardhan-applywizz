// import { motion } from 'framer-motion';
// import { ExternalLink, Github, TrendingUp } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { projects } from '../data/resumeData';

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
//       <div className="container mx-auto px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
//             Featured <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Projects</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Showcasing innovative AI/ML solutions that drive real-world impact
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <Swiper
//             modules={[Autoplay, Pagination]}
//             spaceBetween={40}
//             slidesPerView={2}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               1024: {
//                 slidesPerView: 2,
//                 spaceBetween: 40,
//               },
//             }}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             loop={true}
//             className="py-12"
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-6 border border-white/20 h-full"
//                   whileHover={{ scale: 1.02, y: -5 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* Project Image */}
//                   <div className="mb-6 rounded-xl overflow-hidden">
//                     <img 
//                       src={project.image} 
//                       alt={project.title}
//                       className="w-full h-48 object-cover rounded-xl"
//                     />
//                   </div>

//                   <div className="flex items-center justify-between mb-4">
//                     <TrendingUp className="w-6 h-6 text-emerald-400" />
                   
//                   </div>

//                   <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  
//                   <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                  
//                   <div className="space-y-2 mb-4">
//                     {project.achievements.map((achievement, i) => (
//                       <div key={i} className="flex items-start space-x-2">
//                         <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
//                         <p className="text-gray-300 text-xs">{achievement}</p>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="flex flex-wrap gap-1.5">
//                     {project.technologies.map((tech, i) => (
//                       <motion.span
//                         key={i}
//                         className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-orange-600/20 text-yellow-400 rounded-full border border-yellow-400/30"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.3, delay: i * 0.1 }}
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>
//       </div>
//     </section>
//   );
// }























// import { motion } from 'framer-motion';
// import { TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { projects } from '../data/resumeData';
// import { useRef } from 'react';

// export default function Projects() {
//   const navigationPrevRef = useRef(null);
//   const navigationNextRef = useRef(null);

//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
//       <div className="container mx-auto px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
//             Featured <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Projects</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 mx-auto mb-8"></div>
//           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//             Showcasing innovative AI/ML solutions that drive real-world impact
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative"
//         >
//           <Swiper
//             modules={[Autoplay, Pagination, Navigation]}
//             spaceBetween={30}
//             slidesPerView={1}
//             breakpoints={{
//               1024: {
//                 slidesPerView: 2,
//                 spaceBetween: 40,
//               },
//             }}
//             autoplay={{
//               delay: 4000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             navigation={{
//               prevEl: navigationPrevRef.current,
//               nextEl: navigationNextRef.current,
//             }}
//             onBeforeInit={(swiper) => {
//               if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
//                 swiper.params.navigation.prevEl = navigationPrevRef.current;
//                 swiper.params.navigation.nextEl = navigationNextRef.current;
//               }
//             }}
//             loop={true}
//             className="py-4 md:py-12 relative"
//           >
//             {/* Navigation Arrows - Positioned on card borders */}
//             {/* <div className="md:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10 px-4">
//               <button
//                 ref={navigationPrevRef}
//                 className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 pointer-events-auto transform -translate-x-2"
//               >
//                 <ChevronLeft className="w-5 h-5 text-white" />
//               </button>
//               <button
//                 ref={navigationNextRef}
//                 className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 pointer-events-auto transform translate-x-2"
//               >
//                 <ChevronRight className="w-5 h-5 text-white" />
//               </button>
//             </div> */}

//             {projects.map((project, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-6 border border-white/20 h-full mx-2 md:mx-0"
//                   whileHover={{ scale: 1.02, y: -5 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* Project Image */}
//                   <div className="mb-6 rounded-xl overflow-hidden">
//                     <img 
//                       src={project.image} 
//                       alt={project.title}
//                       className="w-full h-48 object-cover rounded-xl"
//                     />
//                   </div>

//                   <div className="flex items-center justify-between mb-4">
//                     <TrendingUp className="w-6 h-6 text-emerald-400" />
//                   </div>

//                   <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  
//                   <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                  
//                   <div className="space-y-2 mb-4">
//                     {project.achievements.map((achievement, i) => (
//                       <div key={i} className="flex items-start space-x-2">
//                         <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
//                         <p className="text-gray-300 text-xs">{achievement}</p>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <div className="flex flex-wrap gap-1.5">
//                     {project.technologies.map((tech, i) => (
//                       <motion.span
//                         key={i}
//                         className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-orange-600/20 text-yellow-400 rounded-full border border-yellow-400/30"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.3, delay: i * 0.1 }}
//                         whileHover={{ scale: 1.05 }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
























import { motion } from 'framer-motion';
import { TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { projects } from '../data/resumeData';
import { useRef } from 'react';

export default function Projects() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative AI/ML solutions that drive real-world impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Navigation Arrows - Positioned outside the cards */}
          <div className="md:hidden absolute top-1/2 left-0 right-0 flex justify-between items-center pointer-events-none z-10 -translate-y-1/2">
            <button
              ref={navigationPrevRef}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 pointer-events-auto transform -translate-x-4"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              ref={navigationNextRef}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 pointer-events-auto transform translate-x-4"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }
            }}
            loop={true}
            className="py-4 md:py-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="backdrop-blur-md bg-white/10 dark:bg-white/5 rounded-2xl p-6 border border-white/20 h-full mx-2 md:mx-0"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-xs">{achievement}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-yellow-400/20 via-amber-500/20 to-orange-600/20 text-yellow-400 rounded-full border border-yellow-400/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
