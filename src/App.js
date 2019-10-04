import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
// import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import QuizGallery from './components/QuizGallery/QuizGallery';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import HorizonScroll from './components/scroll/HorizonScroll';
import Register from './components/forms/Register';
import SignIn from './components/forms/SignIn';
import './App.css';

const Loading = () => (
  <div>
    <img src={require('./components/forms/loading.svg')} />
  </div>
);

function App() {
  const [isUserLogedIn, setIsUserLogedIn] = useState(false);
  const [isQuizzesLoaded, setIsQuizzesLoaded] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState('none');

  let data;
  data = useSelector(state => state);

  useEffect(() => {
    if (data.quizzes) {
      setIsQuizzesLoaded(true);
    }
    if (data.firebase.auth.uid) {
      setIsUserLogedIn(true);
    } else {
      setIsUserLogedIn(false);
    }
  }, [data]);

  return (
    <div className="App">
      <Header
        isUserLogedIn={isUserLogedIn}
        setIsFormModalOpen={setIsFormModalOpen}
      />

      <h3> Quizzes Galley </h3>
      {isQuizzesLoaded ? (
        <HorizonScroll>
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
        </HorizonScroll>
      ) : (
        <Loading />
      )}

      <Footer />

      {isFormModalOpen === 'register' && (
        <Modal>
          <Register setIsFormModalOpen={setIsFormModalOpen} />
        </Modal>
      )}

      {isFormModalOpen === 'signin' && (
        <Modal>
          <SignIn setIsFormModalOpen={setIsFormModalOpen} />
        </Modal>
      )}
    </div>
  );
}

export default App;
