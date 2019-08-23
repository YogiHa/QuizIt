import React, { useState } from 'react';
import socketIOClient from 'socket.io-client';
import Answers from '../Answers/Answers';

let i = 0;

export default function QuizPage({ location }) {
  const socket = socketIOClient('localhost:3001');
  const [currentQuestion, setCurrentQuestion] = useState(
    location.state[0].quiz.content[0]
  );

  const handleClick = () => {
    if (i < location.state[0].quiz.content.length - 1) {
      i++;
      socket.emit('next question', location.state[0].quiz.content[i]);
    } else console.log('end of test');
  };

  socket.on('next question', nextQuestion => {
    setCurrentQuestion(nextQuestion);
  });

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <Answers
        answers={currentQuestion.answers}
        correct={currentQuestion.correct}
      />
      <button onClick={() => handleClick()}> next question </button>
    </div>
  );
}
