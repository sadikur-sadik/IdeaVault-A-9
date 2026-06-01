'use client'

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SFsection = ({ search, filter }) => {
  const [searching, setSearching] = useState(search || "");
  const [filtering, setFiltering] = useState(filter || "");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (searching) {
      params.set("search", searching);
    } else {
      params.delete("search");
    }

    if (filtering) {
      params.set("filter", filtering);
    } else {
      params.delete("filter");
    }

    router.push(`/ideas?${params.toString()}`);
  };

  const handleFilterChange = (e) => {
    const nextFilter = e.target.value;
    setFiltering(nextFilter);

    const params = new URLSearchParams(searchParams.toString());

    if (searching) {
      params.set("search", searching);
    } else {
      params.delete("search");
    }

    if (nextFilter) {
      params.set("filter", nextFilter);
    } else {
      params.delete("filter");
    }

    router.push(`/ideas?${params.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-5/6 sm:w-full mx-auto my-6 md:my-8 justify-start">
      <div className="relative w-full sm:max-w-md md:max-w-xl flex items-center">
        <input
          value={searching}
          onChange={e => setSearching(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-full px-5 py-2 h-10 rounded-full border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 
                     focus:outline-none focus:border-cyan-500"
        />

        <button
          onClick={handleSearch}
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
          value={filtering}
          onChange={handleFilterChange}
          className="w-full h-full px-5 rounded-full border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 
                     focus:outline-none focus:border-cyan-500"
        >
          <option value="" disabled className="dark:bg-slate-900 text-gray-400">Select Category</option>
          <option value="Tech" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Tech</option>
          <option value="Health" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Health</option>
          <option value="AI" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">AI</option>
          <option value="Education" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Education</option>
          <option value="Other" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Other</option>
        </select>
      </div>
    </div>
  );
};

export default SFsection;