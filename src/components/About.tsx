import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkles, Sun, Moon } from "lucide-react";

export default function About() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const textVariants: Variants = {
    light: { color: "#000" },
    dark: { color: "#FFF" },
  };

  const bgVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.section
      id="about"
      className="py-24 md:py-32 overflow-hidden relative"
      style={{ 
        width: '100vw', 
        minHeight: '100vh', 
        position: 'relative', 
        left: '50%', 
        right: '50%', 
        marginLeft: '-50vw', 
        marginRight: '-50vw',
        overflow: 'hidden' 
      }}
      animate={{ backgroundColor: isDark ? "#000" : "#FFF" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${isDark ? "/images/about2.png" : "/images/about1.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />
      </AnimatePresence>
      
      <div className="absolute top-8 right-8 z-50 pointer-events-auto">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full pointer-events-auto"
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? "moon" : "sun"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? (
                <Moon className="text-white" />
              ) : (
                <Sun className="text-black" />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      <div className="flex flex-col items-center text-center gap-16 px-6 md:px-20 relative z-10">
        
        {/* Narrative */}
        <div className="flex flex-col gap-6 items-center">
          {/* Tag */}
          <div className="flex items-center gap-2 text-blue-400 font-display font-extrabold tracking-widest text-xs uppercase">
            <Sparkles size={14} className="fill-blue-400" />
            <span>ABOUT ME</span>
          </div>

          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl font-display font-black tracking-tight leading-none"
            variants={textVariants}
            animate={isDark ? "dark" : "light"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            a little about myself
          </motion.h2>

          {/* Text Paragraphs */}
          <motion.div
            className="flex flex-col gap-5 text-base sm:text-lg leading-relaxed font-medium"
            variants={textVariants}
            animate={isDark ? "dark" : "light"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p>
              My journey into design started long before product design. I began with graphic design at a young age, spending years experimenting with Photoshop, branding projects, and freelance work. During college, I worked part-time designing websites, emails, and social media campaigns, which helped me build a strong foundation across different areas of design.
            </p>
            <p>
              Today, I work on consumer and enterprise products, where I enjoy turning complex workflows into experiences that feel simple and intuitive. I'm particularly drawn to problems that sit at the intersection of user needs, business goals, and technical constraints.
            </p>
          </motion.div>

          {/* Large Signature Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4"
          >
            <span className="font-handwritten text-6xl sm:text-7xl text-blue-400 font-bold tracking-wide block transform -rotate-2 select-none">
              Sanjay.
            </span>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}
