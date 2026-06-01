'use client'

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Link from "next/link";

const SignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: newData.email, 
      password: newData.password,
      rememberMe: true 
    });

    if (data) {
      router.push("/");
    } else {
      alert(`Error! ${error.message}`);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-[70vh] container mx-auto md:py-10 py-5">
      <div className="w-full max-w-sm px-4 sm:px-0">
        
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 flex flex-wrap justify-center items-center gap-x-2">
          <span>Already have an account?</span> 
          <span className="text-cyan-400">Sign In</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="w-full p-6 border border-slate-300 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/50 backdrop-blur-md shadow-md dark:shadow-none flex flex-col gap-4">
            
            <div>
              <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Email</label>
              <input 
                name="email" 
                type="email" 
                className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                placeholder="Email" 
                required 
              />
            </div>

            <div>
              <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Password</label>
              <div className="relative w-full flex items-center">
                <input 
                  name="password" 
                  type={showPassword ? "text" : "password"} 
                  className="w-full h-10 pl-5 pr-12 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500" 
                  placeholder="Password" 
                  required 
                />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-gray-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400"
                >
                  {showPassword ? (
                    <IoEyeOffOutline className="w-5 h-5" />
                  ) : (
                    <IoEyeOutline className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full rounded-full h-10 mt-2 font-semibold bg-cyan-400 text-slate-950 border border-cyan-400 hover:bg-transparent hover:text-cyan-400 transition-colors"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-2">
              Don't have an account?
              <Link href="/signup" className="text-cyan-500 dark:text-cyan-400 font-medium hover:underline">
                Sign Up
              </Link>
            </p>

          </div>
        </form>

      </div>
    </section>
  );
};

export default SignIn;