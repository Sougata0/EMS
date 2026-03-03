const CreateTask = () => {
  return (
    <div className="bg-gray-800 mt-5 w-full px-15  rounded-sm py-15 flex justify-between">
      <form className="flex flex-wrap w-full items-stretch justify-between">
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div>
            <h4 className="text-sm text-gray-300 mb-1">Task Title</h4>
            <input
              className="border text-sm w-4/5 rounded outline-none bg-transparent border-gray-400 px-2 py-1 "
              placeholder="Make a UI design"
              type="text"
            />
          </div>
          <div>
            <h4 className="text-sm text-gray-300 mb-1">Date</h4>
            <input
              className="border text-sm w-4/5 rounded outline-none bg-transparent border-gray-400 px-2 py-1"
              type="date"
            />
          </div>
          <div>
            <h4 className="text-sm text-gray-300 mb-1">Asign to</h4>
            <input
              className="border text-sm w-4/5 rounded outline-none bg-transparent border-gray-400 px-2 py-1 "
              placeholder="Employee name"
              type="text"
            />
          </div>
          <div>
            <h4 className="text-sm text-gray-300 mb-1">Category</h4>
            <input
              className="border text-sm w-4/5 rounded outline-none bg-transparent border-gray-400 px-2 py-1 "
              placeholder="Design, Dev, etc."
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col items-start w-2/5">
          <h2 className="text-sm text-gray-300 mb-0.5">Description</h2>
          <textarea
            className="border w-full h-45 text-sm  rounded outline-none bg-transparent border-gray-400 p-1"
            name=" "
            id=""
          />
          <button className="bg-emerald-500 hover:bg-emerald-400 w-full rounded  text-sm py-3 mt-4">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
