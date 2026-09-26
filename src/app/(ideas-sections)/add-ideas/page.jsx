import { postData } from "@/lib/action"
import AddIdeas from "@/app/components/Ideas/Add-Ideas/AddIdeas";

export const metadata = {
  title: "Add New Idea",
  description: "Launch your raw startup concepts and business ideas, attach validation polls, and share them on ideaVault.",
};


const AddIdeasPage = async() => {
  return (
    <div className="md:py-10 py-5">
      <AddIdeas postData={postData}/>
    </div>
  );
}

export default AddIdeasPage;