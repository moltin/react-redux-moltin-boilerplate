import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetProducts} from '../../ducks/products';
import {GetCollections} from '../../ducks/collections';
import {GetCategories} from '../../ducks/categories';

class HomeContainer extends Component {
  componentDidMount() {
    // check if we already have a moltin products in the store
    if (this.props.products.fetched === false) {
      this.props.GetProducts('files, main_images, collections');
    }

    // now we do the same thing for categories
    if (this.props.categories.fetched === false) {
      this.props.GetCategories();
    }

    // then collections
    if (this.props.collections.fetched === false) {
      this.props.GetCollections();
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetCollections,
      GetCategories,
      GetProducts
    },
    dispatch
  );

const mapStateToProps = ({collections, categories, products}) => ({
  collections,
  categories,
  products
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
