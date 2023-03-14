import React, { useState } from 'react';
import Input from './Input';

const Card = (props) => {
  const [info, setInfo] = useState(props.front);
  const [inputClass, setInputClass] = useState('');

  const handleClick = () => {
    setInfo(info === props.front ? props.back : props.front);
  };

  const handleSubmit = (guess) => {
    if (guess.toLowerCase() === props.back.toLowerCase()) {
      setInputClass('correct');
    } else {
      setInputClass('wrong');
    }
  };

  return (
    <div>
      <div className={`${props.className}`} onClick={handleClick}>
        {info}
        {info === props.back && props.image && (
          <img src={props.image} alt="card-image" />
        )}
      </div>

      <Input
        onSubmit={handleSubmit}
        answer={props.back}
        inputClass={inputClass}
        isBack={info === props.front}
      />
    </div>
  );
};

export default Card;






  
