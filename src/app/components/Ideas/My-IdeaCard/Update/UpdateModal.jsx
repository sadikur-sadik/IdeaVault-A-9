'use client'

import { FaPen } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const UpdateModal = ({ updateIdea, idea, id }) => {

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newFormData = Object.fromEntries(formData.entries());


    try {
      await updateIdea(newFormData, id);

      toast.success('Idea Information Updated!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      
      e.target.reset()
      
      const modalToggle = document.getElementById(`myideaUpdateModal${id}`);
      if (modalToggle) modalToggle.checked = false;

    } catch (error) {
   
      toast.error(error.message || 'Failed to Update. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <label
        htmlFor={`myideaUpdateModal${id}`}
        className="btn flex items-center justify-center gap-2 rounded-full px-5 py-2 font-semibold bg-cyan-400 text-slate-950 border border-cyan-400 hover:bg-transparent hover:text-cyan-400 transition-colors cursor-pointer"
      >
        <FaPen className="w-3 h-3" />
        <span>Update</span>
      </label>

      <input type="checkbox" id={`myideaUpdateModal${id}`} className="modal-toggle" />

      <div className="modal fixed inset-0 z-50 flex items-center justify-center pointer-events-none backdrop-blur-sm bg-black/40" role="dialog">
        <div className="modal-box pointer-events-auto w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto p-6 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 shadow-2xl border border-slate-200 dark:border-slate-800">

          <h3 className="text-xl font-bold mb-4 text-cyan-400">
            Update Idea Details
          </h3>

          <form onSubmit={handleUpdate} className="space-y-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 opacity-70">Idea Title</label>
                <input
                  name="title"
                  defaultValue={idea?.title}
                  className="w-full h-10 px-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 opacity-70">Image URL</label>
                <input
                  name="imageUrl"
                  defaultValue={idea?.imageUrl}
                  className="w-full h-10 px-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 opacity-70">Short Description</label>
                <input
                  name="shortDescription"
                  defaultValue={idea?.shortDescription}
                  className="w-full h-10 px-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 opacity-70">Estimated Budget</label>
                <input
                  name="estimatedBudget"
                  type="number"
                  defaultValue={idea?.estimatedBudget}
                  className="w-full h-10 px-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 opacity-70">Detailed Description</label>
              <textarea
                name="detailedDescription"
                defaultValue={idea?.detailedDescription}
                className="w-full min-h-16 p-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 opacity-70">Category</label>
                <select
                  name="category"
                  defaultValue={idea?.category || ""}
                  className="w-full h-10 px-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 focus:outline-none focus:border-cyan-400"
                >
                  <option value="" disabled>Select Category</option>
                  <option value="Tech">Tech</option>
                  <option value="Health">Health</option>
                  <option value="AI">AI</option>
                  <option value="Education">Education</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 opacity-70">Target Audience</label>
                <input
                  name="targetAudience"
                  defaultValue={idea?.targetAudience}
                  className="w-full h-10 px-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1 opacity-70">Problem Statement</label>
                <input
                  name="problemStatement"
                  defaultValue={idea?.problemStatement}
                  className="w-full h-10 px-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 opacity-70">Proposed Solution</label>
                <input
                  name="proposedSolution"
                  defaultValue={idea?.proposedSolution}
                  className="w-full h-10 px-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold mb-1 opacity-70">Tags</label>
              <input
                name="tags"
                defaultValue={idea?.tags}
                className="w-full h-10 px-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-transparent focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <label
                htmlFor={`myideaUpdateModal${id}`}
                className="rounded-full px-5 py-2 text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
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

          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateModal;