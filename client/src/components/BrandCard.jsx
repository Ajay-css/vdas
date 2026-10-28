
const brands = [
  { name: "Fruit Bae", style: "font-extrabold tracking-tight" },
  { name: "Irai Restaurant", style: "font-bold tracking-wide" },
  { name: "Food Beez", style: "font-extrabold tracking-tight" },
  { name: "Sai Ortho Hospital", style: "font-bold tracking-tight" },
  { name: "Karur Vysya Bank", style: "font-extrabold tracking-tight" },
];

export const BrandCard = () => {
  return (
    <section
      aria-label="Brands served by V-DAS Pest Control"
      className="w-full overflow-hidden py-12 sm:py-16"
    >
      <style>{`
        @keyframes brandScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .brand-marquee-track {
          display: flex;
          width: max-content;
          animation: brandScroll 25s linear infinite;
          will-change: transform;
        }

        .brand-marquee-wrapper:hover .brand-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl px-5 text-center sm:mb-12">
        <p className="text-xs font-bold uppercase tracking-[3px] text-emerald-600">
          Trusted By Businesses
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#203A63] sm:text-3xl">
          Brands We’ve Served
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
          Professional pest protection for businesses and organizations.
        </p>
      </div>

      {/* Moving marquee */}
      <div className="brand-marquee-wrapper relative w-full overflow-hidden">
        {/* Left and right fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-24" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="brand-marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className={`flex shrink-0 items-center gap-6 px-3 sm:gap-12 sm:px-6 lg:gap-16 ${
                copy === 1 ? "brand-marquee-copy" : ""
              }`}
            >
              {brands.map((brand) => (
                <div
                  key={`${copy}-${brand.name}`}
                  className="group flex shrink-0 items-center gap-6 sm:gap-12 lg:gap-16"
                >
                  <span
                    className={`
                      whitespace-nowrap text-base text-[#203A63]
                      transition-colors duration-300
                      group-hover:text-emerald-600
                      sm:text-xl lg:text-2xl
                      ${brand.style}
                    `}
                  >
                    {brand.name}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCard;