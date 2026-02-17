import React, { useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

interface VantaEffectProps {
  className?: string;
  colors?: string[];
}

export default function VantaCloudEffect({
  className = "",
  colors = ["#080808", "#ff4d00"],
}: VantaEffectProps) {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vantaRef.current) {
      CLOUDS({
        el: vantaRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x080808,
        cloudColor: 0x1a1a1a,
        windStrength: 2.5,
      });
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className={`absolute inset-0 opacity-40 mix-blend-screen ${className}`}
    />
  );
}
