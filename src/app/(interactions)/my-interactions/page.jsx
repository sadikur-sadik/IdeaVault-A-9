import Interactions from "@/app/components/Comments/Interactions/Interactions";
import NoInteractions from "@/app/components/Comments/NoInteraction/NoInteraction";
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
    <section className="max-w-350 py-5 md:py-10">
      <div className="container mx-auto lg:w-auto w-11/12 ">

        <h1 className="text-2xl md:text-6xl text-center md:text-left font-bold my-6 ">Interaction <span className="text-cyan-400">History</span></h1>
        {
          myComments.length > 0 ? (
            <div className="space-y-3">
              {myComments.map(comment => <Interactions key={comment?._id} comment={comment}></Interactions>)}
            </div>
          ) :

          <NoInteractions/>
        }
      </div>
    </section>
  );
};

export default MyInteractions;