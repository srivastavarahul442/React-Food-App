import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS (Object) => HTMLElement(render)
const heading = React.createElement(
  "div",
  { id: "head" },
  React.createElement("h1", { id: "h1" }, "Hello Rahul...")
);

// JSX, HTML like syntax
// JSX (transpiled before it reaches the JS) - Parcel - Babel
// JSX =>Babel transpiles to React.createElement => ReactElement-JS (Object) => HTMLElement(render)
const jsxHeading = <h1>Hello... From JSX</h1>


//component
//class based component --- Old
//functional based component --- New

const num = 10000;
const HeadComp1 = () => (
  <h1>Hello from HeadComp1 {num}</h1>
)


const HeadComp = () => {
  return <div>
    {/* we can call another component inside any component which is know as component composition */}
    <HeadComp1 />
    <HeadComp1></HeadComp1>
    {HeadComp1()}
    {/* we can use ReactElement inside JSX inside the {} bracket */}
    <div>{heading}</div> 
    <h1>Hello From HeadComp</h1>
  </div>
}

<HeadComp />


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadComp />); 
