import React from "react";
import { motion } from "framer-motion";

export default function SectionScrollHint() {
  const [nextSectionId, setNextSectionId] = React.useState<string | null>(null);
  const isAtPageEnd = nextSectionId === null;

  React.useEffect(() => {
    const updateNextSection = () => {
      const nearPageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 12;

      if (nearPageBottom) {
        setNextSectionId(null);
        return;
      }

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]"),
      );

      if (!sections.length) {
        setNextSectionId(null);
        return;
      }

      const probeY = window.scrollY + window.innerHeight * 0.35;
      let currentIndex = -1;

      for (let index = 0; index < sections.length; index += 1) {
        if (sections[index].offsetTop <= probeY) {
          currentIndex = index;
        }
      }

      const nextSection = sections[currentIndex + 1] ?? null;
      setNextSectionId(nextSection ? nextSection.id : null);
    };

    updateNextSection();
    window.addEventListener("scroll", updateNextSection, { passive: true });
    window.addEventListener("resize", updateNextSection);

    return () => {
      window.removeEventListener("scroll", updateNextSection);
      window.removeEventListener("resize", updateNextSection);
    };
  }, []);

  const handleScrollToNext = () => {
    if (!nextSectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const nextSection = document.getElementById(nextSectionId);
    if (!nextSection) return;
    nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleScrollToNext}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center cursor-pointer w-11 h-11 rounded-full border border-accentBright/55 bg-black/45 backdrop-blur-sm shadow-[0_0_16px_rgba(255,79,0,0.3)]"
      aria-label={
        isAtPageEnd ? "Volver al inicio" : "Ir a la siguiente sección"
      }
    >
      <motion.div
        animate={
          isAtPageEnd
            ? { y: [0, -7, 0], opacity: [0.65, 1, 0.65] }
            : { y: [0, 7, 0], opacity: [0.65, 1, 0.65] }
        }
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="text-accentBright text-lg leading-none"
      >
        {isAtPageEnd ? "⇈" : "⇊"}
      </motion.div>
    </motion.button>
  );
}
