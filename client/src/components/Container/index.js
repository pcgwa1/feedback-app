import styled from 'styled-components';

export default styled.div`
  ${props => (props.hide ? 'display: none;' : '')};
  padding: 1em 1em 1em 20%;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: #333;
  color: white;
`;
