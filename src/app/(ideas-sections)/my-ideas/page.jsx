import MyIdeaCard from "@/app/components/Ideas/My-IdeaCard/MyIdeaCard";
import { NoIdeas } from "@/app/components/Ideas/My-IdeaCard/No-Idea/NoIdea";
import { deleteIdea, updateIdea } from "@/lib/action";
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
    <section className="max-w-350 py-5 md:py-10">

      <div className="container mx-auto md:w-auto w-11/12">
        <h1 className="text-2xl md:text-6xl text-center md:text-left font-bold my-6">My Ideas <span className="text-cyan-400">Log</span></h1>

       { userIdeas.length == 0 
       ?
        <NoIdeas/>
        :
        <div className="grid md:grid-cols-2 lg:grid-cols-3  grid-cols-1 md:gap-6 gap-3">
          {userIdeas.map(idea => <MyIdeaCard idea={idea} key={idea?._id} deleteIdea={deleteIdea} updateIdea={updateIdea}/>)}
        </div>}
      </div>
       
    </section>
  );

};

export default myIdeas;