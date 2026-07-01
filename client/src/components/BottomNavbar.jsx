import { useState } from "react";
import Home from "../assets/icons/Home.png";
import Shield from "../assets/icons/shield.png";
import PhoneCall from "../assets/icons/Contact.svg";
import Image from "../assets/icons/Album.png";
import Phone from "../assets/icons/User.png";

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
    id: "call",
    label: "call",
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

  const handleClick = (item) => {
    if (item.center) {
      window.location.href = "tel:+917904970463";
      return;
    }

    setActive(item.id);

    document.getElementById(item.id)?.scrollIntoView({
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
            onClick={() => handleClick(item)}
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
              ${item.center
                  ? `
                  h-14
w-14
-translate-y-2
bg-[linear-gradient(135deg,#15803d_0%,#16a34a_28%,#22c55e_55%,#4ade80_78%,#22c55e_100%)]
border-2
border-emerald-300
text-white
shadow-[0_18px_35px_rgba(16,185,129,.30)]
                `
                  : `
                  h-11
                  w-11
                  ${isActive
                    ? "bg-emerald-100 text-emerald-600"
                    : "text-slate-500"
                  }
                `
                }
            `}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="h-6 w-6"
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