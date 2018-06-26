import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import styled, { keyframes } from 'styled-components';
import './styles.css';
import Plane from '../../assets/icons/paper-plane.svg'

const GoogleIcon = styled.img`
  margin-right: 10px;
  
`;

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const BtnText = styled.p`
  display: ${props => props.show ? 'none' : 'flex'};
  margin-left: ${props => props.show ? '0' : '20px'};
  color : black;
  transition : .3s;
  font-weight: bold;
    
`;

const BtnTwo = styled.div`
  position : relative;
  width : 200px;
  height : 120px;
  margin-top:  ${props => props.show ? '-300px' : '-100px'};
  padding-top: 2px;
  background : #fff;
  left : ${props => props.show ? '250px' : '130px'};
  transition : 1s;
`;

const BtnText2 = styled.div`
  margin-top : 63px;
  margin-right : 130px;
  color : #FFF;
`;

const Button = styled.button`
  background: #fff;
  margin : 0;
  width : 200px;
  height : 50px;
  overflow: hidden;
  text-align : center;
  transition : .2s;
  cursor : pointer;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0,0,0,.2);
  text-decoration: none;
  outline: none;
    
  &:hover { /*Clicked and held*/
      box-shadow: 0 5px 6px rgba(0,0,0,0.3);
  }
`;

const Loader = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  position: relative;
  width: 64px;
  height: 64px;
  left: 30%;
  top: -32px;;
  
  animation: ${fade} 0s 0.7s forwards;
  opacity: 0;
`;

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      show: false,
    };
  }
  toggle(
    submitSurvey,
    formValues,
    updateUser,
    history
  ) {
    submitSurvey(formValues, updateUser, history);
    this.setState({
      show: true,
    });
  }
  render() {
    const { show } = this.state;
    const {
      submitSurvey,
      formValues,
      updateUser,
      history,
    } = this.props;
    return (
      <Button onClick={() => this.toggle(
        submitSurvey,
        formValues,
        updateUser,
        history)}>
        <BtnText show={show}>Send Survey</BtnText>
        <Loader show={show} className="lds-ellipsis">
          <div/>
          <div/>
          <div/>
          <div/>
        </Loader>
        <BtnTwo show={show}>
          <BtnText2>
            <GoogleIcon width="20px" alt="Send Survey" src={Plane} />
          </BtnText2>
        </BtnTwo>
      </Button>
    );
  }
}

export function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}


export default connect(mapStateToProps, null)(Login);