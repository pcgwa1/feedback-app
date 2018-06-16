import React, { PureComponent } from 'react';
import axios from 'axios';
import Container from '../../components/Container';

export const submitSurvey = async () => {
  const values = {
    title: 'My New SurveyNew',
    subject: 'test survey',
    body: 'just answer the question',
    recipients: 'pgwaka@gmail.com, peter@bnry.digital',
  };
  const res = await axios.post('/api/surveys', values);
  console.log(res);
};
class Survey extends PureComponent {
  render() {
    return (
      <div>
        Survey List
        <button type='button' onClick={() => submitSurvey()}>Submit survey</button>
      </div>
    );
  }
}

export default Survey;
