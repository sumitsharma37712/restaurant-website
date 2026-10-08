import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { restaurant } from "../data/restaurant";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Our Story", href: "#story" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Navbar=()=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#160d0d]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3 font-serif text-xl tracking-[0.16em] text-[#e3b873] sm:text-2xl"
        >
          {/* <span className="grid h-8 w-8 place-items-center rounded-full border border-[#e3b873]/45 text-[10px] transition group-hover:rotate-12 group-hover:bg-[#e3b873] group-hover:text-[#160d0d]">
            A
          </span> */}
            <img src={restaurant.logo} alt={restaurant.name} className="h-8 w-auto" />
          {restaurant.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative py-2 text-sm text-[#e8d8c5] transition hover:text-[#e3b873] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#e3b873] after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <span className="text-xs uppercase tracking-[0.18em] text-[#9f8b7e]">Open today · 5:30 PM</span>
          <a
            href="#reservation"
            className="rounded-full bg-[#e3b873] px-5 py-3 text-sm font-bold text-[#160d0d] transition hover:-translate-y-0.5 hover:bg-[#f0cb91] hover:shadow-lg hover:shadow-[#e3b873]/20"
          >
            Reserve a Table
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[#e3b873] transition hover:bg-white/10 md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/10 bg-[#160d0d] md:hidden"
          >
            <nav className="grid px-5 py-5" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="border-b border-white/5 py-4 font-serif text-2xl text-[#f8efe3] transition hover:text-[#e3b873]"
                >
                  {item.name}
                </motion.a>
              ))}
              <a
                href="#reservation"
                onClick={() => setIsOpen(false)}
                className="mt-5 rounded-full bg-[#e3b873] px-5 py-3.5 text-center text-sm font-bold text-[#160d0d]"
              >
                Reserve a Table
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;