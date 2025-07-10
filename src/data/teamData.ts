import { SectionContent, TeamProps } from "@/types/Types";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const agTeam: TeamProps[] = [
  {
    name: "Kampari Mefisteus",
    position: "Head of Design",
    icon: [FaLinkedinIn, FaGithub, FaInstagram],
    avatar: "./images/about/team/img1.png",
    grettings: "¡Hola!",
  },
  {
    name: "Talitee Amsel",
    position: "Frontend Developer",
    icon: [FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter],
    avatar: "./images/about/team/img2.png",
    grettings: "Konnichiwa",
  },
  {
    name: "Noah Kintaro",
    position: "Fullstack Engineer",
    icon: [FaLinkedinIn, FaGithub, FaInstagram],
    avatar: "./images/about/team/img3.png",
    grettings: "Hi!",
  },
  {
    name: "Mila Corven",
    position: "UI/UX Specialist",
    icon: [FaLinkedinIn, FaGithub, FaInstagram],
    avatar: "./images/about/team/img4.png",
    grettings: "Привет!",
  },
  {
    name: "Élio Tanaka",
    position: "Product Manager",
    icon: [FaLinkedinIn, FaGithub, FaInstagram],
    avatar: "./images/about/team/img5.png",
    grettings: "Bonjour!",
  },
  {
    name: "Karuh Lumina",
    position: "AI Research Lead",
    icon: [FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter],
    avatar: "./images/about/team/img6.png",
    grettings: "miau!",
  },
  {
    name: "Adrian Volk",
    position: "CTO",
    icon: [FaLinkedinIn, FaGithub, FaInstagram, FaXTwitter],
    avatar: "./images/about/team/img7.png",
    grettings: "Olá!",
  },
  {
    name: "Renata Sorel",
    position: "Marketing Strategist",
    icon: [FaLinkedinIn, FaGithub, FaInstagram],
    avatar: "./images/about/team/img8.png",
    grettings: "Nǐ hǎo",
  },
  {
    name: "Dmitri Halvorsen",
    position: "Security Architect",
    icon: [FaLinkedinIn, FaGithub, FaInstagram],
    avatar: "./images/about/team/img9.png",
    grettings: "Hallo!",
  },
];

export const TeamHeadings: SectionContent = {
  title: "Our Crew",
  title2: "Visionary Creators",
  subtitle: [
    "Disrupting to rebuild with purpose",
    "A fusion of skills driven by a shared love for brilliant design. From planners to creatives, coders to visual leads, every member brings distinct strengths to elevate your project.",
  ],
};
