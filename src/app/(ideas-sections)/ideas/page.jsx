
import IdeaCard from "@/app/components/Ideas/IdeasCard/IdeaCard";
import NoIdeaSection from "@/app/components/Ideas/NoIdeaSection/NoIdeaSection";
import SFsection from "@/app/components/Search&Filter/SFsection";
import { getIdeas } from "@/lib/data";

export const metadata = {
  title: "Explore Ideas",
  description: "Browse next-generation project ideas and startup concepts submitted by innovators across all global industries on ideaVault.",
};



const Ideas = async ({ searchParams }) => {

  const { search = "", filter = "" } = await searchParams;

  const ideas = await getIdeas(search, filter);


  return (
    <section className="max-w-7xl 2xl:max-w-[1800px] 3xl:max-w-[2400px] mx-auto md:py-10 py-5 px-4 md:px-8">
      <div className="container mx-auto lg:w-auto w-11/12">
        <h1 className="text-2xl md:text-6xl text-center md:text-left font-bold my-5 md:my-10">Explore All <span className="text-cyan-400">Ideas</span></h1>
        <div>
          <SFsection search={search} filter={filter} />
        </div>
        {
          ideas.length > 0 ?(<div className="grid md:gap-6 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 grid-cols-1">
            {ideas?.map(idea => <IdeaCard key={idea?._id} idea={idea} />)}

          </div>
          )
        :
        <NoIdeaSection />
        }
      </div>

    </section>
  );

};

export default Ideas;