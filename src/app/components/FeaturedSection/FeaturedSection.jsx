import { getFeaturedIdeas } from "@/lib/data";
import FeaturedPart from "./FeaturedPart";

const FeaturedSection = async() => {
  const featuredIdea = await getFeaturedIdeas();

  return (
    <section className="bg-slate-100 dark:bg-slate-900/50 text-slate-900 dark:text-white md:py-20 py-10 px-4 md:px-8 max-w-7xl 2xl:max-w-[1800px] 3xl:max-w-[2400px] mx-auto w-full">
      <FeaturedPart featuredIdea={featuredIdea}></FeaturedPart>
    </section>
  );
};

export default FeaturedSection;