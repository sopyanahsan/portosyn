import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = gsap.utils.toArray(".line-item") as HTMLElement[];
    if (lines.length === 0) return;

    gsap.set(lines, { opacity: 0, pointerEvents: "none" });

    const tl = gsap.timeline({ repeat: -1 });

    lines.forEach((line) => {
      const isDesign = line.innerText.includes("creative by design");
      
      if (isDesign) {
        // Gsap inline effect for creative by design
        tl.fromTo(line,
          { y: 30, opacity: 0, pointerEvents: "none" },
          { y: 0, opacity: 1, pointerEvents: "auto", duration: 0.8, ease: "back.out(1.7)" }
        )
        .to(line, {
          backgroundImage: "linear-gradient(90deg, #ff007f, #7f00ff, #00f0ff, #ff007f)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          duration: 2,
          ease: "none",
          onUpdate: function() {
            gsap.set(line, { backgroundPosition: () => `${this.progress() * 100}% 0%` });
          }
        }, "<")
        .to(line,
          { y: -30, opacity: 0, pointerEvents: "none", duration: 0.5, ease: "power3.in", delay: 2.0 }
        );
      } else {
        tl.fromTo(line,
          { y: 30, opacity: 0, pointerEvents: "none" },
          { y: 0, opacity: 1, pointerEvents: "auto", duration: 0.5, ease: "power3.out" }
        )
        .to(line,
          { y: -30, opacity: 0, pointerEvents: "none", duration: 0.5, ease: "power3.in", delay: 2.0 }
        );
      }
    });
  }, []);

  return (
    <section
      id="hero"
      ref={container}
      className="relative min-h-screen w-screen overflow-hidden"
    >
      <img
        src="/images/bg.gif"
        alt="Background"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-20 md:px-12">
      </div>

      {/* Center Text (TIDAK BOLEH DIUBAH) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[16px] text-white text-center z-20 w-full max-w-4xl">
        <div className="text-ticker-container text-xl md:text-2xl font-bold [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]">
          <div className="line-item">👋 Hi, I'm Sopyan Ahsan </div>
          <div className="line-item text-5xl md:text-7xl font-black leading-none tracking-tighter whitespace-nowrap">creative by design</div>
          <div className="line-item text-white text-lg md:text-xl font-bold whitespace-nowrap mt-2">Photography · Graphic Design · Administration Specialist</div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute left-[32px] right-[32px] bottom-[28px] z-20 flex items-center justify-between">
        {/* Location */}
        <div className="flex items-center gap-[8px] text-white text-lg font-bold uppercase whitespace-nowrap flex-shrink-0">
          <MapPin size={12} />
          <span>Jawa Barat / kab. Cianjur</span>
        </div>

        {/* Social Icons */}
        <div className="inline-flex items-center justify-center gap-5 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-[9999px] flex-shrink-0 h-[52px] min-w-[180px]">
          <a href="https://github.com/sopyanahsan" target="_blank" rel="noopener noreferrer" className="hover:scale-110 active:scale-95 transition-transform duration-200">
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 114.8 110.5 9.2 7.9 17 22.9 17 46.4 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </span>
          </a>
          <a href="https://www.linkedin.com/in/sopyanahsan" target="_blank" rel="noopener noreferrer" className="hover:scale-110 active:scale-95 transition-transform duration-200">
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span>
          </a>
          <a href="https://www.youtube.com/@MsopyanMaulana" target="_blank" rel="noopener noreferrer" className="hover:scale-110 active:scale-95 transition-transform duration-200">
            <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}