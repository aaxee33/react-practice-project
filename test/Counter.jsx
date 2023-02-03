import React, { useEffect, useReducer, useState } from "react";
import Button from "../src/components/Button";

const COUNT_INCREMENT = "increment";
const COUNT_DECREMENT = "decrement";
const VALUE_CHANGE_TO_ADD = "value-change-to-add";
const ADD_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {
  switch (action.type) {
    case COUNT_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case COUNT_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case VALUE_CHANGE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case ADD_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
  // if (action.type === COUNT_INCREMENT) {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // }

  // if (action.type === VALUE_CHANGE_TO_ADD) {
  //   return {
  //     ...state,
  //     valueToAdd: action.payload,
  //   };
  // }
};

const Counter = () => {
  // const [count, setCount] = useState(0);
  // const [valueToAdd, setValueToAdd] = useState(0);

  // useEffect(() => {
  //   setValueToAdd("");
  // }, [valueToAdd]);
  const [state, dispatch] = useReducer(reducer, { count: 0, valueToAdd: 0 });
  console.log(state);

  const incrementHandler = () => {
    // setCount(count + 1);
    dispatch({
      type: COUNT_INCREMENT,
    });
  };

  const decrementHandler = () => {
    // setCount(count - 1);
    dispatch({
      type: COUNT_DECREMENT,
    });
  };

  const changeHandler = (event) => {
    const inputValue = parseInt(event.target.value) || 0;
    // setValueToAdd(inputValue);
    dispatch({
      type: VALUE_CHANGE_TO_ADD,
      payload: inputValue,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_TO_COUNT,
    });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <div className="m-3">
      <div className="text-lg">{state.count}</div>
      <div className="flex flex-row">
        <Button onClick={incrementHandler}>Increment</Button>
        <Button onClick={decrementHandler}>Decrement</Button>
      </div>

      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="">Add a Lot!</label>
          <br />
          <input
            type="number"
            placeholder="Number's Only"
            value={state.valueToAdd || ""}
            onChange={changeHandler}
            className="p-1 m-3 bg-gray-50 border border-gray-300"
          />
          <Button>Add it</Button>
        </form>
      </div>
    </div>
  );
};

export default Counter;
