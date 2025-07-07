import { IconType } from "react-icons/lib";

export interface SectionContent {
  id?: string;
  title?: string;
  title2?: string;
  subtitle?: string | string[];
  description?: string;
  quantity?: number;
  number?: string;
  image?: {
    src: string;
    alt: string;
  };
  icon?: string | string[] | IconType | IconType[];
}

export interface NavItem {
  text: string;
  href: string;
}

export type PlanName = "core" | "pro";
export type Period = "month" | "year";

export interface PlanPricing {
  core: string;
  pro: string;
}

export interface Plan {
  title: string;
  period: Period[];
  planName: PlanName;
  prices: PlanPricing;
  subtitle?: string | string[];
  icon?: string | string[] | IconType | IconType[];
}

export interface FAQsProps {
  question?: string;
  answer?: string;
  icon?: string | IconType;
}

export interface TestimonialsProps {
  name: string;
  position: string;
  avatar: string;
  testimonial: string;
  company?: string;
  companyLogo?: string;
}

export interface InsightsProps extends SectionContent {
  date?: string;
  author?: string;
}

export interface FooterProps {
  menuItems?: {
    text: string;
    link: string;
  }[];
}
