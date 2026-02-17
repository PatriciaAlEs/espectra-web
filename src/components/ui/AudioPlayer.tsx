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
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Inicializar el volumen cuando el componente monta
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  // Listeners para cambios en el audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => {
      setHasError(true);
      setIsPlaying(false);
      setIsLoading(false);
      console.error("Error loading audio:", audio.error);
    };
    const handlePlay = () => {
      setIsPlaying(true);
      setHasError(false);
    };
    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("error", handleError);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Error al reproducir:", err);
        setHasError(true);
      });
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50 bg-graySoft rounded-full p-4 shadow-lg hover:shadow-[0_0_20px_rgba(161,62,34,0.15)] transition"
        title={hasError ? "Error al cargar el audio" : "Reproductor de audio"}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            disabled={isLoading || hasError}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
            title={
              hasError
                ? "Error al cargar el audio"
                : isPlaying
                  ? "Pausar"
                  : "Reproducir"
            }
          >
            {isLoading ? (
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : hasError ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            ) : isPlaying ? (
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
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              disabled={hasError}
              className="w-16 h-1 rounded-lg appearance-none cursor-pointer bg-gray-600 accent-accent disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>

        {isPlaying && !hasError && (
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
