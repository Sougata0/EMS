import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({data}) => {

  // console.log({data})
  return (
    <div className="w-screen px-20  py-10 rounded-xl text-white flex flex-col justify-self-center">      
      <Header data = {data}/>
      <TaskListNumbers data = {data}/>
      <TaskList data={data}/>
    </div>
  );
};

export default EmployeeDashboard;
