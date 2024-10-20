import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement(JS Object) => HTML Element(Browser Understands)

/* const heading = React.createElement("h1", {id: "heading"}, "Hello World React");*/

// JSX - Is not HTML in Javascript, it is HTML or XML like syntax but not actual HTML

// JSX code is transpiled before it reaches the javascript engine - done by Parcel via another package called Babel

// JSX => (Transpiled by Babel)React.createElement => ReactElement(JS Object) => HTML Element(Browser Understands)

const Title = () => (
    <h1 className="head" tabIndex="5">
        Hello World Component Composition 
    </h1>
);

const elem = <span> React Element </span>;

// React Compoenents
// Class-based components - OLD - uses js classes
// Functional Components - NEW - uses js functions

// React functional Component

/* const HeadingComponent2 = () => {
    return <h1 className="heading">Hello World Functional Component</h1>
}; */

const number = 11000

const HeadingComponent = () => (
    <div id="container"> 
        <Title />
        <Title></Title>
        {Title()}
        <h1 className="heading">Hello World Functional Component</h1>
        <h2> {number} </h2>
        <h2> {100 + 200} </h2>
        {console.log(number)}
    </div>
);

console.log(<HeadingComponent />);
const jsxTitle = (
    <div className="title" tabIndex="5">
        {elem}
        Hello World JSX
        <HeadingComponent />
    </div>
)

console.log(jsxTitle);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxTitle);