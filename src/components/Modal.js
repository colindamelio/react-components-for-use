import React, { Component } from "react";
import styled from "styled-components";
import { Portal, absolute } from "utils";
import { Card } from "./Card";
import Icon from "./Icon";

export default class Modal extends Component {
  render() {
    const { isToggled, toggle, children } = this.props;
    return (
      <Portal>
        {isToggled && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              {children}
            </ModalCard>
            <Overlay onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = Card.extend`
  position: relative;
  min-width: 400px;
  text-align: center;
  z-index: 10;
`;

const CloseButton = styled.button`
  ${absolute({
    y: "top",
    x: "right"
  })};
  padding: 10px;
  background: none;
  border: 0;
  cursor: pointer;
`;

const Overlay = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
`;
