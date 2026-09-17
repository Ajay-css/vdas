import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  BadgeCheck,
  MapPin,
  ChevronRight,
} from "lucide-react";

import mascot from "../assets/characters/vdas-moscot.png";

const reviews = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Madurai",
    service: "Home Pest Control",
    review:
      "Excellent service from V-DAS Pest Control. The team was punctual, professional and explained the treatment clearly. Very satisfied with the service.",
  },
  {
    id: 2,
    name: "Priya",
    location: "Madurai",
    service: "General Pest Control",
    review:
      "Very friendly staff and affordable pricing. Good service overall.",
  },
  {
    id: 3,
    name: "Arun",
    location: "Madurai",
    service: "Termite Treatment",
    review:
      "Professional service with effective treatment. The team handled everything very well.",
  },
  {
    id: 4,
    name: "Meena",
    location: "Madurai",
    service: "Home Pest Control",
    review:
      "Very happy with the overall service quality. The team was helpful and professional.",
  },
  {
    id: 5,
    name: "Karthik",
    location: "Madurai",
    service: "Pest Control",
    review:
      "The team arrived on time, explained everything clearly and completed the treatment professionally.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-white" aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="text-[15px] leading-none"
        >
          ★
        </span>
      ))}
    </div>
  );
}
function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-700">
      <BadgeCheck size={12} />
      Verified
    </span>
  );
}

export default function Testimonials() {
  const [activeReview, setActiveReview] = useState(0);

  const featured = reviews[activeReview];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-[-160px] top-20 h-[380px] w-[380px] rounded-full bg-emerald-200/25 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[420px] w-[420px] rounded-full bg-green-200/20 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[4px] text-emerald-600 sm:text-sm">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#203A63] sm:text-4xl">
            What Our Customers Say
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />

          <p className="mt-5 text-sm leading-6 text-slate-500 sm:text-base">
            Real feedback from our customers in Madurai.
          </p>
        </motion.div>

        {/* =========================================================
            SINGLE TESTIMONIAL STAGE
            No nested card / no dashboard layout
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            mx-auto
            mt-12
            min-h-[680px]
            max-w-6xl
            overflow-hidden
            rounded-[34px]
            border
            border-emerald-100
            bg-gradient-to-br
            from-emerald-50
            via-white
            to-green-50
            shadow-[0_30px_90px_rgba(15,23,42,.08)]
            sm:min-h-[620px]
            lg:min-h-[580px]
          "
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute left-[-120px] bottom-[-120px] h-[400px] w-[400px] rounded-full bg-emerald-300/20 blur-[90px]" />

          <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-emerald-100/70 blur-[70px]" />

          {/* Giant quote */}
          <div
            className="
              pointer-events-none
              absolute
              right-8
              top-5
              text-emerald-200/70
              sm:right-12
              sm:top-8
              lg:right-16
            "
          >
            <Quote
              size={100}
              strokeWidth={1}
            />
          </div>

          {/* =====================================================
              MASCOT
              Desktop: large left visual
              Mobile: large top visual
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              h-[340px]
              w-full
              items-end
              justify-center
              sm:h-[370px]
              lg:absolute
              lg:inset-y-0
              lg:left-0
              lg:h-full
              lg:w-[52%]
              lg:items-end
            "
          >
            {/* Soft mascot spotlight */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[-100px]
                left-1/2
                h-[390px]
                w-[390px]
                -translate-x-1/2
                rounded-full
                bg-emerald-200/35
                blur-[65px]
                sm:h-[430px]
                sm:w-[430px]
                lg:bottom-[-90px]
                lg:h-[500px]
                lg:w-[500px]
              "
            />

            <motion.img
              src={mascot}
              alt="V-DAS Pest Control professional mascot"
              width="560"
              height="620"
              loading="lazy"
              decoding="async"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                h-auto
                w-[350px]
                max-w-none
                object-contain
                object-bottom

                sm:w-[410px]

                lg:absolute
                lg:bottom-[-8px]
                lg:left-[-45px]
                lg:w-[550px]

                xl:left-[-55px]
                xl:w-[600px]
              "
            />
          </motion.div>

          {/* =====================================================
              TESTIMONIAL CONTENT
          ===================================================== */}
          <div
            className="
              relative
              z-20
              flex
              min-h-[340px]
              w-full
              flex-col
              justify-center
              px-6
              pb-8
              pt-4

              sm:min-h-[250px]
              sm:px-10

              lg:ml-auto
              lg:min-h-[580px]
              lg:w-[52%]
              lg:px-10
              lg:pb-10
              lg:pt-10

              xl:px-14
            "
          >
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-full bg-emerald-500 px-4 py-2 shadow-[0_10px_25px_rgba(16,185,129,.20)]">
                <Stars />

                <span className="ml-1 text-[11px] font-bold text-white">
                  5.0
                </span>
              </div>

              <span className="text-[11px] font-medium text-slate-400">
                Customer Experience
              </span>
            </div>

            {/* Dynamic testimonial */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={featured.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mt-7"
              >
                {/* Review */}
                <p
                  className="
                    max-w-xl
                    text-[16px]
                    font-medium
                    leading-7
                    text-[#203A63]

                    sm:text-[17px]
                    sm:leading-8

                    lg:max-w-[520px]
                    lg:text-[18px]
                    lg:leading-8

                    xl:text-[19px]
                  "
                >
                  “{featured.review}”
                </p>

                {/* Customer */}
                <div className="mt-7">
                  <h3 className="text-base font-bold text-[#203A63]">
                    {featured.name}
                  </h3>

                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin
                      size={13}
                      className="text-emerald-500"
                    />
                    {featured.location}
                  </div>
                </div>

                {/* Service + verification */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-emerald-700 shadow-sm">
                    {featured.service}
                  </span>

                  <VerifiedBadge />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* =====================================================
                CUSTOMER SELECTOR
            ===================================================== */}
            <div className="mt-9">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-slate-400">
                Customer Stories
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {reviews.map((review, index) => {
                  const active = activeReview === index;

                  return (
                    <motion.button
                      key={review.id}
                      type="button"
                      onClick={() => setActiveReview(index)}
                      whileTap={{ scale: 0.96 }}
                      className={`
                        group
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        px-3
                        py-2
                        text-[10px]
                        font-semibold
                        transition-all
                        duration-300

                        ${active
                          ? "border-emerald-500 bg-emerald-500 text-white shadow-[0_8px_20px_rgba(16,185,129,.20)]"
                          : "border-slate-200 bg-white/80 text-slate-600 hover:border-emerald-200 hover:text-emerald-600"
                        }
                      `}
                      aria-label={`Show ${review.name}'s testimonial`}
                      aria-pressed={active}
                    >
                      <span
                        className={`
                          flex
                          h-5
                          w-5
                          items-center
                          justify-center
                          rounded-full
                          text-[9px]
                          font-bold

                          ${active
                            ? "bg-white/20 text-white"
                            : "bg-emerald-50 text-emerald-600"
                          }
                        `}
                      >
                        {index + 1}
                      </span>

                      <span>{review.name}</span>

                      {active && (
                        <ChevronRight
                          size={12}
                          className="opacity-80"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Small desktop divider */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-[52%]
              top-0
              hidden
              w-px
              bg-gradient-to-b
              from-transparent
              via-emerald-100
              to-transparent
              lg:block
            "
          />
        </motion.div>

        {/* =========================================================
            TRUST LINE
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mx-auto
            mt-7
            flex
            max-w-4xl
            flex-wrap
            items-center
            justify-center
            gap-x-7
            gap-y-3
            text-xs
            font-medium
            text-slate-500
          "
        >
          <span className="flex items-center gap-2">
            <BadgeCheck
              size={15}
              className="text-emerald-500"
            />
            Verified Customers
          </span>

          <span className="hidden h-4 w-px bg-slate-200 sm:block" />

          <span className="flex items-center gap-2">
            <span
              className="text-[15px] leading-none text-emerald-500"
              aria-hidden="true"
            >
              ★
            </span>
            5-Star Service
          </span>

          <span className="hidden h-4 w-px bg-slate-200 sm:block" />

          <span className="flex items-center gap-2">
            <MapPin
              size={15}
              className="text-emerald-500"
            />
            Madurai
          </span>
        </motion.div>
      </div>
    </section>
  );
}