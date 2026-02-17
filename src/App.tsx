import React from "react";
import Hero from "./sections/Hero/Hero";
import ReleasesPlaceholder from "./sections/Releases/Placeholder";
import AboutPlaceholder from "./sections/About/Placeholder";
import EventsPlaceholder from "./sections/Events/Placeholder";
import SocialsPlaceholder from "./sections/Socials/Placeholder";
import Contact from "./sections/Contact/Contact";
import Container from "./components/layout/Container";
import AudioPlayer from "./components/ui/AudioPlayer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary font-display">
      <Hero />

      <section id="releases">
        <Container>
          <ReleasesPlaceholder />
        </Container>
      </section>

      <section id="about">
        <Container>
          <AboutPlaceholder />
        </Container>
      </section>

      <section id="events">
        <Container>
          <EventsPlaceholder />
        </Container>
      </section>

      <section id="socials">
        <Container>
          <SocialsPlaceholder />
        </Container>
      </section>

      <Contact />

      <AudioPlayer src="/assets/audio/song.mp3" title="Espectra" />
    </div>
  );
}
