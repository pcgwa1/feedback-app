// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
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

export const CancelButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  margin-top: 10px;
	margin-right: 10px;
	padding: 15px 40px;
	font-size: 18px;
	line-height: 1em;
	text-shadow: 0 1px rgba(0, 0, 0, 0.4);
	color: black;
	font-weight: normal;
	transition: background 0.1s ease-in-out;
	border-radius: 3px;
  background-color: #fff;
	box-shadow: 0 1px 1px 0 #000;
	outline: none;
	cursor: pointer;
`;

export const NextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
	margin-right: 10px;
	padding: 15px 40px;
	font-size: 18px;
	line-height: 1em;
	text-shadow: 0 1px rgba(0, 0, 0, 0.4);
	color: black;
	font-weight: normal;
	transition: background 0.1s ease-in-out;
	border-radius: 3px;
  background-color: #fff;
	box-shadow: 0 1px 0 0 #000;
	outline: none;
	cursor: pointer;
`;

export const Arrow = styled.i`
  border: solid black;
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
          type="text"
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
            <CancelButton to="/surveys">
              Cancel
            </CancelButton>
            <NextButton type="submit">
              Next
              <Arrow />
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
