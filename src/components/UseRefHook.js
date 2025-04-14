import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [name, setName] = useState('')
    let count = useRef(0)
    useEffect(() => {
        count.current = count.current + 1;
    })
    return (
        <div>
            <input type='text' onChange={(e) => setName(e.target.value)} />
            <h2>Name: {name}</h2>
            <h2> renders: {count.current}</h2>
        </div>
    )
}

export default UseRefHook
