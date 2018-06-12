import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  > ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 15%;
      background-color: #f1f1f1;
      position: fixed;
      height: 100%;
      overflow: auto;
  }
`;

const Top = styled.li`
    display: flex;
    align-items: center;
    background-color: #4CAF50; 
    color: #fff;
    padding: 16px 20px;
    text-decoration: none;
    width: 100%;
    font-size: 25px;
    font-weight: bold;
   
`;

const LinkWrapper = styled.li`
      display: flex;
      align-items: center; 
    
    > a {
      display: block;
      color: #000;
      padding: 8px 20px;
      text-decoration: none;
      width: 100%;
            
      &:hover {
        background-color: #333;
        color: white;
      }
    }
`;

const LinkTo = styled(Link)`
  display: block;
  color: #000;
  padding: 8px 20px;
  text-decoration: none;
  width: 100%;
        
  &:hover {
    background-color: #4CAF50;
    color: white;
  }
   
`;

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <ul>
          <Top>Feedback App</Top>
          <LinkWrapper><Link to="/dashBoard">Dashboard</Link></LinkWrapper>
          <LinkWrapper><a href="/auth/google">Sign In Using Google</a></LinkWrapper>
          <LinkWrapper><a href="/api/logout">Logout</a></LinkWrapper>
        </ul>
      </Wrapper>
    );
  }
}
