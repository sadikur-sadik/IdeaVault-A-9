'use client'

import { authClient } from "@/lib/auth-client";
import { getYear, getMinutes, getSeconds, format, getDate, getHours, getMonth } from 'date-fns';


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
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Comments" name="comment" className="textarea textarea-xl"></textarea>
        <button type="submit" className="btn btn-success">Post Comment</button>
      </form>
    </div>
  );
};

export default Comment;