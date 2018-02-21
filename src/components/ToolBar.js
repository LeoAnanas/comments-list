import React, { Component } from 'react';

export default class ToolBar extends Component {
  
    filterPositive(positive=false) {
      this.props.filterPositive(positive)
    }

    reset() {
      this.props.reset() 
    }

    sortByDate() {
      this.props.sortByDate()
    }

    render() {
      return (
        <div className="row">
          <div className="col-md-12">
            <div className="tool-bar">
              <button className="btn btn-default show-all" 
                          onClick={() => this.reset()}>
                      Все отзывы
              </button>
              <button className="btn btn-default show-sorted" 
                          onClick={() => this.sortByDate()}>
                      Сортировать по дате
              </button>
              <button className="btn btn-default show-positive"  
                      onClick={() => this.filterPositive(true)}>
                  Положительные
              </button>
              <button className="btn btn-default show-negative" 
                      onClick={() => this.filterPositive()}>
                  Отрицательные
              </button>
            </div>
          </div>
        </div>
      )
    }
  }