import { ToDoItem } from 'components/ToDoItem/ToDoItem';
import React, { Component } from 'react';

export class ToDoList extends Component {
  state = {};

  render() {
    const { todos, onComplited, toggleModal } = this.props;

    return (
      <ul>
        {todos.map(({ id, title, description, status }, index) => (
          <ToDoItem
            key={id}
            id={id}
            title={title}
            description={description}
            status={status}
            index={index}
            onComplited={onComplited}
            toggleModal={toggleModal}
          ></ToDoItem>
        ))}
      </ul>
    );
  }
}
