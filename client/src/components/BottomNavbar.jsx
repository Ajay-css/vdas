import { useState } from "react";

import {
  Home,
  Shield,
  PhoneCall,
  Image,
  Phone,
} from "lucide-react";

const items = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "services",
    label: "Services",
    icon: Shield,
  },
  {
    id: "home",
    label: "Book",
    icon: PhoneCall,
    center: true,
  },
  {
    id: "gallery",
    label: "Gallery",
    icon: Image,
  },
  {
    id: "footer",
    label: "Contact",
    icon: Phone,
  },
];

export default function BottomNavbar() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    setActive(id);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <div
      className="
      fixed
      bottom-4
      left-1/2
      z-[999]
      flex
      -translate-x-1/2
      items-end
      gap-2
      rounded-full
      border-2
      border-emerald-100
      bg-white/95
      px-3
      py-1
      shadow-[0_20px_45px_rgba(15,23,42,.18)]
      backdrop-blur-xl
      lg:hidden
    "
    >
      {items.map((item) => {
        const Icon = item.icon;

        const isActive = active === item.id;

        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="flex flex-col items-center"
          >
            <div
              className={`
              flex
              transition-all
              duration-300
              items-center
              justify-center
              rounded-full
              mb-2
              ${
                item.center
                  ? `
                  h-14
                  w-14
                  -translate-y-2
                  bg-gradient-to-r
                  from-emerald-500
                  to-green-400
                  text-white
                  shadow-[0_15px_35px_rgba(16,185,129,.35)]
                `
                  : `
                  h-11
                  w-11
                  ${
                    isActive
                      ? "bg-emerald-100 text-emerald-600"
                      : "text-slate-500"
                  }
                `
              }
            `}
            >
              <Icon
                size={22}
              />
            </div>

            {/* <span
              className={`
                mt-1
                text-[11px]
                font-medium

                ${
                  isActive
                    ? "text-emerald-600"
                    : "text-slate-500"
                }
              `}
            >
              {item.label}
            </span> */}
          </button>
        );
      })}
    </div>
  );
}