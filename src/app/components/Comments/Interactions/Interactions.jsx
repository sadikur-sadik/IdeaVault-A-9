'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "motion/react"
const Interactions = ({ comment: commentdata }) => {
  const {
    _id,
    comment,
    timeStamp,
    ideaID,
    ideaTitle,
    ideaImage
  } = commentdata;

  const MotionImage = motion(Image);
  const time = `${timeStamp.hour}:${timeStamp.minute} ${timeStamp.date}/${timeStamp.month}/${timeStamp.year}`;
  const defaultImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop";

  return (
    <motion.div 
    initial={{opacity: 0,y:"10%"}}
    animate={{opacity: 1,y:0}}
    transition={{duration:.1}}
    className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200 flex flex-col md:flex-row gap-6 items-start justify-between">
      
      <div className="flex flex-col sm:flex-row gap-5 flex-1 min-w-0 w-full items-start">
        
      
        <div className="w-full sm:w-24 h-24 rounded-xl relative overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800">
          <MotionImage
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
            src={ideaImage || defaultImage} 
            fill 
            priority 
            alt={ideaTitle|| "Idea image"} 
            className="object-cover"
          />
        </div>

        
        <div className="flex-1 min-w-0 flex flex-col justify-start gap-2 w-full">
          <div className="flex items-baseline gap-3">
            <h3 className="font-bold text-base text-cyan-400 truncate">
              {ideaTitle || "Untitled Idea"}
            </h3>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium whitespace-nowrap">
              {time}
            </span>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 border border-slate-100 dark:border-slate-800 w-full max-w-2xl">
            <p className="text-sm text-slate-600 dark:text-slate-300 wrap-break-word whitespace-pre-wrap">
              {comment}
            </p>
          </div>
        </div>
      </div>

     
      <div className="w-full md:w-auto shrink-0 flex items-start">
        <Link 
          href={`/ideas/${ideaID}`}
          className="flex items-center justify-center gap-2 w-full px-6 py-2.5 text-xs font-bold text-slate-950  bg-cyan-400 border-cyan-400  hover:bg-transparent hover:text-cyan-400 border rounded-full"
        >
          <span>View Idea</span>
          <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
        </Link>
      </div>

    </motion.div>
  );
};

export default Interactions;