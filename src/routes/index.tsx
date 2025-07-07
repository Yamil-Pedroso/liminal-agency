import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/hero/Hero";
import ProductsDesign from "@/components/products-design/ProductsDesign";
import ProductAds from "@/components/product-ads/ProductAds";
import Achievements from "@/components/achievements/Achievements";
import AgencyServices from "@/components/agency-services/AgencyServices";
import Advantages from "@/components/advantages/Advantages";
import Pricing from "@/components/pricing/Pricing";
import Journal from "@/components/journal/Journal";
import FAQs from "@/components/faqs/FAQs";
import Testimonials from "@/components/testimonials/Testimonials";
import CallToAction from "@/components/call-to-action/CallToAction";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Hero />
      <ProductsDesign />
      <ProductAds />
      <Achievements />
      <AgencyServices />
      <Advantages />
      <Pricing />
      <FAQs />
      <Testimonials />
      <Journal />
      <CallToAction />
    </div>
  );
}
