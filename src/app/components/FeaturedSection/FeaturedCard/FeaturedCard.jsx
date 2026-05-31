'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FeaturedCard = ({ data }) => {
  const { category, title, description, imageUrl, tags } = data;
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-80 h-96 dark:bg-slate-900/50 bg-white border-t-4 border-cyan-400 rounded-2xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(34,211,238,0.5)] mx-auto"
    >
      
    
      <div className="relative w-full h-48 bg-slate-200 dark:bg-slate-800">
        <Image 
          src={imageUrl} 
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
          
          <h3 className="font-bold text-slate-900 dark:text-white text-lg line-clamp-1">
            {title}
          </h3>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm mt-1 line-clamp-2">
          {description}
        </p>
        
        {tags && (
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 font-semibold">
            #{tags}
          </p>
        )}

       
        <div 
          className={`absolute inset-0 bg-linear-to-t from-cyan-500 via-cyan-400/80 to-cyan-400/20 flex items-center justify-center px-4 ${
            hovered ? "block" : "hidden"
          }`}
        >
          
          <div className="flex items-center gap-2 w-full justify-center">
            
            <Link 
              href="/ideas" 
              className="px-4 py-2 bg-white text-cyan-500 rounded-full font-bold text-xs shadow-sm"
            >
              View Details
            </Link>

            <Link 
              href="/add-idea" 
              className="px-4 py-2 bg-transparent text-white border-2 border-white rounded-full font-bold text-xs"
            >
              Add Ideas
            </Link>

          </div>
        </div>

      </div>

    </div>
  );
};

export default FeaturedCard;