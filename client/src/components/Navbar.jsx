import { PhoneCall } from "lucide-react";
import logo from "../assets/logo/logo.webp";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Gallery", id: "gallery" },
  { name: "Contact", id: "footer" },
];

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
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
        <div className="flex h-16 items-center justify-between px-5 lg:px-7">

          {/* Logo */}
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-1"
          >
            <img
              src={logo}
              alt="V-DAS Pest Control logo"
              width="84"
              height="56"
              fetchPriority="high"
              decoding="async"
              className="h-14 lg:h-14 w-auto object-contain"
            />

            {/* Brand Tag */}
            <div className="sm:flex items-center gap-2">
              <span
                className="
                ml-3
                text-[16px]
                lg:text-xs
                font-bold
                uppercase
                text-[#203A63]
                whitespace-nowrap
              "
              >
                Pest Control
              </span>
            </div>
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

          {/* Desktop CTA */}
          <a
            href="tel:+917904970463"
            className="
    group
    relative
    hidden
    lg:flex
    items-center
    gap-3
    overflow-hidden
    rounded-full
    px-4
    py-1
    font-semibold
    text-white

    bg-gradient-to-r
    from-emerald-600
    via-emerald-500
    to-green-400

    border-2
    border-emerald-300/80

    shadow-[0_18px_40px_rgba(16,185,129,.30)]
    transition-all
    duration-500
  "
          >
            {/* Top Gloss */}
            <div
              className="
      absolute
      left-2
      right-2
      top-[2px]
      h-[42%]
      rounded-full
      bg-gradient-to-b
      from-white/45
      via-white/18
      to-transparent
      pointer-events-none
    "
            />

            {/* Emerald Glow */}
            <div
              className="
      absolute
      inset-0
      rounded-full
      bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.35),transparent_45%)]
      opacity-90
      pointer-events-none
    "
            />

            {/* Shine Animation */}
            <span
              className="
      absolute
      -left-24
      top-0
      h-full
      w-16
      rotate-12
      bg-white/30
      blur-md
      transition-all
      duration-1000
      group-hover:left-[130%]
    "
            />

            {/* Icon */}
            <div
              className="
      relative
      z-10
      flex
      h-9
      w-9
      items-center
      justify-center
      rounded-full
      backdrop-blur-xl
    "
            >
              <PhoneCall
                size={18}
                className="text-white"
              />
            </div>

            {/* Text */}
            <span className="relative z-10 tracking-[0.2px]">
              Call Now
            </span>
          </a>

          {/* Mobile Status */}
          {/* <div className="flex items-center lg:hidden">
            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-100
                bg-white/80
                px-3
                py-2
                backdrop-blur-xl
                shadow-[0_8px_20px_rgba(16,185,129,.08)]
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>

              <div className="leading-none">
                <p className="text-[11px] font-semibold text-slate-800">
                  Available Now
                </p>

                <p className="mt-0.5 text-[10px] text-slate-500">
                  24×7 Service
                </p>
              </div>
            </div>
          </div> */}

        </div>
      </nav>
    </header>
  );
}