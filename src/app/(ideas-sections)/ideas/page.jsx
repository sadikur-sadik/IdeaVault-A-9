
import IdeaCard from "@/app/components/Ideas/IdeasCard/IdeaCard";
import SFsection from "@/app/components/Search&Filter/SFsection";
import { getIdeas } from "@/lib/data";


const Ideas = async ({searchParams}) => {

  const { search = "", filter = "" } = await searchParams;
  console.log(search);
  const ideas = await getIdeas(search,filter);

  return (
    <section className="max-w-350">
      <div className="container mx-auto md:py-10 py-5">
        <h1 className="text-2xl md:text-6xl text-center md:text-left font-bold my-5 md:my-10">Explore All <span className="text-cyan-400">Ideas</span></h1>
        <div>
          <SFsection search={search} filter={filter}/>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6 gap-3 sm:grid-cols-2 grid-cols-1">
          {ideas?.map(idea => <IdeaCard key={idea?._id} idea={idea} />)}

        </div>
      </div>

    </section>
  );

};

export default Ideas;