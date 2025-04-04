import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(JS Object) => HTML Element(Browser Understands)

const heading = React.createElement("h1", {id: "heading"}, "Hello World React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);