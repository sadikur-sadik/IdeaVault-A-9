import Link from 'next/link';
import { BiMessageRoundedX } from 'react-icons/bi';
import { MdOutlineExplore } from 'react-icons/md';

const NoInteractions = () => {
  return (
    <div className="w-full my-12 py-5 md:py-10 text-center border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
      
      <div className="flex justify-center mb-6 text-cyan-400">
        <BiMessageRoundedX className="w-20 h-20" />
      </div>

      <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
        No Interactions Yet
      </h3>
      
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 md:text-base max-w-md mx-auto leading-relaxed">
        You haven't interacted with any community posts or shared insights yet. Explore existing brainstorms to collaborate!
      </p>

      <div className="mt-8 flex justify-center">
        <Link href="/ideas" className="w-full sm:w-auto">
          <button className="flex items-center gap-2 px-6 py-3 font-medium text-white bg-cyan-500 hover:bg-cyan-600 rounded-xl w-full justify-center shadow-md">
            <MdOutlineExplore className="w-5 h-5" />
            <span>Explore Ideas</span>
          </button>
        </Link>
      </div>

    </div>
  );
};

export default NoInteractions;