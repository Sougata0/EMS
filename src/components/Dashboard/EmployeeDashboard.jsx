import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  return (
    <div className="w-screen p-10 rounded-xl text-white flex flex-col justify-self-center">
      <Header />
      <TaskListNumbers/>
      <TaskList/>
    </div>
  );
};

export default EmployeeDashboard;
