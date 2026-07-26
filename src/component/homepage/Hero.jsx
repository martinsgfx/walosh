import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <div
      className="min-h-[85vh] bg-cover bg-center bg-no-repeat text-center flex flex-col items-center justify-end px-4 py-10 sm:min-h-screen sm:px-8 sm:py-16 lg:px-16"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-white sm:gap-6">
        <h1 className="kalnia mb-2 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl lg:text-8xl">
          where <span className="kantumruy-pro font-weight-700">IT Expertise</span>
          <br className="hidden sm:block" /> meets Bespoke Fashion
        </h1>
        <p className="max-w-2xl text-base sm:max-w-4xl sm:text-xl lg:text-2xl">
          We bridge the gap between professional technology and high-end custom
          tailoring, creating a unique lifestyle for the modern individual.
        </p>
      </div>
    </div>
  );
}

export default Hero;
