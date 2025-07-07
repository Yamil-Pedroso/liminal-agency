import { SectionContent } from "../types/Types";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { PiLegoBold } from "react-icons/pi";
import { PiHandshakeBold, PiRocketBold } from "react-icons/pi";

export const advantagesData: SectionContent[] = [
  {
    title: "Pro Plans",
    subtitle: "A monthly all-in-one package for boundless creative potential",
    quantity: 0,
    image: {
      src: "./images/benefits/hand-card.png",
      alt: "Benefits Image",
    },
    icon: "icon-premium",
  },
  {
    title: "Ideas that fit your flow",
    subtitle: ["Your Vision", "Our Craft"],
    quantity: 0,
    image: {
      src: "#",
      alt: "Benefits Image",
    },
    icon: [PiLegoBold, FaRegHeart],
  },
  {
    title: "Creative Dashboard",
    subtitle: "Track tasks and manage your workflow with ease",
    quantity: 0,
    image: {
      src: "#",
      alt: "Benefits Image",
    },
    icon: "icon-dashboard",
  },
  {
    title: "Transparent Pricing",
    subtitle: "Simple, consistent pricing with no surprises",
    quantity: 0,
    image: {
      src: "./images/benefits/girl.png",
      alt: "Benefits Image",
    },
    icon: "icon-affordable",
  },
  {
    title: "Live Progress",
    subtitle: "Track updates in real time",
    quantity: 0,
    image: {
      src: "#",
      alt: "Benefits Image",
    },
    icon: "icon-real-time",
  },
  {
    title: "New Collaborations",
    subtitle: "Joined our growing creative ecosystem",
    quantity: 37,
    image: {
      src: "#",
      alt: "Benefits Image",
    },
    icon: [PiHandshakeBold],
  },
  {
    title: "Client Growth Rate",
    subtitle: "Growth compared to last year",
    quantity: 134,
    image: {
      src: "#",
      alt: "Benefits Image",
    },
    icon: [PiRocketBold],
  },
  {
    title: "Tech & Integrations",
    subtitle: "Powered by the latest tools and seamless integrations",
    quantity: 0,
    image: {
      src: "#",
      alt: "Benefits Image",
    },
    icon: "icon-tools",
  },
  {
    title: "Client Satisfaction",
    subtitle: "Based on post-project feedback",
    quantity: 96,
    image: {
      src: "./images/benefits/smily-cat.png",
      alt: "Benefits Image",
    },
    icon: "icon-satisfaction",
  },
  {
    title: "Adaptable & Scalable",
    subtitle: "Easily scale services as your business evolves",
    quantity: 0,
    image: {
      src: "#",
      alt: "Benefits Image",
    },
    icon: "icon-flexible",
  },
  {
    title: "Reliable Support",
    subtitle: [
      "Uptime Guaranteed",
      "24/7 expert assistance for continuous performance and stability.",
    ],
    quantity: 99.8,
    image: {
      src: "#",
      alt: "Benefits Image",
    },
    icon: [FaStar],
  },
];
