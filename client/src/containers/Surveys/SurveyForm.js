// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

export const FormWrapper = styled.div`
  margin-right: 18px;
  max-width: 50%;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.17);
  padding: 18px 24px;
  
`;

export const Wrapper = styled.div`
  width: 80%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 18px 0;
`;

const BtnText = styled.p`
  color : black;
  transition : .3s;
  font-weight: bold;
    
`;

const RightBtnTwo = styled.div`
  position : relative;
  width : 200px;
  height : 120px;
  margin-top: -100px;
  padding-top: 2px;
  background : #333;
  left : 250px;
  transition : .3s;
`;

const RightBtnText2 = styled.p`
  margin-top : 65px;;
  margin-right : 130px;
  color : #FFF;
`;

export const NextButton = styled.button`
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

  :hover ${RightBtnTwo} {
    left: 130px;
  }
  
  :hover ${BtnText} {
    margin-left : -65px;
  }
  
  :active {
    box-shadow: 0 5px 6px rgba(0,0,0,0.3);
}
`;

export const ArrowRight = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 0 8px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type='text'
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <FormWrapper>
        <h1>Create New Survey</h1>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <Wrapper>
            {this.renderFields()}
          </Wrapper>
          <ButtonWrapper>
            <NextButton type='submit'>
              <BtnText>NEXT</BtnText>
              <RightBtnTwo>
                <RightBtnText2><ArrowRight /></RightBtnText2>
              </RightBtnTwo>
            </NextButton>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'This field is required.';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
