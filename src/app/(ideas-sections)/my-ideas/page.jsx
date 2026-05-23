import IdeaCard from "@/app/components/Ideas/IdeasCard/IdeaCard";
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
    <section>
      
      <h1 className="text-2xl text-center font-bold">My - Ideas</h1>

      <div className="grid grid-cols-3 gap-6">
        {userIdeas.map(idea => <IdeaCard idea={idea} key={idea?._id}/>)}
      </div>
    </section>
  );
  
};

export default myIdeas;