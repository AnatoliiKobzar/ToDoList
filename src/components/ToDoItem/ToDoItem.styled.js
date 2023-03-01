import styled from 'styled-components';

export const WrapToDo = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
`;

export const ToDo = styled.li`
  display: flex;
  gap: 100px;
`;

export const Info = styled.p`
  width: 280px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
