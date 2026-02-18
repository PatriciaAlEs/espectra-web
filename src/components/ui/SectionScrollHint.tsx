import React from "react";
import { motion } from "framer-motion";

export default function SectionScrollHint() {
  const [nextSectionId, setNextSectionId] = React.useState<string | null>(null);
  const [bottomOffset, setBottomOffset] = React.useState(16);
  const isAtPageEnd = nextSectionId === null;
  const baseBottomOffset = 16;
  const footerGapBottomOffset = 56;

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

      const footer = document.querySelector<HTMLElement>("footer");
      if (!footer) {
        setBottomOffset(baseBottomOffset);
        return;
      }

      const footerTopInViewport = footer.getBoundingClientRect().top;
      const overlap = window.innerHeight - footerTopInViewport;
      setBottomOffset(
        overlap > 0 ? overlap + footerGapBottomOffset : baseBottomOffset,
      );
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
      className="fixed inset-x-0 mx-auto z-50 flex items-center justify-center cursor-pointer w-11 h-11 rounded-full border border-accentBright/55 bg-black/45 backdrop-blur-sm shadow-[0_0_16px_rgba(255,79,0,0.3)]"
      style={{ bottom: `${bottomOffset}px` }}
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
        className="text-accentBright flex items-center justify-center"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {isAtPageEnd ? (
            <>
              <path d="M7 14L12 9L17 14" />
              <path d="M7 19L12 14L17 19" />
            </>
          ) : (
            <>
              <path d="M7 10L12 15L17 10" />
              <path d="M7 5L12 10L17 5" />
            </>
          )}
        </svg>
      </motion.div>
    </motion.button>
  );
}
