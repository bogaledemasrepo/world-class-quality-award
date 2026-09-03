import { Hero } from "@/components/hero";
import { AwardCategories } from "@/components/categories";
import { RegistrationSection } from "@/components/RegistrationSection";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <RegistrationSection />
      <AwardCategories />
      <Testimonials />
    </main>
  );
}