import { createFileRoute } from "@tanstack/react-router";
import AboutHero from "@/components/about-agency/about-hero/AboutHero";
import Intro from "@/components/about-agency/intro/Intro";
import AGVision from "@/components/about-agency/agency-vision/AGVision";
import AboutServices from "@/components/about-agency/about-services/AboutServices";
import Team from "@/components/about-agency/about-team/Team";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <AboutHero />
      <Intro />
      <AGVision />
      <AboutServices />
      <Team />
    </>
  );
}
