// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { Content } from '../../components/MainWrapper';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent(updateUser) {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
          updateUser={updateUser}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    const { updateUser } =this.props;
    return (
      <Content>
        {this.renderContent(updateUser)}
      </Content>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
