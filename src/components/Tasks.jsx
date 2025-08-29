import { ChevronRight } from "lucide-react";

function Tasks(props) {
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
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRight size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
