'use server'

import { headers } from "next/headers";
import { getToken } from "./action";



export const getIdeas = async (search = "", filter = "") => {
  const res = await fetch(`${process.env.BACKEND_URL}/ideas?search=${search}&filter=${filter}`)
  const data = await res.json();

  return data || []
}
export const getFeaturedIdeas = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/feturedideas`)
  const data = await res.json();

  return data || []
}
export const getIdeasById = async (id) => {

  const token = await getToken();
  if (!token?.token) return { error: "Unauthorized" };

  const res = await fetch(`${process.env.BACKEND_URL}/ideas/${id}`,
    {
      headers: {
        'Authorization': `Bearer ${token.token}`,
      }
    }
  )
  const data = await res.json();
  return data || []
}
export const getComments = async () => {

  const token = await getToken();
  if (!token?.token) return { error: "Unauthorized" };
  
  const res = await fetch(`${process.env.BACKEND_URL}/comments`,
    {
      headers: {
        'Authorization': `Bearer ${token.token}`,
      }
    })
  const data = await res.json();

  return data || []
}