import React from "react";
import classes from "./Counter.module.scss"
export const Counter = () => {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count+1);
    }

    return (
        <div className={classes.btn}>
            <h4>{count}</h4>
            <button onClick={increment}>Increment</button>
        </div>
    )
}