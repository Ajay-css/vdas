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

import logo from "../assets/logo/logo.png";
import ctaBg from "../assets/backgrounds/emrald-bg.png";

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
    <footer
      className="relative mt-24 overflow-hidden"
    >
      {/* CTA */}

      <div className="mx-auto max-w-6xl px-10">

        <div
          className="relative overflow-hidden rounded-[36px] border border-emerald-300 shadow-[0_25px_80px_rgba(16,185,129,.18)]"
          style={{
            backgroundImage: `url(${ctaBg})`,
            // backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

          <div className="absolute inset-0 backdrop-blur-[2px]" />

          <div className="relative z-10 flex flex-col items-center px-8 py-10 text-center">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 shadow-lg">

              <ShieldCheck
                size={18}
                className="text-emerald-600"
              />

              <span className="font-semibold text-emerald-700">
                Trusted Pest Protection
              </span>

            </div>

            <h2 className="mt-8 max-w-3xl text-4xl font-bold leading-tight text-white md:text-4xl">

              Protect Your Home & Business
              <br />
              Before Pests Become A Problem

            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white md:text-lg">

              Safe treatments, certified professionals and reliable pest
              control solutions for homes, apartments and commercial spaces.

            </p>

            <a
              href="tel:+917904970463"
              className="mt-10 rounded-full bg-gradient-to-r bg-white px-10 py-4 text-lg font-semibold text-black shadow-[0_15px_45px_rgba(16,185,129,.35)] transition duration-300 "
            >
              Contact Us
            </a>

          </div>

        </div>

      </div>

      {/* Main Footer */}

      <div
        id="footer" className="mt-20 border-t-2 border-emerald-200 bg-gradient-to-b from-white to-emerald-50">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <img
              src={logo}
              alt="V-DAS"
              className="h-14"
            />

            <p className="mt-6 leading-8 text-slate-600">

              Professional pest control services with safe and eco-friendly
              treatments for residential and commercial properties.

            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-emerald-200 bg-white text-emerald-600 transition hover:bg-emerald-500 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-emerald-200 bg-white text-emerald-600 transition hover:bg-emerald-500 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/917904970463"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-emerald-200 bg-white text-emerald-600 transition hover:bg-emerald-500 hover:text-white"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>
          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold text-slate-900">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {links.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-slate-600 transition hover:text-emerald-600"
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

          {/* Services */}
          <div>

            <h3 className="text-xl font-bold text-slate-900">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">

              {services.map((item) => (

                <li
                  key={item}
                  className="group inline-flex items-center gap-2 text-slate-600"
                >

                  <ChevronRight
                    size={16}
                    className="text-emerald-500 transition group-hover:translate-x-1"
                  />

                  {item}

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold text-slate-900">
              Contact
            </h3>

            <div className="mt-6 space-y-6">

              <div className="flex items-start gap-3">

                <Phone
                  size={20}
                  className="mt-1 text-emerald-600"
                />

                <div>

                  <p className="font-semibold text-[14px] text-slate-900">
                    +91 79049 70463
                  </p>

                  <p className="text-sm text-slate-500">
                    Call Anytime
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <Mail
                  size={20}
                  className="mt-1 text-emerald-600"
                />

                <div>

                  <p className="font-semibold text-[14px] text-slate-900 break-all">
                    krishnan.venki53@gmail.com
                  </p>

                  <p className="text-sm text-slate-500">
                    Email Support
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="mt-1 text-emerald-600"
                />

                <div>

                  <p className="font-semibold text-[14px] text-slate-900">
                    Madurai,
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

        {/* Bottom Bar */}

        <div className="hidden lg:block border-t border-emerald-200">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row">

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} V-DAS Pest Control.
              All Rights Reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">

              <a
                href="#"
                className="text-slate-500 transition hover:text-emerald-600"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-slate-500 transition hover:text-emerald-600"
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