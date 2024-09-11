import React from "react";
import ReactDOM from "react-dom/client";

const node = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("h1", { id: "child1" }, "hello-child1"),
    React.createElement("h1", { id: "child2" }, "hello-child2"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h1", { id: "child1" }, "hello-child1"),
    React.createElement("h1", { id: "child2" }, "hello-child2"),
    React.createElement("h1", { id: "child2" }, "hello-child3"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(node);
