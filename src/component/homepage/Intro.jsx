import star from "../../assets/star.png";
import sixstar from "../../assets/sixstars.png";

export default function Intro() {
  return (
    <div className="flex flex-col gap-16 bg-gray-100 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-10">
        <img
          src={star}
          alt="Introductory Image"
          loading="lazy"
          decoding="async"
          className="mx-auto h-12 w-12 shrink-0"
        />
        <p className="kantumruy-pro text-center text-lg sm:text-left sm:text-2xl">
          At Walosh International, our goal is to make you shine like a star. We create flattering, contemporary looks for our guests, specializing in versatile styles for everyday life. Whether you want something fashion-forward, timeless, or just for a special event, Walosh International has your answer.
        </p>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center sm:gap-8">
        <img
          src={sixstar}
          alt="Introductory Image"
          loading="lazy"
          decoding="async"
          className="mx-auto max-w-xs sm:max-w-none"
        />
        <p className="kantumruy-pro text-lg sm:text-2xl">
          We believe that you are your best accessory. This is why we offer a full-service experience, including hair styling, nail treatments, and makeup services.
        </p>
      </div>
    </div>
  );
}
