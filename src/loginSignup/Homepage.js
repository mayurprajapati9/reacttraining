import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "./logout";
import { Outlet } from "react-router-dom/dist";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "", // Initialize state to store the user's name
    };
  }

  componentDidMount() {
    // Retrieve user information from localStorage
    const user = JSON.parse(localStorage.getItem("userdata"));

    // Update the component state with the user's name
    if (user && user.name) {
      this.setState({ userName: user.name });
    }
  }

  render() {
    const { userName } = this.state;

    return (
      <>
        <center>
          <h2>Homepage</h2>
          {userName && <p className="mb-10">Hello, {userName}!</p>}
          <Link className='p-2 bg-slate-200 px-10 rounded font-semibold '  to="/loginSignup/homepage/changepassword">Change Password</Link>
          <Logout />
          <Outlet />
        </center>
      </>
    );
  }
}

export default Homepage;
