import { ArrowUpRight } from "lucide-react";

const TreatmentCard = ({ treatment }) => {
    return (
        <article className="group overflow-hidden rounded-[1.5rem] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            {/* Image */}
            <div className="relative h-64 overflow-hidden">

                <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#281238]/70 via-transparent to-transparent opacity-70" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-[#281238] shadow-lg">
                    {String(treatment.id).padStart(2, "0")}
                </div>

            </div>

            {/* Content */}
            <div className="p-6">

                <h3 className="text-xl font-bold text-[#281238] transition-colors group-hover:text-[#ff6b35]">
                    {treatment.title}
                </h3>

                <p
                    className="mt-3 overflow-hidden text-sm leading-7 text-gray-500"
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {treatment.description}
                </p>

                <a
                    href={`/services/${treatment.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#281238] transition-colors hover:text-[#ff6b35]"
                >
                    Learn More

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5edf8] transition-all group-hover:bg-[#ff6b35] group-hover:text-white">
                        <ArrowUpRight size={16} />
                    </span>
                </a>

            </div>

        </article>
    );
};

export default TreatmentCard;