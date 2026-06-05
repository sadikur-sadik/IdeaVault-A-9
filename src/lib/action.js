import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { headers } from "next/headers";

export const getToken = async () => {
  const sessionToken = await auth.api.getToken({
    headers: await headers()
  });
  return sessionToken;
}

export const postData = async (form) => {
  'use server'
  const token = await getToken();
  if (!token?.token) return { error: "Unauthorized" };
  console.log(form);
  const res = await fetch(`${process.env.BACKEND_URL}/ideas`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token.token}`
    },
    body: JSON.stringify(form)
  });
 
  if (!res.ok) return { error: "Failed to post data" };
  const data = await res.json();

  if (data.insertedId) {
    revalidatePath('/ideas');
  }
  return data || {};
}

export const postComment = async (comment) => {
  'use server'
  const token = await getToken();
  if (!token?.token) return { error: "Unauthorized" };

  const res = await fetch(`${process.env.BACKEND_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token.token}`
    },
    body: JSON.stringify(comment)
  });

  if (!res.ok) return { error: "Failed to post comment" };
  const data = await res.json();

  if (data.insertedId) {
    revalidatePath('/');
  }
  return data || {};
}

export const deleteIdea = async (ideaID) => {
  'use server'
  const token = await getToken();
  if (!token?.token) return { error: "Unauthorized" };

  const res = await fetch(`${process.env.BACKEND_URL}/ideas/${ideaID}`, {
    method: 'DELETE',
    headers: {
      'authorization': `Bearer ${token.token}`
    }
  });

  if (!res.ok) return { error: "Failed to delete idea" };
  const data = await res.json();

  if (res.ok || data.deletedCount > 0) {
    revalidatePath('/my-ideas');
  }
  return data || {};
}

export const deleteComment = async (commentID) => {
  'use server'
  const token = await getToken();
  if (!token?.token) return { error: "Unauthorized" };

  const res = await fetch(`${process.env.BACKEND_URL}/comments/${commentID}`, {
    method: 'DELETE',
    headers: {
      'authorization': `Bearer ${token.token}`
    }
  });

  if (!res.ok) return { error: "Failed to delete comment" };
  const data = await res.json();

  if (res.ok || data.deletedCount > 0) {
    revalidatePath('/ideas');
  }
  return data || {};
}

export const updateIdea = async (formData, editID) => {
  'use server'
  const token = await getToken();
  if (!token?.token) return { error: "Unauthorized" };

  const res = await fetch(`${process.env.BACKEND_URL}/ideas/${editID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token.token}`
    },
    body: JSON.stringify(formData)
  });

  if (!res.ok) return { error: "Failed to update idea" };
  const data = await res.json();

  if (res.ok || data.modifiedCount > 0) {
    revalidatePath('/my-ideas');
  }
  return data || {};
}

export const updateComment = async (formData, editID) => {
  'use server'
  const token = await getToken();
  if (!token?.token) return { error: "Unauthorized" };

  const res = await fetch(`${process.env.BACKEND_URL}/comments/${editID}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token.token}`
    },
    body: JSON.stringify(formData)
  });

  if (!res.ok) return { error: "Failed to update comment" };
  const data = await res.json();

  if (res.ok || data.modifiedCount > 0) {
    revalidatePath('/my-ideas');
  }
  return data || {};
}