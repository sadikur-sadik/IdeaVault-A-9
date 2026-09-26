
import IdeaDetailsCard from "@/app/components/Ideas/IdeaDetails/IdeaDetailsCard";
import { postComment, updateComment, voteInPoll } from "@/lib/action";
import { getComments, getIdeasById } from "@/lib/data";
import { deleteComment } from "@/lib/action";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const idea = await getIdeasById(id);
  if (!idea || idea.error) {
    return {
      title: "Idea Details",
      description: "Explore startup idea details and validation polls on ideaVault.",
    };
  }
  return {
    title: `${idea.title || "Idea Details"}`,
    description: idea.shortDescription || "Explore startup idea details and validation polls on ideaVault.",
  };
}

const IdeaDetails = async({params}) => {

  const {id} = await params;

  const idea = await getIdeasById(id)
 
  const comments = await getComments()
  const ideaComments = comments.filter(comment => comment.ideaID == id)
  
  return (
    <div className="md:py-10 py-5">

      <IdeaDetailsCard key={id} postComment={postComment} id={id} idea={idea} ideaComments={ideaComments} updateComment={updateComment} deleteComment={deleteComment} voteInPoll={voteInPoll} ></IdeaDetailsCard>
      
      
    </div>
  );
};

export default IdeaDetails;