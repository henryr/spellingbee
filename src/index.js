import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Word = ({ word, setGuess }) => {
  var chunks = word.match(/.{1,3}/g);

  return (
    <div class="container">
      {chunks.map((chunk) => (
        <div class="row">
          {chunk.split("").map((letter) => (
            <button
              class="button button5"
              onClick={() => {
                setGuess(letter);
              }}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

const Guess = ({ checkAndAdd }) => {
  return (
    <button class="button button2" onClick={() => checkAndAdd()}>
      Guess Word
    </button>
  );
};

const Reset = ({ setGuess }) => {
  return (
    <button class="button button2" onClick={() => setGuess("")}>
      Reset Word
    </button>
  );
};

const CurrentGuess = ({ guess }) => {
  return <div>{guess}</div>;
};

const CorrectGuesses = ({ words }) => {
  return (
    <div>
      <h2>Answers</h2>
      <ol>
        {words.map((word) => (
          <li>{word}</li>
        ))}
      </ol>
    </div>
  );
};

const SpellingBee = ({ letters }) => {
  const [guess, setGuess] = React.useState("");

  var addLetter = (a) => {
    setGuess(guess + a);
  };

    const dictionary = ["bamboozle", "blameable", "emblaze", "ablaze", "embalm", "emblem", "bamboo", "amoeba", "booze", "mambo", "bloom", "mamba", "bezel", "able", "alma", "aloe", "babe", "bale", "baba", "ball", "balm", "beam", "bell", "blam", "blob", "boba", "boll", "bolo", "bomb", "boob", "boom", "lamb", "lame", "laze" "lobe", "loom", "male", "mall", "maze", "meal", "mole", "moll", "oboe", "ooze", "zeal", "zoom", "all", "ale", "baa", "bee", "boo", "bob", "ebb", "eel", "elm", "lab", "lob", "mam", "mob", "moo"];

  const [correctGuesses, setCorrectGuesses] = React.useState([]);
  const [msg, setMsg] = React.useState(" ");

  var checkAndAdd = (word) => {
    setGuess("");
    if (!dictionary.includes(word)) {
      setMsg("Incorrect guess: '" + word + "'");
      return;
    }

    if (correctGuesses.includes(word)) {
      setMsg("You already found '" + word + "'!");
      return;
    }

    setMsg("Nice one! '" + word + "' is a word!");
    setCorrectGuesses(correctGuesses.concat(word));
  };

  return (
    <div>
      <h1>Adam's Spelling Bee Game!</h1>
      <div>
        <h4>{msg}</h4>
      </div>
      <Word word={letters} setGuess={addLetter} />
      <Guess checkAndAdd={() => checkAndAdd(guess)} />
      <Reset setGuess={setGuess} />
      <CurrentGuess guess={guess} />
      <CorrectGuesses words={correctGuesses} />
    </div>
  );
};

ReactDOM.render(
  <SpellingBee letters="bamozle" />,
  document.querySelector("#root")
);
