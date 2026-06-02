'use client'

import Image from "next/image"
import UpdateModal from "./Update/UpdateModal";
import { deleteIdea, updateIdea } from "@/lib/action";
import DeleteIdeaModal from "./Delete/DeleteModal";
import { motion,easeOut } from "motion/react"
const MyIdeaCard = (idea) => {

  const {
    _id,
    title,
    shortDescription,
    detailedDescription,
    category,
    tags,
    imageUrl,
    estimatedBudget,
    targetAudience,
    problemStatement,
    proposedSolution,
    userName
  } = idea?.idea
const MotionImage = motion(Image);

  return (
    <motion.div
      whileHover={{ y: "-3%" }}
      transition={{ duration: .2, ease: easeOut }}
      className="mx-auto hover:shadow-lg dark:bg-slate-900/50 bg-white border-t-15 border-t-cyan-400 w-11/12 md:w-full rounded-3xl p-3 shadow-sm shadow-cyan-400">
      <div className="w-full h-60 overflow-hidden relative rounded-xl">
        <MotionImage
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3, ease: easeOut }}src={imageUrl} alt={title} fill priority className="object-cover rounded-xl"/>
      </div>
      <div className="h-25 space-y-3 mt-3">
        <div className="badge text-xs font-bold text-white rounded-full border bg-cyan-400/50 border-cyan-400">{category}</div>
        <p className="text-xl font-bold">{title}</p>
      </div>

    
      <hr className="w-full text-cyan-400/30 my-3" />
      <div className="flex justify-between gap-3 items-center">
        <div><UpdateModal updateIdea={updateIdea} id={_id}/></div>
        
        <div><DeleteIdeaModal deleteIdea={deleteIdea} id={_id}/></div>
      </div>
     
    </motion.div>
  );
};

export default MyIdeaCard;