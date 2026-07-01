import { PhoneCall } from "lucide-react";
import logo from "../assets/logo/logo.png";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact", id: "footer" },
];

export default function Navbar() {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav
        className="
          w-full
          max-w-6xl
          rounded-full
          border-2
          border-emerald-100
          bg-white/90
          backdrop-blur-2xl
          shadow-[0_15px_45px_rgba(15,23,42,.08)]
        "
      >
        <div className="flex h-16 items-center justify-between px-7">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="V-DAS"
              className="h-11 w-auto object-contain"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  relative
                  text-[15px]
                  font-medium
                  text-slate-700
                  transition
                  hover:text-emerald-600
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-emerald-500
                  after:transition-all
                  hover:after:w-full
                "
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:+917904970463"
            className="
              hidden
              lg:flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-emerald-500
              to-green-400
              px-6
              py-3
              font-bold
              text-white
              shadow-[0_12px_30px_rgba(16,185,129,.28)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:scale-105
            "
          >
            <PhoneCall size={18} />
            Call Now
          </a>

          {/* Mobile */}
          <div className="h-12 w-12 lg:hidden" />
        </div>
      </nav>
    </header>
  );
}