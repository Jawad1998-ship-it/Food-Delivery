import React, { createContext, useContext } from 'react';
import { useState } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [data, setData] = useState({});

    return (
        <AuthContext.Provider value={{data, setData}}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;
