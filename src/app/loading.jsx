"use client";

import React from "react";
import { PuffLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] w-full space-y-6">
      <div className="relative flex items-center justify-center">
        <PuffLoader
          color="#22d3ee" 
          size={80}
          speedMultiplier={1.2}
        />
      </div>
      <div className="text-center space-y-1">
        <p className="text-base font-semibold tracking-wider text-cyan-400 uppercase animate-pulse">
          Initializing
        </p>
        <p className="text-xs text-slate-400 max-w-xs">
          Fetching secure data modules...
        </p>
      </div>
    </div>
  );
}

export default loading;