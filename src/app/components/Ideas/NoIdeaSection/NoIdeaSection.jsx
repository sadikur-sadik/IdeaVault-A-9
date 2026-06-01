import React from 'react';
import Link from 'next/link';
import { FiInbox, FiPlus } from 'react-icons/fi';

const NoIdeaSection = () => {
  return (
    <div className="w-full px-4 py-12 sm:py-16 md:py-24">
      <div className="w-full md:w-5/6 mx-auto flex flex-col items-center justify-center text-center px-6 py-16 rounded-2xl border border-dashed bg-slate-50/50 border-slate-300 dark:bg-slate-900/40 dark:border-slate-800 backdrop-blur-sm transition-colors duration-300">
        
        <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-cyan-100 dark:bg-cyan-950/50 text-cyan-500 dark:text-cyan-400">
          <FiInbox className="w-8 h-8" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 mb-3">
          No Ideas Found
        </h2>

        <p className="max-w-md text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          It looks like the vault is empty right now. Be the first to spark inspiration by contributing your innovative concept to the public!
        </p>

        <Link 
          href="/add-ideas"
          className="inline-flex items-center justify-center px-6 py-3 font-semibold text-sm text-white bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 rounded-xl shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/20 active:scale-95 transition-all duration-200"
        >
          <FiPlus className="w-5 h-5 mr-2" />
          Add Your Idea
        </Link>
        
      </div>
    </div>
  );
};

export default NoIdeaSection;