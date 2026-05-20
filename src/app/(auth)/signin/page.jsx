'use client'

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const newData = Object.fromEntries(formData.entries())


    const { data, error } = await authClient.signIn.email({
      // required
      email: newData.email, // required
      password: newData.password,
      rememberMe: true // required

    })
    if (data) {
      router.push("/")
    }
    else {
      alert(`Error! ${error.message}`)
    }
  }
  return (
    <section className="flex items-center contaier mx-auto mt-15">

      <div >
        <h1>Already have an account? Sign In</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 flex-1">

            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />

            <button type="submit" className="btn btn-neutral mt-4">Sign In</button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default SignIn;