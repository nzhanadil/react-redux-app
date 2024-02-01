import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, callApi } from "../slices/counterSlice"
import { useEffect } from "react";

const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callApi)
    }, [dispatch])

    return (
        <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

export default Counter
