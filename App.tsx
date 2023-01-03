import React, { useEffect, useState } from 'react'

export default function App() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('didmount in browser')
    }, [])

    return (
        <div>
            <h1>Hello World</h1>
            <h2>{counter}</h2>
            <div>
                <button onClick={() => setCounter(counter - 1)}>-1</button>
                <button onClick={() => setCounter(counter + 1)}>+1</button>
            </div>
        </div>
    );
}