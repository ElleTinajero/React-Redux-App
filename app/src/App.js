import React from 'react';
import './App.css';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Dad Jokes</h1>
      </div>
    </Provider>
  );
}

export default App;
