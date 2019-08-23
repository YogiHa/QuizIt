import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import CreateQuiz from './components/CreateQuiz/CreateQuiz';
import QuizGallery from './components/QuizGallery/QuizGallery';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  let data = null;
  data = useSelector(state => state.DBQuizzes);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setIsLoaded(true);
    }
  }, [data]);

  return (
    <div className="App">
      <Header />
      {isOpen ? (
        <CreateQuiz setIsLoaded={setIsLoaded} setIsOpen={setIsOpen} />
      ) : (
        <button
          onClick={e => {
            e.preventDefault();
            setIsLoaded(false);
            setIsOpen(true);
          }}
        >
          {' '}
          create new quiz{' '}
        </button>
      )}
      {isLoaded && (
        <div className="flex">
          {data.map(q => (
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
