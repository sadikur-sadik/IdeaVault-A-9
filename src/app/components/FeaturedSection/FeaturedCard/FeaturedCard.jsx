'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, easeOut } from "motion/react"

const FeaturedCard = ({ idea }) => {
  const MotionImage = motion(Image);
  const {
    _id,
    title,
    shortDescription,
    category,
    tags,
    imageUrl
  } = idea

  const [hovered, setHovered] = useState(false);
   const defaultImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop";
  return (
    <motion.div
      whileHover={{ y: "-3%" }}
      transition={{ duration: .2, ease: easeOut }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full max-w-[320px] h-96 dark:bg-slate-900/50 bg-white border-t-4 border-cyan-400 rounded-2xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(34,211,238,0.5)] mx-auto"
    >


      <div className="relative w-full h-48 bg-slate-200 dark:bg-slate-800 overflow-hidden rounded-t-2xl isolate">
        <MotionImage
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          
          src={imageUrl || defaultImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>


      <div className="relative p-4 h-48">

        <div className="space-y-2">
          <div className="badge text-xs font-bold text-slate-900 dark:text-white rounded-full border bg-cyan-400/50 border-cyan-400 inline-block px-2.5 py-0.5">
            {category}
          </div>

          <h3 className="font-bold text-slate-900 dark:text-white text-lg truncate">
            {title}
          </h3>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 line-clamp-2">
          {shortDescription}
        </p>

        <div
          className={`absolute inset-0 bg-linear-to-t from-cyan-500 via-cyan-400/80 to-cyan-400/20 flex items-center justify-center px-4 transition-all duration-200 ${hovered ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <div className="flex items-center gap-2 w-full justify-center">
            <Link
              href={`/ideas/${_id}`}
              className="px-4 py-2 bg-white text-cyan-500 rounded-full font-bold text-xs shadow-sm whitespace-nowrap"
            >
              View Details
            </Link>

            <Link
              href="/add-ideas"
              className="px-4 py-2 bg-transparent text-white border-2 border-white rounded-full font-bold text-xs whitespace-nowrap"
            >
              Add Ideas
            </Link>
          </div>
        </div>

      </div>

    </motion.div>
  );
};

export default FeaturedCard;