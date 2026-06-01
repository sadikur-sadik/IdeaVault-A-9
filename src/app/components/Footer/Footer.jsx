"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-900 transition-colors duration-200">
      <div className="container mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link 
              href="/" 
              className="text-2xl normal-case hover:bg-slate-100 dark:hover:bg-slate-900 py-1.5 rounded-md transition-all duration-200 flex items-center tracking-tight shrink-0"
            >
              <span className="font-extrabold text-cyan-600 dark:text-cyan-400">i</span>
              <span className="font-black text-slate-950 dark:text-slate-100 tracking-tighter">DEA</span>
              <span className="ml-1.5 px-1.5 py-0.5 text-xs font-bold rounded-xs bg-slate-950 dark:bg-slate-800 text-cyan-400 border border-cyan-400/20 tracking-widest uppercase">
                Vault
              </span>
            </Link>
            
            <p className="text-sm max-w-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Where groundbreaking business ideas are secured, shared, and nurtured. Secure your vision, collaborate with global minds, and launch your next venture.
            </p>

            <div className="mt-2 space-y-1.5 text-sm w-full flex flex-col items-center md:items-start">
              <h4 className="font-bold uppercase tracking-wider text-xs text-slate-800 dark:text-slate-200">
                Contact Info
              </h4>
              <p className="flex items-center gap-2">
                <span className="text-cyan-600 dark:text-cyan-400">📍</span> Sylhet, Bangladesh
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-600 dark:text-cyan-400">✉️</span> 
                <a 
                  href="mailto:sadikur.r.sadik@gmail.com" 
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  sadikur.r.sadik@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3 md:pl-10">
            <h3 className="font-bold uppercase tracking-wider text-sm text-slate-800 dark:text-slate-200">
              Useful Links
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ideas" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Explore Ideas
                </Link>
              </li>
              <li>
                <Link href="/add-ideas" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Add New Idea
                </Link>
              </li>
              <li>
                <Link href="/my-ideas" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  My Vault
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="space-y-2">
              <h3 className="font-bold uppercase tracking-wider text-sm text-slate-800 dark:text-slate-200">
                Connect With Us
              </h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
                Follow our dynamic updates, trending business breakdowns, and ecosystem optimization updates.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-1">
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all duration-200"
                aria-label="X (formerly Twitter)"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-900/60 text-center text-xs tracking-wider text-slate-500">
          © 2026 IDEAVAULT OPERATIONS. ALL RIGHTS SECURED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;