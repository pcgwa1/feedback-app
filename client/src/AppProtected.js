import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import Header from './components/Header';
import SidebarNav from './components/SidebarNav';
import Landing from './containers/Landing';
import Login from './containers/Login';
import SurveyNew from './containers/Surveys/SurveyNew';
import { MainWrapper } from './components/MainWrapper';
import ScrollTop from './ScrollToTop';
import { fetchUserData } from './actions';
import { getData } from './functions';
import './App.css';
import asyncComponent from './components/AsyncComponent';
const Dashboard = asyncComponent(() => import('./containers/Dashboard'));

const PrivateRoute = ({ component: Component, ...rest, user, updateUser }) => (
  <Route
    {...rest}
    render={props => {
      const protectPath = props.location.pathname === '/surveys/new';
      const hasCredits = user ? user.credits !== 0 : false;
      return (
        !!user ? (
          !hasCredits && protectPath ?
            (
              <Redirect
                to={{
                  pathname: "/surveys",
                  state: { from: props.location }
                }}
              />
            ) :
            <Component {...props} updateUser={updateUser} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      )
    }

    }
  />
);

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
            <MainWrapper>
              <Header user={user} />
              <SidebarNav user={user} />
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/landing' component={Landing} />
                <PrivateRoute exact path='/surveys' component={Dashboard} user={user} updateUser={this.props.fetchUser}  />
                <PrivateRoute exact path='/surveys/new' component={SurveyNew} user={user} updateUser={this.props.fetchUser} />
              </Switch>
            </MainWrapper>
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