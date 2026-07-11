import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck } from "lucide-react";
import houseShield from "../assets/ilustrations/house-shield.webp";
import PhoneCall from "../assets/icons/Contact.svg";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 lg:pt-32 pb-16">

      {/* Background Glow */}
      <div className="absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-[120px]" />
      <div className="absolute top-32 right-0 h-72 w-72 rounded-full bg-green-200/30 blur-[120px]" />

      <div className="relative mx-auto flex max-w-[1180px] flex-col items-center gap-10 lg:gap-16 px-6 lg:flex-row">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="
inline-flex
items-center
gap-2
rounded-xl
border
border-emerald-100
bg-white/80
backdrop-blur-xl
px-4
py-2
shadow-[0_10px_30px_rgba(16,185,129,.08)]
">
            <BadgeCheck size={16} className="text-emerald-500" />
            <span className="text-sm font-medium text-emerald-700">
              Secure • Effective • Trusted
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl
          mt-8
lg:text-[52px]
font-bold
tracking-tight
leading-[1.15]">
            Protect Your Home
            <br />
            & Business From
            <br />
            <span className="bg-gradient-to-r from-emerald-600
via-emerald-500
to-lime-400 bg-clip-text text-transparent">
              Harmful Pests
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            Professional pest control services with safe chemicals,
            certified experts and affordable pricing for homes and businesses.
          </p>

          {/* Features */}
          <div className="mt-7 flex flex-col md:flex-row gap-4 md:gap-5 text-sm font-medium text-slate-700 items-start md:items-center">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" />
              <span>Same Day Service</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" />
              <span>Family Safe</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" />
              <span>100% Satisfaction</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="tel:+917904970463"
              className="
rounded-3xl

border border-emerald-300/70
bg-[radial-gradient(circle_at_top,#86efac_0%,rgba(255,255,255,.18)_18%,transparent_40%),linear-gradient(135deg,#15803d_0%,#22c55e_35%,#4ade80_60%,#16a34a_100%)]
px-6
py-4
font-semibold
text-white

shadow-[0_15px_40px_rgba(16,185,129,.35)]

transition-all
duration-300

before:absolute
before:inset-0
before:-translate-x-full
hover:before:translate-x-full
before:transition-transform
before:duration-700
before:bg-gradient-to-r
before:from-transparent
before:via-white/30
before:to-transparent
overflow-hidden
relative
"
            >
              <span><img src={PhoneCall} alt="" aria-hidden="true" width="20" height="20" className="inline-block mr-2 w-5" /></span>
              Call Now
            </a>

            <a
              href="https://wa.me/917904970463"
              target="_blank"
              className="rounded-3xl border border-white/7 px-6 py-3.5 font-medium text-slate-700 shadow-xl backdrop-blur-xl transition-all duration-300 before:absolute
bg-[radial-gradient(circle_at_top,#86efac_0%,rgba(255,255,255,.18)_18%,transparent_40%),linear-gradient(135deg,#15803d_0%,#22c55e_35%,#4ade80_60%,#16a34a_100%)]
              before:inset-0
before:-translate-x-full
hover:before:translate-x-full
before:transition-transform
before:duration-700
before:bg-gradient-to-r
before:from-transparent
before:via-white/30
before:to-transparent
overflow-hidden
relative"
            >
              <FaWhatsapp size={20} className="inline-block mr-2 text-white" />
              <span className="text-white">WhatsApp Us</span>
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <div className="relative flex flex-1 items-center justify-center">

          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.45, 0.75, 0.45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
    absolute
    h-[420px]
    w-[420px]
    rounded-full
    bg-emerald-400/20
    blur-[95px]
  "
          />

          {/* Ring Placeholder */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[400px] w-[400px] rounded-full border border-emerald-300/40"
          >
            <div className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,.9)]" />
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">

            <motion.div
              animate={{
                x: [-420, 420],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className="
      h-[430px]
      w-12
      rotate-12
      bg-gradient-to-r
      from-transparent
      via-white/60
      to-transparent
      blur-md
    "
            />

          </div>

          <motion.img
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            src={houseShield}
            alt="V-DAS pest control home protection illustration"
            width="470"
            height="400"
            fetchPriority="high"
            decoding="async"
            className="
    relative
    z-20
    w-full
    max-w-[470px]
    drop-shadow-[0_25px_45px_rgba(16,185,129,.18)]
  "
          />

        </div>
      </div>

    </section>
  );
}