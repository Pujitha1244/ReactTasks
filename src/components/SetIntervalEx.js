// import React, { useEffect, useState } from 'react'

// const SetIntervalEx = () => {
//     const [time, setTime] = useState(0)

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTime(time + 1)
//         }, 1000)
//         return () => {
//             clearInterval(timer)
//         }
//     })
//     return (
//         <div>
//             <h3>{time} in seconds</h3>
//         </div>
//     )
// }

// export default SetIntervalEx

import React, { useEffect, useState } from 'react'

const SetIntervalEx = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    })

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const hours = Math.floor(minutes / 60)
    const remainingMinutes= minutes % 60

    const timeString =
        hours > 0
            ? `${hours}:${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}:${seconds < 10 ? '0' : ''}${seconds}`
            : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return (
        <div>
            <h3>{time} in seconds</h3>
            {timeString}
        </div>
    )
}

export default SetIntervalEx
