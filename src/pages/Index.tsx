import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ActivitiesPreview from "@/components/home/ActivitiesPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import DonationCTA from "@/components/home/DonationCTA";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactPreview from "@/components/home/ContactPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <ActivitiesPreview />
      <ProjectsPreview />
      <DonationCTA />
      <GalleryPreview />
      <ContactPreview />
    </Layout>
  );
};

export default Index;