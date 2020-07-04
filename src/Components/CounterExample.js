import React, { useState } from "react";

function CounterExample() {
    const [count, setcount] = useState(-10)
    return (
        <div>
            <h1>{count}</h1>
            <h1 onClick={ () => {
                setcount(count + 1)
                } }>
            Plus
            </h1>
        </div>
    )
}

export default CounterExample;