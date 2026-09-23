import Hero from "@/components/hero/Hero";
import ProjectCarousel from "@/components/work/ProjectCarousel";
import OtherBuildCard from "@/components/work/OtherBuildCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { otherBuilds } from "@/content/otherBuilds";
import Profile from "@/components/profile/Profile";
import Contact from "@/components/contact/Contact";
import SiteHeader from "@/components/site/SiteHeader";
import Footer from "@/components/site/Footer";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <Hero />

      <main>
        <section id="work" className="snap-section overflow-hidden">
          <ProjectCarousel />
        </section>

        <section id="builds" className="snap-section scroll-mt-24 flex items-center py-20">
          <Container>
            <Reveal>
              <SectionHeading title="Other Builds" />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherBuilds.map((b, i) => (
                <Reveal key={b.name} delay={i * 0.04} className="h-full">
                  <OtherBuildCard build={b} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section id="profile" className="snap-section scroll-mt-24 flex items-center py-20">
          <Container>
            <Profile />
          </Container>
        </section>
      </main>

      <Contact />
      <Footer />
    </>
  );
}
