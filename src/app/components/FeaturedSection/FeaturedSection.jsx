import { getFeaturedIdeas } from "@/lib/data";
import FeaturedCard from "./FeaturedCard/FeaturedCard";

const FeaturedSection = async() => {
  const featuredIdea = await getFeaturedIdeas();

  return (
    <section className="bg-slate-100 dark:bg-slate-900/50 text-slate-900 dark:text-white md:py-20 py-10 px-4 md:px-8 max-w-350">
      <div className="container mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Handpicked <span className="text-cyan-600 dark:text-cyan-400">Featured Ideas</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Our platform connects thinkers and builders to turn simple thoughts into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredIdea.map(idea => <FeaturedCard idea={idea} key={idea._id}/>)}
        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;