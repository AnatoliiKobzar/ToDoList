import React, { Component } from 'react';
import { Info, ToDo, WrapToDo } from './ToDoItem.styled';

export class ToDoItem extends Component {
  state = {};

  render() {
    const { toggleModal, onComplited, id, title, description, status, index } =
      this.props;

    return (
      <div>
        <ToDo>
          <WrapToDo
            onClick={() => {
              toggleModal(id);
            }}
          >
            <p>{index + 1}</p>
            <Info>{title}</Info>
            <Info>{description}</Info>
          </WrapToDo>
          <input
            type="checkbox"
            checked={status}
            onChange={() => {
              onComplited(id);
            }}
          />
        </ToDo>
      </div>
    );
  }
}
