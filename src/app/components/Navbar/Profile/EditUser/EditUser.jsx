'use client'

import { authClient } from "@/lib/auth-client";
import { Bounce, toast } from "react-toastify";

const EditUser = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());
    try {
      
      await authClient.updateUser(updatedData);
      toast.success('Profile updated successfully!', {
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
      document.getElementById('edit_user_modal').close();

    } catch (error) {
      toast.error(error.message || 'Failed to update profile. Please try again.', {
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

    document.getElementById('edit_user_modal').close();
  };

  return (
    <>
      <button
        onClick={() => document.getElementById('edit_user_modal').showModal()}
        className="px-3 py-1 text-xs font-semibold bg-cyan-400 text-white rounded-full hover:bg-cyan-500"
      >
        Edit
      </button>

      <dialog id="edit_user_modal" className="modal modal-middle">
        <div className="modal-box w-full max-w-sm p-0 border border-slate-300 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-xl">

          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
              Edit <span className="text-cyan-500 dark:text-cyan-400">Profile</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            <div>
              <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Name</label>
              <input
                name="name"
                type="text"
                className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Image URL</label>
              <input
                name="image"
                type="text"
                className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                placeholder="https://example.com/avatar.jpg"
                required
              />
            </div>

            <div className="flex items-center justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={() => document.getElementById('edit_user_modal').close()}
                className="px-5 h-10 text-sm font-semibold rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 h-10 text-sm font-semibold rounded-full bg-cyan-400 hover:bg-cyan-500 text-white"
              >
                Update
              </button>
            </div>
          </form>

        </div>
      </dialog>
    </>
  );
};

export default EditUser;