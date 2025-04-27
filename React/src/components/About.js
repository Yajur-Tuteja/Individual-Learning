import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props);

        // console.log("Parent Constructor");
    }

    async componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent Render");

        return (
            <div>
                <h1>About</h1>
                <h2>This is it</h2>
                {/* <User name={"Yajur Tuteja (Function)"} location="Delhi Function" /> */}
                <UserClass name={"Yajur Tuteja (Class)"} location="Delhi Class" />
                {/* <UserClass name={"Yajur(Class2)"} location="Delhi" /> */}
            </div>
        )
    }
}

export default About;