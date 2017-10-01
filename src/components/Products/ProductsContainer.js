import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetProducts} from '../../ducks/products';

class ProductsContainer extends Component {
  componentDidMount() {
    // check if we already have a moltin products in the store
    if (this.props.products.fetched === false) {
      this.props.GetProducts();
    }
  }

  render() {
    // if the API returns products
    if (this.props.products.products) {
      return <div />;
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = ({products}) => ({
  products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProducts
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
