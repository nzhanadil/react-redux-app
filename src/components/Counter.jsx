import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "../slices/counterSlice"

const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch();

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
