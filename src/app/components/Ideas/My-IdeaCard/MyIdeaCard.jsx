'use client'

import Image from "next/image"
import UpdateModal from "./Update/UpdateModal";
import DeleteIdeaModal from "./Delete/DeleteModal";
import { motion } from "motion/react"

const MyIdeaCard = ({ idea, deleteIdea, updateIdea }) => {
  const { _id, title, category, imageUrl } = idea;
  const MotionImage = motion(Image);
   const defaultImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto dark:bg-slate-900/50 bg-white border-t-15 border-t-cyan-400 w-11/12 lg:w-full rounded-3xl p-3 shadow-sm shadow-cyan-400"
    >
      <div className="w-full h-60 overflow-hidden relative rounded-xl">
        <MotionImage
          src={imageUrl || defaultImage} 
          alt={title} 
          fill 
          priority 
          className="object-cover rounded-xl"
        />
      </div>
      
      <div className="h-25 space-y-3 mt-3">
        <div className="badge text-xs font-bold text-white rounded-full border bg-cyan-400/50 border-cyan-400">
          {category}
        </div>
        <p className="text-xl font-bold">{title}</p>
      </div>

      <hr className="w-full text-cyan-400/30 my-3" />
      
      <div className="flex justify-between gap-3 items-center">
        <div>
          <UpdateModal updateIdea={updateIdea} idea={idea} id={_id} />
        </div>
        <div>
          <DeleteIdeaModal deleteIdea={deleteIdea} id={_id} />
        </div>
      </div>
    </motion.div>
  );
};

export default MyIdeaCard;