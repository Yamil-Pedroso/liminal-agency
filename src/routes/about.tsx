import { createFileRoute } from "@tanstack/react-router";
import AboutHero from "@/components/about-agency/hero/AboutHero";
import Intro from "@/components/about-agency/intro/Intro";
import AGVision from "@/components/about-agency/agency-vision/AGVision";
import AboutServices from "@/components/about-agency/services/AboutServices";
import Team from "@/components/about-agency/team/Team";
import OurStrategy from "@/components/our-strategy/OurStrategy";
import Celebration from "@/components/about-agency/celebration/Celebration";

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
      <OurStrategy />
      <Celebration />
    </>
  );
}
