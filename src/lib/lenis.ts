import Lenis from "@studio-freight/lenis";

export const lenis = new Lenis({
  lerp: 0.08,
  wheelMultiplier: 1,
  touchMultiplier: 1,
  infinite: false,
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
