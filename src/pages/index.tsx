import DefaultLayout from "@/layouts/default";
import "./index.module.scss";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
    </DefaultLayout>
  );
}
