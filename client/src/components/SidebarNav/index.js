import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/icons/feedback-logo.svg';
import { Navbar } from '../MainWrapper';

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
      color: ${props => props.active ? '#fff' : '#333'};
      padding: 15px 30px;
      text-decoration: none;
      width: 100%;
      font-weight: bold;
      background: ${props => props.active ? '#333' : '#fff'};      
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

const UserDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 0 0 0;
`;

const Welcome = styled.i`
  font-size: 12px;
  width: 100%;
`;

export default class SidebarNav extends Component {
  constructor(props) {
    super(props);
    this.setLocation = this.setLocation.bind(this);
    this.state = {
      page: '/surveys',
    };
  }
  setLocation(url) {
    this.setState({
      page: url,
    });
  }
  render() {
    const { user } = this.props;
    const { page } = this.state;
    return (
      <Navbar hide={!user}>
        <ul>
          <Top>
           <LogoLink to='/'>
             Feedback App
             <Image src={Logo} />
           </LogoLink>
           <UserDetailsWrapper>
             <Welcome>Hello {user ? user.username : 'Guest'}</Welcome>
           </UserDetailsWrapper>
          </Top>
          <LinkWrapper onClick={() => this.setLocation('/surveys')} active={page === '/surveys'}>
            <Link to='/surveys'>Dashboard</Link>
          </LinkWrapper>
          <LinkWrapper onClick={() => this.setLocation('/surveys/new')} active={page === '/surveys/new'}>
            <Link to='/surveys/new'>Create Survey</Link>
          </LinkWrapper>
          <LinkWrapper onClick={() => this.setLocation('/api/logout')} active={page === '/api/logout'}>
            <a href='/api/logout'>Logout</a>
          </LinkWrapper>
        </ul>
      </Navbar>
    );
  }
}