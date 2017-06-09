import React, { Component, PropTypes } from 'react';
import Todo from '../Todo';

export default class TodoList extends Component {
  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
              <th>Job</th>
              <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.todos.map((todo, index) =>
              <Todo
                {...todo}
                onClick={() => this.props.onTodoClick(index)}
                key={index}
              />
            )
          }
        </tbody>
      </table>
    );
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
