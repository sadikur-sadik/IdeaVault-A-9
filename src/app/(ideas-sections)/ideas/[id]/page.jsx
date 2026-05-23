import Comment from "@/app/components/Comments/Comment";
import IdeaCard from "@/app/components/Ideas/IdeasCard/IdeaCard";
import { postComment } from "@/lib/action";
import { getIdeasById } from "@/lib/data";

const IdeaDetails = async({params}) => {

  const {id} = await params;
  const idea = await getIdeasById(id)
  
  
  return (
    <div>
      <IdeaCard idea={idea}></IdeaCard>
      <Comment postComment={postComment} id={id}></Comment>
    </div>
  );
};

export default IdeaDetails;