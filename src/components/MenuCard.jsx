import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { restaurant } from "../data/restaurant";
const MenuCard=({ item })=> {
    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group overflow-hidden rounded-[2rem] border border-[#dfcdb9] bg-white shadow-[0_20px_60px_rgba(48,25,17,0.08)] transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(48,25,17,0.16)]"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#160d0d]/85 px-3 py-1.5 text-xs font-semibold text-[#e3b873] backdrop-blur-sm">
                    {item.badge}
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-[#f8efe3] px-4 py-2 text-sm font-bold text-[#241313] shadow-lg">
                    ₹{item.price}
                </span>
            </div>
            <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b4c3d]">{item.category}</p>
                <h3 className="mt-2 font-serif text-2xl text-[#241313]">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#725f53]">{item.description}</p>
                <a
                    href={restaurant.orderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#9b4c3d] transition hover:text-[#160d0d]"
                >
                    Order this dish
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </motion.article>
    );
}

export default MenuCard;