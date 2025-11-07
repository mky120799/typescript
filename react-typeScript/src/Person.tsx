import React from 'react';
import { useState } from 'react';
interface PersonProps {
  name: string;
  age: number;
}

const Person  = (props : PersonProps) => {
    const [personBio, setPersonBio] = useState<string | null>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value);
    };
    
  return (
    <div>
        <>
      <>hiii i am person</>
      <p>Name: {props.name}</p>
      <p>Age: {props.age} </p> 
      </>

    <p>{props.name} Bio: {personBio === null || personBio.trim() === "" ? "No Bio Available" : personBio}</p>
    <input onChange={handleChange} />

    </div>
  )
}

export default Person
