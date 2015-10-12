'use strict'

import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-storage'
import createEngine from 'redux-storage/engines/reactNativeAsyncStorage';

import appReducers from 'reducers/index'

export default function configureStore(initialState) {
  // Setup storage
  const reducer = storage.reducer(appReducers);
  let engineComposers = [
    (engine) => storage.decorators.filter(engine, [
      ['todos', 'list']
    ])
  ];
  const engine = compose(...engineComposers)(createEngine('react-native-todo'));
  const storageMiddleware = storage.createMiddleware(engine);

  // Enables your middleware:
  let composers = [
    applyMiddleware(thunk),
    applyMiddleware(storageMiddleware)
  ];
  const finalCreateStore = compose(...composers)(createStore);

  // Create the store
  let store = finalCreateStore(reducer, initialState);

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  // Load saved state
  const load = storage.createLoader(engine);
  load(store);

  return store;
}

// include devtools and persiststate if enabled
// if (__DEVTOOLS__) {
//   composers.push(
//     devTools(),
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//   )
// }


