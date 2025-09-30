export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const gradientBg = "bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600";
export const silverGradient = "bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600";
export const heroGradient = "bg-gradient-to-br from-black via-slate-900 to-purple-900";
export const footerGradient = "bg-gradient-to-br from-black via-slate-800 to-slate-900";

export const glassEffect = "backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20";