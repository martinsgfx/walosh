import Nav from "../component/Nav";
import Hero from "../component/homepage/Hero";
import Experience from "../component/homepage/Experience";
import Intro from "../component/homepage/Intro";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Experience />
      <Intro />
      <Footer />
    </div>
  );
}
