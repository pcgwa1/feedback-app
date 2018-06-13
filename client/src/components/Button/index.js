import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0 1.25em;
  font-size: 0.8em;
  cursor: pointer;
  font-weight: 800;
  background: ${props => props.theme.gradients.gray};
  ${props => !props.black} { background: ${props => props.theme.gradients.black}; }
  ${props => !props.red} { background: ${props => props.theme.gradients.red}; }
  ${props => (props.submitButton ? 'margin-top: 1em;' : '')};
  color: ${props => props.theme.colors.white};
  border: none;
  height: 2.2em;
  text-transform: uppercase;
  ${props => props.theme.breakpoints.maxTablet} {
    ${props => (props.submitButton ? 'justify-content: center; width: 100%; padding: 1em 0; min-height: 2.2; height: auto;' : '')}
  }
`;

export const NavigationButton = Button.withComponent(Link);
