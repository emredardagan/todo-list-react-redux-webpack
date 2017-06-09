import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

export default class AddTodo extends Component {
  render() {
    return (
      <div className=" row"> 
        <div className="form-group col-sm-9">
          <input type="text" className="form-control" id="todoText" ref="input" />
        </div>
        <div className="form-group col-sm-3">
          <button className="btn btn-md" onClick={ e => this.handleClick(e) }>
            Add
          </button>
        </div>
      </div>
    );
  }

  handleClick(e) {
    const inputNode = findDOMNode(this.refs.input);
    const text = inputNode.value.trim();
    this.props.onAddClick(text);
    inputNode.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
