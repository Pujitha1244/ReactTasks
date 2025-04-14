import React, { useContext, useState } from 'react'
import { LogInDataContext } from './Context/loginDataContext'

const UseStateHook = () => {
    const [count, setCount] = useState(0)

    const contextData = useContext(LogInDataContext)

    return (
        <div>Use State Hook
            <h1>Counter : {count}</h1>
            <p>Hi {contextData.name} I am from UseState component</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )

}

export default UseStateHook;