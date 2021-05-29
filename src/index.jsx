import React from 'react';
import { render } from 'react-dom';
import { Joke } from './Joke';
import './style.css';
import '../jokes.js';
import { jokes } from '../jokes.js';

const App = () => {
  return (
    <>
      <div className="container">
        {jokes.map((joke) => (
          <Joke
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
            key={joke.id}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
