import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    const { onClick, completed, text } = this.props;
    return (
      <tr>
        <td>
          <p 
            onClick={onClick}
            style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {text}
          </p>
          </td>
        <td>
          <p onClick={onClick}>{completed ? 'done' : "not yet completed"}</p>
        </td>
      </tr>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
