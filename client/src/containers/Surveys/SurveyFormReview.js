// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import formFields from './formFields';
import { withRouter} from 'react-router-dom';
import styled from 'styled-components';
import * as actions from '../../actions';
import LoadingButton from '../../components/LoadingButton';

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
    margin: 12px 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 18px 0;
`;

const BtnText = styled.p`
  color : black;
  transition : .3s;
  font-weight: bold;
    
`;

const BtnTwo = styled.div`
  position : relative;
  width : 200px;
  height : 120px;
  margin-top: -100px;
  padding-top: 2px;
  background : #333;
  left : -250px;
  transition : .3s;
`;

const BtnText2 = styled.p`
  margin-top : 65px;
  margin-right : -130px;
  color : #FFF;
`;

export const CancelButton = styled.button`
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

  :hover ${BtnTwo} {
    left: -130px;
  }
  
  :hover ${BtnText} {
    margin-left : 65px;
  }
  
  :active {
    box-shadow: 0 5px 6px rgba(0,0,0,0.3);
}
`;

export const Arrow = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin: 0 8px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const submitSurvey = async (formValues, updateUser, history) => {
  const response = await axios.post('/api/surveys', formValues);
  if(response.status === 200) {
    updateUser(response.data);
    history.push('/surveys');
  }
};

const SurveyFormReview = ({ onCancel, formValues, updateUser, history }) => {
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
        <CancelButton onClick={onCancel}>
          <BtnText>BACK</BtnText>
          <BtnTwo>
            <BtnText2><Arrow /></BtnText2>
          </BtnTwo>
        </CancelButton>
        <LoadingButton
          submitSurvey={submitSurvey}
          formValues={formValues}
          updateUser={updateUser}
          history={history}
        />
      </ButtonWrapper>
    </FormWrapper>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
