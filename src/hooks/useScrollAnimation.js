'use client';
import { useEffect, useRef } from 'react';

export default function useScrollAnimation(threshold = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animateChildren = entry.target.querySelectorAll('[data-animate]');
          animateChildren.forEach(child => {
            child.classList.add('visible');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return ref;
}
