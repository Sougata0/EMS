const NewTask =({data})=>{
    return(
      <div className="bg-blue-600 shrink-0 rounded-2xl p-5 flex flex-col justify-between min-h-80 w-[24%] font-bold">
        <div className="flex justify-between items-center">
          <div className="bg-black px-3 py-1 text-[10px] font-medium rounded-[5px]">
            {data.category}
          </div>
          <p className="text-[10px] font-normal">{data.date}</p>
        </div>
        <h1 className="mt-4 mb-2">{data.title}</h1>
        <p className="text-[12px] font-normal">{data.description}</p>

        <button className="px-2 py-1 rounded bg-gray-600">Start Task</button>
      </div>
        // <div className="bg-blue-400 rounded-2xl py-5 px-10 flex flex-col text-2xl justify-around h-30 w-[24%] font-medium">
        //   <h1 className="font-bold">{taskNumbers.newTask}</h1>
        //   <h2 className="text-lg">New Task</h2>
        // </div>
    )
}

export default NewTask