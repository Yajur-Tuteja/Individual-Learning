
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
                    "I am an H1 tag"
                ),
                React.createElement(
                    "h2",
                    {id: "heading"},
                    "I am an H2 tag"
                ),
            ]
        ),
        React.createElement("div",
            {id: "child2"},
            [ 
                React.createElement(
                    "h1",
                    {id: "heading"},
                    "I am an H1 tag"
                ),
                React.createElement(
                    "h2",
                    {id: "heading"},
                    "I am an H2 tag"
                ),
            ]
        )
    ]
)

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);