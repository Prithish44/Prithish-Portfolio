import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Education from "@/components/education/Education";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Certificates from "@/components/certificates/Certificates"; 

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education /> 
      <Certificates />    
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}