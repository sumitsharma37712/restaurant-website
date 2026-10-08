import {
  CalendarDays,
  Phone,
  ShoppingBag,
} from "lucide-react";

import { restaurant } from "../data/restaurant";

const MobileActions=()=> {
  const phone = restaurant.phone.replace(/\s/g, "");

  const reservationMessage = encodeURIComponent(
    `Hello ${restaurant.name}, I would like to reserve a table.`
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-[#e3b873]/20 bg-[#160d0d]/95 p-2 shadow-[0_-10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl md:hidden">
      <a href={`tel:${phone}`} className="flex flex-col items-center gap-1 rounded-xl py-2 text-[11px] text-[#e8d8c5] transition active:bg-white/5">
        <Phone size={18} className="text-[#e3b873]" /> Call
      </a>
      <a href={`https://wa.me/${restaurant.whatsapp}?text=${reservationMessage}`} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 rounded-xl py-2 text-[11px] text-[#e8d8c5] transition active:bg-white/5">
        <CalendarDays size={18} className="text-[#e3b873]" /> Reserve
      </a>
      <a href={restaurant.orderUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 rounded-xl py-2 text-[11px] text-[#e8d8c5] transition active:bg-white/5">
        <ShoppingBag size={18} className="text-[#e3b873]" /> Order
      </a>
    </div>
  );
}

export default MobileActions;