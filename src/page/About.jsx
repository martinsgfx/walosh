import Footer from "../component/Footer";
import Nav from "../component/Nav";
import AboutHero from "../component/aboutpage/AboutHero";

export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Nav />
      <main className="flex-1">
        <AboutHero />
        <div className="flex flex-col  justify-center items-center gap-8 kantumruy-pro px-4 py-18">
          <p className="max-w-5xl  lg:text-2xl text-justify">
            Founded with a passion for style and self-expression, Walosh Intl. is a
            modern clothing brand dedicated to creating fashion that inspires
            confidence and individuality. Our collections are designed for those who
            want to stand out, combining quality craftsmanship, contemporary trends,
            and timeless style.
          </p>
          <p className="max-w-5xl  lg:text-2xl text-justify">
            At Walosh Intl., we believe fashion is more than what you wear — it’s a
            reflection of who you are. Every piece is created with attention to
            detail, comfort, and versatility to help you look and feel your best
            every day. As we continue to grow, our mission remains simple: deliver
            stylish, high-quality pieces that empower people to express themselves
            with confidence. For inquiries, collaborations, or orders, contact us by
            phone or email today.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
