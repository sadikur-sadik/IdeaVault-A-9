
import IdeaDetailsCard from "@/app/components/Ideas/IdeaDetails/IdeaDetailsCard";
import { postComment, updateComment } from "@/lib/action";
import { getComments, getIdeasById } from "@/lib/data";
import { deleteComment } from "@/lib/action";
const IdeaDetails = async({params}) => {

  const {id} = await params;
  console.log(id);
  const idea = await getIdeasById(id)
  console.log(id);
  
  const comments = await getComments()
  const ideaComments = comments.filter(comment => comment.ideaID == id)
  
  return (
    <div>
      <IdeaDetailsCard postComment={postComment} id={id} idea={idea} ideaComments={ideaComments} updateComment={updateComment} deleteComment={deleteComment} ></IdeaDetailsCard>
      {/* <Comment postComment={postComment} id={id}></Comment> */}
      
    </div>
  );
};

export default IdeaDetails;