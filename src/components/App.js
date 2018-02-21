import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ToolBar from './ToolBar';
import ReviewsList from './ReviewsList';
import SearchBar from './SearchBar';
import * as actions from '../actions/';

class App extends Component {

  componentWillMount() {
    this.props.actions.fetchReviews(this.props.state);
  }

  render() {
    const {reviews, ready} = this.props.state;
    const {filterPositive, reset, sortByDate, searchText} = this.props.actions
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Отзывы</h1>
          </div>
        </div>
        <ToolBar data={reviews} filterPositive={filterPositive} reset={reset}
          sortByDate={sortByDate} />
        <SearchBar data={reviews} searchText={searchText} />
          {!ready ? <div className="loader"/>:
                    <ReviewsList ready={ready} data={reviews}/>}
      </div>
    )
  }
}

  function mapStateToProps (state) {
    return {
      state: state
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(App)