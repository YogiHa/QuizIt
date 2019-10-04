import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import AddTitle from './AddTitle';
import AddLogo from './AddLogo';
import '../CreateQuiz.css';
import firebase from '../../../config/FBConfig.js';

export default function FirstStepModal({
  testHeader,
  setTestHeader,
  setIsFirstStepModalOpen,
  testImage,
  setTestImage
}) {
  const [tempHeader, setTempHeader] = useState('');
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

  const handleUploadLogoSuccess = filename => {
    firebase
      .storage()
      .ref(testHeader)
      .child(filename)
      .getDownloadURL()
      .then(url => setTestImage(url));
  };

  const handleUploadLogoError = error => {
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
    <Paper style={{ background: '#2E3B55' }}>
      {!testHeader ? (
        <AddTitle
          setTempHeader={setTempHeader}
          handleNext={handleNext}
          isErrorOpen={isErrorOpen}
        />
      ) : (
        <AddLogo
          testImage={testImage}
          testHeader={testHeader}
          handleUploadLogoSuccess={handleUploadLogoSuccess}
          handleUploadLogoError={handleUploadLogoSuccess}
          handleSubmit={handleSubmit}
        />
      )}
    </Paper>
  );
}
