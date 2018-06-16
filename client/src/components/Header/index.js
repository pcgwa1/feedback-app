import React, { Component } from 'react';
import styled from 'styled-components';
import { HeaderWrapper } from '../MainWrapper';
import Payments from '../Payments';

export const Credits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 24px 0 5px;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  border-radius: 50%;
  height: 2.2em;
  width: 2.2em;
  text-transform: uppercase;
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.17);
`;
export const CreditsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
export default class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <HeaderWrapper>
        <ButtonWrapper>
          {user ? <CreditsWrapper>Email Credits<Credits>{user.credits}</Credits></CreditsWrapper> : <div/>}
          {user ? <Payments /> : <div />}
        </ButtonWrapper>
      </HeaderWrapper>
    );
  }
}