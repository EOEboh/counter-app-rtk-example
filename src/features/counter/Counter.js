import React from 'react';

import '../../App.css';

// importing hooks from redux
import { useSelector, useDispatch } from 'react-redux';
// importing actions
import { increment, decrement } from './counterSlice';

const Counter = () => {
    // using our state
    const count = useSelector((state)=> state.counter.count);

    const dispatch = useDispatch();

  return (
    <div className='main-div'>
        <div className='count-div'>
            {count}
        </div>

        <div className='btn-div'>
            <button className='btn one' onClick={() => dispatch(increment())}>
                +
            </button>
            <button className='btn two' onClick={() => dispatch(decrement())}>
                -
            </button>
        </div>
    </div>
  )
}

export default Counter