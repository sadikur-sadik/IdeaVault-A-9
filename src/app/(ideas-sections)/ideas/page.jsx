
import IdeaCard from "@/app/components/Ideas/IdeasCard/IdeaCard";
import { getIdeas } from "@/lib/data";


const Ideas = async () => {

  const ideas = await getIdeas();
  
  return (
    <section>
      
      <h1 className="text-2xl text-center font-bold">Ideas</h1>

      <div className="grid grid-cols-3 gap-6">
        {ideas.map(idea => <IdeaCard key={idea._id} idea={idea}/>)}

      </div>
      
    </section>
  );
  
};

export default Ideas;