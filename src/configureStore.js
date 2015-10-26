'use strict'

import { compose, createStore, applyMiddleware } from 'redux'
import storage from 'redux-storage'
import createEngine from 'redux-storage/engines/reactNativeAsyncStorage'
import createLogger from 'redux-logger';

import rootReducer from 'reducers/root'

export default function configureStore(initialState) {
  // Setup storage
  const reducer = storage.reducer(rootReducer);
  let engineComposers = [
    (engine) => storage.decorators.filter(engine, [
      ['todos', 'entities'],
      ['projects', 'entities']
    ])
  ];
  const engine = compose(...engineComposers)(createEngine('react-native-todo'));
  const storageMiddleware = storage.createMiddleware(engine);

  // Redux logger
  const logger = createLogger();

  // Enables your middleware:
  let composers = [
    applyMiddleware(logger),
    applyMiddleware(storageMiddleware)
  ];
  const finalCreateStore = compose(...composers)(createStore);

  // Create the store
  let store = finalCreateStore(reducer, initialState);

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/root', () => {
      const nextRootReducer = require('./reducers/root')
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


