import CommentCard from "@/app/components/Comments/CommentCard";
import { auth } from "@/lib/auth";
import { getComments } from "@/lib/data";
import { headers } from "next/headers";

const MyInteractions = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  const id = session.user.id;
  const comments = await getComments();
  const myComments = comments.filter(comment => comment?.userID == id)

  return (
    <section className="max-w-350">
      <div className="container mx-auto md:w-auto w-11/12 p-6">

        <h1 className="text-2xl md:text-6xl text-center md:text-left font-bold my-6 ">Interaction <span className="text-cyan-400">History</span></h1>
        <div className="shadow-sm shadow-cyan-400 ">
          {myComments.map(comment => <CommentCard key={comment?._id} comment={comment}></CommentCard>)}
        </div>
      </div>
    </section>
  );
};

export default MyInteractions;