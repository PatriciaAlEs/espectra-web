import React from "react";
import { motion } from "framer-motion";

type ScrollTarget = {
  key: string;
  top: number;
};

export default function SectionScrollHint() {
  const [nextSectionId, setNextSectionId] = React.useState<string | null>(null);
  const [bottomOffset, setBottomOffset] = React.useState(16);
  const isBackToTop = nextSectionId === "hero";
  const baseBottomOffset = 16;
  const footerGapBottomOffset = 56;

  React.useEffect(() => {
    const clampToScroll = (value: number) => {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      return Math.min(Math.max(0, value), maxScroll);
    };

    const groupTopFor = (startEl: HTMLElement, endEl: HTMLElement) => {
      const start = startEl.offsetTop;
      const end = endEl.offsetTop + endEl.offsetHeight;
      const middle = (start + end) / 2;
      return clampToScroll(middle - window.innerHeight / 2);
    };

    const centerTopFor = (element: HTMLElement) => {
      const centered =
        element.offsetTop - (window.innerHeight - element.offsetHeight) / 2;
      return clampToScroll(centered);
    };

    const buildTargets = (): ScrollTarget[] => {
      const releases = document.getElementById("releases");
      const about = document.getElementById("about");
      const events = document.getElementById("events");
      const socials = document.getElementById("socials");
      const contact = document.getElementById("contact");
      const footer = document.querySelector<HTMLElement>("footer");

      const targets: ScrollTarget[] = [{ key: "hero", top: 0 }];

      if (releases) {
        targets.push({ key: "releases", top: centerTopFor(releases) });
      }

      if (about) {
        targets.push({ key: "about", top: centerTopFor(about) });
      }

      if (events || socials) {
        const eventsSocialsTop =
          events && socials
            ? groupTopFor(events, socials)
            : clampToScroll(
                (socials?.offsetTop ?? events?.offsetTop ?? 0) -
                  window.innerHeight * 0.35,
              );
        targets.push({ key: "events-socials", top: eventsSocialsTop });
      }

      if (contact || footer) {
        const contactFooterTop =
          contact && footer
            ? groupTopFor(contact, footer)
            : clampToScroll(
                (footer?.offsetTop ?? contact?.offsetTop ?? 0) -
                  window.innerHeight * 0.55,
              );
        targets.push({ key: "contact-footer", top: contactFooterTop });
      }

      return targets;
    };

    const updateNextSection = () => {
      const footer = document.querySelector<HTMLElement>("footer");
      const targets = buildTargets();

      if (!targets.length) {
        setNextSectionId(null);
        setBottomOffset(baseBottomOffset);
        return;
      }

      const scrollProbe = window.scrollY + 2;
      let currentIndex = -1;

      for (let index = 0; index < targets.length; index += 1) {
        if (targets[index].top <= scrollProbe) {
          currentIndex = index;
        }
      }

      const nextIndex =
        currentIndex >= targets.length - 1 ? 0 : currentIndex + 1;
      const nextTarget = targets[nextIndex] ?? null;
      setNextSectionId(nextTarget ? nextTarget.key : null);

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

    const releases = document.getElementById("releases");
    const about = document.getElementById("about");
    const socials = document.getElementById("socials");
    const events = document.getElementById("events");
    const contact = document.getElementById("contact");
    const footer = document.querySelector<HTMLElement>("footer");

    const maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const clamp = (value: number) => Math.min(Math.max(0, value), maxScroll);

    const groupTopFor = (startEl: HTMLElement, endEl: HTMLElement) => {
      const start = startEl.offsetTop;
      const end = endEl.offsetTop + endEl.offsetHeight;
      const middle = (start + end) / 2;
      return clamp(middle - window.innerHeight / 2);
    };

    const centerTopFor = (element: HTMLElement) =>
      clamp(
        element.offsetTop - (window.innerHeight - element.offsetHeight) / 2,
      );

    if (nextSectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (nextSectionId === "releases" && releases) {
      window.scrollTo({ top: centerTopFor(releases), behavior: "smooth" });
      return;
    }

    if (nextSectionId === "about" && about) {
      window.scrollTo({ top: centerTopFor(about), behavior: "smooth" });
      return;
    }

    if (nextSectionId === "events-socials") {
      const top =
        events && socials
          ? groupTopFor(events, socials)
          : clamp(
              (socials?.offsetTop ?? events?.offsetTop ?? 0) -
                window.innerHeight * 0.35,
            );
      window.scrollTo({ top, behavior: "smooth" });
      return;
    }

    if (nextSectionId === "contact-footer") {
      const top =
        contact && footer
          ? groupTopFor(contact, footer)
          : clamp(
              (footer?.offsetTop ?? contact?.offsetTop ?? 0) -
                window.innerHeight * 0.55,
            );
      window.scrollTo({ top, behavior: "smooth" });
    }
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
        isBackToTop ? "Volver al inicio" : "Ir a la siguiente sección"
      }
    >
      <motion.div
        animate={
          isBackToTop
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
          {isBackToTop ? (
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
