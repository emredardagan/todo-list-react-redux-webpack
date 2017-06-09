import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores/configureStore';

require("./assets/styles/main.scss")



const defaultTodo = JSON.parse(window.localStorage.getItem('todos')) || [
    { 
      text: 'make to-do list',
      completed: true  
    },
    { 
      text: 'add items to to-do list',
      completed: false  
    }
  ];

const store = configureStore({todos: defaultTodo});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
