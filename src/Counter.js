import React, { useState, useEffect, useReducer } from 'react';


const initialState = {
  counter: 0
}

function reducer(counterState, action) {
  switch (action.type) {
    case 'increment':
      return {
        counter: counterState.counter + 1
      };
      case 'decrement':
        return {
          counter: counterState.counter - 1
        };
        case 'reset':
          return {
            counter: counterState.counter = 0
          };

    default:
      throw new Error(`There is no action matching ${action.type}.`);
  }
}

function Counter() {
  // const [counter, setCounter] = useState(0);
  const [counterState, dispatch] = useReducer(reducer, initialState);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.title = counterState.counter;
  }, [counterState.counter]);

  return (
    <React.Fragment>
      {hidden ? <h1>Count Hidden</h1> : <h1>{counterState.counter}</h1>}
      <button onClick={() => dispatch({type: 'increment'})}>Add!</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Subtract!</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter;