import { motion } from "framer-motion";
import { ArrowUpRight,} from "lucide-react";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import hero from "../assets/hero.png";

const galleryImages = [
  {
    src: gallery1,
    alt: "Luxury restaurant interior",
    size: "large",
  },
  {
    src: gallery2,
    alt: "Fine dining table",
    size: "small",
  },
  {
    src: gallery3,
    alt: "Restaurant dining area",
    size: "small",
  },
  {
    src: hero,
    alt: "Restaurant ambience",
    size: "wide",
  },
];

const Gallery=()=> {
  return (
    <section id="gallery" className="section-shell bg-[#160d0d] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e3b873]">Inside Aurelia</p>
            <h2 className="mt-3 font-serif text-5xl leading-none text-[#f8efe3] sm:text-6xl">A feast for the eyes.</h2>
          </div>
          <p className="max-w-md leading-7 text-[#a99586]">A glimpse of the food, people and atmosphere behind the table.</p>
        </div>

        <div className="grid auto-rows-[260px] gap-4 md:grid-cols-4 md:grid-rows-2">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-[1.5rem] ${image.size === "large" ? "md:col-span-2 md:row-span-2" : ""} ${image.size === "wide" ? "md:col-span-2" : ""}`}
            >
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160d0d]/85 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-[#e3b873] text-[#160d0d] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={19} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-[#e8d8c5] transition hover:border-[#e3b873] hover:text-[#e3b873]">
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;