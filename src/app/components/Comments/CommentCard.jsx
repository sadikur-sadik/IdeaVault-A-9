'use client'
import Image from 'next/image';
import { MdOutlineDelete } from "react-icons/md";
import { authClient } from '@/lib/auth-client';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import UpdateCommentModal from './Update/EditComment/UpdateCommentModal';
import { Bounce, toast } from 'react-toastify';

const CommentCard = ({ comment: commentdata, deleteComment, updateComment }) => {
  const userData = authClient.useSession();
  const {
    _id,
    comment,
    userID,
    userName,
    userImage,
    timeStamp
  } = commentdata;

  const user = userData?.data?.user?.id === userID;
  const time = `${timeStamp.hour}:${timeStamp.minute} ${timeStamp.date}/${timeStamp.month}/${timeStamp.year}`;
   const defaultImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop";
  const handleDelete = async () => {
    const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
    
    try {
      await deleteComment(_id);

      toast.info('Comment Deleted', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? "dark" : "light",
        transition: Bounce,
      });

    } catch (error) {
      toast.error(error.message || 'Failed to Delete. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isDark ? "dark" : "light",
        transition: Bounce,
      });
    }
  };

  return (
    <section className=' mt-2 flex flex-wrap justify-between items-center w-full p-4 gap-4 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200'>

      <div className='flex gap-3 items-start min-w-60 flex-1'>
        <div className='w-9 h-9 rounded-full relative overflow-hidden shrink-0 ring-1 ring-slate-300 dark:ring-slate-700'>
          <Image
            src={userImage || defaultImage}
            fill
            priority
            alt={`${userName} commented`}
            className='object-cover'
          />
        </div>

        <div className="flex-1 min-w-0 text-left">
          <div className='flex items-center gap-2 flex-wrap'>
            <span className='font-bold text-sm text-slate-900 dark:text-white break-all'>
              @{userName.split(' ').join('').toLowerCase()}
            </span>
            <span className='text-[10px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap'>
              {time}
            </span>
          </div>

          <p className='text-sm text-slate-700 dark:text-slate-300 mt-1 wrap-break-word leading-relaxed'>
            {comment}
          </p>
        </div>
      </div>

      <div className='flex items-center gap-2 shrink-0 ml-auto'>
        {user ? (
          <>
            <UpdateCommentModal currentComment={comment} updateComment={updateComment} id={_id} />

            <button
              onClick={handleDelete}
              className='p-2 text-rose-500 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/30 rounded-full transition-colors'
              title="Delete"
            >
              <MdOutlineDelete className='w-5 h-5' />
            </button>
          </>
        ) : (
          <button
            className='p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 rounded-full transition-colors'
            title="Report"
          >
            <FaArrowUpRightFromSquare className='w-4 h-4' />
          </button>
        )}
      </div>
    </section>
  );
};

export default CommentCard;