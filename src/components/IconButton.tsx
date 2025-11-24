import { ReactElement } from 'react';
import styled from 'styled-components';

const IconButton = ({ children }: { children: ReactElement }) => <Container>{children}</Container>;

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: transparent;
  color: hsl(var(--primary-900));
  cursor: pointer;

  &:hover {
    background-color: hsl(var(--accent-100));
    color: hsl(var(--primary-900));
  }
`;

export default IconButton;
