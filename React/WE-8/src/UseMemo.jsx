import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    let totalSum = 0;
    const sum = useMemo(() => {
        for (let i = 0; i < 100000; i++) {
            totalSum += i
        }
        return totalSum
    }, [])
    return (

        <>
            <h1>{count}</h1>
            <button onClick={() => setCount((count) => count + 1)}>count</button>
            <span>{sum}</span>
            
        </>
    )
}

export default UseMemo