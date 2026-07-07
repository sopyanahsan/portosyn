import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreHorizontal } from "lucide-react";

const spring = { stiffness: 320, damping: 30, mass: 0.7 };

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const scrollRef = useRef(0);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - scrollRef.current) > 15) {
        setIsScrolled(currentScroll > 120);
        scrollRef.current = currentScroll;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "journey", "work", "gallery"];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.5 });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.unobserve(el);
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  const handleMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHovered(false);
    }, 120);
  };

  const collapsed = isScrolled && !isHovered;

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        layout
        transition={spring}
        initial={false}
        animate={{ width: collapsed ? 250 : 540 }}
        onMouseLeave={handleMouseLeave}
        className="relative bg-white/75 border border-white/35 shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex items-center justify-between overflow-hidden rounded-full h-[72px]"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          paddingLeft: collapsed ? 18 : 24,
          paddingRight: collapsed ? 18 : 24,
        }}
      >
        {/* Left Group */}
        <div 
          className="flex items-center gap-3 flex-shrink-0"
          onClick={() => scrollToSection("hero")}
        >
          <motion.img
            whileHover={{ scale: 1.06, rotate: 3 }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
          <span className="font-extrabold whitespace-nowrap text-[18px] text-black">Sopyan Ahsan</span>
        </div>

        {/* Right Group */}
        <div className="flex items-center" onMouseEnter={handleMouseEnter}>
           <AnimatePresence mode="wait" initial={false}>
            {!collapsed ? (
              <motion.div
                key="links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, ...spring } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="flex items-center gap-4"
              >
                <NavLink active={activeSection === "about"} onClick={() => scrollToSection("about")}>About</NavLink>
                <NavLink active={activeSection === "journey"} onClick={() => scrollToSection("journey")}>Resume</NavLink>
                <NavLink active={activeSection === "work"} onClick={() => scrollToSection("work")}>Work</NavLink>
                <NavLink active={activeSection === "gallery"} onClick={() => scrollToSection("gallery")}>Gallery</NavLink>
              </motion.div>
            ) : (
              <motion.div
                key="icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, ...spring } }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="flex items-center justify-center w-10 h-10 cursor-pointer"
              >
                <MoreHorizontal className="w-6 h-6 text-slate-800" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
}

const NavLink = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button onClick={onClick} className={`relative px-3 py-2 text-[18px] font-semibold transition-colors whitespace-nowrap ${active ? "text-slate-900" : "text-slate-600 hover:text-slate-800"}`}>
    {children}
    {active && <motion.div layoutId="activeIndicator" className="absolute bottom-1 left-0 right-0 h-0.5 bg-slate-900 rounded-full" transition={spring} />}
  </button>
);