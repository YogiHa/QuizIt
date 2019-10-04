import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FileUploader from 'react-firebase-file-uploader';
import firebase from '../../../config/FBConfig.js';

export default function AddLogo({
  testImage,
  testHeader,
  handleUploadLogoSuccess,
  handleUploadLogoError,
  handleSubmit
}) {
  const hidden = {
    display: 'none'
  };

  return (
    <div>
      <div className="txt-center">
        <img
          id="fileSelect"
          src={testImage}
          className="cursor-pointer"
          title="add your own image"
          height={250}
          width={250}
          alt="test-image"
        />
        <FileUploader
          id="fileElem"
          onUploadSuccess={handleUploadLogoSuccess}
          onUploadError={handleUploadLogoError}
          style={hidden}
          accept="image/*"
          name="avatar"
          storageRef={firebase.storage().ref(testHeader)}
        />
        <p>Add your own test logo (optional)</p>
      </div>
      <Avatar
        className="cursor-pointer v-mark"
        src={require('../v.jpg')}
        alt="V"
        onClick={handleSubmit}
      />
    </div>
  );
}
