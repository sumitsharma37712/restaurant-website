import {
    Clock3, MapPin, Phone,
    //   Instagram,
} from "lucide-react";
import { restaurant } from "../data/restaurant";
const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#120909] pb-20 md:pb-0">
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
                <div className="grid gap-10 md:grid-cols-3">
                    <div>
                        <img src={restaurant.logo} alt={restaurant.name} className="h-12 w-auto" />
                        <a href="#home" className="font-serif text-2xl tracking-[0.18em] text-[#e3b873]">{restaurant.name}</a>
                        <p className="mt-4 max-w-sm text-sm leading-7 text-[#806e64]">Contemporary dining with a timeless soul. Thoughtful food, warm hospitality and evenings worth remembering.</p>
                    </div>
                    <div>
                        <p className="mb-5 font-semibold text-white">Visit Us</p>
                        <div className="space-y-4 text-sm text-[#a99586]">
                            <a href={restaurant.mapsUrl} target="_blank" rel="noreferrer" className="flex gap-3 transition hover:text-[#e3b873]"><MapPin size={18} className="shrink-0 text-[#e3b873]" /><span>{restaurant.address}</span></a>
                            <div className="flex gap-3"><Clock3 size={18} className="shrink-0 text-[#e3b873]" /><span>{restaurant.openingHours}</span></div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-5 font-semibold text-white">Contact</p>
                        <div className="space-y-4 text-sm text-[#a99586]">
                            <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition hover:text-[#e3b873]"><Phone size={18} className="text-[#e3b873]" />{restaurant.phone}</a>
                            <a href={restaurant.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-[#e3b873]">@aurelia.restaurant</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-[#66554e] sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} {restaurant.name}. All rights reserved.</p>
                    <div className="flex gap-5">
                        <a href="#home" className="transition hover:text-[#e3b873]">Back to top</a>
                        <a href="#reservation" className="transition hover:text-[#e3b873]">Reserve</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;