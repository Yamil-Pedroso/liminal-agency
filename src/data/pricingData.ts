import { Plan, SectionContent } from "../types/Types";
import { TbPyramid } from "react-icons/tb";
import { BsLightningCharge } from "react-icons/bs";

export const pricingData: Plan = {
  title: "Plans",
  planName: "core",
  period: ["month"],
  subtitle: [
    "Straightforward pricing. Robust features. No surprises.",
    "Minimal commitment — just 2 months.",
    "Need clarity? Book a quick call with us.",
  ],
  prices: {
    core: "CHF 5,400",
    pro: "CHF 9,800",
  },
  icon: [TbPyramid, BsLightningCharge],
};

export const framePlanOptions: SectionContent[] = [
  {
    title: "Mockup Within 72h",
    subtitle:
      "Receive initial design concepts within 3 days — quality guaranteed.",
  },
  {
    title: "Single Active Project",
    subtitle: "Your project gets full attention in a focused production queue.",
  },
  {
    title: "3 Rounds of Revisions",
    subtitle: "Three thoughtful iterations to fine-tune your visual direction.",
  },
  {
    title: "Senior Designer Assigned",
    subtitle: "A dedicated expert guiding the design from vision to execution.",
  },
  {
    title: "Reliable Development",
    subtitle: "Solid implementation with proven technologies and clean code.",
  },
];

export const proPlanOptions: SectionContent[] = [
  {
    title: "Mockup Within 48h",
    subtitle: "Get fast delivery with first concepts ready in just 2 days.",
  },
  {
    title: "Priority Queue Access",
    subtitle: "Jump the line — faster cycles and top-priority execution.",
  },
  {
    title: "Unlimited Revisions",
    subtitle: "Iterate freely until every detail feels just right.",
  },
  {
    title: "Expert Designer On Board",
    subtitle: "Senior creative lead dedicated to your project full-time.",
  },
  {
    title: "High-End Development",
    subtitle: "Crafted using advanced tools for speed, scale, and stability.",
  },
];
