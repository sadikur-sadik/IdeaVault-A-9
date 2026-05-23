import { postData } from "@/lib/action"
import AddIdeas from "@/app/components/Ideas/Add-Ideas/AddIdeas";

const AddIdeasPage = async() => {
      

  return (
    <div>
      <AddIdeas postData={postData}/>
    </div>
  );
}

export default AddIdeasPage;