import React, { Component } from "react";
import styled from "styled-components";
import Portal from "./Portal";

export default class Modal extends Component {
  render() {
    const { isToggled, toggle, children } = this.props;
    return (
      <Portal>
        {isToggled && (
          <ModalWrapper>
            <ModalWindow>
              <CloseButton onClick={toggle}>close</CloseButton>
              {children}
            </ModalWindow>
            <Overlay onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWindow = styled.div`
  position: relative;
  min-width: 400px;
  background: white;
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.6;
`;
