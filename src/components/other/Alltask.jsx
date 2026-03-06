import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { employees } = useContext(AuthContext);
  // console.log(employees);

  return (
    <div id="tasklist" className="bg-gray-800 mt-5 rounded p-5">
      <div className="bg-gray-700 rounded px-4 py-2 mb-2 flex">
        <h2 className="w-1/5 text-lg font-medium">FirstName</h2>
        <h2 className="w-1/5 text-lg font-medium text-blue-400">New Task</h2>
        <h2 className="w-1/5 text-lg font-medium text-yellow-500">Active Task</h2>
        <h2 className="w-1/5 text-lg font-medium text-green-500">Completed Task</h2>
        <h2 className="w-1/5 text-lg font-medium text-red-400">Failed Task</h2>
      </div>
      {employees.map((elem) => (
        <div key={elem.id} className="bg-gray-700 rounded px-4 py-2 mb-2 flex">
          <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>
          <h2 className="w-1/5 text-lg font-medium text-blue-400">
            {elem.taskNumbers.newTask}
          </h2>
          <h2 className="w-1/5 text-lg font-medium text-yellow-500">
            {elem.taskNumbers.active}
          </h2>
          <h2 className="w-1/5 text-lg font-medium text-green-500">
            {elem.taskNumbers.completed}
          </h2>
          <h2 className="w-1/5 text-lg font-medium text-red-400">
            {elem.taskNumbers.failed}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
