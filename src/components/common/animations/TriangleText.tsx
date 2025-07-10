import React, { useRef, useEffect } from "react";

type TriangleWormTextProps = {
  text: string;
  size?: number;
  duration?: number; // tiempo en segundos para recorrer el triángulo
  className?: string;
};

const TriangleWormText: React.FC<TriangleWormTextProps> = ({
  text,
  size = 300,
  duration = 10,
  className = "",
}) => {
  const height = (Math.sqrt(3) / 3) * size;
  const pathLength = size * 3; // perímetro del triángulo

  const textPathRef = useRef<SVGTextPathElement>(null);

  // Repite el texto para cubrir 2 vueltas completas del triángulo
  const repeatedText = text.repeat(
    Math.ceil((pathLength * 2) / (text.length * 8))
  );

  useEffect(() => {
    const el = textPathRef.current;
    if (!el) return;

    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = (elapsed / (duration * 1000)) % 1;
      const offset = progress * 100;
      el.setAttribute("startOffset", `${offset}%`);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [duration]);

  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${className}`}
      style={{ width: size, height }}
    >
      <svg
        viewBox={` ${size} ${height}`}
        width={size}
        height={height}
        className="overflow-visible"
      >
        <defs>
          <path
            id="trianglePath"
            d={`
              M 0 ${height}
              L ${size / 2} 0
              L ${size} ${height}
              Z
            `}
            fill="none"
          />
        </defs>

        <text fontSize="28" fontWeight={"bold"} fill="black">
          <textPath ref={textPathRef} href="#trianglePath" startOffset="0%">
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default TriangleWormText;
