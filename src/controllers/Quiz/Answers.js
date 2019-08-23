import React from 'react';

export default function Answers({ answers, correct }) {
  let i = 0;

  const handleClick = e => {
    console.log(correct, 'correct', e.target.value, 'e');
    if (e.target.value === correct) {
      console.log('wohoooo');
    } else {
      console.log('too bad');
    }
  };
  return (
    <div>
      {answers.map(answer => {
        i++;
        return (
          <button
            key={i}
            value={`answer${i}`}
            onClick={e => {
              e.preventDefault();
              handleClick(e);
            }}
          >
            {' '}
            {answer}{' '}
          </button>
        );
      })}
    </div>
  );
}
