'use client'

import { useSession } from "@/lib/auth-client";


const AddIdeas = ({ postData }) => {

  const session = useSession()
  const id = session?.data?.session?.userId
  const userName = session?.data?.user?.name
  
  const handleSubmit = async(e) => {

    e.preventDefault()
    const initForm = new FormData(e.currentTarget)
    const formData = Object.fromEntries(initForm.entries())
    formData.userID = id
    formData.userName = userName
    await postData(formData)

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset border-base-300 rounded-box w-[50vw] border p-4 flex gap-10 items center mx-auto">

          <div>
            <label className="label">Idea Title</label>
            <input name="title" className="input" placeholder="Idea Title" />

            <label className="label">Short Description</label>
            <input name="shortDescription" className="input" placeholder="Short Description" />

            <label className="label">Detailed Description</label>
            <input name="detailedDescription" className="input" placeholder="Detailed Description" />

            <label className="label">Category</label>
            <select name="category" className="select" defaultValue="">
              <option value="" disabled>Select Category</option>
              <option value="Tech">Tech</option>
              <option value="Health">Health</option>
              <option value="AI">AI</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>

            <label className="label">Tags</label>
            <input name="tags" className="input" placeholder="Tags" />
          </div>
          <div>
            <label className="label">Image URL</label>
            <input name="imageUrl" className="input" placeholder="Image URL" />

            <label className="label">Estimated Budget</label>
            <input name="estimatedBudget" type="number" className="input" placeholder="Estimated Budget" />

            <label className="label">Target Audience</label>
            <input name="targetAudience" className="input" placeholder="Target Audience" />

            <label className="label">Problem Statement</label>
            <input name="problemStatement" className="input" placeholder="Problem Statement" />

            <label className="label">Proposed Solution</label>
            <input name="proposedSolution" className="input" placeholder="Proposed Solution" />

            <button type="submit" className="btn btn-neutral mt-4">Submit Idea</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddIdeas;