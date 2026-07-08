import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkles, Sun, Moon } from "lucide-react";

const TextHighlight = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontWeight: 700, color: "#3B82F6" }}>{children}</span>
);

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
      className="overflow-hidden relative"
      style={{
        width: '100vw',
        height: '85vh',
        minHeight: '700px',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
      }}
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
            backgroundRepeat: "no-repeat",
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

      <div
        className="relative z-10"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: '100%',
            padding: '0 80px',
            paddingTop: '70px',
            display: "grid",
            gridTemplateColumns: "45% 55%",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Left Column (empty for background artwork) */}
          <div></div>

          {/* Right Column (content) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: "650px",
            }}
          >
            {/* Tag */}
            <div className="flex items-center gap-2 text-blue-400 font-display font-extrabold tracking-widest text-xs uppercase" style={{ marginBottom: "24px" }}>
              <Sparkles size={14} className="fill-blue-400" />
              <span>ABOUT ME</span>
            </div>

            {/* Heading */}
            <motion.h2
              className="text-5xl lg:text-6xl font-display font-black tracking-tight leading-none"
              style={{ marginBottom: "40px" }}
              variants={textVariants}
              animate={isDark ? "dark" : "light"}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              a little about myself
            </motion.h2>

            {/* Text Paragraphs */}
            <motion.div
              className="flex flex-col"
              style={{ gap: "28px" }}
              variants={textVariants}
              animate={isDark ? "dark" : "light"}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p style={{ fontSize: "20px", lineHeight: 1.7 }}>
                My journey began with a passion for{" "}
                <TextHighlight>Graphic Design</TextHighlight>,{" "}
                <TextHighlight>Photography</TextHighlight>, and{" "}
                <TextHighlight>Technology</TextHighlight>. Over the years, I
                explored visual storytelling, branding, photo editing, and digital
                content while building a strong foundation in{" "}
                <TextHighlight>Information Technology</TextHighlight>.
              </p>
              <p style={{ fontSize: "20px", lineHeight: 1.7 }}>
                Today, I combine creativity with structured problem solving
                through <TextHighlight>UI Design</TextHighlight>,{" "}
                <TextHighlight>Photography</TextHighlight>,{" "}
                <TextHighlight>Digital Content</TextHighlight>, and{" "}
                <TextHighlight>Administrative Operations</TextHighlight>. I enjoy
                creating experiences that are visually engaging, organized, and{" "}
                <TextHighlight>meaningful</TextHighlight> while continuously
                learning and improving.
              </p>
            </motion.div>

            {/* Large Signature Graphic */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ marginTop: "40px" }}
            >
              <span className="font-handwritten text-5xl text-blue-400 font-bold tracking-wide block transform -rotate-2 select-none">
                Sopyan Ahsan.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}