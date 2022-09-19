import React, { useState, useEffect } from "react";

function Counter() {
  // The first variable contains the state value,and should be named after the state the variable represents. The second variable is a function that we can use to set the state value, and is set followed by first variable.
  const [counter, setCounter] = useState(0);
  
  // could also rewrite
  // const counterState = useState(0);
  // const counter = counterState[0];
  // const setCounter = counterState[1];
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("effect!");
    document.title = counter; // changes the tab name to counter
  }, [counter]);
  // You can tell the useEffect hook to run its effect once by passing in an empty dependency array

  return(
    <React.Fragment>
      {hidden? <h1>count hidden</h1> : <h1> {counter} </h1>}
      <button onClick={() => setCounter(counter + 1)}>Count!</button>
      <button onClick={() => setHidden(!hidden)}>Hide/Show</button>
    </React.Fragment>
  );
}

export default Counter;

//Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

// The useState hook returns an array that we destructure into two variables.The useState hook also takes an argument, which will set the state property's initial value. We can initialize this with a number, a boolean, a string, an object, or even null.