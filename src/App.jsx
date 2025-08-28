import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Ler um livro",
      description: "Ler 'O Senhor dos Anéis'",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Fazer exercícios",
      description: "Correr 5km",
      isCompleted: false,
    },
  ]);

  function ontaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] ">
        <h1 className="text-3x1 text-slate-100 font-bold text-center">
          Task manager
        </h1>
        <AddTask />
        <Tasks tasks={tasks} ontaskClick={ontaskClick} />
      </div>
    </div>
  );
}

export default App;
