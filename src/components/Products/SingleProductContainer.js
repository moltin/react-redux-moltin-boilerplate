import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetProducts } from '../../actions/actions.js';

function mapStateToProps(state) {
  return state
}

class Product extends Component {

  // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
  componentDidMount() {
    
    const boundGetProducts = () => {
      this.props.dispatch((dispatch) => {
          dispatch(GetProducts())
      })
    }
    
    // check if we already have a moltin products in the store
    if(this.props.products.fetched === false) {
      boundGetProducts()
    }
  }

  render() {

    if(this.props.products.products) {
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

export default connect(mapStateToProps)(Product);
