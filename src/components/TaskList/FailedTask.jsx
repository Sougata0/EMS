const FailedTask = ({ data }) => {
  return (

    <div className="bg-red-600 shrink-0 rounded-2xl p-5 flex flex-col justify-between min-h-80 w-[24%] font-bold">
        <div className="flex justify-between items-center">
          <div className="bg-black px-3 py-1 text-[10px] font-medium rounded-[5px]">
            {data.category}
          </div>
          <p className="text-[10px] font-normal">{data.date}</p>
        </div>
        <h1 className="mt-4 mb-2">{data.title}</h1>
        <p className="text-[12px] font-normal">{data.description}</p>
        <button className="px-2 py-1 rounded bg-gray-600">
          Retry
        </button>
      </div>
    // <div className="bg-red-400 rounded-2xl py-5 px-10 flex flex-col text-2xl justify-around  font-medium">
    //   {/* <h1 className="font-bold">{taskNumbers.failed}</h1> */}
    //   {/* <h2 className="text-lg">Failed Task</h2> */}

      
    // </div>
  );
};

export default FailedTask;
