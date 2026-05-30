import Interactions from "@/app/components/Comments/Interactions/Interactions";
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
        <div className="space-y-3">
          {myComments.map(comment => <Interactions key={comment?._id} comment={comment}></Interactions>)}
        </div>
      </div>
    </section>
  );
};

export default MyInteractions;