'use client'
import { MdOutlineEdit } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const UpdateCommentModal = ({ currentComment, updateComment, id }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newFormData = Object.fromEntries(formData.entries());
    
    const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

    try {
      await updateComment(newFormData, id);

      const modalElement = document.getElementById(`edit_comment_modal_${id}`);
      if (modalElement) modalElement.close();

      toast.success('Comment Updated', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? "dark" : "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'Failed to update comment. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? "dark" : "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          const modalElement = document.getElementById(`edit_comment_modal_${id}`);
          if (modalElement) modalElement.showModal();
        }}
        className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full cursor-pointer transition-colors"
      >
        <MdOutlineEdit className="w-5 h-5" />
      </button>

      <dialog id={`edit_comment_modal_${id}`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white border border-slate-200 text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-100 text-left">
          <h3 className="font-bold text-lg mb-4">Edit Comment</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="comment"
              type="text"
              defaultValue={currentComment}
              className="w-full h-10 px-4 rounded-lg border bg-white border-slate-300 text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
              required
            />

            <div className="modal-action">
              <button
                type="button"
                onClick={() => {
                  const modalElement = document.getElementById(`edit_comment_modal_${id}`);
                  if (modalElement) modalElement.close();
                }}
                className="btn btn-ghost text-slate-600 hover:bg-slate-100 rounded-full dark:text-slate-300 dark:hover:bg-slate-800 normal-case font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-cyan-500 hover:bg-cyan-600 border-none rounded-full text-white normal-case font-medium px-6"
              >
                Update
              </button>
            </div>
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default UpdateCommentModal;