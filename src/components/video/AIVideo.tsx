import React, { useEffect, useRef, useState } from "react";

interface AIVideoProps {
  src?: string;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
  playbackRate?: number;
  flicker?: boolean;
}

const AIVideo: React.FC<AIVideoProps> = ({
  src,
  type = "video/mp4",
  className = "",
  style = {},
  playbackRate = 1.8,
  flicker = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isGrayscale, setIsGrayscale] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    if (!flicker) return;

    const startFlicker = () => {
      // 🔥 Primera ráfaga (pa!)
      setIsGrayscale(false);
      setTimeout(() => {
        setIsGrayscale(true);
      }, 100);

      // 🔥 Segunda ráfaga (pa!)
      setTimeout(() => {
        setIsGrayscale(false);
      }, 300);

      setTimeout(() => {
        setIsGrayscale(true);
      }, 300);
    };

    const interval = setInterval(
      () => {
        startFlicker();
      },
      Math.random() * 4000 + 2500
    ); // 🔥 Cada 2.5 a 6.5 segundos

    return () => clearInterval(interval);
  }, [flicker]);

  return (
    <video
      ref={videoRef}
      className={`w-full h-full object-cover ${className} ${
        isGrayscale ? "" : ""
      } transition duration-100`}
      style={style}
      autoPlay
      loop
      muted
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default AIVideo;
