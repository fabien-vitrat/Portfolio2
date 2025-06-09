/* Import des composants de la page d'accueil */
import Header from "@/components/header";
import Welcome from "@/components/welcome";
import About from "@/components/about";
import Values from "@/components/values";
import Goals from "@/components/goals";
import Course from "@/components/course";
import Competences from "@/components/competences";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
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
