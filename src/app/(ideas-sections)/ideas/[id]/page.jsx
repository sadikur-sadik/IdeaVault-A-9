
import IdeaDetailsCard from "@/app/components/Ideas/IdeaDetails/IdeaDetailsCard";
import { postComment, updateComment } from "@/lib/action";
import { getComments, getIdeasById } from "@/lib/data";
import { deleteComment } from "@/lib/action";
const IdeaDetails = async({params}) => {

  const {id} = await params;

  const idea = await getIdeasById(id)
 
  const comments = await getComments()
  const ideaComments = comments.filter(comment => comment.ideaID == id)
  
  return (
    <div>
      <IdeaDetailsCard postComment={postComment} id={id} idea={idea} ideaComments={ideaComments} updateComment={updateComment} deleteComment={deleteComment} ></IdeaDetailsCard>
      
      
    </div>
  );
};

export default IdeaDetails;