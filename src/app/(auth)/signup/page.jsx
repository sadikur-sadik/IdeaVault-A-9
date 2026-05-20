'use client'

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const newData = Object.fromEntries(formData.entries())

    
    const { data, error } = await authClient.signUp.email({
      name: newData.name, // required
      email: newData.email, // required
      password: newData.password, // required
      image: newData.image,
      callbackURL: "http://localhost:3000",
    })
    if(data){
     redirect("/signin")
    }
    else{
      alert(`Error! ${error}`)
    }
  }
  return (
    <div className="w-96 mx-auto mt-20">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset  border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Sign Up</legend>

          <label className="label">Name</label>
          <input name="name" className="input" placeholder="Email" />

          <label className="label">Image URL</label>
          <input name="image"  className="input" placeholder="Email" />

          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />

          <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;