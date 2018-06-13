import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import AppBar from './components/AppBar';
import Landing from './containers/Landing';
import Dashboard from './containers/Dashboard';
import SurveyNew from './containers/Survey';
import { fetchUserData } from './actions';
import './App.css';

/* Get API data */
export async function getData() {
  const res = await axios.get('/api/current-user');
  return res.data
}

class App extends Component {
  async componentDidMount() {
    const data = await getData();
    this.props.fetchUser(data);
  }
  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <Router>
          <div>
            <AppBar user={user} />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/surveys' component={Dashboard} />
              <Route exact path='/surveys/new' component={SurveyNew} />
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