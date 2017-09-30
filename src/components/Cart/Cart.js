import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GetCart} from '../../ducks/cart';
import {GetProducts} from '../../ducks/products';

function mapStateToProps(state) {
  return state;
}

class Cart extends Component {
  componentDidMount() {
    const boundGetCart = () => {
      this.props.dispatch(dispatch => {
        dispatch(GetCart());
      });
    };

    const boundGetProducts = () => {
      this.props.dispatch(dispatch => {
        dispatch(GetProducts());
      });
    };

    boundGetCart();

    boundGetProducts();
  }

  render() {
    if (
      this.props.cart.fetched === true &&
      this.props.cart.fetching === false &&
      this.props.products.fetched === true
    ) {
      // is there anything actually in the cart
      if (this.props.cart.cart.data[0]) {
        return <div />;
      } else {
        return <div />;
      }
    } else {
      return <div />;
    }
  }
}

export default connect(mapStateToProps)(Cart);
