'use client'
import { MdOutlineEdit } from "react-icons/md";

const UpdateCommentModal = ({ currentComment, updateComment, id }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newFormData = Object.fromEntries(formData.entries());
    await updateComment(newFormData, id);

    const modalElement = document.getElementById(`edit_comment_modal_${id}`);
    if (modalElement) modalElement.close();
  };

  return (
    <>
      {/* Trigger button using e.stopPropagation() to fix mobile activation collapse issues */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation(); // Prevents the dropdown event loop from swallowing the modal toggle
          
          // Force active elements to blur, cleanly resetting mobile focus
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }

          const modalElement = document.getElementById(`edit_comment_modal_${id}`);
          if (modalElement) modalElement.showModal();
        }}
        className="flex items-center gap-2 text-slate-700 dark:text-slate-200 px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 w-full text-left cursor-pointer transition-colors"
      >
        <MdOutlineEdit className="w-4 h-4 text-slate-500 dark:text-slate-400" />
        <span>Edit</span>
      </button>

      {/* Responsive Viewport Centered Dialog Structural Frame */}
      <dialog
        id={`edit_comment_modal_${id}`}
        className="modal modal-middle fixed inset-0 m-auto w-screen h-screen z-9999 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center p-4"
        onClick={(e) => {
          // Extra mobile protection: prevents form container click-through closing
          e.stopPropagation();
        }}
      >
        <div className="modal-box w-full max-w-sm p-0 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl text-left overflow-hidden relative z-50">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              Update <span className="text-cyan-500 dark:text-cyan-400">Comment</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            <div>
              <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">
                Your Comment
              </label>
              <input
                name="comment"
                type="text"
                defaultValue={currentComment}
                className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500 transition-colors"
                required
              />
            </div>

            <div className="flex items-center justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  const modalElement = document.getElementById(`edit_comment_modal_${id}`);
                  if (modalElement) modalElement.close();
                }}
                className="px-5 h-10 text-sm font-semibold rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 h-10 text-sm font-semibold rounded-full bg-cyan-400 hover:bg-cyan-500 text-white shadow-md shadow-cyan-400/10 transition-all"
              >
                Update
              </button>
            </div>
          </form>
        </div>

        {/* Dynamic Outside Backdrop Form Click-to-Close Layer */}
        <form method="dialog" className="modal-backdrop absolute inset-0 w-full h-full z-10 block">
          <button className="w-full h-full cursor-default bg-transparent border-none outline-none">close</button>
        </form>
      </dialog>
    </>
  );
};

export default UpdateCommentModal;