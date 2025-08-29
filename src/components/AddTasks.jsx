// filepath: c:\Users\walla\VsCodeProjects\ToDoList\my-react-app\src\components\AddTasks.jsx
import { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md mt-6 shadow-md flex flex-col">
      <input
        className="bg-white rounded-md p-2 outline-slate-400"
        type="text"
        placeholder="Insert the task: "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="bg-white rounded-md p-2 outline-slate-400"
        type="text"
        placeholder="Insert task`s description:  "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          props.onAddTaskSubmits(title, description);
          setDescription("");
          setTitle("");
        }}
        className="bg-slate-500 text-white p-2 rounded-md hover:bg-slate-600 transition"
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
