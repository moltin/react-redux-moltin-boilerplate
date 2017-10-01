import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetProducts} from '../../ducks/products';

class Product extends Component {
  componentDidMount() {
    // check if we already have a moltin products in the store
    if (this.props.fetched === false) {
      this.props.GetProducts();
    }
  }

  render() {
    if (this.props.products) {
      return <div />;
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = ({products: {fetched, products}}) => ({
  fetched,
  products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Product);
