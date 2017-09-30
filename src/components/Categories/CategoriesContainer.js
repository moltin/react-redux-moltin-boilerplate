import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GetCategories} from '../../ducks/categories';

const mapStateToProps = state => {
  return state;
};

class CategoriesContainer extends Component {
  // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
  componentDidMount() {
    const boundGetCategories = () => {
      this.props.dispatch(dispatch => {
        dispatch(GetCategories('products'));
      });
    };

    // check if we already have moltin categories in the store
    if (this.props.categories.fetched === false) {
      boundGetCategories();
    }
  }
  render() {
    return <div />;
  }
}

export default connect(mapStateToProps)(CategoriesContainer);
