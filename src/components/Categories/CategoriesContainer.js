import React, {Component} from 'react';
import { GetCategories } from '../../actions/actions.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return state;
};

class CategoriesContainer extends Component {

    // a react lifecycle event, read more at http://busypeoples.github.io/post/react-component-lifecycle/
    componentDidMount() {
      
      const boundGetCategories = () => {
        this.props.dispatch((dispatch) => {
            dispatch(GetCategories('products'))
        })
      }

      // check if we already have moltin categories in the store
      if(this.props.categories.fetched === false) {
        boundGetCategories();  
      }

    }
  render() {
    return (
      <div>
      
      </div>
    )
  }
};

export default connect(mapStateToProps)(CategoriesContainer);
