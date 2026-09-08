import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return ref;
}
