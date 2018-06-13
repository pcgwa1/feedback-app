import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { Button } from '../Button';
import { setStripeResponseToState } from '../../actions';
import axios from "axios/index";

export async function  handleToken(token, handlePaymentToken){
  const res = await axios.post('/api/stripe', token);
  handlePaymentToken(res.data);
}
class Payments extends Component {
  render() {
    const { handlePaymentToken } = this.props;
    return (
      <StripeCheckout
        name="Feedback App"
        description="$5 for 5 email credits"
        amount={500}
        token={token => handleToken(token, handlePaymentToken)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button>
          Add Credits
        </Button>
      </StripeCheckout>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    handlePaymentToken: token => dispatch(setStripeResponseToState(token)),
  };
}

export default connect(null, mapDispatchToProps)(Payments);
