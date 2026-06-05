'use client'

import { MdOutlineDelete } from "react-icons/md";
import { toast } from "react-toastify";

const DeleteIdeaModal = ({ deleteIdea, id }) => {

  const handleDelete = async () => {

     try {
      await deleteIdea(id);
    toast.info('Idea Deleted', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
      

    } catch (error) {
      toast.error(error.message || 'Failed to Delete. Please try again.', {
        position: "top-center",
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
    
  }

  return (
    <div>
      <label
        htmlFor={`myideaDeleteModal${id}`}
        className="btn flex items-center justify-center gap-2 rounded-full px-5 py-2 font-semibold bg-red-400 text-slate-950 border border-red-400 hover:bg-transparent hover:text-red-400 transition-colors cursor-pointer"
      >
        <MdOutlineDelete className="w-4 h-4" />
        <span>Delete</span>
      </label>

      <input type="checkbox" id={`myideaDeleteModal${id}`} className="modal-toggle" />
      
      <div className="modal fixed inset-0 z-50 flex items-center justify-center pointer-events-none backdrop-blur-sm bg-black/40" role="dialog">
        <div className="modal-box pointer-events-auto w-11/12 max-w-md p-6 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 shadow-2xl border border-slate-200 dark:border-slate-800">
          
          <h3 className="text-xl font-bold mb-2 text-red-400">
            You Sure Want To Delete?
          </h3>
          
          <p className="text-sm opacity-70 mb-6">
            Once You Click Confirm, You cannot undo it
          </p>
          
          <div className="flex items-center justify-end gap-3">
            <label 
              htmlFor={`myideaDeleteModal${id}`} 
              className="rounded-full px-5 py-2 text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Cancel
            </label>
            <label 
              onClick={handleDelete} 
              htmlFor={`myideaDeleteModal${id}`} 
              className="rounded-full px-5 py-2 text-sm font-semibold bg-red-500 text-white border border-red-500 hover:bg-transparent hover:text-red-500 transition-colors cursor-pointer"
            >
              Confirm
            </label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DeleteIdeaModal;