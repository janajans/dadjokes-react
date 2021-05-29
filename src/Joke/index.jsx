// Vytvořte komponentu Joke, která zobrazuje jeden vtip. Tato komponenta bude sídlet ve vlastní složce se všemi potřebnými CSS styly a obrázky. Komponenta Joke nechť má pět props: userAvatar, userName, text, likes, dislikes.
// V hlavním souboru projektu importujte pole objektů ze souboru jokes.js. Zobrazte každý vtip z pole pomocí komponenty Joke.
// Zvažte, která vlastnost ze zobrazovaných dat se nejlépe hodí pro key prop vaší komponenty a použijte ji jako key.
import React, { useState } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likesUp, setLikesUp] = useState(0);
  const [likesDown, setLikesDown] = useState(0);
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img
            className="user-avatar"
            src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
          />
          <p className="user-name">Neroxx</p>
        </div>

        <p className="joke__text">
          The secret service isn't allowed to yell "Get down!" anymore when the
          president is about to be attacked. Now they have to yell "Donald,
          duck!"
        </p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={() => setLikesUp(likesUp + 1)}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likesUp}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={() => setLikesDown(likesDown + 1)}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {likesDown}
        </span>
      </div>
    </div>
  );
};
