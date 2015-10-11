'use strict'

import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-storage'
import createEngine from 'redux-storage/engines/reactNativeAsyncStorage';

import appReducers from 'reducers/index'
import { setState } from 'pods/todos/actions'

export default function configureStore(initialState) {
  // Setup storage
  const reducer = storage.reducer(appReducers);
  var engine = createEngine('my-save-key');
      engine = storage.decorators.filter(engine, [
        ['todosReducer', 'todos', 'list']
      ]);
      engine = storage.decorators.immutablejs(engine, [
        ['todosReducer']
      ]);

  const storageMiddleware = storage.createMiddleware(engine);

  // Enables your middleware:
  let composers = [
    applyMiddleware(thunk),
    applyMiddleware(storageMiddleware)
  ];
  const finalCreateStore = compose(...composers)(createStore);

  let store = finalCreateStore(reducer, initialState);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }
  const load = storage.createLoader(engine);

  load(store).then((loadedState) => store.dispatch(setState(loadedState)));

  return store;
}

// include devtools and persiststate if enabled
// if (__DEVTOOLS__) {
//   composers.push(
//     devTools(),
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//   )
// }


