'use client'


const DeleteIdeaModal= ({deleteIdea,id}) => {

   const handleDelete = async () => {
    await deleteIdea(id);
    
  }

return (
<div>
<label htmlFor="my_modal_delete" className="btn px-5 py-2 text-white font-bold btn-error rounded-full">Delete</label>


<input type="checkbox" id="my_modal_delete" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">You Sure Want To Delete?</h3>
    <p className="py-4">Once You Click Confirm, You cannot undo it</p>
    <div className="modal-action">
      <label htmlFor="my_modal_delete" className="btn px-5 py-2 text-white font-bold  bg-gray-400 rounded-full">Cancel</label>
      <label onClick={handleDelete} htmlFor="my_modal_delete" className="btn px-5 py-2 text-white font-bold btn-error rounded-full">Confirm</label>
    </div>
  </div>
</div>
</div>

)}
export default DeleteIdeaModal;