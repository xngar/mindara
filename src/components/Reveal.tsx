"use client";
import {
  useRef,
  useEffect,
  useState,
  ReactNode,
  CSSProperties,
  memo,
} from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

function Reveal({ children, delay = 0, className = "", style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return true;
    }

    if (typeof window.IntersectionObserver === "undefined") {
      return true;
    }

    return false;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isVisible) {
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
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "blur(0px)" : "blur(8px)",
        transform: isVisible
          ? "translate3d(0, 0, 0) scale(1) rotateX(0deg)"
          : "translate3d(0, 22px, 0) scale(0.98) rotateX(10deg)",
        transformOrigin: "center bottom",
        willChange: "opacity, transform, filter",
        transition: isVisible
          ? `opacity 0.6s ease ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter 0.6s ease ${delay}s`
          : "none",
      }}
    >
      {children}
    </div>
  );
}

export default memo(Reveal);
