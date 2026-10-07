import AboutPreview from "@/components/sections/about-preview";
import ContactCTA from "@/components/sections/contact-cta";
import ExperiencePreview from "@/components/sections/experience-preview";
import FeaturedProjects from "@/components/sections/featured-projects";
import Hero from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";


const Home = () => {
  return (
    <main>
      <Hero/>
      <AboutPreview/>
      <Skills/>
      <FeaturedProjects/>
      <ExperiencePreview/>
      <ContactCTA/>
    </main>
  )
}

export default Home;
