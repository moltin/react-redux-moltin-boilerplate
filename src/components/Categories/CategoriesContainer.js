import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GetCategories} from '../../ducks/categories';

class CategoriesContainer extends Component {
  componentDidMount() {
    // check if we already have moltin categories in the store
    if (this.props.categories.fetched === false) {
      this.props.GetCategories('products');
    }
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = ({categories}) => ({
  categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetCategories
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
