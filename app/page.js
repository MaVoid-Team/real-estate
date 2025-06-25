import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';
import UnitPreviewSection from '@/components/unit-preview-section';
import ContactSection from '@/components/contact-section';
import FooterSection from '@/components/footer-section';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-almond-cream text-espresso-brown">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <UnitPreviewSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
