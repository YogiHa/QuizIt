import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import Answers from '../Answers/Answers';
import Avatar from '@material-ui/core/Avatar';

let i = 0;

export default function QuizPage({ location }) {
  const socket = socketIOClient('localhost:3001');

  const [currentQuestion, setCurrentQuestion] = useState(
    location.state[0].quiz.content[0]
  );
  const [seconds, setSeconds] = useState(40);

  useEffect(() => {
    let interval;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else {
      socektTrigger();
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const socektTrigger = () => {
    if (i < location.state[0].quiz.content.length - 1) {
      i++;
      socket.emit('next question', location.state[0].quiz.content[i]);
    } else console.log('end of test');
  };

  socket.on('next question', nextQuestion => {
    setCurrentQuestion(nextQuestion);
    setSeconds(40);
  });

  return (
    <div>
      <Avatar> {seconds} </Avatar>
      <h1>{currentQuestion.question}</h1>
      <Answers
        answers={currentQuestion.answers}
        correct={currentQuestion.correct}
        socektTrigger={socektTrigger}
      />
    </div>
  );
}
