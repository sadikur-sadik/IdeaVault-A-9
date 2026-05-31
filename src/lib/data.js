export  const getIdeas = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/ideas`)
  const data =await res.json();

  return data || []
}
export  const getIdeasById = async (id) => {
  const res = await fetch(`${process.env.BACKEND_URL}/ideas/${id}`)
  const data = await res.json();

  return data || []
}
export  const getComments = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/comments`)
  const data = await res.json();

  return data || []
}