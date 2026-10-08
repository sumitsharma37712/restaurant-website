import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MenuCard from "./MenuCard";
import { restaurant } from "../data/restaurant";
import { categories, menuItems } from "../data/menu";

const Menu=()=> {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section id="menu" className="section-shell bg-[#f5ecdf] py-20 text-[#241313] sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#9b4c3d]">
              <span className="h-px w-8 bg-[#9b4c3d]" /> Chef's Selection
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] sm:text-6xl">
              Signature <span className="italic text-[#9b4c3d]">dishes.</span>
            </h2>
          </div>
          <p className="max-w-md leading-7 text-[#725f53]">
            A seasonal menu where classic technique meets bold, modern flavours.
          </p>
        </div>

        <div className="mb-10 flex max-w-full gap-2 overflow-x-auto pb-2 scrollbar-none" aria-label="Menu categories">
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "border-[#9b4c3d] bg-[#9b4c3d] text-white shadow-lg shadow-[#9b4c3d]/20"
                    : "border-[#d7c5b1] bg-white/50 text-[#725f53] hover:border-[#9b4c3d] hover:text-[#9b4c3d]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.32, delay: index * 0.035 }}
            >
              <MenuCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 rounded-[2rem] border border-[#d7c5b1] bg-white/35 px-6 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-serif text-2xl">Craving something different?</p>
            <p className="mt-1 text-sm text-[#725f53]">Our full menu is updated every season.</p>
          </div>
          <a
            href={restaurant.orderUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#9b4c3d] px-6 py-3 text-sm font-bold text-[#9b4c3d] transition hover:bg-[#9b4c3d] hover:text-white"
          >
            View Full Menu <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;