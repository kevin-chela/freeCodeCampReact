//Hooks replace need for class components in functions way better

//useState Hook

import { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState("red");
    
    //previous state represents current state

    const updateColor = () => {
        setColor(previousState => {
          return { ...previousState, color: "orange" }
        });
      }

      console.log(color);

    return (
        <>
          <h1>My favorite color is {color}!</h1>
          <button
            type="button"
            // update state or create function updateColor
            onClick={() => setColor("blue")}
          >Blue</button>
          <button
            type="button"
            // update state or create function updateColor
            onClick={updateColor}
          >Reset</button>
        </>
      )
  }

  //useEffect hooks

  useEffect(() => {
    //Runs on every render
  });

  useEffect(() => {
    //Runs only on the first render
  }, []);

  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
  }, [prop, state]);



  //useContext hook manage state globally
 

  //useRef Hook  allows you to persist values between renders.

  import { useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// The useReducer Hook returns the current stateand a dispatchmethod.

import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

const roots = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todos />);

//


  