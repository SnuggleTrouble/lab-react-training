import React from 'react';

export function Random({ min, max }) {
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  return (
    <div className='idCard'>
      <p>Random value between {min} and {max} = {randomNumber}</p>
    </div>
  );
}
