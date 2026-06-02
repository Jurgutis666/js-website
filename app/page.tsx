//components
import About from "./components/About";
import Hero from "./components/Hero";
import Music from "./components/Music";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Music />
    </main>
  );
}
