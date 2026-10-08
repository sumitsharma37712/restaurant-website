import { ArrowRight, Award, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import chef from "../assets/chef.png"
const  About=() =>{
  return (
    <section id="story" className="section-shell overflow-hidden bg-[#211111] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="image-frame overflow-hidden rounded-[2rem]">
            <img
              src={chef}
              alt="Chef preparing a dish in Aurelia's kitchen"
              className="h-[520px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[650px]"
            />
          </div>
          <div className="absolute -bottom-7 right-4 rounded-2xl border border-[#e3b873]/30 bg-[#160d0d]/95 p-6 shadow-2xl backdrop-blur-xl sm:right-8">
            <p className="font-serif text-4xl text-[#e3b873]">26+</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#cbb8a4]">Years of craft</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e3b873]">Our Story</p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.02] text-[#f8efe3] sm:text-6xl">
            Food with a <span className="italic text-[#d99a76]">soul.</span>
          </h2>
          <p className="mt-7 text-base leading-8 text-[#cdbbad]">
            Aurelia began with a simple belief: exceptional food should feel personal. Our kitchen celebrates local produce, patient cooking and the little details that turn a meal into a memory.
          </p>
          <p className="mt-5 leading-8 text-[#cdbbad]">
            From our first table to today, every plate is finished with the same care — and served with genuine hospitality.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-6 border-y border-white/10 py-7">
            <div>
              <p className="font-serif text-3xl text-[#e3b873]">100%</p>
              <p className="mt-1 text-sm text-[#a99586]">Fresh ingredients</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-[#e3b873]">12</p>
              <p className="mt-1 text-sm text-[#a99586]">Seasonal specials</p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e3b873]/10 text-[#e3b873]"><ChefHat size={21} /></div>
              <div>
                <h3 className="font-semibold text-[#f8efe3]">Chef-led kitchen</h3>
                <p className="mt-1 text-sm leading-6 text-[#9f8b7e]">Thoughtful dishes crafted with care.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e3b873]/10 text-[#e3b873]"><Award size={21} /></div>
              <div>
                <h3 className="font-semibold text-[#f8efe3]">Awarded taste</h3>
                <p className="mt-1 text-sm leading-6 text-[#9f8b7e]">Recognised for quality and hospitality.</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="mt-9 inline-flex items-center gap-2 font-semibold text-[#e3b873] transition hover:text-[#f0cb91]">
            Meet our team <ArrowRight size={17} className="transition-transform hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;