import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import About from "@/components/About";
import Values from "@/components/Values";
import Goals from "@/components/Goals";
import Course from "@/components/Course";
import Competences from "@/components/Competences";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <About />
        <Values />
        <Goals />
        <Course />
        <Competences />
        <Projects />
        <Contact />
      </main>
    </>
  );
}