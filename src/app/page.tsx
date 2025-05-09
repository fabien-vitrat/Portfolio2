/* Import des composants de la page d'accueil */
import Welcome from "@/components/welcome";
import About from "@/components/about";
import Values from "@/components/values";
import Goals from "@/components/goals";
import Course from "@/components/course";

export default function Home() {
  return (
    <>
      <main>
        <Welcome />
        <About />
        <Values />
        <Goals />
        <Course />
      </main>
    </>
  );
}
