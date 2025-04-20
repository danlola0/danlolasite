import { useEffect, useState, useRef } from 'react';

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after it's been seen
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15, // When 15% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { isVisible, elementRef };
}

export function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export const animateOnScroll = (el: HTMLElement, options = { threshold: 0.15 }) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(el);
  
  return () => {
    observer.unobserve(el);
  };
};