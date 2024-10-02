import React from "react";
import ReactDOM from "react-dom/client";

// ReactElement(Objeect) => HTML(Browser Understands)
const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [
        React.createElement("div",
            {id: "child"},
            [ 
                React.createElement(
                    "h1",
                    {id: "heading"},
                    "I am an H1 tag1"
                ),
                React.createElement(
                    "h2",
                    {id: "heading"},
                    "I am an H2 tag1"
                ),
            ]
        ),
        React.createElement("div",
            {id: "child2"},
            [  
                React.createElement(
                    "h1",
                    {id: "heading"},
                    "I am an H1 tag2"
                ),
                React.createElement(
                    "h2",
                    {id: "heading"},
                    "I am an H2 tag2"
                ),
            ]
        )
    ]
)

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);