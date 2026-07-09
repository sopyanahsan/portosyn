import React, { useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(Draggable, InertiaPlugin);

export default function GallerySlider() {
  useEffect(() => {
    const initSlider = () => {
      const slides = gsap.utils.toArray('[data-slider="slide"]') as HTMLElement[];
      const nextButton = document.querySelector('[data-slider="button-next"]');
      const prevButton = document.querySelector('[data-slider="button-prev"]');
      const totalElement = document.querySelector('[data-slide-count="total"]');
      const stepElement = document.querySelector('[data-slide-count="step"]');
      
      if (!slides.length || !nextButton || !prevButton || !totalElement || !stepElement) return;

      const stepsParent = stepElement.parentElement;
      if (!stepsParent) return;

      let activeElement: HTMLElement | null = null;
      const totalSlides = slides.length;

      totalElement.textContent = totalSlides < 10 ? `0${totalSlides}` : String(totalSlides);

      stepsParent.innerHTML = '';
      slides.forEach((_, index) => {
        const stepClone = stepElement.cloneNode(true) as HTMLElement;
        stepClone.textContent = index + 1 < 10 ? `0${index + 1}` : String(index + 1);
        stepsParent.appendChild(stepClone);
      });

      const allSteps = stepsParent.querySelectorAll('[data-slide-count="step"]');

      const loop = horizontalLoop(slides, {
        paused: true,
        draggable: true,
        center: false,
        onChange: (element: HTMLElement, index: number) => {
          if (activeElement) {
            activeElement.classList.remove("active");
          }
          const nextSibling = (element.nextElementSibling || slides[0]) as HTMLElement;
          nextSibling.classList.add("active");
          activeElement = nextSibling;

          gsap.to(allSteps, { y: `${-100 * index}%`, ease: "power3", duration: 0.45 });
        }
      });

      slides.forEach((slide, i) => {
        slide.addEventListener("click", () => loop.toIndex(i - 1, { ease: "power3", duration: 0.725 }));
      });

      const handleNext = () => loop.next({ ease: "power3", duration: 0.725 });
      const handlePrev = () => loop.previous({ ease: "power3", duration: 0.725 });

      nextButton.addEventListener("click", handleNext);
      prevButton.addEventListener("click", handlePrev);

      return () => {
        nextButton.removeEventListener("click", handleNext);
        prevButton.removeEventListener("click", handlePrev);
        loop.kill();
      };
    };

    const cleanup = initSlider();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
      <section id="gallery" className="cloneable">
      <div className="overlay">
        <div className="overlay-inner">
          <div className="overlay-count-row">
            <div className="count-column">
              <h2 data-slide-count="step" className="count-heading">01</h2>
            </div>
            <div className="count-row-divider"></div>
            <div className="count-column">
              <h2 data-slide-count="total" className="count-heading">04</h2>
            </div>
          </div>
          <div className="overlay-nav-row">
            <button aria-label="previous slide" data-slider="button-prev" className="button-slider">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 12" fill="none" className="button-arrow">
                <path d="M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z" fill="currentColor"></path>
              </svg>
              <div className="button-overlay">
                <div className="overlay-corner"></div>
                <div className="overlay-corner top-right"></div>
                <div className="overlay-corner bottom-left"></div>
                <div className="overlay-corner bottom-right"></div>
              </div>
            </button>
            <button aria-label="next slide" data-slider="button-next" className="button-slider">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 12" fill="none" className="button-arrow next">
                <path d="M6.28871 12L7.53907 10.9111L3.48697 6.77778H16.5V5.22222H3.48697L7.53907 1.08889L6.28871 0L0.5 6L6.28871 12Z" fill="currentColor"></path>
              </svg>
              <div className="button-overlay">
                <div className="overlay-corner"></div>
                <div className="overlay-corner top-right"></div>
                <div className="overlay-corner bottom-left"></div>
                <div className="overlay-corner bottom-right"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="main-slider">
        <div className="slider-wrap">
          <div data-slider="list" className="slider-list">
            <div data-slider="slide" className="slider-slide">
              <div className="slide-inner">
                <img src="https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f74ff2fe8b0b912b97_slide-1.avif" className="slide-img" loading="lazy" sizes="(max-width: 479px) 100vw, 560px" alt="Abstract layout By FAKURIANDESIGN through Unsplash" />
                <div className="slide-caption">
                  <div className="caption-dot"></div>
                  <p className="caption">Layout nº001</p>
                </div>
              </div>
            </div>
            <div data-slider="slide" className="slider-slide active">
              <div className="slide-inner">
                <img src="https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f7cf52dd961b48a1e2_slide-2.avif" className="slide-img" loading="lazy" alt="Abstract layout By FAKURIANDESIGN through Unsplash" />
                <div className="slide-caption">
                  <div className="caption-dot"></div>
                  <p className="caption">Layout nº002</p>
                </div>
              </div>
            </div>
            <div data-slider="slide" className="slider-slide">
              <div className="slide-inner">
                <img src="https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f7f7cce73267703347_slide-3.avif" className="slide-img" loading="lazy" sizes="(max-width: 479px) 100vw, 560px" alt="Abstract layout By FAKURIANDESIGN through Unsplash" />
                <div className="slide-caption">
                  <div className="caption-dot"></div>
                  <p className="caption">Layout nº003</p>
                </div>
              </div>
            </div>
            <div data-slider="slide" className="slider-slide">
              <div className="slide-inner">
                <img src="https://cdn.prod.website-files.com/674d847bf8e817966d307714/674d90f7ccfd203c82a46798_slide-4.avif" className="slide-img" loading="lazy" sizes="(max-width: 479px) 100vw, 560px" alt="Abstract layout By FAKURIANDESIGN through Unsplash" />
                <div className="slide-caption">
                  <div className="caption-dot"></div>
                  <p className="caption">Layout nº004</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function horizontalLoop(items: HTMLElement[], config: any) {
  let timeline: any;
  items = gsap.utils.toArray(items);
  config = config || {};
  
  let onChange = config.onChange,
    lastIndex = 0,
    tl = gsap.timeline({
      repeat: config.repeat,
      onUpdate: onChange && function() {
        let i = tl.closestIndex();
        if (lastIndex !== i) {
          lastIndex = i;
          onChange(items[i], i);
        }
      },
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times: number[] = [],
    widths: number[] = [],
    spaceBefore: number[] = [],
    xPercents: number[] = [],
    curIndex = 0,
    indexIsDirty = false,
    center = config.center,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1),
    timeOffset = 0,
    container = (center === true ? items[0].parentNode : (gsap.utils.toArray(center)[0] || items[0].parentNode)) as HTMLElement,
    totalWidth: number = 0,
    getTotalWidth = () => items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + spaceBefore[0] + (items[length - 1] as HTMLElement).offsetWidth * (gsap.getProperty(items[length - 1], "scaleX") as number) + (parseFloat(config.paddingRight) || 0),
    populateWidths = () => {
      let b1 = container.getBoundingClientRect(), b2;
      items.forEach((el, i) => {
        widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
        xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px") as string) / widths[i] * 100 + (gsap.getProperty(el, "xPercent") as number));
        b2 = el.getBoundingClientRect();
        spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
        b1 = b2;
      });
      gsap.set(items, {
        xPercent: i => xPercents[i]
      });
      totalWidth = getTotalWidth();
    },
    timeWrap: (v: number) => number,
    populateOffsets = () => {
      timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
      center && times.forEach((t, i) => {
        times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
      });
    },
    getClosest = (values: number[], value: number, wrap: number) => {
      let i = values.length,
        closest = 1e10,
        index = 0, d;
      while (i--) {
        d = Math.abs(values[i] - value);
        if (d > wrap / 2) {
          d = wrap - d;
        }
        if (d < closest) {
          closest = d;
          index = i;
        }
      }
      return index;
    },
    populateTimeline = () => {
      let i, item, curX, distanceToStart, distanceToLoop;
      tl.clear();
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
        distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
        tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
          .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      timeWrap = gsap.utils.wrap(0, tl.duration()) as (v: number) => number;
    },
    refresh = (deep: boolean) => {
      let progress = tl.progress();
      tl.progress(0, true);
      populateWidths();
      deep && populateTimeline();
      populateOffsets();
      deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
    },
    onResize = () => refresh(true);

  gsap.set(items, { x: 0 });
  populateWidths();
  populateTimeline();
  populateOffsets();
  window.addEventListener("resize", onResize);
  
  function toIndex(index: number, vars: any) {
    vars = vars || {};
    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length);
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex && index !== curIndex) {
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    if (time < 0 || time > tl.duration()) {
      vars.modifiers = { time: timeWrap };
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
  }
  
  tl.toIndex = (index: number, vars: any) => toIndex(index, vars);
  tl.closestIndex = (setCurrent: boolean) => {
    let index = getClosest(times, (tl.time() as number) || 0, tl.duration());
    if (setCurrent) {
      curIndex = index;
      indexIsDirty = false;
    }
    return index;
  };
  tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
  tl.next = (vars: any) => toIndex(tl.current() + 1, vars);
  tl.previous = (vars: any) => toIndex(tl.current() - 1, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true);
  
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }

  let killListener = () => window.removeEventListener("resize", onResize);

  if (config.draggable && typeof(Draggable) === "function") {
    const proxy = document.createElement("div"); // Use const for proxy
    let wrap = gsap.utils.wrap(0, 1),
      ratio: number, startProgress: number, draggable: any, lastSnap: number, initChangeX: number, wasPlaying: boolean,
      align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
      syncIndex = () => tl.closestIndex(true);
    
    draggable = Draggable.create(proxy, {
      trigger: items[0].parentNode as HTMLElement,
      type: "x",
      onPressInit() {
        const x = this.x; // Use const for x
        gsap.killTweensOf(tl);
        wasPlaying = !tl.paused();
        tl.pause();
        startProgress = tl.progress();
        refresh(true);
        ratio = 1 / totalWidth;
        initChangeX = (startProgress / -ratio) - x;
        gsap.set(proxy, {x: startProgress / -ratio});
      },
      onDrag: align,
      onThrowUpdate: align,
      overshootTolerance: 0,
      inertia: true,
      snap(value: number) {
        if (Math.abs(startProgress / -ratio - this.x) < 10) {
          return lastSnap + initChangeX;
        }
        let time = -(value * ratio) * tl.duration(),
          wrappedTime = timeWrap(time),
          snapTime = times[getClosest(times, wrappedTime, tl.duration())],
          dif = snapTime - wrappedTime;
        Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
        lastSnap = (time + dif) / tl.duration() / -ratio;
        return lastSnap;
      },
      onRelease() {
        syncIndex();
        draggable.isThrowing && (indexIsDirty = true);
      },
      onThrowComplete: () => {
        syncIndex();
        wasPlaying && tl.play();
      }
    })[0];
    tl.draggable = draggable;

    const originalKill = tl.kill;
    tl.kill = () => {
      if (originalKill) originalKill.call(tl);
      draggable.kill();
      killListener();
      return tl;
    };
  } else {
    tl.kill = () => {
      killListener();
      return tl;
    };
  }
  
  tl.closestIndex(true);
  lastIndex = curIndex;
  onChange && onChange(items[curIndex], curIndex);
  timeline = tl;
  return timeline;
}