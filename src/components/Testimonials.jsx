import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

const Testimonials=()=> {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section className="noise relative overflow-hidden bg-[#9b4c3d] py-20 sm:py-28">
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-[#e3b873]/20" />
      <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-white/10" />
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f6d4bd]">Guest Love</p>
        <div className="mt-5 flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} className="fill-[#e3b873] text-[#e3b873]" />)}
        </div>
        <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#e3b873]">
          <Quote size={25} />
        </div>
        <motion.div key={testimonial.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <blockquote className="mt-7 font-serif text-3xl leading-tight text-white sm:text-5xl">“{testimonial.quote}”</blockquote>
          <p className="mt-7 text-sm font-semibold text-[#f6d4bd]">— {testimonial.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#e9bfa9]">{testimonial.role}</p>
        </motion.div>
        <div className="mt-9 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${active === index ? "w-8 bg-[#e3b873]" : "w-2.5 bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;