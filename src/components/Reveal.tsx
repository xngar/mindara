"use client";
import { useRef, useEffect, useState, ReactNode, memo } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    if (typeof window.IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(20px)",
        transition: isVisible
          ? `opacity 0.35s ease ${delay}s, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
          : "none",
      }}
    >
      {children}
    </div>
  );
}

export default memo(Reveal);
