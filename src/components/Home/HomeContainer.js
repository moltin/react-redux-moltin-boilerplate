import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GetProducts} from '../../ducks/products';
import {GetCollections} from '../../ducks/collections';
import {GetCategories} from '../../ducks/categories';

function mapStateToProps(state) {
  return state;
}

class HomeContainer extends Component {
  // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
  componentDidMount() {
    const boundGetProducts = () => {
      this.props.dispatch(dispatch => {
        dispatch(GetProducts('files, main_images, collections'));
      });
    };

    const boundGetCategories = () => {
      this.props.dispatch(dispatch => {
        dispatch(GetCategories());
      });
    };

    const boundGetCollections = () => {
      this.props.dispatch(dispatch => {
        dispatch(GetCollections());
      });
    };

    // check if we already have a moltin products in the store
    if (this.props.products.fetched === false) {
      boundGetProducts();
    }

    // now we do the same thing for categories
    if (this.props.categories.fetched === false) {
      boundGetCategories();
    }

    // then collections
    if (this.props.collections.fetched === false) {
      boundGetCollections();
    }
  }

  render() {
    if (
      this.props.collections.collections !== null &&
      this.props.products.products !== null &&
      this.props.categories.categories !== null
    ) {
      return <div />;
    } else {
      return <div />;
    }
  }
}

export default connect(mapStateToProps)(HomeContainer);
