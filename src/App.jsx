import { useState, useEffect } from "react";

function App() {
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState({
    tasks: "",
    isEditing: false,
  });

  const [tasks, setTasks] = useState([
    "Estudar REACT",
    "Estudar TypeScript",
    "Estudar NodeJS",
    "Estudar MySQL",
  ]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("@cursoReact");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  function HandleNewTask() {
    if (newTask === "") {
      alert("Preencha o campo");
      return;
    }

    if (editTask.isEditing) {
      HandleSafeEdit();
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask("");
    localStorage.setItem("@cursoReact", JSON.stringify([...tasks, newTask]));
  }

  function HandleSafeEdit() {
    const findIndex = tasks.findIndex((tasks) => tasks === editTask.tasks);
    const updatedTasks = [...tasks];

    updatedTasks[findIndex] = newTask;
    setTasks(updatedTasks);
    editTask.isEditing = false;

    setNewTask("");
    localStorage.setItem("@cursoReact", JSON.stringify(updatedTasks));
  }

  function HandleDeleteTask(taskToDelete) {
    const remainingTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks([...remainingTasks]);

    localStorage.setItem("@cursoReact", JSON.stringify(remainingTasks));
  }

  function HandleEditTask(taskChanged) {
    setNewTask(taskChanged);
    setEditTask({ tasks: taskChanged, isEditing: true });

    localStorage.setitem("@curosoReact", JSON.stringify(tasks));
  }

  return (
    <div className="justify-center items-center flex flex-col h-screen bg-slate-900 text-white">
      <h1 className="text-white mb-16 text-6xl">Task list</h1>
      <div className="shadow-lg p-5 mb-10 rounded bg-slate-800 w-96 flex flex-col gap-3">
        <h1 className="text-white text-2xl text-center">Add task</h1>
        <input
          className="p-2 rounded w-full border border-slate-300 text-white"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
        />
        <button
          className="bg-blue-600 rounded-md p-2 hover:bg-blue-700 transition duration-300 transform hover:scale-105 w-full mt-2"
          onClick={() => HandleNewTask()}
        >
          {editTask.isEditing ? "Edit" : "Save"}
        </button>
      </div>
      <div className="shadow-lg p-5 mb-10 rounded bg-slate-800 w-170 flex flex-col justify-center items-center">
        {tasks.map((item) => (
          <section className="flex flex-row justify-between items-center w-full ">
            <ul>
              <li>{item}</li>
            </ul>
            <div className="gap-5 flex flex-row">
              <button
                className="mb-2 bg-slate-700 p-2 rounded hover:bg-green-500"
                onClick={() => HandleEditTask(item)}
              >
                Edit
              </button>
              <button
                className="mb-2 bg-slate-700 p-2 rounded hover:bg-green-500"
                onClick={() => HandleDeleteTask(item)}
              >
                Clear
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
