import image1 from "../../assets/exp1.png";
import image2 from "../../assets/exp2.png";
import image3 from "../../assets/exp3.png";
import image4 from "../../assets/exp4.png";





const CARD_W = 300;
const CARD_H = 400;
const CUT = 60; // size of the diagonal cut
const RADIUS = 26; // roundness of the other two corners
 
const clipPath = `path('M ${CUT} 0 L ${CARD_W - RADIUS} 0 A ${RADIUS} ${RADIUS} 0 0 1 ${CARD_W} ${RADIUS} L ${CARD_W} ${CARD_H - CUT} L ${CARD_W - CUT} ${CARD_H} L ${RADIUS} ${CARD_H} A ${RADIUS} ${RADIUS} 0 0 1 0 ${CARD_H - RADIUS} L 0 ${CUT} Z')`;



const images = [
  {
    src: image1,
    alt: "Man in a suit with an Ankara-print waistcoat",
  },
  {
    src: image2,
    alt: "Girl in a green Ankara dress",
  },
  {
    src: image3,
    alt: "Woman in a red patterned headwrap and dress",
  },
  {
    src: image4,
    alt: "Man in a blue traditional agbada",
  },
];

function AngledCard({ src, alt }) {
  return (
    <div
      className="overflow-hidden bg-gray-200 shrink-0 transition-transform duration-300 hover:scale-[1.03]"
      style={{ width: CARD_W, height: CARD_H, clipPath }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
    </div>
  );
}





export default function Experience() {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 py-12 gap-10 sm:px-8 sm:py-16 lg:p-16 lg:gap-20">
      <h2 className="text-2xl font-semibold text-center sm:text-3xl">
        A Full Service Experience
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {images.map((img) => (
          <AngledCard key={img.src} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}