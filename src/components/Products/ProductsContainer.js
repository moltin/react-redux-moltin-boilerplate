import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GetProducts} from '../../ducks/products';

const mapStateToProps = state => {
  return state;
};

class ProductsContainer extends Component {
  // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
  componentDidMount() {
    // bind out GetProducts function to dispatch
    const boundGetProducts = () => {
      this.props.dispatch(dispatch => {
        dispatch(GetProducts());
      });
    };

    // check if we already have a moltin products in the store
    if (this.props.products.fetched === false) {
      boundGetProducts();
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

export default connect(mapStateToProps)(ProductsContainer);
