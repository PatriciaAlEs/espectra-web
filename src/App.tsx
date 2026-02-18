import React from "react";
import Hero from "./sections/Hero/Hero";
import ReleasesPlaceholder from "./sections/Releases/Placeholder";
import AboutPlaceholder from "./sections/About/Placeholder";
import EventsPlaceholder from "./sections/Events/Placeholder";
import SocialsPlaceholder from "./sections/Socials/Placeholder";
import Contact from "./sections/Contact/Contact";
import Container from "./components/layout/Container";
import AudioPlayer from "./components/ui/AudioPlayer";

function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`section-divider my-10 md:my-14 ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary font-display">
      <Hero />
      <SectionDivider className="mt-0 md:mt-0 mb-10 md:mb-14" />

      <section id="releases">
        <Container>
          <ReleasesPlaceholder />
        </Container>
      </section>
      <SectionDivider />

      <section id="about">
        <Container>
          <AboutPlaceholder />
        </Container>
      </section>
      <SectionDivider />

      <section id="events">
        <Container>
          <EventsPlaceholder />
        </Container>
      </section>
      <SectionDivider />

      <section id="socials">
        <Container>
          <SocialsPlaceholder />
        </Container>
      </section>
      <SectionDivider />

      <Contact />

      <AudioPlayer src="/assets/audio/POLLOCK.wav" title="POLLOCK" />
    </div>
  );
}
