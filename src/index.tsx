import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import SwipeCard from './components/SwipeCard';

const containerStyle = {
  width: '100%',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const App = () => {
  return (
    <div style={containerStyle}>
      <SwipeCard
        name="Setsun"
        age={25}
        image="https://avatars1.githubusercontent.com/u/4651424?s=460"
      />
    </div>
  )
};

const render = () =>
  ReactDOM.render(<App />, document.querySelector('#root'));

render();

export default render;
