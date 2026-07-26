import Footer from "../component/Footer";
import Nav from "../component/Nav";
import ServiceHero from "../component/servicespage/ServiceHero";
import Products from "../component/servicespage/Products";

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