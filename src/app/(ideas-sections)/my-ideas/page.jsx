import MyIdeaCard from "@/app/components/Ideas/My-IdeaCard/MyIdeaCard";
import { auth } from "@/lib/auth";
import { getIdeas } from "@/lib/data";
import { headers } from "next/headers";


const myIdeas = async () => {

  const ideas = await getIdeas();
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  const id = session.user.id;

  const userIdeas = ideas.filter(idea => idea?.userID == id);


  return (
    <section className="max-w-350">

      <div className="container mx-auto md:w-auto w-11/12">
        <h1 className="text-2xl md:text-6xl text-center md:text-left font-bold my-6">My Ideas <span className="text-cyan-400">Log</span></h1>

        <div className="grid md:grid-cols-3  grid-cols-1 gap-6">
          {userIdeas.map(idea => <MyIdeaCard idea={idea} key={idea?._id} />)}
        </div>
      </div>
    </section>
  );

};

export default myIdeas;