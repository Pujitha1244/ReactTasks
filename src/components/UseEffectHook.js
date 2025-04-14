import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)

    //  useEffect(()=>{
    //     document.title = (`${count} new messages!`)
    //  })

    // useEffect(() => {
    //     document.title = (`${count} new messages!`)
    // }, [])

    useEffect(() => {
        document.title = (`${count} new messages!`)
    }, [count])

    return (
        <div>Use Effect Hook
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}

export default UseEffectHook
