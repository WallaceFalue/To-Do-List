import { useSearchParams } from "react-router-dom";

function TaskPages() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center items-center">
      <div className="w-[500px] bg-slate-200 rounded-md shadow-md p-8">
        <h1 className="text-4xl text-slate-700 font-bold text-center mb-8">
          Task Details
        </h1>
        <div>
          <h2 className="text-2xl text-slate-600 font-semibold text-center mb-2">
            Title
          </h2>
          <p className="bg-white rounded-md p-4 text-gray-800 mb-6 text-center">
            {title}
          </p>
          <h2 className="text-2xl text-slate-600 font-semibold text-center mb-2">
            Description
          </h2>
          <p className="bg-white rounded-md p-4 text-gray-800 text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default TaskPages;
