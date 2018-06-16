// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import * as actions from '../../actions';
import axios from "axios/index";

export const FormWrapper = styled.div`
  margin-right: 18px;
  max-width: 50%;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.17);
  padding: 18px 24px;
  
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  
  > label {
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 18px 0;
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

export const submitSurvey = async (formValues, history) => {
  await axios.post('/api/surveys', formValues);
  history.push('/surveys');
};

const SurveyFormReview = ({ onCancel, formValues, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <Wrapper key={name}>
        <label>{label} :</label>
        <div>
          {formValues[name]}
        </div>
      </Wrapper>
    );
  });

  return (
    <FormWrapper>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <ButtonWrapper>
        <NextButton
          onClick={onCancel}
        >
          Back
        </NextButton>
        <NextButton
          onClick={() => submitSurvey(formValues, history)}
        >
          Send Survey
        </NextButton>
      </ButtonWrapper>
    </FormWrapper>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
