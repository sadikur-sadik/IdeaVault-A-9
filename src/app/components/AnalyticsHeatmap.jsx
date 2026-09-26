'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { LuLightbulb, LuVote, LuMessageSquare, LuArrowRight, LuActivity, LuFlame } from 'react-icons/lu';
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

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto">
      <div className="w-full space-y-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider mb-3">
              <LuActivity className="w-3.5 h-3.5" />
              <span>Platform Intelligence</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
              Live Platform <span className="text-cyan-600 dark:text-cyan-400">Analytics & Heatmap</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Real-Time Engine Active</span>
          </div>
        </div>

        {/* Top Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between text-cyan-600 dark:text-cyan-400">
              <LuLightbulb className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Ideas</span>
            </div>
            <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {loadingStats ? '...' : (stats?.totalIdeas ?? 0)}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Launched by creators</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between text-cyan-600 dark:text-cyan-400">
              <MdPoll className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Validation Polls</span>
            </div>
            <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {loadingStats ? '...' : (stats?.totalPolls ?? 0)}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Attached to startup ideas</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between text-cyan-600 dark:text-cyan-400">
              <LuVote className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Community Votes</span>
            </div>
            <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {loadingStats ? '...' : (stats?.totalVotes ?? 0)}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Cast across all polls</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md space-y-2">
            <div className="flex items-center justify-between text-cyan-600 dark:text-cyan-400">
              <LuMessageSquare className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Comments</span>
            </div>
            <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {loadingStats ? '...' : (stats?.totalComments ?? 0)}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Collaborative discussions</p>
          </div>
        </div>

        {/* Heatmap Bar / Category Distribution */}
        <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
              <LuFlame className="w-5 h-5 text-cyan-500" />
              <span>Trending Categories Heatmap</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">Category Volume Ratios</span>
          </div>

          {/* Visual Bar Ratio Segment */}
          <div className="h-4 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden flex">
            {categories.map((cat, idx) => {
              const bgColors = [
                'bg-cyan-500',
                'bg-blue-500',
                'bg-emerald-500',
                'bg-purple-500',
                'bg-amber-500',
                'bg-pink-500'
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

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                selectedCategory === 'All'
                  ? 'bg-cyan-400 text-slate-950 border-cyan-400 shadow-sm shadow-cyan-400/30'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-cyan-400'
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
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border flex items-center gap-2 ${
                    isActive
                      ? 'bg-cyan-400 text-slate-950 border-cyan-400 shadow-sm shadow-cyan-400/30'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-cyan-400'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Micro-Preview Grid */}
        <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Showing Ideas in <span className="text-cyan-500">{selectedCategory}</span>
            </h3>
            <span className="text-xs text-slate-500 font-mono">Top 3 Submissions</span>
          </div>

          {loadingIdeas ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-64 rounded-2xl bg-slate-200 dark:bg-slate-800/60 p-6 space-y-4" />
              ))}
            </div>
          ) : ideas.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-500">
              No ideas found for this category yet. Be the first creator to submit one!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {ideas.map((idea) => (
                  <motion.div
                    key={idea._id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-md hover:border-cyan-400 dark:hover:border-cyan-400/80 transition-all duration-300 group"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="badge text-xs font-bold text-slate-900 dark:text-white rounded-full border bg-cyan-400/30 border-cyan-400/60 px-2.5 py-0.5">
                          {idea.category || 'General'}
                        </span>
                        {idea.poll && (
                          <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                            <MdPoll className="w-3.5 h-3.5" /> Poll Active
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 transition-colors line-clamp-1">
                        {idea.title}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {idea.shortDescription}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Creator</p>
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate max-w-[120px]">
                          {idea.userName || 'Anonymous'}
                        </p>
                      </div>

                      <Link href={`/ideas/${idea._id}`}>
                        <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-200">
                          <span>Explore Idea</span>
                          <LuArrowRight className="w-3.5 h-3.5" />
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
