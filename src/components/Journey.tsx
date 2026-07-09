import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, MapPin, Calendar } from "lucide-react";
import { cn } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: "2026",
    status: "Present",
    company: "PT. Home Center Indonesia / Informa",
    position: "Administration Staff",
    location: "Cianjur",
    description: ["Manage daily administrative records.", "Handle office documentation and supply inventory.", "Assist branch operations efficiency."],
  },
  {
    year: "2024",
    status: "Ongoing",
    company: "E-commerce",
    position: "Document Control / Admin",
    location: "Remote",
    description: ["Streamline digital document workflow.", "Maintain database accuracy and version control.", "Collaborate with cross-functional remote teams."],
  },
  {
    year: "2023",
    status: "Completed",
    company: "Freelance",
    position: "Graphic Designer",
    location: "Remote",
    description: ["Create brand identities and marketing materials.", "Deliver high-quality visual assets for clients.", "Manage project timelines and feedback."],
  },
  {
    year: "2022",
    status: "Completed",
    company: "Independent",
    position: "Photographer & Content Creator",
    location: "Various",
    description: ["Capture high-quality images and video content.", "Edit and produce engaging visual stories.", "Build community through digital storytelling."],
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = cardsWrapperRef.current;
      if (!wrapper) return;

      const tl = gsap.timeline();

      // CardsWrapper translateX()
      tl.to(wrapper, {
        x: () => -(wrapper.scrollWidth - wrapper.clientWidth),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        animation: tl,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        start: "top top",
        end: () => "+=" + window.innerWidth * experiences.length,
        onUpdate: (self) => {
          const progress = self.progress;
          const activeCardIndex = Math.round(progress * (experiences.length - 1));
          const currentYear = experiences[activeCardIndex]?.year;
          if (yearRef.current && currentYear) {
            yearRef.current.textContent = currentYear;
          }
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white overflow-hidden w-full"
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {/* Fixed Heading */}
      <div className="absolute top-12 left-0 right-0 text-center z-20 px-6">
        <div className="inline-flex items-center gap-2 text-emerald-400 dark:text-emerald-600 font-bold tracking-widest text-xs uppercase bg-zinc-900 dark:bg-zinc-100 px-4 py-2 rounded-full border border-zinc-800 dark:border-zinc-200">
          <Sparkles size={12} className="fill-emerald-400 dark:fill-emerald-600" />
          <span>EXPERIENCE</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black mt-4">the journey so far</h2>
        <p className="text-gray-400 dark:text-gray-600 text-base sm:text-lg font-medium leading-relaxed mt-2">
          From retail, e-commerce, administration, to design and photography.
        </p>
      </div>

      {/* Dynamic Timeline Year and Dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-30 pointer-events-none">
        <span ref={yearRef} className="font-display font-bold text-3xl mb-2 text-emerald-400 dark:text-emerald-600">
          {experiences[0].year}
        </span>
        <div className="w-0.5 h-12 bg-emerald-400 dark:bg-emerald-600 my-2"></div>
        <div className="w-4 h-4 bg-emerald-400 dark:bg-emerald-600 rounded-full"></div>
      </div>

      {/* Responsive Cards Container */}
      <div className="w-screen px-6 flex-grow flex items-center justify-center relative z-10 mt-24">
        {/* CardsWrapper */}
        <div ref={cardsWrapperRef} className="flex w-full will-change-transform">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full flex justify-center items-center"
            >
              {/* Card */}
              <div className="w-full max-w-lg aspect-[3/2] bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-black/20 rounded-[28px] p-8 shadow-xl flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-400 dark:bg-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0">
                    {exp.company[0]}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl">{exp.position}</h3>
                    <p className="text-sm font-semibold text-gray-200 dark:text-gray-800">{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 dark:text-gray-700 flex items-center gap-1 mb-4">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </p>
                <ul className="flex flex-col gap-2 text-gray-300 dark:text-gray-700 font-medium text-sm leading-relaxed flex-grow">
                  {exp.description.map((d, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-emerald-600 mt-2.5 shrink-0"></span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-xs text-gray-400 dark:text-gray-600 font-medium mt-4 flex items-center gap-1">
                  <Calendar size={12} />
                  {exp.year} • {exp.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}