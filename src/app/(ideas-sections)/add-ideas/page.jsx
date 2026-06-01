import { postData } from "@/lib/action"
import AddIdeas from "@/app/components/Ideas/Add-Ideas/AddIdeas";

const AddIdeasPage = async() => {
  return (
    <div className="md:py-10 py-5">
      <AddIdeas postData={postData}/>
    </div>
  );
}

export default AddIdeasPage;