import React, { Component } from 'react';
import { Desc } from './Desc/Desc';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { Layout } from './Layout/Layout';
import Modal from './Modal/Modal';
import { ToDoEditor } from './ToDoEditor/ToDoEditor';
import { Button } from './ToDoEditor/ToDoEditor.styled';
import { ToDoList } from './ToDoList/ToDoList';

export class App extends Component {
  state = {
    todos: [
      {
        id: 'id-1',
        title: 'First todo',
        description: 'First todo description',
        status: true,
      },
      {
        id: 'id-2',
        title: 'Second todo',
        description: 'Second todo description',
        status: false,
      },
      {
        id: 'id-3',
        title: 'Third todo',
        description: 'Third todo description',
        status: false,
      },
    ],
    showModal: false,
    selectedToDoId: '',
  };

  addToDo = ({ title, description }) => {
    const todo = {
      id: Math.random(),
      title,
      description,
      status: false,
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  };

  toggleComplited = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            status: !todo.status,
          };
        }

        return todo;
      }),
    }));
  };

  toggleModal = id => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectedToDoId: id,
    }));
  };

  showSelectedToDo = () => {
    const todo = this.state.todos.find(
      todo => todo.id === this.state.selectedToDoId
    );
    return todo;
  };

  render() {
    const { todos } = this.state;
    const currentToDo = this.showSelectedToDo();

    return (
      <Layout>
        {this.state.showModal && (
          <Modal>
            <h2>{currentToDo.title.toLocaleUpperCase()}</h2>
            <h3>Description:</h3>
            <p>{currentToDo.description}</p>
            <label>
              Status:{' '}
              <input
                type="checkbox"
                checked={currentToDo.status}
                onChange={() => {
                  this.toggleComplited(currentToDo.id);
                }}
              />
            </label>
            <Button type="button" onClick={this.toggleModal}>
              Close
            </Button>
          </Modal>
        )}
        <h1>ToDo List</h1>
        <ToDoEditor onSubmit={this.addToDo} />
        <Desc />
        <ToDoList
          todos={todos}
          onComplited={this.toggleComplited}
          toggleModal={this.toggleModal}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
