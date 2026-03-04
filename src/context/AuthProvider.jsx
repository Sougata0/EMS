import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // localStorage.clear()
    const [userData, setUserData] = useState();

    useEffect(() => {
        setLocalStorage()
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
    }, []);

    return (
        <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
