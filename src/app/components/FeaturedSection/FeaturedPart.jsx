'use client'
import { easeOut,motion } from "motion/react"
import FeaturedCard from "./FeaturedCard/FeaturedCard";

const FeaturedPart = ({featuredIdea}) => {
  return (
    <div className="container mx-auto lg:w-auto w-11/12">
        
        <motion.div
          initial={{ opacity: 0, y: "-20%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: .8, ease: easeOut }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Handpicked <span className="text-cyan-600 dark:text-cyan-400">Featured Ideas</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Our platform connects thinkers and builders to turn simple thoughts into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-3">
          {featuredIdea.map(idea => <FeaturedCard idea={idea} key={idea._id}/>)}
        </div>

      </div>
  );
};

export default FeaturedPart;