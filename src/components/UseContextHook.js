import React, { useContext } from 'react'
import { LogInDataContext } from './Context/loginDataContext';
// import { LogInDataContext } from '../App';

const UseContextHook = () => {

    const data = useContext(LogInDataContext);
    return (
        <div>
            <h4>UseContext Hook</h4>
            <p>Name: {data.name}</p>
            <p>Mail: {data.mail}</p>
            <p>City: {data.city}</p>
        </div>
    )
}

export default UseContextHook
