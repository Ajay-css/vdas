import { motion } from "framer-motion";
import {
  Smile,
  CalendarClock,
  Users,
  ShieldCheck,
} from "lucide-react";

import heroShield from "../assets/ilustrations/hero-shield.png";

const stats = [
  {
    icon: Smile,
    value: "500+",
    label: "Happy Customers",
  },
  {
    icon: CalendarClock,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Satisfaction",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="gallery" className="relative overflow-hidden py-24">

      {/* Background Glow */}
      <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-emerald-300/20 blur-[120px]" />

      <div className="mx-auto max-w-[1180px] px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 relative flex justify-center lg:order-2"
          >
            {/* Emerald Glow */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute h-[420px] w-[420px] rounded-full bg-emerald-300/20 blur-[100px]"
            />

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[380px] w-[380px] rounded-full border border-emerald-300/40"
            >
              <div className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,.9)]" />
            </motion.div>

            {/* Light Sweep */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">

              <motion.div
                animate={{ x: [-420, 420] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="h-[420px] w-12 rotate-12 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-md"
              />

            </div>

            <img
              src={heroShield}
              alt="House Protection"
              className="relative z-20 w-full max-w-[480px]"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >

            <p className="text-sm font-semibold uppercase tracking-[3px] text-emerald-600">
              WHY CHOOSE V-DAS
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 lg:text-[38px]">
              Your Safety,
              <br />
              Our Priority
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />

            <p className="mt-6 max-w-xl leading-7 text-slate-600">
              We provide professional pest control solutions using
              eco-friendly treatments, certified experts and modern
              techniques to keep your home and business safe.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-5">

              {stats.map((item) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.label}
                    whileHover={{ y: -6 }}
                    className="
                      group
                      w-[150px]
                      rounded-3xl
                      border
                      border-white/80
                      bg-white/80
                      p-6
                      backdrop-blur-xl
                      shadow-[0_15px_40px_rgba(15,23,42,.06)]
                      transition-all
                      duration-300
                      hover:border-emerald-200
                      hover:shadow-[0_20px_45px_rgba(16,185,129,.12)]
                    "
                  >

                    <div className="flex justify-center">

                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-white
                          to-emerald-50
                          shadow-inner
                        "
                      >

                        <Icon
                          size={28}
                          className="text-emerald-600 transition duration-300 group-hover:scale-110"
                        />

                      </div>

                    </div>

                    <h3 className="mt-5 text-center text-3xl font-bold text-slate-900">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-center text-sm text-slate-500">
                      {item.label}
                    </p>

                  </motion.div>

                );

              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}