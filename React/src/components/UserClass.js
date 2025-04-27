import React from "react";

class UserClass extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            userInfo: {
                name: "This",
                location: "Default",
                avatar_url: "http://Dummy"
            }
        }

        // console.log(props);
        // console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount() {
        // console.log(this.props.name + "Child Component Did Mount");

        // Making API calls

        const data = await fetch("https://api.github.com/users/yajur-tuteja-24");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        console.log("Updated")
    }

    componentWillUnmount() {
        console.log("Unmounted")
    }

    render() {
        const { name, location, login, avatar_url } = this.state.userInfo;
        // const { count, count2 } = this.state;

        // console.log(name + "Child Render");

        return (
            <div className="user-card">
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
                <h3>Contact: {login}</h3>
                <img src={avatar_url} />
            </div>
        );
    }


}

export default UserClass;


/*

----Mounting----
Constructor (Dummy)
Render (Dummy)
    <HTML Dummy></HTML>
ComponentDidMount
    <API Call></API>
    this.setState - triggers update cycle after updating state variable


----Update----
Render (API Data)
    <HTML API Data></HTML>
ComponentDidUpdate

*/