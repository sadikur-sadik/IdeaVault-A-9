'use client'

import { useState } from 'react';
import { motion } from 'motion/react';
import { MdPoll, MdCheckCircle } from 'react-icons/md';
import { useSession } from '@/lib/auth-client';
import { toast, Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation';

const PollWidget = ({ ideaId, poll, voteInPoll }) => {
  const session = useSession();
  const router = useRouter();
  const userId = session?.data?.user?.id || session?.data?.session?.userId;

  const [currentPoll, setCurrentPoll] = useState(poll);
  const [isVoting, setIsVoting] = useState(false);

  if (!currentPoll || !currentPoll.question || !Array.isArray(currentPoll.options)) {
    return null;
  }

  const options = currentPoll.options || [];
  const totalVotes = options.reduce((sum, opt) => sum + (opt.votes ? opt.votes.length : 0), 0);

  const handleVote = async (optionId) => {
    if (!userId) {
      toast.warn('Please sign in to participate in the validation poll!', {
        position: 'top-center',
        autoClose: 4000,
        transition: Bounce,
      });
      router.push('/signin');
      return;
    }

    if (isVoting) return;

    // Optimistic UI update
    const previousPoll = { ...currentPoll };
    const updatedOptions = options.map((opt) => {
      const filteredVotes = (opt.votes || []).filter((id) => id !== userId);
      if (opt.id === optionId) {
        filteredVotes.push(userId);
      }
      return {
        ...opt,
        votes: filteredVotes,
      };
    });

    setCurrentPoll({
      ...currentPoll,
      options: updatedOptions,
    });

    setIsVoting(true);

    try {
      const res = await voteInPoll(ideaId, optionId);
      if (res?.error) {
        setCurrentPoll(previousPoll);
        toast.error(res.error || 'Failed to submit vote', {
          position: 'top-center',
          autoClose: 4000,
          transition: Bounce,
        });
      } else if (res?.poll) {
        setCurrentPoll(res.poll);
        toast.success('Vote recorded!', {
          position: 'top-center',
          autoClose: 3000,
          transition: Bounce,
        });
      }
    } catch (err) {
      setCurrentPoll(previousPoll);
      toast.error('An error occurred while voting.', {
        position: 'top-center',
        autoClose: 4000,
        transition: Bounce,
      });
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <div className="shadow-sm shadow-cyan-400 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md space-y-4 my-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-2">
        <div className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400 font-bold">
          <MdPoll className="w-5 h-5" />
          <span className="text-base uppercase tracking-wider">Validation Poll</span>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-400/20 text-cyan-600 dark:text-cyan-300 border border-cyan-400/30">
          {totalVotes} {totalVotes === 1 ? 'Vote' : 'Votes'}
        </span>
      </div>

      {/* Question */}
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
        {currentPoll.question}
      </h3>

      {/* Options List */}
      <div className="space-y-3">
        {options.map((option) => {
          const voteCount = option.votes ? option.votes.length : 0;
          const percentage = totalVotes > 0 ? Math.round((voteCount / totalVotes) * 100) : 0;
          const hasVoted = userId && option.votes && option.votes.includes(userId);

          return (
            <button
              key={option.id}
              onClick={() => handleVote(option.id)}
              disabled={isVoting}
              className={`relative w-full text-left p-3.5 rounded-xl border transition-all duration-200 overflow-hidden group ${
                hasVoted
                  ? 'border-cyan-400 bg-cyan-500/10 shadow-sm shadow-cyan-400/40 ring-1 ring-cyan-400'
                  : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 hover:border-cyan-400/50 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {/* Animated Progress Bar Fill */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`absolute inset-y-0 left-0 ${
                  hasVoted
                    ? 'bg-cyan-400/25 dark:bg-cyan-500/30'
                    : 'bg-slate-200/60 dark:bg-slate-800/80 group-hover:bg-cyan-400/15'
                }`}
              />

              {/* Option Content Overlay */}
              <div className="relative z-10 flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2 font-medium text-slate-900 dark:text-slate-100">
                  {hasVoted && <MdCheckCircle className="text-cyan-400 w-4 h-4 shrink-0" />}
                  <span>{option.text}</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 whitespace-nowrap">
                  <span>{percentage}%</span>
                  <span className="text-slate-400 dark:text-slate-500">({voteCount})</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PollWidget;
