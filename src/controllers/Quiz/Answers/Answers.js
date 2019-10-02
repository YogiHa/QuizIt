import React from 'react';

export default function Answers({ answers, correct, socektTrigger }) {
  let i = 0;

  const handleClick = e => {
    if (e.target.value === correct) {
      console.log('wohoooo');
    } else {
      console.log('too bad');
    }
    socektTrigger();
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
            {answer}
          </button>
        );
      })}
    </div>
  );
}
