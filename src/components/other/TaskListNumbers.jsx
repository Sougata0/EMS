const TaskListNumbers = ({ data }) => {
  // console.log(data.taskNumbers.active);

  return (
    <>
      <div className="flex flex-wrap justify-between mt-7">
        <div className="bg-blue-400 rounded-2xl py-5 px-10 flex flex-col text-2xl justify-around h-30 w-[24%] font-medium">
          <h1 className="font-bold">{data.taskNumbers.newTask}</h1>
          <h2 className="text-lg">New Task</h2>
        </div>
        <div className="bg-green-400 rounded-2xl py-5 px-10 flex flex-col text-2xl justify-around h-30 w-[24%] font-medium">
          <h1 className="font-bold">{data.taskNumbers.completed}</h1>
          <h2 className="text-lg">Completed Task</h2>
        </div>
        <div className="bg-yellow-400 rounded-2xl py-5 px-10 flex flex-col text-2xl justify-around h-30 w-[24%] font-medium">
          <h1 className="font-bold">{data.taskNumbers.active}</h1>
          <h2 className="text-lg">Accepted Task</h2>
        </div>
        <div className="bg-red-400 rounded-2xl py-5 px-10 flex flex-col text-2xl justify-around h-30 w-[24%] font-medium">
          <h1 className="font-bold">{data.taskNumbers.failed}</h1>
          <h2 className="text-lg">Failed Task</h2>
        </div>
      </div>
      <hr className="mt-7"></hr>
    </>
  );
};

export default TaskListNumbers;
