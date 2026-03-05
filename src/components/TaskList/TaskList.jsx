import AcceptedTask from "./AcceptedTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  // console.log({data});
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto gap-5 mt-7"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptedTask key={idx} data={elem}/>;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem}/>;
        }
        if (elem.completed) {
          return <CompletedTask key={idx} data={elem}/>;
        }
        if (elem.newTask) {
          console.log(elem.newTask)
          return <NewTask key={idx} data={elem}/>;
        }
      })}

      {/* <div className="bg-red-600 shrink-0 rounded-[3px] px-3 py-3 h-60 w-[27%] font-bold">
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
      </div> */}
    </div>
  );
};

export default TaskList;
