import React, { Component } from 'react';
import { Button, Error, Form, TextAria } from './ToDoEditor.styled';

export class ToDoEditor extends Component {
  state = {
    title: '',
    description: '',
    isValidTitle: false,
    isValidDescription: false,
  };

  handelChenge = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handelSubmit = event => {
    event.preventDefault();

    if (event.target.elements.title.value.length === 0) {
      this.setState({
        isValidTitle: true,
      });
      return;
    }

    this.setState({
      isValidTitle: false,
    });

    if (event.target.elements.description.value.length === 0) {
      this.setState({
        isValidDescription: true,
      });
      return;
    }

    this.props.onSubmit(this.state);

    this.setState({
      title: '',
      description: '',
      isValidDescription: false,
    });
  };

  render() {
    const { title, description } = this.state;

    return (
      <Form onSubmit={this.handelSubmit}>
        <label>
          Title
          <TextAria
            name="title"
            value={title}
            placeholder="Enter title:"
            onChange={this.handelChenge}
            autoComplete="off"
            style={
              this.state.isValidTitle
                ? { outline: '1px solid red' }
                : { outline: 'none' }
            }
          />
          {this.state.isValidTitle && <Error>This field is empty</Error>}
        </label>
        <label>
          Discription
          <TextAria
            name="description"
            value={description}
            placeholder="Enter description:"
            onChange={this.handelChenge}
            autoComplete="off"
            style={
              this.state.isValidDescription
                ? { outline: '1px solid red' }
                : { outline: 'none' }
            }
          />
          {this.state.isValidDescription && <Error>This field is empty</Error>}
        </label>

        <Button type="submit">Create</Button>
      </Form>
    );
  }
}
