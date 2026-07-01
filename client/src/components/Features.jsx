import {
  Users,
  Leaf,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Trained & certified professionals",
  },
  {
    icon: Leaf,
    title: "Safe Methods",
    description: "Eco-friendly & family safe",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Price",
    description: "Best quality at reasonable price",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    description: "Always ready to help",
  },
];

export default function Features() {
  return (
    <section className="relative -mt-6 z-20">

      <div className="mx-auto max-w-[1180px] px-6">

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/80
                  bg-white/80
                  backdrop-blur-2xl
                  p-6
                  shadow-[0_15px_40px_rgba(15,23,42,.06)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_25px_50px_rgba(16,185,129,.15)]
                "
              >

                <div className="flex items-center gap-4">

                  {/* Icon */}

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
                    shadow-emerald-100
                    "
                  >
                    <Icon
                      size={28}
                      className="text-emerald-600"
                    />
                  </div>

                  {/* Text */}

                  <div>

                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}