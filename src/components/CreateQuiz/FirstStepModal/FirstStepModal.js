import React, { useState, useEffect } from 'react';
import FileUploader from 'react-firebase-file-uploader';
import '../CreateQuiz.css';
import firebase from '../../../config/FBConfig.js';

const ErrorMsg = () => (
  <div className="err-msg">
    <span>Test header must contain at least two charcters</span>
  </div>
);

export default function FirstStepModal({
  testHeader,
  setTestHeader,
  setIsFirstStepModalOpen,
  testImage,
  setTestImage
}) {
  const [tempHeader, serTempHeader] = useState('');
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  useEffect(() => {
    if (testHeader) {
      const fileSelect = document.getElementById('fileSelect');
      const fileElem = document.getElementById('fileElem');
      fileSelect.addEventListener(
        'click',
        function(e) {
          if (fileElem) {
            fileElem.click();
          }
        },
        false
      );
    }
  }, [testHeader]);

  const hidden = {
    display: 'none'
  };

  const handleUploadSuccess = filename => {
    firebase
      .storage()
      .ref(testHeader)
      .child(filename)
      .getDownloadURL()
      .then(url => setTestImage(url));
  };

  const handleUploadError = error => {
    console.log(error);
  };

  const handleNext = () => {
    if (tempHeader.length > 1) {
      setIsErrorOpen(false);
      setTestHeader(tempHeader);
    } else {
      setIsErrorOpen(true);
    }
  };

  const handleSubmit = () => {
    setIsFirstStepModalOpen(false);
  };

  return (
    <div className="first-step-modal">
      <article className="mw15 center bg-blue br3 pa3 pa4-ns ma2 dib bw2 shadow-5">
        {!testHeader ? (
          <div className="txt-center">
            <div className="tc center">
              <input
                placeholder="Add here your quiz title"
                onChange={e => serTempHeader(e.target.value)}
                className="first-step-input"
              />
              <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <p className="lh-copy measure center f6 black-70">
              For beginning in creation of your own quiz, add here your quiz
              title
            </p>
            {isErrorOpen && <ErrorMsg />}
            <img
              className="cursor-pointer br-100 ba h3 w3 dib v-mark"
              src={require('../next.svg')}
              alt="next"
              onClick={handleNext}
            />
          </div>
        ) : (
          <div>
            <div className="txt-center">
              <img
                id="fileSelect"
                src={testImage}
                className="cursor-pointer br-100 h11 w11 dib ba b--black-05"
                title="add your own image"
                height={300}
                width={300}
                alt="test-image"
              />
              <FileUploader
                id="fileElem"
                onUploadSuccess={handleUploadSuccess}
                onUploadError={handleUploadError}
                style={hidden}
                accept="image/*"
                name="avatar"
                storageRef={firebase.storage().ref(testHeader)}
              />
              <p className="lh-copy measure center f6 black-70">
                Add your own test logo (optional)
              </p>
            </div>
            <img
              className="cursor-pointer br-100 ba h3 w3 dib v-mark"
              src={require('../v.jpg')}
              alt="V"
              onClick={handleSubmit}
            />
          </div>
        )}
      </article>
    </div>
  );
}
