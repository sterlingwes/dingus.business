# React vs. Pure JS

A pure javascript todo list UI on web might look something like this:

```jsx
const todos = [];
const appContainerElement = document.getElementByTagName("body");
const todoInput = document.getElementByTagName("input");
const todoAddButton = document.getElementByTagName("button");

const render = () => {
  appContainerElement.innerText = ""; // clear existing list
  todos.forEach((todoText) => {
    const todoListItem = document.createElement("div");
    todoListItem.innerText = todoText;
    appContainerElement.appendChild(todoListItem);
  });
};

todoAddButton.addEventListener("click", () => {
  todos.push(todoInput.value);
  render();
});
```

You’ll notice a few main things:

- we have to interact directly with the DOM (the browser’s document object model) to get things to appear on the screen
- we have to ensure that what appears on the screen is updated when the user takes an action (adding a todo in this case)
- we clear and redraw the UI on every user interaction to ensure the todo list they see is the same as what’s in our state (the todos array)

That last point is where frameworks really help - they can ensure our app stays performant by managing the UI updates in a more efficient manner (ie: only re-drawing the things that need to change).

A similar UI might look like this when using React:

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [pendingTodo, setPendingTodo] = useState("");

  return (
    <div>
      {todos.map((todoText) => (
        <div>{todoText}</div>
      ))}
      <input onChange={setPendingTodo} value={pendingTodo} />
      <button onClick={() => setTodos([...todos, pendingTodo])}>
        Add Todo
      </button>
    </div>
  );
};

ReactDOM.render(document.getElementByTagName("body"), TodoApp);
```

You may notice:

- the only interaction we have with the DOM is to tell React which element will be the root element to inject our app into, and it handles the rest
- we can inline syntax that looks like HTML! This is actually called JSX and it’s not really a feature of react, but syntax enabled by a build-time transform through a tool like Babel ([see what it produces in pure JS in the Babel REPL](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBAtgTwFIQB4wLwwBQCgYwA8AJgJYBuAfPgURAA4CGYlAEgKYA2nIMA6iABOnYgEJCAegbNqBSWSq4AlEA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.16.7&externalPlugins=&assumptions=%7B%7D))
- we have a nice pattern for separating application concerns: state, behaviour, and rendering in a portable way (as a single component function)
- ReactDOM is a separate library - that’s because React javascript can render UI on multiple platforms, including native ones like iOS and Android using the same “shadow DOM” concept that helps it efficiently determine which underlying platform view objects to create, update, or remove from the user’s screen
