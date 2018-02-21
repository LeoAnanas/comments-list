import React, { Component } from 'react';

export default class SearchBar extends Component {
  
  dataSearch(e) {
    let value = e.target.value.toLowerCase();   
    this.props.searchText(value)
  }
  render(){
      return (
        <div className="row"> 
          <div className="col-md-12">
            <div className="search-bar"> 
              <div className="form-group has-success has-feedback">
                <label className="control-label">Поиск по тексту в отзыве</label>
                <input type="text" className="form-control" onChange={this.dataSearch.bind(this)}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
};