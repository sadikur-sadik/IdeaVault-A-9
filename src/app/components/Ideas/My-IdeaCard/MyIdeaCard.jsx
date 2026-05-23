import Image from "next/image"
import DeleteModal from "./DeleteModal";
import { deleteIdea } from "@/lib/action";
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
  } = idea?.idea

 
  return (
    <div className="my-10 max-w-sm rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-green-500">
          <Image
            src={imageUrl}
            fill
            className="object-cover"
            alt="idea title"
          />
        </div>


        <div className="min-w-0 flex-1">
          <h3 className="truncate text-xl font-bold text-gray-800 transition-colors hover:text-green-600">
            {title}
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-3 my-3">
        <button className="btn px-5 py-2 text-white font-bold btn-success rounded-full">Edit</button>
        <DeleteModal deleteIdea={deleteIdea} id={_id}/>
      </div>
    </div>
  );
};

export default MyIdeaCard;