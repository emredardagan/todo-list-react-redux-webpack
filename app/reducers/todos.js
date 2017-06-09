import {
  ADD_TODO,
  COMPLETE_TODO
} from '../actions';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      state = [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
      window.localStorage.setItem('todos', JSON.stringify(state));
      return state ;
    case COMPLETE_TODO:
      state = [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
      window.localStorage.setItem('todos', JSON.stringify(state));
      return state;
    default:
      return state
  }
}

export default todos;
