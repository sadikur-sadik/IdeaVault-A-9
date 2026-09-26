'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, easeOut, AnimatePresence } from "motion/react";
import { LuLightbulb, LuMessageSquare, LuActivity, LuFlame } from 'react-icons/lu';
import { MdPoll } from 'react-icons/md';

export default function AnalyticsHeatmap() {
  const [stats, setStats] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ideas, setIdeas] = useState([]);
  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingIdeas, setLoadingIdeas] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchOverviewStats = async () => {
      try {
        const res = await fetch(`${baseUrl}/stats/overview`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error('Failed to fetch stats overview:', err);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchOverviewStats();
  }, [baseUrl]);

  useEffect(() => {
    const fetchCategoryIdeas = async () => {
      setLoadingIdeas(true);
      try {
        const queryParam = selectedCategory === 'All' ? '' : `category=${encodeURIComponent(selectedCategory)}&`;
        const res = await fetch(`${baseUrl}/ideas?${queryParam}limit=3`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setIdeas(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error('Failed to fetch category ideas:', err);
      } finally {
        setLoadingIdeas(false);
      }
    };

    fetchCategoryIdeas();
  }, [selectedCategory, baseUrl]);

  const categories = stats?.categories || [];

  const metrics = [
    { label: "Total Ideas Launched", value: loadingStats ? '...' : (stats?.totalIdeas ?? 0), icon: <LuLightbulb className="text-cyan-600 dark:text-cyan-400 text-2xl" /> },
    { label: "Active Validation Polls", value: loadingStats ? '...' : (stats?.totalPolls ?? 0), icon: <MdPoll className="text-cyan-600 dark:text-cyan-400 text-2xl" /> },
    { label: "Community Poll Votes", value: loadingStats ? '...' : (stats?.totalVotes ?? 0), icon: <LuActivity className="text-cyan-600 dark:text-cyan-400 text-2xl" /> },
    { label: "Collaborative Comments", value: loadingStats ? '...' : (stats?.totalComments ?? 0), icon: <LuMessageSquare className="text-cyan-600 dark:text-cyan-400 text-2xl" /> }
  ];

  return (
    <section className="bg-slate-100 dark:bg-slate-900/50 text-slate-900 dark:text-white md:py-20 py-10 px-4 md:px-8 max-w-7xl 2xl:max-w-[1800px] 3xl:max-w-[2400px] mx-auto w-full">
      <div className="container mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: "-20%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: .8, ease: easeOut }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400 text-cyan-600 dark:text-cyan-300 font-bold text-xs uppercase tracking-wider mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Live Ecosystem Intelligence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Live Platform <span className="text-cyan-600 dark:text-cyan-400">Analytics & Heatmap</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Real data from real builders turning raw concepts into global products.
          </p>
        </motion.div>

        {/* Top Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 transition-colors duration-300 shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                {m.icon}
                <span className="badge text-[10px] font-bold text-slate-900 dark:text-white rounded-full border bg-cyan-400/30 border-cyan-400 px-2 py-0.5">
                  Live
                </span>
              </div>
              <p className="text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                {m.value}
              </p>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Heatmap Bar / Category Ratios */}
        <div className="bg-slate-200/60 dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-md mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-slate-100">
              <LuFlame className="text-cyan-600 dark:text-cyan-400 w-6 h-6" />
              <span>Trending Categories Heatmap</span>
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">
              Activity Ratios by Category
            </span>
          </div>

          {/* Visual Percentage Bar */}
          <div className="h-4 w-full rounded-full bg-slate-300 dark:bg-slate-800 overflow-hidden flex">
            {categories.map((cat, idx) => {
              const bgColors = [
                'bg-cyan-500',
                'bg-cyan-400',
                'bg-emerald-500',
                'bg-blue-500',
                'bg-indigo-500',
                'bg-teal-500'
              ];
              const color = bgColors[idx % bgColors.length];
              return (
                <div
                  key={cat.name}
                  style={{ width: `${Math.max(cat.percentage, 4)}%` }}
                  className={`${color} h-full transition-all duration-500`}
                  title={`${cat.name} (${cat.percentage}%)`}
                />
              );
            })}
          </div>

          {/* Category Micro-Filter Buttons */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`btn px-4 py-2 rounded-full font-bold text-xs transition-colors duration-200 border ${
                selectedCategory === 'All'
                  ? 'bg-cyan-400 text-slate-950 border-cyan-400 hover:bg-cyan-500'
                  : 'bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-cyan-400 hover:text-cyan-500'
              }`}
            >
              All Categories
            </button>

            {categories.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.name.toLowerCase();
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`btn px-4 py-2 rounded-full font-bold text-xs transition-colors duration-200 border flex items-center gap-2 ${
                    isActive
                      ? 'bg-cyan-400 text-slate-950 border-cyan-400 hover:bg-cyan-500'
                      : 'bg-transparent text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-cyan-400 hover:text-cyan-500'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`badge text-[10px] font-bold rounded-full px-2 py-0.5 border ${
                    isActive
                      ? 'bg-slate-950/20 border-slate-950/30 text-slate-950'
                      : 'bg-cyan-400/20 border-cyan-400/40 text-cyan-600 dark:text-cyan-300'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Micro-Preview Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Showing Submissions in <span className="text-cyan-600 dark:text-cyan-400">{selectedCategory}</span>
            </h3>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Top 3 Ideas
            </span>
          </div>

          {loadingIdeas ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-64 rounded-2xl bg-slate-200/60 dark:bg-slate-900 p-6 animate-pulse" />
              ))}
            </div>
          ) : ideas.length === 0 ? (
            <div className="p-10 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500">
              No ideas submitted in this category yet. Be the first innovator to launch one!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {ideas.map((idea) => (
                  <motion.div
                    key={idea._id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    whileHover={{ y: "-3%", transition: { duration: 0.2, ease: easeOut } }}
                    className="mx-auto hover:shadow-lg dark:bg-slate-900/50 bg-white border-t-8 border-t-cyan-400 w-full rounded-2xl p-5 shadow-sm shadow-cyan-400 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="badge text-xs font-bold text-slate-900 dark:text-white rounded-full border bg-cyan-400/50 border-cyan-400">
                          {idea.category || 'General'}
                        </div>
                        {idea.poll && (
                          <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                            <MdPoll className="w-4 h-4" /> Poll Attached
                          </span>
                        )}
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 truncate">
                        {idea.title}
                      </h4>

                      <p className="text-xs dark:text-slate-300 text-slate-600 line-clamp-2">
                        {idea.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <p className="text-xs">
                        <span className="dark:text-slate-400 text-slate-600">Creator: </span>
                        <span className="font-bold text-slate-900 dark:text-slate-100">{idea.userName || 'Anonymous'}</span>
                      </p>

                      <Link href={`/ideas/${idea._id}`}>
                        <button className="hover:bg-cyan-400 hover:text-slate-950 font-bold px-4 py-1.5 text-xs rounded-full text-cyan-400 bg-transparent border border-cyan-400 transition-colors">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
