import aboutHeroImage from "../../assets/aboutushero.png";

export default function AboutHero() {
  return (
    <div>
      <div
        className="relative flex min-h-[55vh] flex-col items-center justify-end overflow-hidden bg-cover bg-center bg-no-repeat sm:min-h-[60vh] lg:h-150"
        style={{ backgroundImage: `url(${aboutHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative z-10 mb-4 px-4 py-8 text-center text-4xl font-bold text-white kantumruy-pro sm:px-8 sm:py-10 sm:text-6xl lg:p-12 lg:text-7xl">About Us</h1>
      </div>
    </div>
  );
}
