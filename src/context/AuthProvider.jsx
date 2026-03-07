import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // localStorage.clear()
    const [userData, setUserData] = useState();

    useEffect(() => {

        // const existingEmployees = localStorage.getItem("employees");
        // const existingAdmin = localStorage.getItem("admin");

        // // Seed only first time
        // if (!existingEmployees || !existingAdmin) {
            setLocalStorage();
        // }
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, []);

    useEffect(() => {
        if(!userData) return;
        localStorage.setItem("employees", JSON.stringify(userData.employees))
        localStorage.setItem("admin", JSON.stringify(userData.admin))
    }, [userData])

    return (
        <AuthContext.Provider value={[userData, setUserData]}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
