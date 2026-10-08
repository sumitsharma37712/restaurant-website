import {  Clock3,MapPin, MessageCircle, Phone,
    //Instagram
} from "lucide-react";

import { restaurant } from "../data/restaurant";

const Contact=() =>{
  const whatsappMessage = encodeURIComponent(
    `Hello ${restaurant.name}, I would like to know more about the restaurant.`
  );

  return (
    <section id="contact" className="section-shell bg-[#211111] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e3b873]">Visit Us</p>
          <h2 className="mt-3 font-serif text-5xl text-[#f8efe3] sm:text-6xl">Come, <span className="italic text-[#d99a76]">stay a while.</span></h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-[#160d0d] p-7 sm:p-10">
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e3b873]/10 text-[#e3b873]"><MapPin size={20} /></div>
                <div><p className="font-semibold text-white">Address</p><a href={restaurant.mapsUrl} target="_blank" rel="noreferrer" className="mt-2 block max-w-sm text-sm leading-6 text-[#a99586] transition hover:text-[#e3b873]">{restaurant.address}</a></div>
              </div>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e3b873]/10 text-[#e3b873]"><Phone size={20} /></div>
                <div><p className="font-semibold text-white">Call us</p><a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="mt-2 block text-sm text-[#a99586] transition hover:text-[#e3b873]">{restaurant.phone}</a></div>
              </div>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e3b873]/10 text-[#e3b873]"><Clock3 size={20} /></div>
                <div><p className="font-semibold text-white">Opening Hours</p><p className="mt-2 text-sm text-[#a99586]">{restaurant.openingHours}</p></div>
              </div>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <a href={`https://wa.me/${restaurant.whatsapp}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#e3b873] px-5 py-3.5 text-sm font-bold text-[#160d0d] transition hover:-translate-y-0.5 hover:bg-[#f0cb91]"><MessageCircle size={18} /> WhatsApp Us</a>
              <a href={restaurant.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-semibold text-[#e8d8c5] transition hover:border-[#e3b873] hover:text-[#e3b873]">Instagram</a>
            </div>
          </div>
          <div className="min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#160d0d]">
            <iframe title="Restaurant Location" src="https://www.google.com/maps?q=Varanasi%20Uttar%20Pradesh&output=embed" className="h-full min-h-[420px] w-full border-0 grayscale-[30%] transition duration-500 hover:grayscale-0" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;