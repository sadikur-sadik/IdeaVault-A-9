'use client'

import { authClient } from "@/lib/auth-client";
import { getYear, getMinutes, getSeconds, format, getDate, getHours, getMonth } from 'date-fns';
import { AiOutlineSend } from "react-icons/ai";
import { Bounce, toast } from "react-toastify";



const Comment = ({postComment , id ,title,imageUrl}) => {
  
  const date = new Date()

  console.log(date);
  const currentTimeStamp = {
    year: getYear(date),
    month:getMonth(date)+1,
    date: getDate(date),
    hour: getHours(date),
    minute: getMinutes(date),
    second: getSeconds(date),
    
  }

  
  const session = authClient.useSession()
  
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newForm = Object.fromEntries(formData.entries())

    newForm.userID = session.data.user.id;
    newForm.userName = session.data.user.name;
    newForm.userImage = session.data.user.image;
    newForm.ideaID = id;
    newForm.ideaTitle = title;
    newForm.ideaImage = imageUrl;
    newForm.timeStamp = currentTimeStamp;

    try {
      await postComment(newForm)
    toast.success('New Comment Added', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
      

    } catch (error) {
      toast.error(error.message || 'Failed to Add Comment! Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-3 items-center mt-5">
        <input placeholder="Comments" name="comment" className="w-full px-3 py-1 border-b rounded-full"></input>
         <button type="reset" className="md:block hidden rounded-full px-5 py-2 text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Cancel</button>
       <button
                type="submit"
                className="md:block hidden btn rounded-full px-5 py-2 font-semibold bg-cyan-400 text-slate-950 border border-cyan-400 hover:bg-transparent hover:text-cyan-400 text-sm"
              >
                Confirm
              </button>
        <button type="submit" className=" md:hidden p-2 rounded-full bg-cyan-400 text-white hover:bg-cyan-600 hover:border-cyan-600 text-sm font-bold border border-cyan-400 flex justify-center items-center"><AiOutlineSend/></button>
      </form>
    </div>
  );
};

export default Comment;