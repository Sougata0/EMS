import AllTask from "../other/Alltask";
import CreateTask from "../other/CreateTssk";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="text-white h-screen w-full flex flex-col px-10 py-7 ">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
