import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import AppBar from './components/SidebarNav';
import Landing from './containers/Landing';
import SurveyNew from './containers/SurveyNew';
import ScrollTop from './ScrollToTop';
import { fetchUserData } from './actions';
import './App.css';
import asyncComponent from './components/AsyncComponent';
const Dashboard = asyncComponent(() => import('./containers/Dashboard'));


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
          <ScrollTop>
            <AppBar user={user} />
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/surveys' component={asyncComponent(() => import('./containers/Dashboard'), this.props)} />
              <Route exact path='/surveys/new' component={SurveyNew} />
            </Switch>
          </ScrollTop>
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