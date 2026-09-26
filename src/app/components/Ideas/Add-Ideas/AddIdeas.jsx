'use client'

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { Bounce, toast } from "react-toastify";
import { MdPoll } from "react-icons/md";

const AddIdeas = ({ postData }) => {
  const session = useSession()
  const id = session?.data?.session?.userId
  const userName = session?.data?.user?.name

  const [enablePoll, setEnablePoll] = useState(false);
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState(["", ""]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const initForm = new FormData(e.currentTarget)
    const formData = Object.fromEntries(initForm.entries())
    formData.userID = id
    formData.userName = userName
    
    if (enablePoll) {
      const validOptions = pollOptions.filter(opt => opt.trim() !== "");
      if (!pollQuestion.trim()) {
        toast.error('Please provide a question for your validation poll.', {
          position: "top-center",
          autoClose: 4000,
          transition: Bounce,
        });
        return;
      }
      if (validOptions.length < 2) {
        toast.error('Please provide at least 2 options for your validation poll.', {
          position: "top-center",
          autoClose: 4000,
          transition: Bounce,
        });
        return;
      }

      formData.poll = {
        question: pollQuestion.trim(),
        options: validOptions.map((optText, idx) => ({
          id: `opt-${Date.now()}-${idx}`,
          text: optText.trim(),
          votes: []
        })),
        createdAt: new Date().toISOString()
      };
    }

    try {
      await postData(formData)

      toast.success('New Idea Added!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      e.target.reset();
      setEnablePoll(false);
      setPollQuestion("");
      setPollOptions(["", ""]);

    } catch (error) {
      toast.error(error.message ||  'Failed to add new idea. Please try again.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  return (
    <section className="w-full">
      <div className="container mx-auto w-11/12 lg:max-w-[60vw] 2xl:max-w-[1400px] 3xl:max-w-[1800px]">

        <div className="w-full py-5 md:py-10">
          <h1 className="text-3xl md:text-6xl text-center md:text-left font-bold my-6">
            Launch New <span className="text-cyan-400">Idea</span>
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full p-4 md:p-8 border border-slate-300 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/50 backdrop-blur-md shadow-md dark:shadow-none"
        >
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 border-none p-0 m-0">

            <div className="flex flex-col gap-3">
              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Idea Title</label>
                <input
                  name="title"
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                  placeholder="Idea Title"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Short Description</label>
                <input
                  name="shortDescription"
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                  placeholder="Short Description"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Detailed Description</label>
                <input
                  name="detailedDescription"
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                  placeholder="Detailed Description"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Category</label>
                <select
                  name="category"
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                  defaultValue=""
                  required
                >
                  <option value="" disabled className="dark:bg-slate-900 text-gray-400">Select Category</option>
                  <option value="Tech" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Tech</option>
                  <option value="Health" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Health</option>
                  <option value="AI" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">AI</option>
                  <option value="Education" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Education</option>
                  <option value="Other" className="dark:bg-slate-900 text-slate-950 dark:text-slate-50">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Tags (Optional)</label>
                <input
                  name="tags"
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                  placeholder="Tags"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Image URL</label>
                <input
                  name="imageUrl"
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                  placeholder="Image URL"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Estimated Budget</label>
                <input
                  name="estimatedBudget"
                  type="number"
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                  placeholder="Estimated Budget"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Target Audience</label>
                <input
                  name="targetAudience"
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                  placeholder="Target Audience"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Problem Statement</label>
                <input
                  name="problemStatement"
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                  placeholder="Problem Statement"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Proposed Solution</label>
                <input
                  name="proposedSolution"
                  className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                  placeholder="Proposed Solution"
                  required
                />
              </div>
            </div>

            {/* Attach Validation Poll Section */}
            <div className="col-span-1 md:col-span-2 border border-slate-300 dark:border-slate-800 rounded-2xl p-4 md:p-6 bg-slate-50/50 dark:bg-slate-900/40 my-2 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MdPoll className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100">
                    Attach a Validation Poll <span className="text-xs font-normal text-slate-500 dark:text-slate-400">(Optional)</span>
                  </h3>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enablePoll}
                    onChange={(e) => setEnablePoll(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-400"></div>
                </label>
              </div>

              {enablePoll && (
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block mb-1 text-slate-600 dark:text-slate-300 text-sm font-medium">Poll Question</label>
                    <input
                      value={pollQuestion}
                      onChange={(e) => setPollQuestion(e.target.value)}
                      className="w-full h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                      placeholder="e.g. Would you use this product?"
                      required={enablePoll}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-slate-600 dark:text-slate-300 text-sm font-medium">Poll Options (2 to 5 options)</label>
                    {pollOptions.map((optionText, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          value={optionText}
                          onChange={(e) => {
                            const newOptions = [...pollOptions];
                            newOptions[idx] = e.target.value;
                            setPollOptions(newOptions);
                          }}
                          className="flex-1 h-10 px-5 rounded-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-50 focus:outline-none focus:border-cyan-500"
                          placeholder={`Option ${idx + 1}`}
                          required={enablePoll}
                        />
                        {pollOptions.length > 2 && (
                          <button
                            type="button"
                            onClick={() => {
                              setPollOptions(pollOptions.filter((_, i) => i !== idx));
                            }}
                            className="px-3 py-2 text-xs font-bold text-red-500 border border-red-500/30 rounded-full hover:bg-red-500/10 transition-colors"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}

                    {pollOptions.length < 5 && (
                      <button
                        type="button"
                        onClick={() => setPollOptions([...pollOptions, ''])}
                        className="mt-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 border border-cyan-400/40 px-4 py-2 rounded-full hover:bg-cyan-400/10 transition-colors inline-flex items-center gap-1"
                      >
                        + Add Option
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="col-span-1 md:col-span-2 flex flex-col-reverse sm:flex-row justify-end gap-4 mt-6">
              <button
                type="reset"
                className="hidden md:block text-slate-900 dark:text-slate-300 text-sm font-bold px-5 py-2 rounded-full border border-transparent hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                Reset
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto rounded-full px-6 py-2.5 font-semibold bg-cyan-400 text-slate-950 border border-cyan-400 hover:bg-transparent hover:text-cyan-400 transition-colors"
              >
                Submit Idea
              </button>
            </div>

          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default AddIdeas;