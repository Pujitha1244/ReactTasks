import React, { createContext } from 'react'

let userData = {
    name: 'V.Sai Pujitha',
    mail: 'pujitha1244@gmail.com',
    gender: 'Female',
    city: 'Hyderabad',
}
export const LogInDataContext = createContext(userData)

const LoginDataContext = ({ children }) => {
    return (
        <LogInDataContext.Provider value={userData}>
            {children}
        </LogInDataContext.Provider>
    )
}

export default LoginDataContext
