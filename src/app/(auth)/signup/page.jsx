'use client'

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Link from "next/link";
import { Bounce, toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: newData.name,
      email: newData.email,
      password: newData.password,
      image: newData.image,
      callbackURL: "http://localhost:3000",
    });

    if (data) {

      toast.success('Sign Up Successfull!', {
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
      router.push("/signin");
    } else {
      toast.error(`Sign Up Failed! ${error.message}`, {
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
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      toast.success('Sign Up Successfull!', {
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
    } catch (error) {
      toast.error(`Sign Up Failed! ${error.message}`, {
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
  };

  return (
    <section className="flex items-center justify-center min-h-[80vh] container mx-auto md:py-10 py-5">
      <div className="w-full max-w-sm px-4 sm:px-0">

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 flex flex-wrap justify-center items-center gap-x-2">
          <span>Create An Account?</span>
          <span className="text-cyan-400">Sign Up</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="w-full p-6 border border-slate-300 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/50 backdrop-blur-md shadow-md dark:shadow-none flex flex-col gap-4">

            <div>
              <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Name</label>
              <input
                name="name"
                type="text"
                className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                placeholder="Name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Image URL</label>
              <input
                name="image"
                type="text"
                className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                placeholder="Image URL"
                required
              />
            </div>

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
                  minLength={6}
                  pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Must be at least 6 characters long and include both uppercase and lowercase letters."
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
              Sign Up
            </button>
            <div className="relative flex items-center justify-center my-1">
              <div className="border-t border-slate-200 dark:border-slate-800 w-full"></div>
              <span className="absolute bg-white dark:bg-[#0f172a] px-3 text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">Or</span>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 rounded-full h-10 font-medium bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors shadow-sm"
            >
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g>
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Sign In with Google
            </button>
            <p className="text-center text-sm text-slate-600 dark:text-slate-400 mt-2">
              Already have an account?
              <Link href="/signin" className="text-cyan-500 dark:text-cyan-400 font-medium hover:underline">
                Sign In
              </Link>
            </p>

          </div>
        </form>

      </div>
    </section>
  );
};

export default SignUp;