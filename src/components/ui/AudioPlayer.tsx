import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface AudioPlayerProps {
  src: string;
  title?: string;
}

export default function AudioPlayer({
  src,
  title = "Escucha",
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [, setUpdate] = useState(0); // Fuerza re-render para sincronizar UI con audio element

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Handler que fuerza actualización de UI
    const handlePlayPause = () => {
      setUpdate((prev) => prev + 1);
    };

    audio.addEventListener("play", handlePlayPause);
    audio.addEventListener("pause", handlePlayPause);
    audio.addEventListener("ended", handlePlayPause);

    return () => {
      audio.removeEventListener("play", handlePlayPause);
      audio.removeEventListener("pause", handlePlayPause);
      audio.removeEventListener("ended", handlePlayPause);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .catch((err) => console.error("Error al reproducir:", err));
    } else {
      audioRef.current.pause();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const isPlaying = audioRef.current && !audioRef.current.paused;
  const currentVolume = audioRef.current ? audioRef.current.volume : 0.5;

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50 bg-graySoft rounded-full p-4 shadow-lg hover:shadow-[0_0_20px_rgba(161,62,34,0.15)] transition"
      >
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center hover:brightness-110 transition"
            title={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <div className="flex items-center gap-2 bg-dark rounded-full px-3 py-1">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={currentVolume}
              onChange={handleVolumeChange}
              className="w-16 h-1 rounded-lg appearance-none cursor-pointer bg-gray-600 accent-accent"
            />
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {Math.round(currentVolume * 100)}%
            </span>
          </div>
        </div>

        {isPlaying && (
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute inset-0 rounded-full border-2 border-accent opacity-50"
          />
        )}
      </motion.div>
    </>
  );
}
