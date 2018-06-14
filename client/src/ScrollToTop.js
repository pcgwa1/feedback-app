import { Component } from 'react';
import { withRouter } from 'react-router';
import easyScroll from 'easy-scroll';

export class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      easyScroll({
        scrollableDomEle: window,
        direction: 'top',
        duration: 800,
        easingPreset: 'linear',
        scrollAmount: 0,
      });
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
