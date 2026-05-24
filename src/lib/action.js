import { revalidatePath } from "next/cache";

export const postData = async (form) => {
  'use server'
  const res = await fetch(`${process.env.BACKEND_URL}/ideas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
  const data = await res.json();

  if (data.insertedId) {
    revalidatePath('/ideas')
  }
  return data || {};
}
export const postComment = async (comment) => {
  'use server'
  const res = await fetch(`${process.env.BACKEND_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
  const data = await res.json();

  if (data.insertedId) {
    revalidatePath('/')
  }
  return data || {};
}

export const deleteIdea = async (ideaID) => {
  'use server'

  const res = await fetch(`${process.env.BACKEND_URL}/ideas/${ideaID}`, {
    method: 'DELETE',
  })
  const data = await res.json();

  if (res.ok || data.deletedCount > 0) {
    revalidatePath('/my-ideas')
  }
  return data || {};
}
export const deleteComment = async (commentID) => {
  'use server'

  const res = await fetch(`${process.env.BACKEND_URL}/comments/${commentID}`, {
    method: 'DELETE',
  })
  const data = await res.json();

  if (res.ok || data.deletedCount > 0) {
    revalidatePath('/ideas')
  }
  return data || {};
}

export const updateIdea = async(formData,editID) => {
  'use server'
  const form = JSON.stringify(formData)
  console.log(form);
  const res = await fetch(`${process.env.BACKEND_URL}/ideas/${editID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body:form
  })

  const data = res.json();
   if (res.ok || data.modifiedCount > 0) {
    revalidatePath('/my-ideas');
  }
  return data || {};
}