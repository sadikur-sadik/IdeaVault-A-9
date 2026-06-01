import { IoSearchOutline } from "react-icons/io5";

const SFsection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-5/6 sm:w-full mx-auto my-6 md:my-8 justify-start">
      

      <div className="relative w-full sm:max-w-md md:max-w-xl flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-5 py-2 h-10 rounded-full border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 
                     focus:outline-none focus:border-cyan-500"
        />
        
        <button 
          type="button"
          className="absolute right-0 top-0 bottom-0 px-4 flex items-center justify-center 
                     bg-gray-100 dark:bg-slate-800 border-l border-gray-300 dark:border-gray-700 
                     rounded-r-full text-gray-600 dark:text-slate-300"
        >
          <IoSearchOutline className="w-5 h-5" />
        </button>
      </div>


      <div className="w-full sm:w-48 h-10">
        <select
          defaultValue=""
          className="w-full h-full px-5 rounded-full border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 
                     focus:outline-none focus:border-cyan-500"
        >
          <option value="" disabled hidden>Filter by Category</option>
          <option value="tech">Tech</option>
          <option value="health">Health</option>
          <option value="ai">AI</option>
          <option value="education">Education</option>
          <option value="other">Other</option>
        </select>
      </div>

    </div>
  );
};

export default SFsection;