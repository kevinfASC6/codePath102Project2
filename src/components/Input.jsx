import React, { useState } from 'react';

const Input = ({ onSubmit, answer, isBack }) => {
  const [guess, setGuess] = useState('');
  const [inputClass, setInputClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === answer.toLowerCase()) {
      setInputClass('correct');
    } else {
      setInputClass('wrong');
    }
    onSubmit(guess);
  };

  const handleInputChange = (e) => {
    setGuess(e.target.value);
    setInputClass('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your Guess: </label>
      <input
        id="userInput"
        type="text"
        value={guess}
        onChange={handleInputChange}
        className={inputClass}
      />
      <button type="submit" className="buttonSubmit" disabled={!isBack}>
        Submit
      </button>
    </form>
  );
};

export default Input;


