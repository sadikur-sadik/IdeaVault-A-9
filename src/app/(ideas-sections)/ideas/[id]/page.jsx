import Comment from "@/app/components/Comments/Comment";
import CommentCard from "@/app/components/Comments/CommentCard";
import IdeaCard from "@/app/components/Ideas/IdeasCard/IdeaCard";
import { postComment } from "@/lib/action";
import { getComments, getIdeasById } from "@/lib/data";
import { deleteComment } from "@/lib/action";
const IdeaDetails = async({params}) => {

  const {id} = await params;
  const idea = await getIdeasById(id)
  const comments = await getComments()
  const ideaComments = comments.filter(comment => comment.ideaID == id)
  
  return (
    <div>
      <IdeaCard idea={idea}></IdeaCard>
      <Comment postComment={postComment} id={id}></Comment>
      {ideaComments.map(ideaComment => <CommentCard key={ideaComment?._id} deleteComment={deleteComment} comment={ideaComment}></CommentCard>)}
    </div>
  );
};

export default IdeaDetails;