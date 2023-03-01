import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 16px;
  justify-content: space-around;
  align-items: flex-start;
  height: 100px;
`;

export const TextAria = styled.input`
  width: 100%;
  resize: none;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin: 0;
  width: 92px;
  height: 48px;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: #fdf5ff;
  background-color: #ff6e30;
  box-shadow: 0 0 40px 40px #ff6e30 inset, 0 0 0 0 #ff6e30;
  transition: all 150ms ease-in-out;
  border: 2px solid #ff6e30;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    color: #805b44;
    background-color: transparent;
    box-shadow: 0 0 10px 0 #ff6e30 inset, 0 0 10px 4px #ff6e30;
    border: 2px solid #ff6e30;
  }
`;

export const Error = styled.div`
  color: red;
`;
