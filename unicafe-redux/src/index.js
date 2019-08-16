import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import reducer from './reducer'

const store = createStore(reducer);

const App = () => {
  const giveFeedback = (type) => {
    store.dispatch({
      type
    })
  };

  return (
    <div>
      <button onClick={() => { giveFeedback('GOOD') }}>good</button>
      <button onClick={() => { giveFeedback('NEUTRAL') }}>neutral</button>
      <button onClick={() => { giveFeedback('BAD') }}>bad</button>
      <button onClick={() => { giveFeedback('ZERO') }}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().neutral}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
};

renderApp();
store.subscribe(renderApp);