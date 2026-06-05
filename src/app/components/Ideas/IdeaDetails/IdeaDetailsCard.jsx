'use client'
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaRegDotCircle } from "react-icons/fa";
import { MdReportProblem } from "react-icons/md";
import { BsLightbulbFill } from "react-icons/bs";
import { SiLibreofficewriter } from "react-icons/si";
import { TbCoinTakaFilled } from "react-icons/tb";
import Comment from "../../Comments/Comment";
import CommentCard from "../../Comments/CommentCard";
import { motion } from "motion/react";

const IdeaDetailsCard = ({ idea, postComment, id, deleteComment, updateComment, ideaComments }) => {

  const { _id,
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
  } = idea;
  
  const [clamp, setClamp] = useState(true);
  const MotionImage = motion(Image);
   const defaultImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop";
  return (
    <section className="max-w-350">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="shadow-sm shadow-cyan-400 mt-10 md:w-auto w-11/12 container mx-auto flex items-start rounded-xl p-3 flex-col md:flex-row"
      >
        <div className="w-full md:w-1/2 flex flex-col gap-3">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto md:w-full w-11/12 p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl flex flex-col gap-3 justify-center"
          >
            <div className="badge text-xs font-bold text-white rounded-full border bg-cyan-400/50 border-cyan-400 w-fit px-2 py-0.5">
              {category}
            </div>
            <div>
              <p className="text-2xl font-semibold dark:text-cyan-200 text-cyan-800">
                {title}
              </p>
            </div>

            <div className="mb-1">
              <p className="text-sm dark:text-slate-300 text-slate-600">
                {shortDescription}
              </p>
            </div>

            <div className="w-full md:h-[50vh] h-[30vh] overflow-hidden relative rounded-xl">
              <MotionImage
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                src={imageUrl || defaultImage}
                alt={title}
                fill
                priority
                className="object-cover rounded-xl"
              />
            </div>
          </motion.div>

          <div className="hidden md:block">
            <Comment postComment={postComment} id={id} title={title} imageUrl={imageUrl}></Comment>
            {ideaComments.map(ideaComment => (
              <CommentCard
                key={ideaComment?._id}
                updateComment={updateComment}
                deleteComment={deleteComment}
                comment={ideaComment}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 space-y-3 p-3 w-full"
        >
          <div className="shadow-sm shadow-cyan-400 p-3 pt-2 rounded-2xl">
            <div className="flex gap-3 items-center w-full border-b font-normal md:font-bold text-cyan-400 dark:border-cyan-200 border-slate-300 ">
              <FaRegDotCircle />
              <p>Description</p>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-300 p-3">
              <span className={clamp ? "line-clamp-2" : "block"}>
                {detailedDescription}
              </span>
              <button
                onClick={() => setClamp(!clamp)}
                className="mt-1 inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none"
              >
                <span>{clamp ? "Read more" : "Read less"}</span>
                {clamp ? <FaAngleDown className="w-3 h-3" /> : <FaAngleUp className="w-3 h-3" />}
              </button>
            </div>
          </div>

          <div className="flex gap-3 w-full">
            <div className="p-2 rounded-xl shadow-sm shadow-cyan-400 flex gap-3 flex-col md:flex-row flex-1">
              <p className="flex gap-1 items-center text-cyan-400 font-normal md:font-bold">
                <SiLibreofficewriter />
                <span>Author:</span>
              </p>
              <p className="font-bold md:font-extrabold">
                {userName}
              </p>
            </div>
            <div className="p-2 rounded-xl shadow-sm shadow-cyan-400 flex gap-3 flex-col md:flex-row flex-1">
              <p className="flex gap-1 items-center text-cyan-400 font-normal md:font-bold">
                <TbCoinTakaFilled />
                <span>Estimated Budget:</span>
              </p>
              <p className="font-bold md:font-extrabold">
                {estimatedBudget}
              </p>
            </div>
          </div>

          <div className="p-2 rounded-xl shadow-sm shadow-cyan-400">
            <p className="flex items-center gap-1 text-cyan-400 font-normal md:font-bold">
              <SiLibreofficewriter />
              <span>Target Audience:</span>
            </p>
            <p>{targetAudience}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-3 items-start w-full rounded-xl shadow-sm shadow-cyan-400">
            <div className="flex flex-col h-full">
              <p className="flex flex-col justify-center items-center text-cyan-400 border-b border-slate-300 min-h-24 pb-2">
                <MdReportProblem className="md:w-10 w-8 h-8 md:h-10" />
                <span className="font-medium mt-1">Problem</span>
              </p>
              <p className="pt-3">{problemStatement}</p>
            </div>

            <div className="flex flex-col h-full border-l border-slate-300 pl-3">
              <p className="flex flex-col justify-center items-center text-cyan-400 border-b border-slate-300 min-h-24 pb-2">
                <BsLightbulbFill className="md:w-10 w-8 h-8 md:h-10" />
                <span className="font-medium mt-1">Solution</span>
              </p>
              <p className="pt-3">{proposedSolution}</p>
            </div>
          </div>

          <div className="block md:hidden">
            <Comment postComment={postComment} id={id} title={title} imageUrl={imageUrl}></Comment>
            {ideaComments.map(ideaComment => (
              <CommentCard
                key={`mobile-${ideaComment?._id}`}
                updateComment={updateComment}
                deleteComment={deleteComment}
                comment={{
                  ...ideaComment,
                  _id: `mobile-${ideaComment?._id}`
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IdeaDetailsCard;