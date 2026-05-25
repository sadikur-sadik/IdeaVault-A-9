"use client"
import Image from "next/image";
import logo from "./../../assets/logo.png";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Profile from "./Profile/Profile";

const Navbar = () => {
  const [route, setRoute] = useState(false);
  const path = usePathname();
  const { data: user } = authClient.useSession();
  const router = useRouter();
 

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin"); // redirect to login page
        },
      },
    });
  };

  return (
    <div className="relative bg-[#2E6F40] text-[#CFFFDC] w-full shadow-sm">

      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />


      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 bg-black/10 backdrop-blur-xs hidden peer-checked:max-lg:block z-40"
      ></label>


      <div className="navbar container mx-auto z-50 relative">
        <div className="navbar-start">

          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden text-[#CFFFDC] hover:bg-[#253D2C]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <Link href="/" className="text-2xl normal-case hover:bg-[#253D2C] px-3 py-1.5 rounded-md transition-all duration-200 flex items-center tracking-tight">
            <span className="font-extrabold text-[#68BA7F]">i</span>
            <span className="font-black text-white  tracking-tighter">DEA</span>
            <span className="ml-1 px-1.5 py-0.5 text-xs font-bold  rounded-sm bg-[#253D2C] text-[#CFFFDC] border border-[#68BA7F]/20 tracking-widest">
              Vault
            </span>
          </Link>
        </div>


        <div className="navbar-end  space-x-2">
          <ul className="menu menu-horizontal px-1 gap-2 hidden lg:flex font-semibold">
            <li>
              <Link href="/" className={`hover:bg-[#253D2C] ${path === "/" ? "border-b-2 border-[#CFFFDC] rounded-none font-bold" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/ideas" className={`hover:bg-[#253D2C] ${path === "/ideas" ? "border-b-2 border-[#CFFFDC] rounded-none font-bold" : ""}`}>
                Ideas
              </Link>
            </li>
            <li>
              <Link href="/add-ideas" className={`hover:bg-[#253D2C] ${path === "/add-ideas" ? "border-b-2 border-[#CFFFDC] rounded-none font-bold" : ""}`}>
                Add Ideas
              </Link>
            </li>
            <li>
              <Link href="/my-ideas" className={`hover:bg-[#253D2C] ${path === "/my-ideas" ? "border-b-2 border-[#CFFFDC] rounded-none font-bold" : ""}`}>
                My Ideas
              </Link>
            </li>
            <li>
              <Link href="/my-interactions" className={`hover:bg-[#253D2C] ${path === "/my-interactions" ? "border-b-2 border-[#CFFFDC] rounded-none font-bold" : ""}`}>
                My Interactions
              </Link>
            </li>
          </ul>


          {user ? (
            <Profile user={user} handleSignOut={handleSignOut}/>
          ) : (
            <Link href="/signin" className="px-3 py-1 font-bold text-sm rounded-full bg-[#CFFFDC] text-[#2E6F40] border-none hover:bg-[#68BA7F] hover:text-white">
              Sign In
            </Link>
          )}
        </div>
      </div>


      <div className="absolute top-full left-0 w-full bg-[#2E6F40] rounded-b-md shadow-lg hidden peer-checked:max-lg:block z-50 border-t border-[#253D2C]">
        <ul className="menu menu-vertical p-4 gap-1">
          <li>
            <Link href="/" className={`hover:bg-[#253D2C] ${path === "/" ? "bg-[#253D2C] border-l-4 border-[#CFFFDC] font-bold" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/ideas" className={`hover:bg-[#253D2C] ${path === "/ideas" ? "bg-[#253D2C] border-l-4 border-[#CFFFDC] font-bold" : ""}`}>
              Ideas
            </Link>
          </li>
          <li>
            <Link href="/add-ideas" className={`hover:bg-[#253D2C] ${path === "/add-ideas" ? "bg-[#253D2C] border-l-4 border-[#CFFFDC] font-bold" : ""}`}>
              Add Ideas
            </Link>
          </li>
          <li>
            <Link href="/my-ideas" className={`hover:bg-[#253D2C] ${path === "/my-ideas" ? "bg-[#253D2C] border-l-4 border-[#CFFFDC] font-bold" : ""}`}>
              My Ideas
            </Link>
          </li>
          <li>
            <Link href="/my-interactions" className={`hover:bg-[#253D2C] ${path === "/my-interactions" ? "bg-[#253D2C] border-l-4 border-[#CFFFDC] font-bold" : ""}`}>
              My Interactions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;