import MyIdeaCard from "@/app/components/Ideas/My-IdeaCard/MyIdeaCard";
import { NoIdeas } from "@/app/components/Ideas/My-IdeaCard/No-Idea/NoIdea";
import { deleteIdea, updateIdea } from "@/lib/action";
import { auth } from "@/lib/auth";
import { getIdeas } from "@/lib/data";
import { headers } from "next/headers";

export const metadata = {
  title: "My Ideas",
  description: "Manage, update, and track your submitted startup ideas and validation poll metrics on ideaVault.",
};



const myIdeas = async () => {

  const ideas = await getIdeas();
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  const id = session.user.id;

  const userIdeas = ideas.filter(idea => idea?.userID == id);


  return (
    <section className="max-w-7xl 2xl:max-w-[1800px] 3xl:max-w-[2400px] mx-auto py-5 md:py-10 px-4 md:px-8">

      <div className="container mx-auto lg:w-auto w-11/12">
        <h1 className="text-2xl md:text-6xl text-center md:text-left font-bold my-6">My Ideas <span className="text-cyan-400">Log</span></h1>

        {userIdeas.length == 0
          ?
          <NoIdeas />
          :
          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 grid-cols-1 md:gap-6 gap-3">
            {userIdeas.map(idea => <MyIdeaCard idea={idea} key={idea?._id} deleteIdea={deleteIdea} updateIdea={updateIdea} />)}
          </div>}
      </div>

    </section>
  );

};

export default myIdeas;