import { use, useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localstorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState("");
  const [loggedInUserData, setLoggedInUserData] = useState('')
  const [userData] = useContext(AuthContext)
  // console.log(userData.admin);
  
  
  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      setLoggedInUserData(parsedUser.data)
    }
  },[])
  
  // useEffect(()=>{
    //   if(authData){
      //     const loggedInUser = localStorage.getItem('loggedInUser')
      //   }
      // },[authData])
      
      // console.log(authData.admin);
      
      
      const handleLogin = (email, password) => {
        if (email == "admin@me.com" && password == "123") {
          setUser('admin')
          localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
        } else if (userData) {
          const employee =  userData.employees.find((e) => email == e.email && password == e.password)
          if(employee){
            setLoggedInUserData(employee)
            setUser('employee')
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))      
          }
        } else {
          alert("invalid cradential");
        }
      };
      
      // useEffect(()=>{
        //   setLocalStorage()
        //   // getLocalStorage()
        // },)
        
        if (!userData) return null;
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}      
      {user == "admin" ? <AdminDashboard changeUser={setUser} data={userData.admin}/> : ""}
      {user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : ""}
    </>
  );
}

export default App;
