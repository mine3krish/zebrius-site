import About from "@/components/About";
import BackToTopButton from "@/components/BackToTopBtn";
import Careers from "@/components/Carrers";
import Contact from "@/components/Contact";
import DotGrid from "@/components/DotGrid";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrganizationSchema from "@/components/SEO/OrganizationSchema";
import Services from "@/components/Services";

export default function Home() {
  return (
    <section className="bg-[#18181B]">
      <OrganizationSchema />
      <Navbar />
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#262626"
          activeColor="#AAAAAA"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <About />
      <Services />
      <Careers />
      <Contact />
      <Footer />
      <BackToTopButton/>
    </section>
  );
}
