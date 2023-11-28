import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../Redux/Cake/cakeSlice";
import { addIceCream, orderIceCream } from "../Redux/iceCream/iceCreamSlice";

const Home = () => {
  const [incrementAmount, setIncrementAmount] = useState();
  const count = useSelector((state) => state.counter.value);
  const iceCream = useSelector((state) => state.iceCream.iceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          placeholder="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(addIceCream())}
        >
          Add IceCream
        </button>
        <span>{iceCream}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(orderIceCream())}
        >
          Order IceCream
        </button>
      </div>
    </div>
  );
};

export default Home;
