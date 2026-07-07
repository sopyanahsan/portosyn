import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const words = ["hi", "im", "sopyan", "photographer"];

export const LoopingWords = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = Array.from(list.children);
    const total = items.length;
    const height = 100 / total;
    let index = 0;

    const update = () => {
      const el = items[(index + 1) % total] as HTMLElement;
      gsap.to(selectorRef.current, {
        width: `${(el.offsetWidth / list.offsetWidth) * 100}%`,
        duration: 0.5,
        ease: 'expo.out'
      });
    };

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(list, {
      yPercent: -height * (index + 1),
      duration: 1.2,
      ease: 'elastic.out(1, 0.85)',
      onStart: () => {
        index++;
        update();
      },
      onComplete: () => {
        if (index >= total - 1) {
          index = 0;
          gsap.set(list, { yPercent: 0 });
        }
      }
    }).to({}, { duration: 2 });
  }, []);

  return (
    <div className="looping-words" style={{ height: '2.7em', fontSize: '5vw', position: 'relative', overflow: 'hidden' }}>
      <ul ref={listRef} className="looping-words__list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {words.map((w, i) => <li key={i}><p>{w}</p></li>)}
      </ul>
      <div ref={selectorRef} className="looping-words__selector" style={{ border: '2px solid black', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }} />
    </div>
  );
};