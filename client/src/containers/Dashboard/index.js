import React, { PureComponent } from 'react';
import { Content } from '../../components/MainWrapper';
import Table from '../../components/Table';
import axios from "axios/index";

/* Get API data */
export async function getData() {
  const res = await axios.get('/api/surveys');
  return res.data
}

class Dash extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      surveyList: [],
    };
  }
  async componentDidMount() {
    const data = await getData();
    this.setState({
      surveyList: data,
    });
  }
  render() {
    const { surveyList } = this.state;
    return (
      <Content>
        <h1>Survey Dashboard</h1>
        <Table surveyList={surveyList} />
      </Content>
    );
  }
}

export default Dash;
