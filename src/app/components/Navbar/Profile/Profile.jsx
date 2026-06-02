'use client'
import Image from "next/image";
import EditUser from "./EditUser/EditUser";

const Profile = ({ user, handleSignOut }) => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="relative w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden ring-2 ring-cyan-400">
          <Image
            src={user?.user?.image}
            alt={user?.user?.name || "User Profile"}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
      </div>
      <div tabIndex={0} className="menu menu-sm dropdown-content border border-cyan-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-box p-4 shadow-xl z-50">
        <div className="relative">
          <div className="w-full h-15 relative overflow-hidden rounded-t-lg bg-slate-200 dark:bg-slate-800">
          </div>
          <div className="absolute top-[50%] left-[5%] w-15 h-15 overflow-hidden rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center max-h-[90vh] md:max-h-[85vh] overflow-y-auto">
            <Image
              src={user?.user?.image}
              alt="User Profile Picture"
              fill
              sizes="400px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex items-center gap-2 absolute bottom-[-50%] right-[1%]">
            <button
              onClick={handleSignOut}
              className="px-3 py-1 text-xs font-semibold bg-rose-500 text-white rounded-full hover:bg-rose-600"
            >
              Log Out
            </button>
            <EditUser />
          </div>
        </div>

        <div className="mt-10 px-2">
          <div className="text-lg font-bold text-slate-800 dark:text-slate-100">
            {user?.user?.name || "no user"}
          </div>
          <div className="text-xs font-medium text-cyan-600 dark:text-cyan-400">
            {user?.user?.email || "No email"}
          </div>

          <div className="flex items-center text-center mt-5 border border-cyan-100 dark:border-slate-800 rounded-xl bg-cyan-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            <div className="flex-1 p-3 border-r border-cyan-100 dark:border-slate-800">
              <p className="text-lg font-bold text-cyan-600 dark:text-cyan-400">10+</p>
              <p className="text-[10px] uppercase font-semibold opacity-75">Ideas</p>
            </div>
            <div className="flex-1 p-3 border-r border-cyan-100 dark:border-slate-800">
              <p className="text-lg font-bold text-cyan-600 dark:text-cyan-400">30+</p>
              <p className="text-[10px] uppercase font-semibold opacity-75">Interactions</p>
            </div>
            <div className="flex-1 p-3">
              <p className="text-lg font-bold text-cyan-600 dark:text-cyan-400">250</p>
              <p className="text-[10px] uppercase font-semibold opacity-75">Points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;