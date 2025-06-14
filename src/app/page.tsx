import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <About />
      </main>
    </>
  );
}