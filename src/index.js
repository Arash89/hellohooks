import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const TitledButton = (Comp, { title, ...props }) => (
  <React.Fragment>
    <h5>{title}</h5>
    <Comp {...props} />
  </React.Fragment>
);

const CustomButton = ({ handler, label }) => (
  <button className="red" onClick={handler}>
    {label}
  </button>
);

const CustomLabel = ({ count }) => (
  <div className="red background-blue">
    <label>{count}</label>
  </div>
);

function App() {
  const [counter, setCounter] = React.useState(0);

  const handlerClickAdd = () => setCounter(counter + 1);
  const handlerClickSub = () => setCounter(counter - 1);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{`Hello UseState: ${counter}`}</h2>
      <CustomLabel count={counter} />
      <button onClick={() => setCounter(counter + 1)}>Add One</button>
      <CustomButton label="+" handler={() => setCounter(counter + 1)} />
      <CustomButton label="-" handler={handlerClickSub} />
      {TitledButton(CustomButton, {
        title: "ADD Title",
        label: "ADD",
        handler: handlerClickAdd
      })}
      {TitledButton(CustomButton, {
        title: "SUB Title",
        label: "SUB",
        handler: handlerClickSub
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
