import React from 'react';
// Using the Lucide pack 'react-icons/lu' to fix the import error safely
import { LuLightbulb, LuEye, LuMessageSquare, LuRocket } from 'react-icons/lu';

const Features = () => {
  return (
    <section className="bg-slate-100  max-w-350 dark:bg-slate-950 text-slate-900 dark:text-white py-20 px-4 md:px-8">
      {/* Updated: Using your exact max-w-350 and container mx-auto wrapper */}
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Build <span className="text-cyan-600 dark:text-cyan-400">Fast</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Our platform connects thinkers and builders to turn simple thoughts into reality.
          </p>
        </div>

        {/* 4 Cards Grid - Fully Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-200/60 dark:bg-slate-900 p-8 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-md transform -rotate-2">
            <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center text-xl text-cyan-600 dark:text-cyan-400 mb-6">
              <LuLightbulb />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              Share Your Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Upload your raw startup concepts and business ideas to show them to the world.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-200/60 dark:bg-slate-900 p-8 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-md transform rotate-3">
            <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center text-xl text-cyan-600 dark:text-cyan-400 mb-6">
              <LuEye />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              Explore Concepts
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Browse next-generation project ideas submitted by innovators from all global industries.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-200/60 dark:bg-slate-900 p-8 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-md transform -rotate-3">
            <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center text-xl text-cyan-600 dark:text-cyan-400 mb-6">
              <LuMessageSquare />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              Give Feedback
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Leave helpful suggestions and comment on submissions to refine potential breakthroughs.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-200/60 dark:bg-slate-900 p-8 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-md transform rotate-2">
            <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center text-xl text-cyan-600 dark:text-cyan-400 mb-6">
              <LuRocket />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              Launch Collabs
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Connect with developers, creators, and thinkers to co-build the next big thing together.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;