import React from 'react';  
import {useState} from 'react';   

const Card = (props) => { 
    const[info, setInfo] = useState(props.front); 
    const handleClick = () => {setInfo(info === props.front ? props.back : props.front);};  

    return(
        <div className={`${props.className}`}onClick={handleClick}>  
            {info}  
            {info === props.back && props.image && <img src={props.image} alt="card-image" />}
        </div>
    ); 
} 

export default Card;  

  
