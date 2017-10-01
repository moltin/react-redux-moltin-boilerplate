import React from 'react';
import {connect} from 'react-redux';

const CheckoutContainer = ({payments}) => {
  if (payments.processing === false) {
    return <div />;
  } else {
    return <div />;
  }
};

const mapStateToProps = ({payments}) => ({
  payments
});

export default connect(mapStateToProps)(CheckoutContainer);
