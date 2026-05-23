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
    revalidatePath('/user')
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
    revalidatePath('/user')
  }
  return data || {};
}