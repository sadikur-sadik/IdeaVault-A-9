"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Profile from "./Profile/Profile";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

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
    <div className="relative text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 w-full shadow-md border-b border-slate-200 dark:border-slate-900/50 transition-colors duration-200">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />

      {/* Mobile Menu Backdrop */}
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 bg-slate-200/50 dark:bg-slate-950/50 backdrop-blur-xs hidden peer-checked:max-lg:block z-40"
      ></label>

      <div className="container mx-auto z-50 relative py-3 px-4 flex justify-between items-center h-16">
        <div className="flex items-center gap-2 lg:min-w-45">
          <label
            htmlFor="navbar-1-toggle"
            className="btn btn-ghost lg:hidden text-cyan-600 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 mr-1 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>

          {/* Logo Branding */}
          <Link href="/" className="text-2xl normal-case hover:bg-slate-100 dark:hover:bg-slate-900 px-3 py-1.5 rounded-md transition-all duration-200 flex items-center tracking-tight shrink-0">
            <span className="font-extrabold text-cyan-600 dark:text-cyan-400">i</span>
            <span className="font-black text-slate-950 dark:text-slate-100 tracking-tighter">DEA</span>
            <span className="ml-1.5 px-1.5 py-0.5 text-xs font-bold rounded-xs bg-slate-950 dark:bg-slate-800 text-cyan-400 border border-cyan-400/20 tracking-widest uppercase">
              Vault
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap text-sm xl:text-base">
            <Link href="/" className={`hover:bg-slate-100 dark:hover:bg-slate-900 px-3 py-2 rounded-md transition-all duration-150 ${path === "/" ? "text-cyan-600 dark:text-cyan-400 font-bold bg-slate-100/50 dark:bg-slate-900/50" : ""}`}>
              Home
            </Link>
            <Link href="/ideas" className={`hover:bg-slate-100 dark:hover:bg-slate-900 px-3 py-2 rounded-md transition-all duration-150 ${path === "/ideas" ? "text-cyan-600 dark:text-cyan-400 font-bold bg-slate-100/50 dark:bg-slate-900/50" : ""}`}>
              Ideas
            </Link>
            <Link href="/add-ideas" className={`hover:bg-slate-100 dark:hover:bg-slate-900 px-3 py-2 rounded-md transition-all duration-150 ${path === "/add-ideas" ? "text-cyan-600 dark:text-cyan-400 font-bold bg-slate-100/50 dark:bg-slate-900/50" : ""}`}>
              Add Ideas
            </Link>
            <Link href="/my-ideas" className={`hover:bg-slate-100 dark:hover:bg-slate-900 px-3 py-2 rounded-md transition-all duration-150 ${path === "/my-ideas" ? "text-cyan-600 dark:text-cyan-400 font-bold bg-slate-100/50 dark:bg-slate-900/50" : ""}`}>
              My Ideas
            </Link>
            <Link href="/my-interactions" className={`hover:bg-slate-100 dark:hover:bg-slate-900 px-3 py-2 rounded-md transition-all duration-150 ${path === "/my-interactions" ? "text-cyan-600 dark:text-cyan-400 font-bold bg-slate-100/50 dark:bg-slate-900/50" : ""}`}>
              My Interactions
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 lg:min-w-45 shrink-0">
          <ThemeToggle />

          {user ? (
            <Profile user={user} handleSignOut={handleSignOut} />
          ) : (
            <Link href="/signin" className="px-4 py-2 font-bold text-sm rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-500 transition-all shadow-md shrink-0 whitespace-nowrap">
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-950 rounded-b-md shadow-lg hidden peer-checked:max-lg:block z-50 border-t border-slate-100 dark:border-slate-900">
        <ul className="menu menu-vertical p-4 gap-1 text-slate-600 dark:text-slate-300 font-medium">
          <li>
            <Link href="/" className={`block px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-cyan-600 dark:hover:text-cyan-400 ${path === "/" ? "bg-slate-100 dark:bg-slate-900/50 border-l-4 border-cyan-600 dark:border-cyan-400 font-bold text-cyan-600 dark:text-cyan-400" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/ideas" className={`block px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-cyan-600 dark:hover:text-cyan-400 ${path === "/ideas" ? "bg-slate-100 dark:bg-slate-900/50 border-l-4 border-cyan-600 dark:border-cyan-400 font-bold text-cyan-600 dark:text-cyan-400" : ""}`}>
              Ideas
            </Link>
          </li>
          <li>
            <Link href="/add-ideas" className={`block px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-cyan-600 dark:hover:text-cyan-400 ${path === "/add-ideas" ? "bg-slate-100 dark:bg-slate-900/50 border-l-4 border-cyan-600 dark:border-cyan-400 font-bold text-cyan-600 dark:text-cyan-400" : ""}`}>
              Add Ideas
            </Link>
          </li>
          <li>
            <Link href="/my-ideas" className={`block px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-cyan-600 dark:hover:text-cyan-400 ${path === "/my-ideas" ? "bg-slate-100 dark:bg-slate-900/50 border-l-4 border-cyan-600 dark:border-cyan-400 font-bold text-cyan-600 dark:text-cyan-400" : ""}`}>
              My Ideas
            </Link>
          </li>
          <li>
            <Link href="/my-interactions" className={`block px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-cyan-600 dark:hover:text-cyan-400 ${path === "/my-interactions" ? "bg-slate-100 dark:bg-slate-900/50 border-l-4 border-cyan-600 dark:border-cyan-400 font-bold text-cyan-600 dark:text-cyan-400" : ""}`}>
              My Interactions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;