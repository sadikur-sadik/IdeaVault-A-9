'use client'

import { useSession } from "@/lib/auth-client";

const AddIdeas = ({ postData }) => {
  const session = useSession()
  const id = session?.data?.session?.userId
  const userName = session?.data?.user?.name

  const handleSubmit = async (e) => {
    e.preventDefault()
    const initForm = new FormData(e.currentTarget)
    const formData = Object.fromEntries(initForm.entries())
    formData.userID = id
    formData.userName = userName
    await postData(formData)
  }

  return (
    <section className="w-full">
      <div className="container mx-auto w-11/12 lg:max-w-[60vw]">
        
        <div className="w-full py-5 md:py-10">
          <h1 className="text-3xl md:text-6xl text-center md:text-left font-bold my-6">
            Launch New <span className="text-cyan-400">Idea</span>
          </h1>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="w-full p-4 md:p-8 border border-slate-300 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/50 backdrop-blur-md shadow-md dark:shadow-none"
        >
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 border-none p-0 m-0">

            <div className="flex flex-col gap-3">
              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Idea Title</label>
                <input 
                  name="title" 
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                  placeholder="Idea Title" 
                  required 
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Short Description</label>
                <input 
                  name="shortDescription" 
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                  placeholder="Short Description" 
                  required 
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Detailed Description</label>
                <input 
                  name="detailedDescription" 
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                  placeholder="Detailed Description" 
                  required 
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Category</label>
                <select 
                  name="category" 
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                  defaultValue="" 
                  required
                >
                  <option value="" disabled className="dark:bg-slate-900 text-gray-400">Select Category</option>
                  <option value="Tech" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Tech</option>
                  <option value="Health" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Health</option>
                  <option value="AI" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">AI</option>
                  <option value="Education" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Education</option>
                  <option value="Other" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Tags (Optional)</label>
                <input 
                  name="tags" 
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                  placeholder="Tags" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Image URL</label>
                <input 
                  name="imageUrl" 
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                  placeholder="Image URL" 
                  required 
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Estimated Budget</label>
                <input 
                  name="estimatedBudget" 
                  type="number" 
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                  placeholder="Estimated Budget" 
                  required 
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Target Audience</label>
                <input 
                  name="targetAudience" 
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                  placeholder="Target Audience" 
                  required 
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Problem Statement</label>
                <input 
                  name="problemStatement" 
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                  placeholder="Problem Statement" 
                  required 
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Proposed Solution</label>
                <input 
                  name="proposedSolution" 
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                  placeholder="Proposed Solution" 
                  required 
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 flex flex-col-reverse sm:flex-row justify-end gap-4 mt-6">
              <button 
                type="reset" 
                className="hidden md:block text-slate-900 dark:text-slate-300 text-sm font-bold px-5 py-2 rounded-full border border-transparent hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                Reset
              </button>
              
              <button
                type="submit"
                className="w-full sm:w-auto rounded-full px-6 py-2.5 font-semibold bg-cyan-400 text-slate-950 border border-cyan-400 hover:bg-transparent hover:text-cyan-400 transition-colors"
              >
                Submit Idea
              </button>
            </div>

          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default AddIdeas;