import { useReducer } from 'react';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, compose,combineReducers } from 'redux';
import  {thunk }from 'redux-thunk';
import rootReducer from '../reducers';
// Initial state and reducer
const initialState = {
  sidebarShow: true,
  theme: 'light',
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest };
    default:
      return state;
  }
};

// Redux DevTools integration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create the store with middleware and DevTools support
const store = createStore(
  rootReducer, // If you have a rootReducer with combined reducers, replace changeState with rootReducer
  composeEnhancers(applyMiddleware(thunk))
);

// Export dispatch and getState for global access
export const dispatch = store.dispatch;
export function getState() {
  return store.getState();
}

// Make getState available globally in the browser's window object for debugging
window.__getState = getState;

export default store;
