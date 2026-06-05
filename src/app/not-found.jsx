'use client'

import Link from "next/link";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full max-w-350 flex items-center justify-center p-4 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-sm w-full text-center"
      >
        <div className="container mx-auto flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
          >
            <FaExclamationTriangle className="text-6xl text-cyan-400 mb-6" />
          </motion.div>

          <h1 className="text-7xl font-extrabold tracking-tight mb-2">
            404
          </h1>

          <h2 className="text-xl font-bold mb-4">
            Page Not Found
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <MotionLink 
            href="/"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors duration-200 shadow-lg shadow-cyan-400/20 cursor-pointer"
          >
            <FaHome className="text-base" />
            Return to Home
          </MotionLink>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;