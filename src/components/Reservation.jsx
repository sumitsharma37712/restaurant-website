import { useState } from "react";
import { CalendarDays, Clock3, Users, ArrowRight } from "lucide-react";
import { restaurant } from "../data/restaurant";

const Reservation=()=> {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello ${restaurant.name} 👋

I would like to reserve a table.

Name: ${form.name}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}

Please confirm availability.
    `;

    const whatsappUrl = `https://wa.me/${
      restaurant.whatsapp
    }?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="reservation" className="section-shell bg-[#f5ecdf] py-20 text-[#241313] sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#211111] shadow-[0_30px_90px_rgba(48,25,17,0.25)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative overflow-hidden p-8 sm:p-12 lg:p-14">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#9b4c3d]/30 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e3b873]">Make an evening of it</p>
                <h2 className="mt-4 font-serif text-5xl leading-tight text-[#f8efe3] sm:text-6xl">Reserve your <span className="italic text-[#d99a76]">table.</span></h2>
                <p className="mt-5 max-w-md leading-7 text-[#cdbbad]">Join us for a slow evening of thoughtful food, good company and warm hospitality.</p>
                <div className="mt-10 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e3b873]/10 text-[#e3b873]"><Clock3 size={19} /></div>
                    <div><p className="font-semibold text-white">Opening Hours</p><p className="mt-1 text-sm text-[#9f8b7e]">{restaurant.openingHours}</p></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e3b873]/10 text-[#e3b873]"><Users size={19} /></div>
                    <div><p className="font-semibold text-white">Group Dining</p><p className="mt-1 text-sm text-[#9f8b7e]">Private dining available for special occasions.</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f8efe3] p-8 sm:p-12 lg:p-14">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#9b4c3d]">Reservation</p>
                <h3 className="mt-2 font-serif text-3xl text-[#241313]">Find your perfect table</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#241313]">Your Name</label>
                  <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className="w-full rounded-xl border border-[#dfcdb9] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#9b4c3d] focus:ring-2 focus:ring-[#9b4c3d]/10" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Date</label>
                    <div className="relative"><CalendarDays size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9b4c3d]" /><input required type="date" name="date" value={form.date} onChange={handleChange} className="w-full rounded-xl border border-[#dfcdb9] bg-white py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#9b4c3d]" /></div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Time</label>
                    <div className="relative"><Clock3 size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9b4c3d]" /><input required type="time" name="time" value={form.time} onChange={handleChange} className="w-full rounded-xl border border-[#dfcdb9] bg-white py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#9b4c3d]" /></div>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold">Guests</label>
                  <div className="relative"><Users size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9b4c3d]" /><select name="guests" value={form.guests} onChange={handleChange} className="w-full appearance-none rounded-xl border border-[#dfcdb9] bg-white py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#9b4c3d]">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => <option key={count} value={count}>{count} {count === 1 ? "Guest" : "Guests"}</option>)}
                  </select></div>
                </div>
                <button type="submit" className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#9b4c3d] px-6 py-4 font-semibold text-white transition hover:bg-[#7f3d31]">Request Reservation <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></button>
                <p className="text-center text-xs leading-5 text-[#8b7668]">You'll be redirected to WhatsApp to confirm your reservation with the restaurant.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;