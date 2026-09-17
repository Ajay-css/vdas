import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "../assets/logo/logo.webp";

const services = [
  "Cockroach Control",
  "Termite Control",
  "Mosquito Control",
  "Flies Control",
  "Bed Bug Treatment",
];

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Why Choose Us",
    href: "#why",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#footer",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* =========================================================
          CTA
      ========================================================= */}

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-10">
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-emerald-300/70
            bg-gradient-to-br
            from-emerald-600
            via-emerald-500
            to-green-500
            shadow-[0_25px_80px_rgba(16,185,129,.20)]
          "
        >
          {/* =====================================================
              PREMIUM GLITTER / SHIMMER
          ===================================================== */}

          <style>{`
            @keyframes glitter-shine {
              0% {
                transform: translateX(-180%) rotate(15deg);
                opacity: 0;
              }

              12% {
                opacity: 1;
              }

              40% {
                opacity: 0.8;
              }

              55% {
                opacity: 0;
              }

              100% {
                transform: translateX(700%) rotate(15deg);
                opacity: 0;
              }
            }

            @keyframes glitter-twinkle {
              0%,
              100% {
                opacity: 0.15;
                transform: scale(0.7);
              }

              50% {
                opacity: 1;
                transform: scale(1.35);
              }
            }

            .glitter-dot {
              position: absolute;
              width: 4px;
              height: 4px;
              border-radius: 9999px;
              background: rgba(255, 255, 255, 0.95);
              box-shadow:
                0 0 6px rgba(255, 255, 255, 0.9),
                0 0 14px rgba(255, 255, 255, 0.55);
              animation: glitter-twinkle 2.8s ease-in-out infinite;
            }

            @media (max-width: 640px) {
              .glitter-dot {
                width: 3px;
                height: 3px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .glitter-dot {
                animation: none;
                opacity: 0.5;
              }
            }
          `}</style>

          {/* Background glow */}

          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

          {/* Glitter layer */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Moving shine */}

            <div
              className="
                absolute
                -left-[30%]
                top-0
                h-full
                w-[18%]
                rotate-[15deg]
                bg-gradient-to-r
                from-transparent
                via-white/25
                to-transparent
                blur-sm
                animate-[glitter-shine_5s_ease-in-out_infinite]
              "
            />

            {/* Sparkle dots */}

            <span className="glitter-dot left-[8%] top-[25%] [animation-delay:0s]" />

            <span className="glitter-dot left-[18%] top-[70%] [animation-delay:1.4s]" />

            <span className="glitter-dot left-[34%] top-[18%] [animation-delay:2.2s]" />

            <span className="glitter-dot left-[48%] top-[78%] [animation-delay:.7s]" />

            <span className="glitter-dot left-[62%] top-[30%] [animation-delay:2.8s]" />

            <span className="glitter-dot left-[74%] top-[68%] [animation-delay:1.1s]" />

            <span className="glitter-dot left-[86%] top-[20%] [animation-delay:3.2s]" />

            <span className="glitter-dot left-[92%] top-[76%] [animation-delay:1.8s]" />

            <span className="glitter-dot left-[27%] top-[45%] [animation-delay:3.8s]" />

            <span className="glitter-dot left-[80%] top-[48%] [animation-delay:2.5s]" />
          </div>

          {/* CTA Content */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              justify-center
              px-6
              py-14
              text-center
              sm:px-10
              sm:py-16
              md:py-20
            "
          >
            {/* Label */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/25
                bg-white/15
                px-5
                py-2
                shadow-lg
                backdrop-blur-md
              "
            >
              <ShieldCheck
                size={18}
                className="text-white"
              />

              <span className="text-sm font-semibold text-white">
                Trusted Pest Protection
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mt-7
                max-w-3xl
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-4xl
                md:text-5xl
              "
            >
              Protect Your Home & Business

              <br className="hidden sm:block" />

              <span className="sm:ml-2">
                From Harmful Pests
              </span>
            </h2>

            {/* Divider */}

            <div
              className="
                my-3
                h-[3px]
                w-28
                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
              "
            />

            {/* Description */}

            <p
              className="
                mt-3
                max-w-2xl
                text-sm
                leading-6
                text-white/90
                sm:text-base
                sm:leading-7
                md:text-lg
              "
            >
              Safe and professional pest control solutions for homes,
              apartments and commercial spaces across Madurai.
            </p>

            {/* CTA Button */}

            <a
              href="tel:+917904970463"
              className="
                mt-7
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-white
                px-8
                py-3.5
                text-sm
                font-bold
                text-emerald-700
                shadow-[0_15px_40px_rgba(0,0,0,.15)]
                transition-all
                duration-300
                hover:scale-105
                hover:bg-emerald-50
                sm:px-10
                sm:py-4
                sm:text-base
              "
            >
              Call VDAS Pest Control
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div
        id="footer"
        className="
          mt-20
          border-t-2
          border-emerald-200
          bg-gradient-to-b
          from-white
          to-emerald-50
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-14
            px-6
            py-16
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* =====================================================
              COMPANY
          ===================================================== */}

          <div>
            <img
              src={logo}
              alt="V-DAS Pest Control logo"
              width="84"
              height="56"
              loading="lazy"
              decoding="async"
              className="h-14"
            />

            <p className="mt-6 leading-8 text-slate-600">
              Professional pest control services with safe and eco-friendly
              treatments for residential and commercial properties.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                aria-label="V-DAS Pest Control Facebook"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  border-2
                  border-emerald-200
                  bg-white
                  text-emerald-600
                  transition
                  hover:bg-emerald-500
                  hover:text-white
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="V-DAS Pest Control Instagram"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  border-2
                  border-emerald-200
                  bg-white
                  text-emerald-600
                  transition
                  hover:bg-emerald-500
                  hover:text-white
                "
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/917904970463"
                aria-label="Chat with V-DAS Pest Control on WhatsApp"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  border-2
                  border-emerald-200
                  bg-white
                  text-emerald-600
                  transition
                  hover:bg-emerald-500
                  hover:text-white
                "
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {links.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-slate-600
                      transition
                      hover:text-emerald-600
                    "
                  >
                    <ChevronRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />

                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              SERVICES
          ===================================================== */}

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((item) => (
                <li
                  key={item}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-slate-600
                  "
                >
                  <ChevronRight
                    size={16}
                    className="
                      text-emerald-500
                      transition
                      group-hover:translate-x-1
                    "
                  />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Contact
            </h3>

            <div className="mt-6 space-y-6">
              {/* Phone */}

              <div className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="mt-1 text-emerald-600"
                />

                <div>
                  <p className="text-[14px] font-semibold text-slate-900">
                    +91 79049 70463
                  </p>

                  <p className="text-sm text-slate-500">
                    Call Anytime
                  </p>
                </div>
              </div>

              {/* Email */}

              <div className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="mt-1 text-emerald-600"
                />

                <div>
                  <p className="break-all text-[14px] font-semibold text-slate-900">
                    krishnan.venki53@gmail.com
                  </p>

                  <p className="text-sm text-slate-500">
                    Email Support
                  </p>
                </div>
              </div>

              {/* Location */}

              <div className="mb-8 flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 text-emerald-600"
                />

                <div>
                  <p className="text-[14px] font-semibold text-slate-900">
                    Madurai,
                    <br />
                    Tamil Nadu
                  </p>

                  <p className="text-sm text-slate-500">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================= */}

        <div className="hidden border-t border-emerald-200 lg:block">
          <div
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              items-center
              justify-between
              gap-4
              px-6
              py-6
              text-center
              md:flex-row
            "
          >
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} V-DAS Pest Control.
              All Rights Reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="
                  text-slate-500
                  transition
                  hover:text-emerald-600
                "
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="
                  text-slate-500
                  transition
                  hover:text-emerald-600
                "
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}