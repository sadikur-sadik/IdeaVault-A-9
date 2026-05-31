import React from 'react';

const StatsSection = () => {
  // Your data array
  const statsData = [
    { value: "12K+", label: "Active Innovators" },
    { value: "45K+", label: "Constructive Feedback" },
    { value: "850+", label: "Collabs Launched" },
    { value: "3.2M", label: "Monthly Impressions" }
  ];

  return (
    <section className="bg-slate-50 max-w-350 dark:bg-slate-950 text-slate-900 dark:text-white py-20 px-4 md:px-8">
      {/* Fixed: Using your exact max-w-350 and container mx-auto classes */}
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Growing Ecosystem in <span className="text-cyan-600 dark:text-cyan-400">Numbers</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            Real data from real builders turning raw concepts into global products.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Card */}
          <div className="lg:col-span-5 bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
            
            {/* Subtle background glow effect */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <h2 className="text-7xl md:text-8xl font-black text-cyan-600 dark:text-cyan-400 mb-4">
                150+
              </h2>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Brilliant Ideas Sparked
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
                Our community turns raw concepts into reality. Connect with thinkers, refine your vision, and collaborate to build the next big breakthrough.
              </p>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 dark:hover:border-cyan-500/30"
              >
                <p className="text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;