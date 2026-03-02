const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto gap-2 justify-between mt-5"
    >
      <div className="bg-red-600 shrink-0 rounded-[3px] px-3 py-3 h-[15rem] w-[27%] font-bold">
        <div className="flex justify-between items-center">
          <div className="bg-black px-3 py-1 text-[10px] font-medium rounded-[5px]" >High</div>
          <p className="text-[10px] font-normal">2 March 2026</p>
        </div>
        <h1 className="mt-4 mb-2"> Make a Youtube video</h1>
        <p className="text-[12px] font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          laboriosam dolorem totam aut illum odit consequuntur molestiae rem
          inventore earum!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
