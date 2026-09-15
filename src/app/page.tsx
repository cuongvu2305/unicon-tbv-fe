import { Hero } from "@/components/home/Hero";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { ServicesSection } from "@/components/home/ServicesSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ProjectsTeaser } from "@/components/home/ProjectsTeaser";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ContactTeaser } from "@/components/home/ContactTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesSection />
      <CapabilitiesSection />
      <ProjectsTeaser />
      <PartnersSection />
      <ContactTeaser />
    </>
  );
}
