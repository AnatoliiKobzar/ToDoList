import { Info } from 'components/ToDoItem/ToDoItem.styled';
import React from 'react';
import { Wrap } from './Desc.styled';

export const Desc = () => {
  return (
    <Wrap>
      <p>Id</p>
      <Info>Title</Info>
      <Info>Description</Info>
      <p>Status</p>
    </Wrap>
  );
};
