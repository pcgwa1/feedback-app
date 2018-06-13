import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Payments from '../Payments';
import Logo from '../../assets/icons/feedback-logo.svg';

const Wrapper = styled.nav`
  > ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 17%;
      background-color: #f1f1f1;
      position: fixed;
      height: 100%;
      overflow: auto;
  }
`;

const Top = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 20%;
    background-color: #4CAF50; 
    color: #fff;
    padding: 15px 0px 15px 30px;
    text-decoration: none;
    max-width: 100%;
            
    > i {
    font-size: 10px;
      width: 100%;
    }
   
`;

const LinkWrapper = styled.li`
      display: flex;
      align-items: center; 
    
    > a {
      display: block;
      color: #000;
      padding: 15px 30px;
      text-decoration: none;
      width: 100%;
      font-weight: bold;
            
      &:hover {
        background-color: #333;
        color: white;
      }
    }
`;

const Image = styled.img`
  width: 100px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
`;

const PaymentWrapper = styled.div`
  align-self: flex-start;
`;

export default class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <Wrapper>
        <ul>
          <Top>
            <LogoLink to='/'>
            Feedback App
            <Image src={Logo} />
            </LogoLink>
            <PaymentWrapper>
              <Payments />
            </PaymentWrapper>
            {user ? <p>Credits: {user.credits}</p> : <div />}
            <i>Welcome {user ? user.username : 'Guest'}</i>
          </Top>
          <LinkWrapper><Link to='/surveys'>Dashboard</Link></LinkWrapper>
          {user ? <LinkWrapper><Link to='/surveys/new'>Survey</Link></LinkWrapper> : <div />}
          {user ?
            <LinkWrapper><a href='/api/logout'>Logout</a></LinkWrapper> :
            <LinkWrapper><a href='/auth/google'>Sign In Using Google</a></LinkWrapper>}
        </ul>
      </Wrapper>
    );
  }
}
