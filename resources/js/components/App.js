import React from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';

function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <Example />
    </>
  );
}

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
