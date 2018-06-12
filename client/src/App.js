import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import AppBar from './components/AppBar';
import Landing from './containers/Landing';
import Dashboard from './containers/Dash';
import { fetchUserData } from './actions';
import './App.css';

/* Get API data */
export async function getData( /* istanbul ignore next */ requestURL = fetch) {
  // const url = '/api/current_user';
  // try {
  //   const response = await requestURL(url, { method: 'GET' });
  //     const data = await response;
  //     return data;
  // } catch (error) {
  //   console.error('Error getting data: ', error);
  // }

  const res = await axios.get('/api/current_user');
  console.log('axiios');
  console.log('axiios data', res);
}

class App extends Component {
  async componentDidMount() {
    console.log('hello');
    console.log(this.props);
    const data = await getData();
    // console.log(data);
    // this.props.fetchUser('peter');
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <AppBar />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    fetchUser: data => dispatch(fetchUserData(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);