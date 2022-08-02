import React from 'react';

// importing hooks from redux
import { useSelector, useDispatch } from 'react-redux';
// importing actions
import { increment, decrement } from './counterSlice';

const Counter = () => {
    // using our state
    const count = useSelector((state)=> state.counter.count);

    const dispatch = useDispatch();

  return (
    <div>
        <div>
            {count}
        </div>

        <div>
            <button onClick={() => dispatch(increment())}>
                +
            </button>
            <button onClick={() => dispatch(decrement())}>
                -
            </button>
        </div>
    </div>
  )
}

export default Counter