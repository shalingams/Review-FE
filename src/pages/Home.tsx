import Hero from "../components/Hero";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <section className="grid pt-10 pb-10 justify-center items-center">
      <Hero />
      <Intro />
    </section>
  );
}
