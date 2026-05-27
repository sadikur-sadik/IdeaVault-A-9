
import IdeaCard from "@/app/components/Ideas/IdeasCard/IdeaCard";
import { getIdeas } from "@/lib/data";


const Ideas = async () => {

  const ideas = await getIdeas();

  return (
    <section className="max-w-350">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-6xl text-center md:text-left font-bold my-6">Explore All Ideas</h1>

        <div className="grid md:grid-cols-3 md:gap-6 gap-3 sm:grid-cols-2 grid-cols-1">
          {ideas?.map(idea => <IdeaCard key={idea?._id} idea={idea} />)}

        </div>
      </div>

    </section>
  );

};

export default Ideas;