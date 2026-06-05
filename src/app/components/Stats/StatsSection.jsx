'use client'
import { easeOut, motion } from "motion/react"

const StatsSection = () => {

  const statsData = [
    { value: "12K+", label: "Active Innovators" },
    { value: "45K+", label: "Constructive Feedback" },
    { value: "850+", label: "Collabs Launched" },
    { value: "3.2M", label: "Monthly Impressions" }
  ];

  return (
    <section className="bg-slate-50 max-w-350 dark:bg-slate-950 text-slate-900 dark:text-white py-20 px-4 md:px-8 overflow-hidden">

      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: "-20%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: .8, ease: easeOut }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Growing Ecosystem in <span className="text-cyan-600 dark:text-cyan-400">Numbers</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            Real data from real builders turning raw concepts into global products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="lg:col-span-5 bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden"
          >
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
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
                }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-colors duration-300"
              >
                <p className="text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;