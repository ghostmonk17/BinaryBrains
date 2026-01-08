import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HackathonCTA from "@/components/home/HackathonCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <HackathonCTA />
    </Layout>
  );
};

export default Index;
