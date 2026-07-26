import Nav from "../component/Nav.jsx";
import Hero from "../component/homepage/Hero.jsx";
import Experience from "../component/homepage/Experience.jsx";
import Intro from "../component/homepage/Intro.jsx";
import Footer from "../component/Footer.jsx";

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
