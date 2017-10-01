import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetCart} from '../../ducks/cart';
import {GetProducts} from '../../ducks/products';

class Cart extends Component {
  componentDidMount() {
    this.props.GetCart();
    this.props.GetProducts();
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

const mapStateToProps = ({cart, products}) => ({
  cart,
  products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts,
      GetCart
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
