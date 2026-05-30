'use client'


import { FaPen } from "react-icons/fa";



const UpdateModal = ({ updateIdea, id }) => {

  const handleUpdate = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const newFormData = Object.fromEntries(formData.entries())
    await updateIdea(newFormData, id)
  }

  return (
    <div>
      <label
        htmlFor="my_modal_delete"
        className="btn w-full sm:w-auto rounded-full md:px-6 px-3 py-2 md:py-2.5 font-semibold bg-cyan-400 text-slate-950 border border-cyan-400 hover:bg-transparent hover:text-cyan-400 "
      >
        <FaPen className="w-4 h-4" />
        <span>Update</span>
      </label>


      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">You Sure Want To Delete?</h3>
          <form onSubmit={handleUpdate}>
            <fieldset className="fieldset border-base-300 rounded-box w-[50vw] border p-4 flex gap-10 items center flex-col mx-auto">

              <div className="flex flex-col gap-3">
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
              <div className="flex flex-col gap-3">
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

                <div className="modal-action flex justify-start">
                  <label htmlFor="my_modal_6" className="btn px-5 py-2 text-white font-bold  bg-gray-400 rounded-full">Cancel</label>
                  <button type="submit" className="btn px-5 py-2 text-white font-bold btn-success rounded-full">

                    <label htmlFor="my_modal_6" className="px-5 py-2">Confirm</label>
                  </button>
                </div>
              </div>
            </fieldset>
          </form>

        </div>
      </div>
    </div>

  )
}
export default UpdateModal;