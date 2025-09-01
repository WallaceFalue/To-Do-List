import { ChevronRight, DeleteIcon, TrashIcon } from "lucide-react";
import { use } from "react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  const navigate = useNavigate();

  function OnSeeDetailsClcick(task) {
    navigate(
      `/tasks?title=${encodeURIComponent(
        task.title
      )}&description=${encodeURIComponent(task.description)}`
    );
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md mt-6 shadow-md">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.ontaskClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => OnSeeDetailsClcick(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronRight size={20} />
          </button>
          <button
            onClick={() => props.onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
