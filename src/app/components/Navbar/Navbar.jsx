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
          router.push("/signin"); 
        },
      },
    });
  };

  return (
    <div className="relative text-slate-800 bg-white w-full shadow-sm border-b  border-slate-200">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />

      
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 bg-black/10 backdrop-blur-xs hidden peer-checked:max-lg:block z-40"
      ></label>

      <div className="navbar container mx-auto z-50 relative py-3">
      
        <div className="navbar-start">
          <label 
            htmlFor="navbar-1-toggle" 
            className="btn btn-ghost lg:hidden text-cyan-500 hover:bg-cyan-50 mr-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          
          <Link href="/" className="text-2xl normal-case hover:bg-cyan-50 px-3 py-1.5 rounded-md transition-all duration-200 flex items-center tracking-tight">
            <span className="font-extrabold text-cyan-500">i</span>
            <span className="font-black text-slate-800 tracking-tighter">DEA</span>
            <span className="ml-1.5 px-1.5 py-0.5 text-xs font-bold rounded-xs bg-slate-800 text-cyan-400 border border-cyan-400/20 tracking-widest uppercase">
              Vault
            </span>
          </Link>
        </div>

        
        <div className="navbar-end space-x-4">
          <ul className="menu menu-horizontal px-1 gap-1 hidden lg:flex font-semibold text-slate-700">
            <li>
              <Link href="/" className={`hover:bg-cyan-50 px-3 py-2 transition-all duration-150 ${path === "/" ? "text-cyan-500 border-b-2 border-cyan-400 rounded-none font-bold" : "hover:text-slate-900"}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/ideas" className={`hover:bg-cyan-50 px-3 py-2 transition-all duration-150 ${path === "/ideas" ? "text-cyan-500 border-b-2 border-cyan-400 rounded-none font-bold" : "hover:text-slate-900"}`}>
                Ideas
              </Link>
            </li>
            <li>
              <Link href="/add-ideas" className={`hover:bg-cyan-50 px-3 py-2 transition-all duration-150 ${path === "/add-ideas" ? "text-cyan-500 border-b-2 border-cyan-400 rounded-none font-bold" : "hover:text-slate-900"}`}>
                Add Ideas
              </Link>
            </li>
            <li>
              <Link href="/my-ideas" className={`hover:bg-cyan-50 px-3 py-2 transition-all duration-150 ${path === "/my-ideas" ? "text-cyan-500 border-b-2 border-cyan-400 rounded-none font-bold" : "hover:text-slate-900"}`}>
                My Ideas
              </Link>
            </li>
            <li>
              <Link href="/my-interactions" className={`hover:bg-cyan-50 px-3 py-2 transition-all duration-150 ${path === "/my-interactions" ? "text-cyan-500 border-b-2 border-cyan-400 rounded-none font-bold" : "hover:text-slate-900"}`}>
                My Interactions
              </Link>
            </li>
          </ul>

          {user ? (
            <Profile user={user} handleSignOut={handleSignOut}/>
          ) : (
            <Link href="/signin" className="px-4 py-2 font-bold text-sm rounded-full bg-cyan-400 text-slate-900 hover:bg-cyan-500 transition-all shadow-xs">
              Sign In
            </Link>
          )}
        </div>
      </div>

      
      <div className="absolute top-full left-0 w-full bg-slate-900 rounded-b-md shadow-lg hidden peer-checked:max-lg:block z-50 border-t border-slate-800">
        <ul className="menu menu-vertical p-4 gap-1 text-slate-300">
          <li>
            <Link href="/" className={`hover:bg-slate-800 hover:text-cyan-400 ${path === "/" ? "bg-slate-800 border-l-4 border-cyan-400 font-bold text-cyan-400" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/ideas" className={`hover:bg-slate-800 hover:text-cyan-400 ${path === "/ideas" ? "bg-slate-800 border-l-4 border-cyan-400 font-bold text-cyan-400" : ""}`}>
              Ideas
            </Link>
          </li>
          <li>
            <Link href="/add-ideas" className={`hover:bg-slate-800 hover:text-cyan-400 ${path === "/add-ideas" ? "bg-slate-800 border-l-4 border-cyan-400 font-bold text-cyan-400" : ""}`}>
              Add Ideas
            </Link>
          </li>
          <li>
            <Link href="/my-ideas" className={`hover:bg-slate-800 hover:text-cyan-400 ${path === "/my-ideas" ? "bg-slate-800 border-l-4 border-cyan-400 font-bold text-cyan-400" : ""}`}>
              My Ideas
            </Link>
          </li>
          <li>
            <Link href="/my-interactions" className={`hover:bg-slate-800 hover:text-cyan-400 ${path === "/my-interactions" ? "bg-slate-800 border-l-4 border-cyan-400 font-bold text-cyan-400" : ""}`}>
              My Interactions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;