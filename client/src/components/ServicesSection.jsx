import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import cockroach from "../assets/services/cockroach.png";
import termite from "../assets/services/termite.png";
import rat from "../assets/services/rat.png";
import mosquito from "../assets/services/mosquito.png";
import bedbug from "../assets/services/bedbug.png";
import lizard from "../assets/services/lizard.png";
import snake from "../assets/services/snake.png";
import bird from "../assets/services/bird.png";
import fumigation from "../assets/services/fumigation.png";
import disinfection from "../assets/services/disinfection.png";
import flies from "../assets/services/flies.png";
import crawling from "../assets/services/crawling.png";

const services = [
  {
    title: "Cockroach Control",
    image: cockroach,
  },
  {
    title: "Termite Control",
    image: termite,
  },
  {
    title: "Mosquito Control",
    image: mosquito,
  },
  {
    title: "Bed Bugs Control",
    image: bedbug,
  },
  {
    title: "Lizard Control",
    image: lizard,
  },
  {
    title: "Flies Control",
    image: flies,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24"
    >
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 lg:text-[38px]">
            Complete Pest Control Solutions
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />

        </div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (

            <div
              key={service.title}
              className="
              group
              rounded-3xl
              border
              border-white/80
              bg-white/80
              backdrop-blur-xl
              p-6
              shadow-[0_12px_35px_rgba(15,23,42,.06)]
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-emerald-200
              hover:shadow-[0_20px_45px_rgba(16,185,129,.12)]
              "
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-white
                    to-emerald-50
                    shadow-inner
                    "
                  >

                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-9 w-9 object-contain transition duration-300 group-hover:scale-110"
                    />

                  </div>

                  <h3 className="font-semibold leading-6 text-slate-800">
                    {service.title}
                  </h3>

                </div>

                <ChevronRight
                  size={20}
                  className="
                  text-slate-400
                  transition
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-emerald-600
                  lg:block
                  "
                />

              </div>

            </div>

          ))}

        </div>

        {/* Button */}

        {/* <div className="mt-16 flex justify-center">

          <button
            className="
            group
            rounded-full
            border
            border-white/80
            bg-white/80
            backdrop-blur-xl
            px-8
            py-4
            font-medium
            text-emerald-700
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-emerald-500
            hover:text-white
            "
          >

            <span className="flex items-center gap-3">

              View All Services

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </span>

          </button>

        </div> */}

      </div>
    </section>
  );
}