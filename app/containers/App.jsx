'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  completeTodo,
  setVisibilityFilter,
  VisibilityFilters
} from '../actions';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import FilterLinks from '../components/FilterLinks';

class App extends Component {
  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h2>Hello, enuygun.com!</h2>
            <p>This is a simple todo list app</p>
            <p>Used Techs: React, Redux, Webpack, Npm and Bootstrap(SASS)</p>
          </div>
        </div>
        <div className="container">
          <AddTodo 
            onAddClick={text =>{
              dispatch(addTodo(text))
              }
            }
          />
          <FilterLinks
            filter={visibilityFilter}
            onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}
          />
          <TodoList
            todos={visibleTodos}
            onTodoClick={index => dispatch(completeTodo(index))}
          />
          
        </div>
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};


function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(select)(App);
