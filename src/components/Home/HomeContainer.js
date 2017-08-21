import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetProducts, GetCollections, GetCategories } from '../../actions/actions.js';

function mapStateToProps(state) {
    return(state)
}

class HomeContainer extends Component {
  
  // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
  componentDidMount() {

    const boundGetProducts = () => {
      this.props.dispatch((dispatch) => {
          dispatch(GetProducts())
      })
    }
    
    const boundGetCategories = () => {
      this.props.dispatch((dispatch) => {
          dispatch(GetCategories())
      })
    }
    
    const boundGetCollections = () => {
      this.props.dispatch((dispatch) => {
          dispatch(GetCollections())
      })
    }
  
    // check if we already have a moltin products in the store
    if(this.props.products.fetched === false) {
      boundGetProducts()
    }

    // now we do the same thing for categories
    if(this.props.categories.fetched === false) {
        boundGetCategories();  
      }

    // then collections
    if(this.props.collections.fetched === false) {
      boundGetCollections();
    }

  }

  render() {
    if(this.props.collections.collections !== null && this.props.products.products !== null && this.props.categories.categories !== null) {
      return (
        <div>
        </div>
      );
    }
    else {
      return (
        <div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(HomeContainer);
