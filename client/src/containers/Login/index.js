import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import Logo from '../../assets/icons/feedback-logo.svg';

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #4CAF50;   
`;

const LinkWrapper = styled.div`
      display: flex;
      align-items: center;
      border: 1px solid silver;
      background: white; 
    
    > a {
      display: flex;
      align-items: center;
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

const GoogleIcon = styled.img`
  margin-right: 10px;
  
`;

const Image = styled.img`
  width: 100px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  font-weight: bold;
  text-decoration: none;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  margin-right: 28px;
`;

class Login extends PureComponent {
  componentWillUpdate(nextProps, nextState) {
    if(!!nextProps.user){
      nextProps.history.push('/surveys');
    }
  }

  componentWillMount() {
    if(!!this.props.user){
      this.props.history.push('/surveys');
    }
  }
  render() {
    return (
      <LoginWrapper>
        <LogoWrapper>
          <Title>Feedback App</Title>
          <Image src={Logo} />
        </LogoWrapper>
        <LinkWrapper>
          <a href='/auth/google'>
            <GoogleIcon width="20px" alt="Google &quot;G&quot; Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/>
            Login using Google
          </a>
        </LinkWrapper>
      </LoginWrapper>
    );
  }
}

export function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}


export default connect(mapStateToProps, null)(Login);