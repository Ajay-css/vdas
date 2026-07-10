import { motion } from "framer-motion";
import {
  Star,
  Quote,
  BadgeCheck,
  MapPin,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    large: true,
    name: "Ramesh Kumar",
    location: "Madurai",
    review: `I recently hired this pest control company for a complete inspection and treatment of my home, and I can confidently say it was one of the best service experiences I have had in recent years. From the moment I contacted their customer support team, they were polite, professional, and extremely responsive. They patiently explained the entire process, answered every question I had, and scheduled the appointment at a time that was convenient for my family.

The technicians arrived exactly on time, wearing proper uniforms and carrying all the necessary equipment. I will definitely continue using their annual maintenance services and recommend them to my friends, family members, and colleagues without any hesitation.`
  },
  {
    id: 2,
    large: false,
    name: "Priya",
    location: "Madurai",
    review:
      "Very friendly staff and affordable pricing.",
  },
  {
    id: 3,
    large: false,
    name: "Arun",
    location: "Madurai",
    review:
      "Professional service with effective treatment.",
  },
  {
    id: 4,
    large: false,
    name: "Meena",
    location: "Madurai",
    review:
      "Very happy with the overall service quality.",
  },
  {
    id: 5,
    large: true,
    name: "Karthik",
    location: "Madurai",
    review:
      "Best pest control company we've hired. The team arrived on time, explained everything clearly, completed the treatment professionally and followed up after the service.",
  },
];

function Card({ review, className = "" }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{ duration: 0.25 }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-500
        bg-white/80
        backdrop-blur-2xl
        shadow-[0_15px_40px_rgba(15,23,42,.06)]
        ${className}
      `}
    >
      {/* Emerald Glow */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-300/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

      {/* Gradient Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-green-400" />

      <div className="p-7">

        <div className="flex items-center justify-between">

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill="#10b981"
                className="text-emerald-500"
              />
            ))}
          </div>

          <Quote
            size={28}
            className="text-emerald-500"
          />

        </div>

        <p className="mt-5 leading-7 text-slate-600">
          {review.review}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <div>

            <h3 className="font-semibold text-slate-900">
              {review.name}
            </h3>

            <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
              <MapPin size={14} />
              {review.location}
            </div>

          </div>

          <div className="flex items-center gap-1 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <BadgeCheck size={14} />
            Verified
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold tracking-[4px] uppercase text-emerald-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            What Our Customers Say
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />

        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Large Left Card */}
          <Card
            className="lg:col-span-2 lg:row-span-2"
            review={reviews[0]}
          />

          {/* Top Right */}
          <Card
            className="lg:col-span-1"
            review={reviews[1]}
          />

          {/* Bottom Right */}
          <Card
            className="lg:col-span-1"
            review={reviews[2]}
          />

          {/* Bottom Full Width */}
          <Card
            className="lg:col-span-3"
            review={reviews[3]}
          />

        </div>

      </div>

    </section>
  );
}