import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({data}) => {

  // console.log({data})
  return (
    <div className="w-screen p-10 rounded-xl text-white flex flex-col justify-self-center">      
      <Header data = {data}/>
      <TaskListNumbers/>
      <TaskList/>
    </div>
  );
};

export default EmployeeDashboard;
