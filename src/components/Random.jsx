import React, { useState } from 'react';
import Card from './Card';

const Random = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [cardOrder, setCardOrder] = useState([...Array(12).keys()]);  
  const [checker, setChecker] = useState(true);
  
  const getRandomIndex = () => { 
    if (checker) { 
        const shuffledCards = cardOrder.slice(1).sort(() => Math.random() - 0.5); 
        shuffledCards.unshift(cardOrder[0]); 
        setCardOrder(shuffledCards);  
        setCardIndex(0); 
        setChecker(false); 
      } 
    if (cardIndex < cardOrder.length - 1) {
      setCardIndex(cardIndex + 1);
    }
  };
  
  const backFunction = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };
  
  return (
    <div>
      {cardOrder[cardIndex] === 12 && <Card front="안녕하세요!" back="Korean" className="flashcard2" />}
      {cardOrder[cardIndex] === 1 && <Card front="こんにちは!" back="Japanese" className="flashcard2" />}
      {cardOrder[cardIndex] === 2 && <Card front="привет!" back="Russian" className="flashcard2" />}
      {cardOrder[cardIndex] === 3 && <Card front="你好!" back="Chinese" className="flashcard2" />}
      {cardOrder[cardIndex] === 4 && <Card front="Hallo!" back="German" className="flashcard1" />}
      {cardOrder[cardIndex] === 5 && <Card front="Hola!" back="Spanish" className="flashcard1" />}
      {cardOrder[cardIndex] === 6 && <Card front="salvē!" back="Latin" className="flashcard3" />}
      {cardOrder[cardIndex] === 7 && <Card front="Γειά σου!" back="Greek" className="flashcard3" />}
      {cardOrder[cardIndex] === 8 && <Card front="नमस्ते!" back="Hindi" className="flashcard3" />}
      {cardOrder[cardIndex] === 9 && <Card front="ہیلو!" back="Urdu" className="flashcard3" />}
      {cardOrder[cardIndex] === 10 && <Card front="Ciao!" back="Italian" className="flashcard1" />}
      {cardOrder[cardIndex] === 11 && <Card front="Bonjour!" back="French" className="flashcard1" />}
      {cardOrder[cardIndex] === 0 && (
        <Card front="Start" back="Press the next arrow to start the flashcards :)" className="flashcard" image="./public/image/smile.png" />
      )}
      <button onClick={getRandomIndex}>⭢</button> 
      <button onClick={backFunction}>⬅️</button>
    </div>
  );
};

export default Random;



