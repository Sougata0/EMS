import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {

  // console.log({data})
  return (
    <div className="w-screen px-20  py-10 rounded-xl text-white flex flex-col justify-self-center">      
      <Header changeUser = {props.changeUser} data = {props.data}/>
      <TaskListNumbers data = {props.data}/>
      <TaskList data={props.data}/>
    </div>
  );
};

export default EmployeeDashboard;
