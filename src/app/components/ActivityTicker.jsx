'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LuLightbulb, LuMessageSquare } from 'react-icons/lu';
import { MdPoll } from 'react-icons/md';
import { formatDistanceToNow } from 'date-fns';

const formatTimeAgo = (timeStr) => {
  if (!timeStr) return 'Just now';
  try {
    const date = new Date(timeStr);
    if (isNaN(date.getTime())) return 'Just now';
    return formatDistanceToNow(date, { addSuffix: true });
  } catch (err) {
    return 'Just now';
  }
};

export default function ActivityTicker() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
      const res = await fetch(`${baseUrl}/activity-feed`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setActivities(data);
        }
      }
    } catch (err) {
      console.error('Failed to fetch activity feed:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
    const interval = setInterval(fetchActivities, 15000);
    return () => clearInterval(interval);
  }, []);

  if (loading && activities.length === 0) {
    return (
      <div className="w-full bg-slate-100/80 dark:bg-slate-900/80 border-y border-slate-200 dark:border-slate-800 backdrop-blur-md py-2.5 transition-colors">
        <div className="w-full max-w-full 2xl:max-w-[1800px] 3xl:max-w-[2400px] mx-auto px-4 md:px-8 flex items-center gap-4 overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 shrink-0 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Live Pulse</span>
          </div>
          <div className="flex gap-4 animate-pulse shrink-0">
            <div className="h-7 w-64 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
            <div className="h-7 w-72 bg-slate-200 dark:bg-slate-800 rounded-full hidden sm:block"></div>
            <div className="h-7 w-56 bg-slate-200 dark:bg-slate-800 rounded-full hidden md:block"></div>
          </div>
        </div>
      </div>
    );
  }

  if (activities.length === 0) {
    return null;
  }

  const displayItems =
    activities.length < 5
      ? [...activities, ...activities, ...activities, ...activities]
      : [...activities, ...activities];

  return (
    <div className="w-full bg-slate-100/80 dark:bg-slate-900/80 border-y border-slate-200 dark:border-slate-800 backdrop-blur-md py-2.5 transition-colors overflow-hidden relative">
      <div className="w-full max-w-full 2xl:max-w-[1800px] 3xl:max-w-[2400px] mx-auto px-4 md:px-8 flex items-center gap-4">
        {/* Live Indicator Pill */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 shrink-0 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider z-10 shadow-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="whitespace-nowrap font-mono text-[11px] md:text-xs">Live Pulse</span>
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 shrink-0 hidden sm:block"></div>

        {/* Scrolling Ticker Track */}
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-marquee flex items-center gap-4 md:gap-6">
            {displayItems.map((item, idx) => (
              <Link
                key={`${item.id}-${idx}`}
                href={`/ideas/${item.targetId}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 backdrop-blur-md text-xs md:text-sm text-slate-700 dark:text-slate-200 hover:border-cyan-400 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-sm hover:shadow-cyan-400/20 transition-all duration-200 shrink-0 group cursor-pointer"
              >
                <span className="p-1 rounded-full bg-cyan-400/10 dark:bg-cyan-400/20 text-cyan-600 dark:text-cyan-400 shrink-0">
                  {item.type === 'idea_created' && <LuLightbulb className="w-3.5 h-3.5" />}
                  {item.type === 'comment_added' && <LuMessageSquare className="w-3.5 h-3.5" />}
                  {item.type === 'poll_voted' && <MdPoll className="w-3.5 h-3.5" />}
                </span>

                <span className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-500 transition-colors">
                  {item.user}
                </span>

                <span className="text-slate-500 dark:text-slate-400 font-normal">
                  {item.type === 'idea_created' && 'launched idea'}
                  {item.type === 'comment_added' && 'commented on'}
                  {item.type === 'poll_voted' && 'voted on poll in'}
                </span>

                <span className="font-medium text-slate-800 dark:text-slate-200 max-w-[160px] sm:max-w-[220px] md:max-w-[280px] truncate group-hover:underline">
                  "{item.targetTitle}"
                </span>

                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono ml-1 whitespace-nowrap">
                  {formatTimeAgo(item.timeAgo)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
