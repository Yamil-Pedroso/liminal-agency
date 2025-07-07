import { createFileRoute } from "@tanstack/react-router";
import AboutHero from "@/components/about-agency/about-hero/AboutHero";
import Intro from "@/components/about-agency/intro/Intro";
import AGVision from "@/components/about-agency/agency-vision/AGVision";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <AboutHero />
      <Intro />
      <AGVision />
      <div className="text-6xl flex flex-col items-center justify-center w-full min-h-screen bg-[#ffffff] z-10 relative">
        Next Component
      </div>
    </>
  );
}
