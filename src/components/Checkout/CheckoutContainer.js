import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return state
}

class CheckoutContainer extends Component {

  render() {
    if(this.props.payments.processing === false) {
      return (
        <div>
        
        </div>
      )
    }

    else {
      return (
        <div>
        
        </div>
      )
    }

  };
};

export default connect(mapStateToProps)(CheckoutContainer);
