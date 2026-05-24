'use client'
import Image from 'next/image';

export default function CommentCard({comment:commentdata , deleteComment}) {
  
  const { 
    _id, 
    comment, 
    userID, 
    userName, 
    userImage, 
    timeStamp 
  } = commentdata;

  const handleDelete = async () => {

    await deleteComment(_id)
  } 

  

  return (
    <div className="max-w-md p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex gap-3 items-start hover:shadow-md transition-shadow duration-200">
      
      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-gray-100">
        <Image
          src={userImage}
          alt={`${userName}'s profile picture`}
          fill
          sizes="40px"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Content Area */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <h4 className="text-sm font-semibold text-gray-900 truncate">
            {userName}
          </h4>
          <span className="text-xs text-gray-400 shrink-0">
            
          </span>
        </div>
        
        <p className="mt-1 text-sm text-gray-600 wrap-break-word leading-relaxed">
          {comment}
        </p>
      </div>

      <div className='flex flex-col gap-3'>
        <button>
          Edit
        </button>
        <button className='btn btn-error' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}