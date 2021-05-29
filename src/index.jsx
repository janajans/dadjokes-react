import React, { useState } from 'react';
import { render } from 'react-dom';
import { Joke } from './Joke';
import './style.css';

const App = () => {
  return (
    <>
      <div className="container">
        <Joke />
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
