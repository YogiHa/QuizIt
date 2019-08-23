import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BeginQuizModal({ match, setIsReady, data }) {
  const [quiz, setQUiz] = useState(null);

  useEffect(() => {
    if (data.quizzes) {
      let pendingQuiz = data.quizzes.filter(
        quiz => quiz.id === data.currentQuiz
      );
      setQUiz(pendingQuiz);
    }
  }, [data]);

  return (
    <div className="mw15 center bg-blue br3 pa3 pa4-ns ma2 dib bw2 shadow-5 begin-quiz-modal">
      {quiz ? (
        <div
          onClick={e => {
            e.preventDefault();
            setIsReady(true);
          }}
        >
          <Link
            to={{
              pathname: `${match.url}/${data.currentQuiz}`,
              state: quiz
            }}
          >
            click on me when u ready to start
          </Link>
        </div>
      ) : (
        'loading'
      )}
    </div>
  );
}
