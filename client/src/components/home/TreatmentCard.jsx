// import { ArrowUpRight } from "lucide-react";

// const TreatmentCard = ({ treatment }) => {
//     return (
//         <article
//             className="
//                 group overflow-hidden rounded-[1.5rem]
//                 border border-[var(--border)]
//                 bg-[var(--card-bg)]
//                 shadow-sm
//                 transition-[transform,box-shadow,border-color,background-color]
//                 duration-500
//                 ease-[cubic-bezier(0.22,1,0.36,1)]
//                 hover:-translate-y-2
//                 hover:shadow-2xl
//             "
//         >
//             {/* ========================================
//                 IMAGE
//             ======================================== */}
//             <div className="relative h-64 overflow-hidden">

//                 <img
//                     src={treatment.image}
//                     alt={treatment.title}
//                     className="
//                         h-full w-full object-cover
//                         transition-transform
//                         duration-700
//                         ease-[cubic-bezier(0.22,1,0.36,1)]
//                         group-hover:scale-105
//                     "
//                 />

//                 {/* Overlay */}
//                 <div
//                     className="
//                         absolute inset-0
//                         bg-gradient-to-t
//                         from-[var(--primary)]
//                         via-transparent
//                         to-transparent
//                         opacity-70
//                         transition-opacity
//                         duration-500
//                         group-hover:opacity-80
//                     "
//                 />

//                 {/* Number */}
//                 <div
//                     className="
//                         absolute left-5 top-5
//                         flex h-10 w-10
//                         items-center justify-center
//                         rounded-full
//                         border border-[var(--border)]
//                         bg-[var(--card-bg)]/95
//                         text-sm font-bold
//                         text-[var(--primary)]
//                         shadow-lg
//                         backdrop-blur-sm
//                         transition-all
//                         duration-500
//                         group-hover:scale-105
//                         group-hover:bg-[var(--accent)]
//                         group-hover:text-white
//                     "
//                 >
//                     {String(treatment.id).padStart(2, "0")}
//                 </div>

//             </div>

//             {/* ========================================
//                 CONTENT
//             ======================================== */}
//             <div className="p-6">

//                 {/* Title */}
//                 <h3
//                     className="
//                         text-xl font-bold
//                         text-[var(--text)]
//                         transition-colors
//                         duration-500
//                         group-hover:text-[var(--accent)]
//                     "
//                 >
//                     {treatment.title}
//                 </h3>

//                 {/* Description */}
//                 <p
//                     className="
//                         mt-3
//                         overflow-hidden
//                         text-sm
//                         leading-7
//                         text-[var(--muted)]
//                         transition-colors
//                         duration-500
//                     "
//                     style={{
//                         display: "-webkit-box",
//                         WebkitLineClamp: 2,
//                         WebkitBoxOrient: "vertical",
//                     }}
//                 >
//                     {treatment.description}
//                 </p>

//                 {/* Learn More */}
//                 <a
//                     href={`/services/${treatment.slug}`}
//                     className="
//                         mt-5
//                         inline-flex
//                         items-center
//                         gap-2
//                         text-sm
//                         font-semibold
//                         text-[var(--text)]
//                         transition-colors
//                         duration-300
//                         hover:text-[var(--accent)]
//                     "
//                 >
//                     <span>Learn More</span>

//                     <span
//                         className="
//                             flex h-8 w-8
//                             items-center justify-center
//                             rounded-full
//                             bg-[var(--light)]
//                             text-[var(--text)]
//                             transition-all
//                             duration-500
//                             ease-[cubic-bezier(0.22,1,0.36,1)]
//                             group-hover:translate-x-1
//                             group-hover:bg-[var(--accent)]
//                             group-hover:text-white
//                         "
//                     >
//                         <ArrowUpRight
//                             size={16}
//                             className="
//                                 transition-transform
//                                 duration-500
//                                 group-hover:rotate-6
//                             "
//                         />
//                     </span>
//                 </a>

//             </div>

//         </article>
//     );
// };

// export default TreatmentCard;

import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const TreatmentCard = ({ treatment }) => {
    return (
        <article
            className="
                group
                overflow-hidden
                rounded-[1.5rem]
                border border-[var(--border)]
                bg-[var(--card-bg)]
                shadow-sm
                transition-[transform,box-shadow,border-color,background-color]
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-[var(--accent)]
            "
        >
            {/* ========================================
                IMAGE
            ======================================== */}
            <div className="relative h-64 overflow-hidden">

                <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-105
                    "
                />

                {/* Image Overlay */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[var(--primary)]
                        via-transparent
                        to-transparent
                        opacity-60
                        transition-opacity
                        duration-500
                        group-hover:opacity-75
                    "
                />

                {/* ========================================
                    NUMBER
                ======================================== */}
                <div
                    className="
                        absolute
                        left-5
                        top-5
                        z-10
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--primary-light)]
                        text-sm
                        font-bold
                        text-[var(--accent)]
                        shadow-lg
                        backdrop-blur-sm
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-110
                        group-hover:bg-[var(--accent)]
                        group-hover:text-white
                    "
                >
                    {String(treatment.id).padStart(2, "0")}
                </div>
            </div>

            {/* ========================================
                CONTENT
            ======================================== */}
            <div className="p-6">

                {/* Title */}
                <h3
                    className="
                        text-xl
                        font-bold
                        text-[var(--text)]
                        transition-colors
                        duration-500
                        group-hover:text-[var(--accent)]
                    "
                >
                    {treatment.title}
                </h3>

                {/* Description */}
                <p
                    className="
                        mt-3
                        overflow-hidden
                        text-sm
                        leading-7
                        text-[var(--muted)]
                        transition-colors
                        duration-500
                    "
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                    }}
                >
                    {treatment.description}
                </p>

                {/* ========================================
                    LEARN MORE
                ======================================== */}
                <Link
                    to={`/services/${treatment.slug}`}
                    className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-[var(--text)]
                        transition-colors
                        duration-300
                        hover:text-[var(--accent)]
                    "
                >
                    <span>Learn More</span>

                    <span
                        className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        bg-[var(--primary-light)]
        text-[var(--accent)]
        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:translate-x-1
        group-hover:bg-[var(--accent)]
        group-hover:text-white
    "
                    >
                        <ArrowUpRight
                            size={16}
                            strokeWidth={2}
                            className="
            text-[var(--accent)]
            transition-transform
            duration-500
            ease-out
            group-hover:rotate-6
            group-hover:text-white
        "
                        />
                    </span>
                </Link>
            </div>
        </article>
    );
};

export default TreatmentCard;