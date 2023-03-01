import React, { Component } from 'react';
import { Backdrop, Content } from './Modal.styled';

export default class Modal extends Component {
  render() {
    return (
      <Backdrop>
        <Content>{this.props.children}</Content>
      </Backdrop>
    );
  }
}
