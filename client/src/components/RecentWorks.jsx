import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const serviceImages = [
  {
    src: "/rs1.jpg",
    alt: "V-DAS Pest Control service work",
  },
  {
    src: "/rs2.jpg",
    alt: "V-DAS Pest Control technician service",
  },
  {
    src: "/rs3.jpg",
    alt: "V-DAS Pest Control treatment work",
  },
  {
    src: "/rs4.jpg",
    alt: "V-DAS Pest Control professional service",
  },
];

export default function RecentServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = serviceImages[activeIndex];

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % serviceImages.length);
  };

  const previousImage = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + serviceImages.length) % serviceImages.length
    );
  };

  // Keyboard navigation for fullscreen preview
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <>
      <section
        id="recent-services"
        className="
          relative
          overflow-hidden
          bg-white
          py-20
          sm:py-24
          lg:py-28
        "
      >
        {/* Ambient background */}
        <div
          className="
            pointer-events-none
            absolute
            -left-32
            top-20
            h-72
            w-72
            rounded-full
            bg-emerald-100/40
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-10
            h-80
            w-80
            rounded-full
            bg-emerald-50/70
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-6xl
            px-5
            sm:px-6
            lg:px-8
          "
        >
          {/* Section Heading */}
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <div
              className="
                mx-auto
                mb-4
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-100
                bg-emerald-50/70
                px-4
                py-2
                text-xs
                font-semibold
                tracking-wide
                text-emerald-700
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              Recent Services
            </div>

            <h2
              className="
                text-3xl
                font-bold
                tracking-tight
                text-[#203A63]
                sm:text-4xl
                lg:text-[42px]
              "
            >
              Real Work.{" "}
              <span className="text-emerald-500">
                Real Results.
              </span>
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-6
                text-slate-500
                sm:text-base
                sm:leading-7
              "
            >
              A look at some of our recent pest control work
              completed for homes and businesses in Madurai.
            </p>
          </div>

          {/* Gallery */}
          <div
            className="
              mx-auto
              max-w-5xl
              rounded-[28px]
              border
              border-emerald-100
              bg-white/80
              p-3
              shadow-[0_25px_80px_rgba(15,23,42,0.08)]
              backdrop-blur-xl
              sm:p-4
              lg:p-5
            "
          >
            <div
              className="
                flex
                flex-col
                gap-3
                lg:flex-row
                lg:gap-4
              "
            >
              {/* =========================
                  DESKTOP THUMBNAILS
              ========================== */}
              <div
                className="
                  hidden
                  w-[104px]
                  shrink-0
                  flex-col
                  gap-3
                  lg:flex
                "
              >
                {serviceImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View service image ${index + 1}`}
                    className={`
                      group
                      relative
                      h-[88px]
                      w-full
                      overflow-hidden
                      rounded-2xl
                      border-2
                      bg-slate-100
                      transition-all
                      duration-300
                      ${
                        activeIndex === index
                          ? "border-emerald-500 shadow-[0_8px_24px_rgba(16,185,129,0.18)]"
                          : "border-transparent hover:border-emerald-200"
                      }
                    `}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    {/* Active indicator */}
                    {activeIndex === index && (
                      <span
                        className="
                          absolute
                          bottom-2
                          left-2
                          h-1.5
                          w-8
                          rounded-full
                          bg-emerald-500
                        "
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* =========================
                  MAIN PREVIEW
              ========================== */}
              <div
                className="
                  group
                  relative
                  min-w-0
                  flex-1
                  overflow-hidden
                  rounded-[22px]
                  bg-slate-100
                "
              >
                <div
                  className="
                    aspect-[4/3]
                    w-full
                    sm:aspect-[16/10]
                    lg:aspect-[16/9]
                  "
                >
                  <img
                    key={activeImage.src}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    loading="eager"
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-opacity
                      duration-300
                    "
                  />
                </div>

                {/* Bottom gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-32
                    bg-gradient-to-t
                    from-black/55
                    via-black/10
                    to-transparent
                  "
                />

                {/* Service label */}
                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-black/35
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-white
                    backdrop-blur-md
                    sm:bottom-5
                    sm:left-5
                  "
                >
                  <CheckCircle2
                    size={14}
                    className="text-emerald-400"
                  />

                  Professional Pest Control Service
                </div>

                {/* Location */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    hidden
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-white/20
                    bg-black/35
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-white
                    backdrop-blur-md
                    sm:flex
                    sm:bottom-5
                    sm:right-5
                  "
                >
                  <MapPin
                    size={14}
                    className="text-emerald-400"
                  />

                  Madurai
                </div>

                {/* Previous */}
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous service image"
                  className="
                    absolute
                    left-3
                    top-1/2
                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/35
                    text-white
                    backdrop-blur-md
                    transition-all
                    hover:scale-105
                    hover:bg-black/55
                    sm:left-5
                  "
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next service image"
                  className="
                    absolute
                    right-3
                    top-1/2
                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/35
                    text-white
                    backdrop-blur-md
                    transition-all
                    hover:scale-105
                    hover:bg-black/55
                    sm:right-5
                  "
                >
                  <ChevronRight size={20} />
                </button>

                {/* Fullscreen */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  aria-label="Open image fullscreen"
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/35
                    text-white
                    opacity-100
                    backdrop-blur-md
                    transition-all
                    hover:scale-105
                    hover:bg-black/55
                    sm:right-5
                    sm:top-5
                  "
                >
                  <Maximize2 size={16} />
                </button>

                {/* Counter */}
                <div
                  className="
                    absolute
                    right-4
                    bottom-4
                    rounded-full
                    bg-black/35
                    px-3
                    py-1.5
                    text-[11px]
                    font-semibold
                    text-white
                    backdrop-blur-md
                    sm:hidden
                  "
                >
                  {activeIndex + 1} / {serviceImages.length}
                </div>
              </div>
            </div>

            {/* =========================
                MOBILE THUMBNAILS
            ========================== */}
            <div
              className="
                mt-3
                grid
                grid-cols-4
                gap-2
                lg:hidden
              "
            >
              {serviceImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View service image ${index + 1}`}
                  className={`
                    relative
                    aspect-square
                    overflow-hidden
                    rounded-xl
                    border-2
                    bg-slate-100
                    transition-all
                    duration-300
                    ${
                      activeIndex === index
                        ? "border-emerald-500 shadow-[0_6px_18px_rgba(16,185,129,0.18)]"
                        : "border-transparent"
                    }
                  `}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  {activeIndex === index && (
                    <span
                      className="
                        absolute
                        inset-x-2
                        bottom-1.5
                        h-1
                        rounded-full
                        bg-emerald-500
                      "
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom trust points */}
          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-4xl
              grid-cols-2
              gap-y-4
              text-center
              sm:mt-10
              sm:grid-cols-4
              sm:gap-4
            "
          >
            <TrustItem text="Experienced Team" />
            <TrustItem text="Safe Treatments" />
            <TrustItem text="Same Day Service" />
            <TrustItem text="Customer Focused" />
          </div>
        </div>
      </section>

      {/* =========================
          FULLSCREEN LIGHTBOX
      ========================== */}
      {isLightboxOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#07111f]/95
            p-4
            backdrop-blur-md
          "
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close fullscreen preview"
            className="
              absolute
              right-4
              top-4
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/10
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
          >
            <X size={21} />
          </button>

          {/* Main Lightbox */}
          <div
            className="
              relative
              flex
              max-h-[90vh]
              w-full
              max-w-5xl
              items-center
              justify-center
            "
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="
                max-h-[80vh]
                w-auto
                max-w-full
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />

            {/* Previous */}
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous image"
              className="
                absolute
                left-2
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
                sm:left-5
              "
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="
                absolute
                right-2
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
                sm:right-5
              "
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Lightbox counter */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              rounded-full
              border
              border-white/10
              bg-white/10
              px-4
              py-2
              text-xs
              font-medium
              text-white
              backdrop-blur-md
            "
          >
            {activeIndex + 1} / {serviceImages.length}
          </div>
        </div>
      )}
    </>
  );
}

/* =========================
   TRUST ITEM
========================= */

function TrustItem({ text }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <span
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          bg-emerald-50
        "
      >
        <CheckCircle2
          size={14}
          className="text-emerald-600"
        />
      </span>

      <span
        className="
          text-[11px]
          font-medium
          text-slate-500
          sm:text-xs
        "
      >
        {text}
      </span>
    </div>
  );
}