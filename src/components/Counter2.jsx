import React, { useState } from 'react'

const Counter2 = () => {
    const [number, setNumber] = useState(0)

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 2)}>+2</button>
            <button onClick={() => setNumber(number-2)}>-2</button>
        </div>
  )
}

export default Counter2