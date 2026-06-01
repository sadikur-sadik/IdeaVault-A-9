import Link from 'next/link';
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsFillLightbulbOffFill } from 'react-icons/bs';

export const NoIdeas = () => {
  return (
    <div className="w-full my-12 p-8 md:p-16 text-center border-2 border-dashed border-cyan-400 rounded-xl bg-slate-900/10 dark:bg-slate-900/40">
      
      <div className="flex justify-center mb-4 text-cyan-400">
        <BsFillLightbulbOffFill className="w-16 h-16 md:w-20 md:h-20" />
      </div>

      <h3 className="text-xl font-bold text-slate-800 dark:text-white md:text-2xl">
        No Ideas Found
      </h3>
      
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 md:text-base max-w-md mx-auto">
        Your log is currently empty. Start tracking your next big project by adding your first idea.
      </p>

      <div className="mt-6 flex justify-center">
        <Link href="/add-ideas" className="w-full sm:w-auto">
          <button className="flex items-center gap-2 px-5 py-2.5 font-medium text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg w-full justify-center">
            <AiFillPlusCircle className="w-5 h-5" />
            <span>Create New Idea</span>
          </button>
        </Link>
      </div>

    </div>
  );
};