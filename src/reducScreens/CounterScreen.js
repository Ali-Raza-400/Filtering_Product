import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  resetCounter,
} from "../redux/counterSlice";

const CounterScreen = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue=Number(incrementAmount)
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <button
        style={{
          paddingInline: "20px",
          fontSize: "40px",
          fontWeight: "bold",
          borderRadius: "50%",
          marginInline: "20px",
        }}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <h1>Count: {state.count.count}</h1>
      <button
        style={{
          paddingInline: "30px",
          fontSize: "40px",
          fontWeight: "bold",
          borderRadius: "50%",
          marginInline: "20px",
        }}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(parseInt(incrementAmount)))}>
        Increase By {Number(incrementAmount)}
      </button>
      <button onClick={()=>dispatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default CounterScreen;
