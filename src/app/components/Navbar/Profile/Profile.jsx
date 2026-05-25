'use client'
import Image from "next/image";
import Link from "next/link";

const Profile = ({ user, handleSignOut }) => {

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full bg-[#253D2C]">
          {user?.user?.image ? (
            <img src={user?.user?.image} alt="User Profile" />
          ) : (
            <span className="text-xl flex items-center justify-center h-full text-[#CFFFDC]">
              {user?.user?.name?.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      </div>
      <div tabIndex={0} className="menu menu-sm dropdown-content border border-[#CFFFDC] bg-white rounded-box p-4 shadow-xl">
        <div className="relative">
          <div className="w-full h-15 relative overflow-hidden rounded-t-lg bg-[#253D2C]">
          </div>
          <div className="absolute top-[50%] left-[5%] w-15 h-15 overflow-hidden rounded-full border-2 border-white bg-[#253D2C] flex items-center justify-center max-h-[90vh] md:max-h-[85vh] overflow-y-auto">
          
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
              className="px-3 py-1 text-xs font-semibold bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors"
            >
              Log Out
            </button>
            <button className="px-3 py-1 text-xs font-semibold bg-[#253D2C] text-[#CFFFDC] rounded-full hover:bg-[#2E6F40] transition-colors">
              Edit
            </button>
          </div>
        </div>

        <div className="mt-10 px-2">
          <div className="text-lg font-extrabold text-[#253D2C] tracking-tight">
            {user?.user?.name || "no user"}
          </div>
          <div className="text-xs font-medium text-[#2E6F40]">
            {user?.user?.email || "No email"}
          </div>
          
          <div className="flex items-center text-center mt-5 border border-[#CFFFDC] rounded-xl bg-[#CFFFDC]/20 text-[#253D2C]">
            <div className="flex-1 p-3 border-r border-[#CFFFDC]">
              <p className="text-lg font-bold text-[#2E6F40]">10+</p>
              <p className="text-[10px] uppercase tracking-wider font-semibold opacity-75">Ideas</p>
            </div>
            <div className="flex-1 p-3 border-r border-[#CFFFDC]">
              <p className="text-lg font-bold text-[#2E6F40]">30+</p>
              <p className="text-[10px] uppercase tracking-wider font-semibold opacity-75">Interactions</p>
            </div>
            <div className="flex-1 p-3">
              <p className="text-lg font-bold text-[#2E6F40]">250</p>
              <p className="text-[10px] uppercase tracking-wider font-semibold opacity-75">Points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;