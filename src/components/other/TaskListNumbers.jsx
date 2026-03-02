const TaskListNumbers = () => {
  return (
    <div className="flex flex-wrap justify-between mt-5">
      <div className="bg-red-600 rounded-[3px] px-3 py-2 flex flex-col  justify-around h-20 w-[24%] font-bold">
        <h1>0</h1>
        <h2 className="text-sm">New Task</h2>
      </div>
      <div className="bg-blue-600 rounded-[3px] px-3 py-2 flex flex-col  justify-around h-20 w-[24%] font-bold">
        <h1>0</h1>
        <h2 className="text-sm">New Task</h2>
      </div>
      <div className="bg-green-500 rounded-[3px] px-3 py-2 flex flex-col  justify-around h-20 w-[24%] font-bold">
        <h1>0</h1>
        <h2 className="text-sm">New Task</h2>
      </div>
      <div className="bg-yellow-400 rounded-[3px] px-3 py-2 flex flex-col  justify-around h-20 w-[24%] font-bold">
        <h1>0</h1>
        <h2 className="text-sm">New Task</h2>
      </div>
    </div>
  );
};

export default TaskListNumbers;
