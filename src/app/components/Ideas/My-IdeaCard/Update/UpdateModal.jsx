'use client'

import { FaPen } from "react-icons/fa";

const UpdateModal = ({ updateIdea, id }) => {

  const handleUpdate = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newFormData = Object.fromEntries(formData.entries())
    await updateIdea(newFormData, id)
  }

  return (
    <div>
      <label
        htmlFor={`update_modal_${id}`}
        className="btn flex items-center justify-center gap-2 w-full sm:w-auto rounded-full md:px-6 px-4 py-2 md:py-2.5 font-semibold bg-cyan-400 text-slate-950 border border-cyan-400 hover:bg-transparent hover:text-cyan-400 transition-colors cursor-pointer"
      >
        <FaPen className="w-3.5 h-3.5" />
        <span>Update</span>
      </label>

      <input type="checkbox" id={`update_modal_${id}`} className="modal-toggle" />
      <div className="modal backdrop-blur-sm" role="dialog">
        <div className="modal-box w-11/12 max-w-4xl p-5 md:p-8 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 shadow-xl">
          
          <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
            Update <span className="text-cyan-400">Idea Details</span>
          </h3>
          
          <form onSubmit={handleUpdate}>
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 border-none p-0 m-0">

              <div className="flex flex-col gap-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-600 dark:text-slate-300">Idea Title</label>
                  <input 
                    name="title" 
                    className="w-full h-10 px-4 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                    placeholder="Idea Title" 
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-600 dark:text-slate-300">Short Description</label>
                  <input 
                    name="shortDescription" 
                    className="w-full h-10 px-4 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                    placeholder="Short Description" 
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-600 dark:text-slate-300">Detailed Description</label>
                  <input 
                    name="detailedDescription" 
                    className="w-full h-10 px-4 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                    placeholder="Detailed Description" 
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-slate-600 dark:text-slate-300">Category</label>
                  <select 
                    name="category" 
                    className="w-full h-10 px-4 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                    defaultValue=""
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
                  <label className="block mb-1 text-sm font-medium text-slate-600 dark:text-slate-300">Tags</label>
                  <input 
                    name="tags" 
                    className="w-full h-10 px-4 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                    placeholder="Tags" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 justify-between">
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-slate-600 dark:text-slate-300">Image URL</label>
                    <input 
                      name="imageUrl" 
                      className="w-full h-10 px-4 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                      placeholder="Image URL" 
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-slate-600 dark:text-slate-300">Estimated Budget</label>
                    <input 
                      name="estimatedBudget" 
                      type="number" 
                      className="w-full h-10 px-4 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                      placeholder="Estimated Budget" 
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-slate-600 dark:text-slate-300">Target Audience</label>
                    <input 
                      name="targetAudience" 
                      className="w-full h-10 px-4 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                      placeholder="Target Audience" 
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-slate-600 dark:text-slate-300">Problem Statement</label>
                    <input 
                      name="problemStatement" 
                      className="w-full h-10 px-4 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                      placeholder="Problem Statement" 
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-slate-600 dark:text-slate-300">Proposed Solution</label>
                    <input 
                      name="proposedSolution" 
                      className="w-full h-10 px-4 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                      placeholder="Proposed Solution" 
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <label 
                    htmlFor={`update_modal_${id}`} 
                    className="rounded-full px-5 py-2 text-sm font-semibold border border-slate-200 dark:border-slate-800 bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Cancel
                  </label>
                  <button 
                    type="submit" 
                    className="rounded-full px-6 py-2 text-sm font-semibold bg-cyan-400 text-slate-950 border border-cyan-400 hover:bg-transparent hover:text-cyan-400 transition-colors"
                  >
                    Confirm
                  </button>
                </div>

              </div>
            </fieldset>
          </form>

        </div>
      </div>
    </div>

  )
}
export default UpdateModal;