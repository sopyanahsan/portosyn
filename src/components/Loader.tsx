import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

export default function Loader() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Morph animation
      tl.to("#maskpath", {
        duration: 0.75,
        morphSVG: "#maskMorphShapeStart",
        ease: "power1.in"
      }, 0.7);
      
      tl.to("#maskpath", {
        duration: 1,
        morphSVG: "#maskMorphShapeEnd",
        ease: "power1.out",
        onComplete: () => {
          gsap.to(container.current, { autoAlpha: 0, duration: 0.5, delay: 0.2 });
        }
      });

      // Section 2: DrawSVG
      tl.fromTo("#draw-line", { drawSVG: 0 }, { drawSVG: "100%", duration: 2, ease: "none" }, 0);
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="page-loader fixed inset-0 z-[9999] bg-slate-900 flex items-center justify-center pointer-events-none">
      <svg className="absolute w-full h-full" viewBox="0 0 1440 1024" preserveAspectRatio="none">
        <defs>
          <clipPath id="page-loader__clip-path" clipPathUnits="objectBoundingBox" transform="scale(0.000694 0.000976)">
            <path id="maskpath" d="M1440.02,0H.02l-.02,1024c22.06,0,447.62,0,720.02,0s691.96,0,719.98,0l.02-1024Z" />
          </clipPath>
        </defs>
        <path id="maskMorphShapeStart" className="hidden" d="M1440.02,0H.02l-.02,1024c41.36-101.95,447.62-246,720.02-246s678.62,144.05,719.98,246l.02-1024Z" />
        <path id="maskMorphShapeEnd" className="hidden" d="M0 1H1440V2H0V1Z" />
        <line id="draw-line" x1="100" y1="500" x2="1340" y2="500" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
}