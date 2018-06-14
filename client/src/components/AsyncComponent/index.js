import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
export default function asyncComponent(importComponent, props) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
        apiData: null,
        isLoading: false,
      };
    }

    async componentWillMount() {
      const { default: component } = await importComponent();
      this.setState({
        component,
      });
    }

    render() {
      const WrappedComponent = this.state.component;
      return (
        <div>
          {WrappedComponent ? <WrappedComponent {...this.props} /> : <Wrapper />}
        </div>
      );
    }
  }

  return AsyncComponent;
}
