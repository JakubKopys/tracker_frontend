import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const initialState = {
  test: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICK':
      return Object.assign({}, state, {
        test: state.test + 1
      });
    default: return state;
  }
}

export function initializeStore(initialState = initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
