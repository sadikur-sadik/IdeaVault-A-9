'use client'

import { authClient } from "@/lib/auth-client";
import { getYear, getMinutes, getSeconds, format, getDate, getHours, getMonth } from 'date-fns';
import { AiOutlineSend } from "react-icons/ai";



const Comment = ({postComment , id}) => {
  
  const date = new Date()
  const currentTimeStamp = {
    year: getYear(date),
    month:getMonth(date),
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
    newForm.ideaID = id
    newForm.timeStamp = currentTimeStamp;
    console.log(newForm);

    await postComment(newForm)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-3 items-center mt-5">
        <input placeholder="Comments" name="comment" className="w-full px-3 py-1 border-b rounded-full"></input>
        <button type="reset" className="md:block hidden dark:text-slate-300 text-slate-900 text-sm font-bold px-3 py-1 rounded-full border border-transparent hover:bg-slate-500 hover:border-slate-500">Cancel</button>
        <button type="submit" className="md:block hidden px-3 py-1 rounded-full bg-cyan-400 text-white hover:bg-cyan-600 hover:border-cyan-600 text-sm font-bold border border-cyan-400">Comment</button>
        <button type="submit" className=" md:hidden p-2 rounded-full bg-cyan-400 text-white hover:bg-cyan-600 hover:border-cyan-600 text-sm font-bold border border-cyan-400 flex justify-center items-center"><AiOutlineSend/></button>
      </form>
    </div>
  );
};

export default Comment;