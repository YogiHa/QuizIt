import React, { useState, useEffect } from 'react';
import FileUploader from 'react-firebase-file-uploader';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
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
      <Paper>
        {!testHeader ? (
          <div className="txt-center">
            <input
              placeholder="Add here your quiz title"
              onChange={e => serTempHeader(e.target.value)}
              className="first-step-input"
            />
            <hr />
            <p>
              For beginning in creation of your own quiz, add here your quiz
              title
            </p>
            {isErrorOpen && <ErrorMsg />}
            <Avatar
              className="cursor-pointer"
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
              <p>Add your own test logo (optional)</p>
            </div>
            <Avatar
              className="cursor-pointer"
              src={require('../v.jpg')}
              alt="V"
              onClick={handleSubmit}
            />
          </div>
        )}
      </Paper>
    </div>
  );
}
