import styled from 'styled-components';

export default styled.div`
  ${props => (props.hide ? 'display: none;' : '')};
  position: relative;
  padding: 5em 3em;
  margin: 0 20%;
  width: 80%;
  height: 100%;
  color: black;
`;
