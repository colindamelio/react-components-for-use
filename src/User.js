import React, { Component } from "react";
import { UserContext } from "UserContext";

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h1>User Information</h1>
            <h2>
              {context.user.name} / {context.user.email}
            </h2>
            <button onClick={context.logout}>Logout User</button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
