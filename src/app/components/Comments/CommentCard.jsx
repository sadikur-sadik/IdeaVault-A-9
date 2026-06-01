'use client'
import Image from 'next/image';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { authClient } from '@/lib/auth-client';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import UpdateCommentModal from './Update/EditComment/UpdateCommentModal';

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
  const time = `${timeStamp.date}/${timeStamp.month}/${timeStamp.year}`;

  const handleDelete = async () => {
    await deleteComment(_id);
  };

  return (
    <section className='flex justify-between items-start w-full p-5 relative border-b border-slate-100 dark:border-slate-800/50'>
      <div className='md:p-3 p-1 flex gap-3 w-full items-start'>
        <div className='w-9 h-9 rounded-full relative overflow-hidden shrink-0 ring-1 ring-slate-200 dark:ring-slate-800'>
          <Image 
            src={userImage} 
            fill 
            priority 
            alt={`${userName} commented`} 
            className='object-cover'
          />
        </div>

        <div className="flex-1 min-w-0 text-left">
          <div className='flex items-center gap-2 flex-wrap'>
            <span className='font-bold text-sm text-slate-900 dark:text-slate-100'>
              @{userName.split(' ').join('').toLowerCase()}
            </span> 
            <span className='text-[10px] text-slate-400 dark:text-slate-500 font-medium'>
              {time}
            </span>
          </div>
          <p className='text-sm text-slate-600 dark:text-slate-300 mt-1 wrap-break-word leading-relaxed'>
            {comment}
          </p>
        </div>
      </div>

      <div className="dropdown dropdown-bottom dropdown-end shrink-0">
        <div 
          tabIndex={0} 
          role="button" 
          className="m-1 cursor-pointer p-2 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-500 dark:text-slate-400 rounded-full transition-colors"
        >
          <BsThreeDotsVertical className="w-4 h-4" />
        </div>

        <ul 
          tabIndex={0} 
          className="dropdown-content menu z-30 p-1.5 shadow-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl w-32 gap-0.5"
        >
          {user ? (
            <>
              <li className="w-full">
                <UpdateCommentModal currentComment={comment} updateComment={updateComment} id={_id} />
              </li>
              <li className="w-full">
                <button 
                  onClick={handleDelete} 
                  className='flex items-center gap-2 text-rose-600 dark:text-rose-400 px-3 py-2 text-sm font-medium rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/30 w-full text-left cursor-pointer transition-colors'
                >
                  <MdOutlineDelete className='w-4 h-4' />
                  <span>Delete</span>
                </button>
              </li>
            </>
          ) : (
            <li className="w-full">
              <button className='flex items-center gap-2 text-slate-700 dark:text-slate-300 px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 w-full text-left cursor-pointer transition-colors'>
                <FaArrowUpRightFromSquare className='w-3.5 h-3.5' />
                <span>Report</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default CommentCard;