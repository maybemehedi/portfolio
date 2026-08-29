import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Experience />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
