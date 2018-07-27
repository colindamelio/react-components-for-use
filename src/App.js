import React, { Component, Fragment } from "react";
import Toggle from "./Toggle";
import Modal from "./Modal";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle>
          {({ isToggled, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Click to Open</button>
              <Modal isToggled={isToggled} toggle={toggle}>
                <h1>Hi, I am a modal</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
