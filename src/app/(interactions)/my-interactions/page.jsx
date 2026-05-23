import CommentCard from "@/app/components/Comments/CommentCard";
import { auth } from "@/lib/auth";
import { getComments } from "@/lib/data";
import { headers } from "next/headers";

const MyInteractions = async() => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  const id = session.user.id;
  const comments = await getComments();
  const myComments = comments.filter(comment => comment?.userID == id)

  return (
    <div>
      {myComments.map(comment => <CommentCard key={comment?._id} comment={comment}></CommentCard>)}
    </div>
  );
};

export default MyInteractions;