'use client'

import Image from "next/image";
import Link from "next/link";

const IdeaCard = ({ idea }) => {

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
  } = idea
  return (
    <div className="mx-auto hover:shadow-lg dark:bg-slate-900/50 bg-white border-t-15 border-t-cyan-400 w-5/6 md:w-full rounded-3xl p-3 shadow-sm shadow-cyan-400">
      <div className="w-full h-60 overflow-hidden relative rounded-xl">
        <Image src={imageUrl} alt={title} fill priority className="object-cover rounded-xl"></Image>
      </div>
      <div className="h-25 space-y-3 mt-3">
        <div className="badge text-xs font-bold text-white rounded-full border bg-cyan-400/50 border-cyan-400">{category}</div>
        <p className="text-xl font-bold">{title}</p>
      </div>

      <div className="line-clamp-2 ">
        <p className="text-xs dark:text-slate-300 text-slate-600">{shortDescription}</p>
      </div>
      <hr className="w-full text-cyan-400/30 my-3" />
      <div className="flex justify-between items-center">
        <p className="text-md flex flex-col md:inline-block items center"><span className="dark:text-slate-300 text-slate-800 text-sm">Budget:</span> <span className="font-bold">{estimatedBudget}$</span></p>
        <p className="text-md flex flex-col md:inline-block items center"><span className="dark:text-slate-300 text-slate-800 text-sm">Creator:</span> <span className="font-bold">{userName}</span></p>
      </div>
      <div className="my-3">
        <Link href={`ideas/${_id}`}><button className="hover:bg-cyan-400 hover:text-slate-950 font-bold px-3 py-2 w-full rounded-full  text-cyan-400 bg-transparent border border-cyan-400">View Details</button></Link>
      </div>
    </div>
  );
};

export default IdeaCard;