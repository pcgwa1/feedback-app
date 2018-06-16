import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0 1.25em;
  margin: 0 18px;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  height: 2.2em;
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.17);
`;

export const NavigationButton = Button.withComponent(Link);
