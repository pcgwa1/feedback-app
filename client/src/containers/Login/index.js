import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import Logo from '../../assets/icons/feedback-logo.svg';
import './styles.css';

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #4CAF50;   
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

const BtnText = styled.p`
display: ${props => props.show ? 'none' : 'flex'};
margin-left: ${props => props.show ? '0' : '90px'};
    color : white;
    transition : .3s;
    font-weight: bold;
    
`;

const BtnTwo = styled.div`
  position : relative;
  width : 200px;
  height : 120px;
  margin-top: -100px;
  padding-top: 2px;
  background : #fff;
  left : ${props => props.show ? '-250px' : '-130px'};
  transition : .3s;
`;

const BtnText2 = styled.p`
  margin-top : 63px;
  margin-right : -130px;
  color : #FFF;
`;

const Button = styled.a`
  text-decoration: none;
  background: #333;
  margin : 20px auto;
  width : 300px;
  height : 60px;
  overflow: hidden;
  text-align : center;
  transition : .2s;
  cursor : pointer;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  
  &:hover { /*Clicked and held*/
      box-shadow: 0 5px 6px rgba(0,0,0,0.3);
  }
`;

const Loader = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  position: relative;
  width: 64px;
  height: 64px;
  left: 35%;
`;

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      show: false,
    };
  }
  toggle() {
    this.setState({
      show: true,
    });
  }

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
    const { show } = this.state;
    return (
      <LoginWrapper>
        <LogoWrapper>
          <Title>Feedback App</Title>
          <Image src={Logo} />
        </LogoWrapper>
          <Button href='/auth/google' onClick={this.toggle}>
            <BtnText show={show}>Login using Google</BtnText>
            <Loader show={show} className="lds-ellipsis">
              <div/>
              <div/>
              <div/>
              <div/>
            </Loader>
            <BtnTwo show={show}>
              <BtnText2><GoogleIcon width="20px" alt="Google &quot;G&quot; Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"/></BtnText2>
            </BtnTwo>
          </Button>
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