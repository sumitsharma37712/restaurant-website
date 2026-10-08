import { motion } from "framer-motion";
import { ArrowRight, Clock3, Star } from "lucide-react";
import { restaurant } from "../data/restaurant";

const Hero=() =>{
  return (
    <section id="home" className="noise relative flex min-h-screen items-center overflow-hidden bg-[#160d0d]">
      <img
        src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=90"
        alt="Warm, intimate dining room at Aurelia"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,13,13,0.96)_0%,rgba(22,13,13,0.82)_42%,rgba(22,13,13,0.30)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(227,184,115,0.18),transparent_34%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 py-32 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e3b873]">
            <span className="h-px w-10 bg-[#e3b873]" />
            Fine Dining · Since 1998
          </div>

          <h1 className="display-line font-serif text-5xl leading-[0.92] text-[#f8efe3] sm:text-7xl lg:text-[6.8rem]">
            Taste the <span className="italic text-[#e3b873]">art</span> of dining.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#e8d8c5] sm:text-lg">
            {restaurant.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#menu"
              className="group flex items-center gap-3 rounded-full bg-[#e3b873] px-6 py-4 font-semibold text-[#160d0d] transition duration-300 hover:-translate-y-1 hover:bg-[#f0cb91] hover:shadow-xl hover:shadow-[#e3b873]/20"
            >
              Explore Menu
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#reservation"
              className="rounded-full border border-white/25 bg-black/10 px-6 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#e3b873] hover:text-[#e3b873]"
            >
              Reserve a Table
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#d8c5ae] sm:gap-8">
            <span className="flex items-center gap-2">
              <Star size={16} className="fill-[#e3b873] text-[#e3b873]" />
              4.9 guest rating
            </span>
            <span className="flex items-center gap-2">
              <Clock3 size={17} />
              {restaurant.openingHours}
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-5 z-10 hidden items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-[#cbb8a4] lg:flex">
        <span>Scroll to discover</span>
        <span className="h-px w-16 bg-gradient-to-r from-[#e3b873] to-transparent" />
      </div>

      <div className="absolute bottom-8 left-5 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#cbb8a4] sm:left-8">
        <span className="h-2 w-2 rounded-full bg-[#e3b873] shadow-[0_0_0_5px_rgba(227,184,115,0.12)]" />
        Evening service now open
      </div>
    </section>
  );
}

export default Hero;