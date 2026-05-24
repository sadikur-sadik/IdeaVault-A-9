'use client'


const UpdateModal = ({ updateComment,id}) => {

  const handleUpdate = async (e) => {
    e.preventDefault()
    console.log(id);
    const formData = new FormData(e.currentTarget)
    const newFormData = Object.fromEntries(formData.entries())
    await updateComment(newFormData, id)
  }

  return (
    <div>
      <label htmlFor="updateComment" className="btn px-5 py-2 text-white font-bold btn-success rounded-full">Update</label>


      <input type="checkbox" id="updateComment" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
         
          <form onSubmit={handleUpdate}>
            <fieldset className="fieldset border-base-300 rounded-box w-[50vw] border p-4 flex gap-10 items center flex-col mx-auto">

              
              <div className="flex flex-col gap-3">
                <label className="label">Comment</label>
                <input name="comment" className="input" />

                <div className="modal-action flex justify-start">
                  <label htmlFor="updateComment" className="btn px-5 py-2 text-white font-bold  bg-gray-400 rounded-full">Cancel</label>
                  <button type="submit" className="btn px-5 py-2 text-white font-bold btn-success rounded-full">
                    
                  <label htmlFor="updateComment" className="px-5 py-2">Confirm</label>
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