import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Tour from 'reactour';
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

export const PaymentsWrapper = styled.div`
  padding: 0;
  margin: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const WelcomeTour = styled.div`
  display: flex;
  flex-direction: column;
  
  > h4 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 22px;
  }
  
  > p {
    margin: 12px 0;
    padding: 0;
  }
  
  > span {
    font-size: 12px;
    font-weight: bold;
  }
`;

const bouncy = keyframes`
   0% { top: 0; }
   40% { top: 0; }
   43% { top: -0.2em; }
   46% { top: 0; }
   48% { top: -0.2em; }
   50% { top: 0; }
  100% { top: 0; }
`;

const Button = styled.button`
  position: relative;
  text-decoration: none;
  background: #fff;
  padding: 12px 0;
  overflow: hidden;
  text-align : center;
  transition : .2s;
  cursor : pointer;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  animation: ${bouncy} 5s infinite linear;
  
  &:hover { /*Clicked and held*/
      box-shadow: 0 5px 6px rgba(0,0,0,0.3);
  }
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.closeTour = this.closeTour.bind(this);
    this.state = {
      isTourOpen: true,
    };
  }
  closeTour() {
    this.setState({
      isTourOpen: false,
    });
  }
  render() {
    const { user } = this.props;
    const steps = [
      {
        selector: '',
        content: ({ goTo, inDOM }) => (
          <WelcomeTour>
            <h4>Welcome to Feedback App!</h4>
            <p>In order to create an email feedback survey, you will need to purchase email credits.</p>
            <br />
            <Button onClick={() => goTo(1)}>What are email credits?</Button>
          </WelcomeTour>
        ),
        position: 'left',
      },
      {
        selector: '#my-first-step',
        content: ({ goTo, inDOM }) => (
          <WelcomeTour>
            <h4>What are email credits?</h4>
            <p>Email credits allow you to send out surveys.</p>
            <p>Each survey will cost 1 email credit, currently you have {user.credits} email credits.</p>
            <p>Each email credit costs $1 and you may purchase a minimum of 5 email credits at a given time.</p>
            <br />
            <Button onClick={() => goTo(2)}>How to purchase email credits?</Button>
          </WelcomeTour>
        ),
        position: 'left',
      },
      {
        selector: '#my-second-step',
        content: ({ goTo, inDOM }) => (
          <WelcomeTour>
            <h4>How to purchase email credits?</h4>
            <p>By clicking the "Add Credits" button, you can purchase your first email credits.</p>
            <p>You seem like a trust worthy person {user.username}, I will allow you to use my credit card details to make a purchase.</p>
            <p>
              Email: hello@feedbackapp.com <br />
              Card No: 4242 4242 4242 4242 <br />
              MM/YY: 02/30 <br />
              CVC: 123
            </p>
            <span>*Once you click <i>"Pay"</i> wait a few seconds for confirmation and then check your <i>"Email Credits"</i>.</span>
          </WelcomeTour>
        ),
        position: 'right',
      },
    ];
    return (
      <HeaderWrapper hide={!user}>
        <ButtonWrapper>
          {user ? <CreditsWrapper id="my-first-step">Email Credits<Credits>{user.credits}</Credits></CreditsWrapper> : <div/>}
          {user ? <PaymentsWrapper id="my-second-step"><Payments /></PaymentsWrapper> : <div />}
        </ButtonWrapper>
        {user && user.credits === 0 ?
        <Tour
          steps={steps}
          isOpen={this.state.isTourOpen}
          onRequestClose={this.closeTour}
          scrollDuration={1}
        />
          : <div />}
      </HeaderWrapper>
    );
  }
}