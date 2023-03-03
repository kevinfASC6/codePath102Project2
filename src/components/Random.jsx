import React from 'react';   
import { useState } from 'react'; 
import Card from './Card'; 

const Random = () => { 
    const [currIndex, setCurrIndex] = useState(12);  

    const numCards = 12; // The number of cards in the deck

    const getRandomIndex = () => {
        const randomIndex = Math.floor(Math.random() * numCards);
        setCurrIndex(randomIndex);
    }

    return (  
         <div> 
            {currIndex === 0 && <Card front='안녕하세요!' back ='Korean' className='flashcard2' />}
            {currIndex === 1 && <Card front='こんにちは!' back ='Japanese'className='flashcard2' />}
            {currIndex === 2 && <Card front='привет!' back ='Russian'className='flashcard2' />}
            {currIndex === 3 && <Card front='你好!' back ='Chinese'className='flashcard2' />}
            {currIndex === 4 && <Card front='Hallo!' back ='German'className='flashcard1' />}
            {currIndex === 5 && <Card front='Hola!' back ='Spanish'className='flashcard1' />}
            {currIndex === 6 && <Card front='salvē!' back ='Latin'className='flashcard3' />}
            {currIndex === 7 && <Card front='Γειά σου!' back ='Greek'className='flashcard3' />}
            {currIndex === 8 && <Card front='नमस्ते!' back ='Hindi'className='flashcard3' />}
            {currIndex === 9 && <Card front='ہیلو!' back ='Urdu'className='flashcard3' />}
            {currIndex === 10 && <Card front='Ciao!' back ='Italian'className='flashcard1' />}
            {currIndex === 11 && <Card front='Bonjour!' back ='French'className='flashcard1' />}  
            {currIndex === 12 && <Card front='Start' back ='Press the next arrow to start the flashcards :)' className='flashcard' image ="./public/image/smile.png" />}
            <button onClick={getRandomIndex}>⭢</button>
        </div>  
    ); 
} 

export default Random; 