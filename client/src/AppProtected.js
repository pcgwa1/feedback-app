import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import {connect} from "react-redux";
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

const PrivateRoute = ({ component: Component, ...rest, user }) => (
  <Route
    {...rest}
    render={props => {
      return (
        !!user ? (
          <Component {...props} />
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
                <PrivateRoute exact path='/surveys' component={Dashboard} user={user} />
                <PrivateRoute exact path='/surveys/new' component={SurveyNew} user={user} />
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