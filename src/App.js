import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import CreateQuiz from './components/CreateQuiz/CreateQuiz';
import QuizGallery from './components/QuizGallery/QuizGallery';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  let data = null;
  data = useSelector(state => state);

  useEffect(() => {
    if (data.quizzes) {
      setIsLoaded(true);
    }
    if (data.firebase.auth.uid) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
    }
  }, [data]);

  return (
    <div className="App">
      <Header isLogedIn={isLogedIn} />

      {isLoaded && (
        <div className="flex">
          {data.quizzes.map(q => (
            <QuizGallery
              logo={q.quiz.logo}
              header={q.quiz.header}
              id={q.id}
              key={q.id}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
