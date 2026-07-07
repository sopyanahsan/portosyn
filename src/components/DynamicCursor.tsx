import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./DynamicCursor.css";

const DynamicCursor = () => {
  const cursorItem = useRef<HTMLDivElement>(null);
  const cursorParagraph = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-cursor]");
    const xOffset = 6;
    const yOffset = 50;
    let cursorIsOnRight = false;
    let currentTarget: EventTarget | null = null;
    let lastText = '';

    if (!cursorItem.current) return;

    gsap.set(cursorItem.current, { xPercent: xOffset, yPercent: yOffset });

    const xTo = gsap.quickTo(cursorItem.current, "x", { ease: "power3" });
    const yTo = gsap.quickTo(cursorItem.current, "y", { ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const cursorX = e.clientX;
      const cursorY = e.clientY + scrollY;

      let xPercent = xOffset;
      let yPercent = yOffset;

      if (cursorX > windowWidth * 0.66) {
        cursorIsOnRight = true;
        xPercent = -100;
      } else {
        cursorIsOnRight = false;
      }

      if (cursorY > scrollY + windowHeight * 0.9) {
        yPercent = -120;
      }

      if (currentTarget) {
        const asElement = currentTarget as HTMLElement;
        let newText = asElement.getAttribute("data-cursor");
        if (asElement.hasAttribute("data-easteregg") && cursorIsOnRight) {
          newText = asElement.getAttribute("data-easteregg");
        }

        if (newText && newText !== lastText) {
          if (cursorParagraph.current) {
            cursorParagraph.current.innerHTML = newText;
          }
          lastText = newText;
        }
      }

      gsap.to(cursorItem.current, { xPercent: xPercent, yPercent: yPercent, duration: 0.9, ease: "power3" });
      xTo(cursorX);
      yTo(cursorY - scrollY);
    };

    const handleMouseEnter = (e: Event) => {
      currentTarget = e.currentTarget as HTMLElement;
      let newText = (currentTarget as HTMLElement).hasAttribute("data-easteregg")
        ? (currentTarget as HTMLElement).getAttribute("data-easteregg")
        : (currentTarget as HTMLElement).getAttribute("data-cursor");

      if (newText && newText !== lastText) {
        if (cursorParagraph.current) {
          cursorParagraph.current.innerHTML = newText;
        }
        lastText = newText;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    targets.forEach(target => {
      target.addEventListener("mouseenter", handleMouseEnter as EventListener);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      targets.forEach(target => {
        target.removeEventListener("mouseenter", handleMouseEnter as EventListener);
      });
    };
  }, []);

  return (
    <>
      <div className="button-row">
        <a data-cursor="Pretty cool, right?" href="#" className="button">
          <p className="button-text">A GSAP-powered custom cursor</p>
          <div className="button-bg"></div>
        </a>
        <a data-cursor="This text comes from an attribute" href="#" className="button secondary">
          <p className="button-text">With dynamic cursor text</p>
          <div className="button-bg"></div>
        </a>
      </div>
      <div ref={cursorItem} className="cursor">
        <p ref={cursorParagraph}>Learn more</p>
      </div>
    </>
  );
};

export default DynamicCursor;