import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import LinkedInPosts from "@/components/LinkedInPosts";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      {/* <LinkedInPosts /> */}
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
