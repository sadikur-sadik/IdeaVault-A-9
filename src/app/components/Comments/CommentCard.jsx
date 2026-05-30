'use client'
import Image from 'next/image';
import UpdateModal from './Update/UpdateModal';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { authClient } from '@/lib/auth-client';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


export default function CommentCard({ comment: commentdata, deleteComment, updateComment }) {

  const userData = authClient.useSession()
  const {
    _id,
    comment,
    userID,
    userName,
    userImage,
    timeStamp
  } = commentdata;

  const user = userData?.data?.user?.id == userID

  
  const time = `${timeStamp.date}/${timeStamp.month}/${timeStamp.year}`
  const handleDelete = async () => {
    await deleteComment(_id)
  }



  return (
    
    <section className='flex justify-between items-start w-full p-5'>
      <div className='md:p-3 p-1 flex gap-1 md:gap-3'>

        <div className='w-8 h-8 rounded-full relative overflow-hidden shrink-0'>
          <Image src={userImage} fill priority alt={`${userName} commented`} className='object-cover rounded-full'></Image>
        </div>


        <div className=''>
          <div className='space-x-3'>@<span className='font-bold text-sm'>{userName.split(' ').join('').toLowerCase()} </span> <span className='text-[8px] dark:text-slate-300 text-slate-600'>{time}</span></div>
          <div className='text-xs'>{comment}</div>
        </div>
      </div>

      <div className="dropdown dropdown-top dropdown-end mt-3">
        <div tabIndex={0} role="button" className="m-1">
          <BsThreeDotsVertical />
        </div>

        <div tabIndex={0} className="dropdown-content z-1 p-2 shadow bg-base-100 border border-base-300 mb-2 rounded-xl">

          <div className="text-sm">
            {user ? (
              <>
                <button className='flex items-center gap-1 dark:text-slate-300 text-slate-600'><FaEdit className='w-4 h-3' /><span>Edit</span></button>
                <button onClick={handleDelete} className='flex items-center gap-1 text-red-600'><MdOutlineDelete className='w-4 h-4' /><span>Delete</span></button>
              </>
            ) : (
              <button className='flex items-center gap-1 text-red-600'><FaArrowUpRightFromSquare  className='w-4 h-4' /><span>Report</span></button>
            )}
          </div>

        </div>
      </div>
    </section >
  );
}