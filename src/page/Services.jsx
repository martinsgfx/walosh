import Footer from "../component/Footer.jsx";
import Nav from "../component/Nav.jsx";
import ServiceHero from "../component/servicespage/ServiceHero.jsx";
import Products from "../component/servicespage/Products.jsx";

export default function Services() {
  return (
    <div >
      <Nav />
      <ServiceHero />
        <Products />
      <Footer />
    </div>
  );
} 