import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Toggle } from "utils";
import { Modal } from "components";
import { UserContext } from "./UserContext";
import User from "./User";
import "./App.css";

class UserProvider extends Component {
  state = {
    id: "123",
    name: "Frank",
    email: "frank@oak.com"
  };

  logout = () => {
    this.setState({
      id: null,
      name: "",
      email: ""
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <Toggle>
            {({ isToggled, toggle }) => (
              <Fragment>
                <Button isToggled={isToggled} onClick={toggle}>
                  Click to Open
                </Button>
                <Modal isToggled={isToggled} toggle={toggle}>
                  <h1>Hi, I am a modal</h1>
                  <User />
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

export default App;

const Button = styled.button`
  display: ${props => (props.isToggled ? "none" : "block")};
  margin: auto;
`;
