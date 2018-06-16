import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";
import Payments from '../Payments';
import Logo from '../../assets/icons/feedback-logo.svg';
import { Navbar } from '../MainWrapper';

const Wrapper = styled.nav`
// position: absolute;
//   display: ${props => props.show ? 'flex' : 'none'};
//   > ul {
//       list-style-type: none;
//       margin: 0;
//       padding: 0;
//       //width: 20%;
//       background-color: #f1f1f1;
//       position: fixed;
//       //height: 100%;
//       overflow: auto;
//   }
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
`;

const LinkWrapper = styled.li`
      display: flex;
      align-items: center; 
    
    > a {
      display: flex;
      align-items: center;
      //justify-content: space-between; 
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
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
`;

const PaymentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

const UserDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 18px 0;
`;

const Credits = styled.p`
  font-size: 18px;
  margin: 0 30px 0 0;
  font-weight: bold;
  padding: 0;
`;

const Welcome = styled.i`
  font-size: 20px;
  width: 100%;
`;

export async function logOut(requestURL = fetch) {
  const response = await requestURL('/api/logout', { method: 'GET' });

  if(response.status === 200) {
    const res = await axios.get('/api/current-user');
  }
}

// export async function getAuthGoogle(requestURL = fetch) {
//   await requestURL('/auth/google', { method: 'GET', mode: 'cors', headers:{'Access-Control-Allow-Origin':'*'}, });
// }

export default class SidebarNav extends Component {
  render() {
    const { user } = this.props;
    return (
      <Navbar>
        <ul>
          <Top>
           <LogoLink to='/'>
             Feedback App
             <Image src={Logo} />
           </LogoLink>
           <UserDetailsWrapper>
             <Welcome>Welcome {user ? user.username : 'Guest'}</Welcome>
           </UserDetailsWrapper>
          </Top>
          {user ? <LinkWrapper><Link to='/surveys'>Dashboard</Link></LinkWrapper> : <div />}
          {user ? <LinkWrapper><Link to='/surveys/new'>Create Survey</Link></LinkWrapper> : <div />}
          {user ? <LinkWrapper><a href='/api/logout'>Logout</a></LinkWrapper> : <div />}
        </ul>
      </Navbar>
    );
  }
}