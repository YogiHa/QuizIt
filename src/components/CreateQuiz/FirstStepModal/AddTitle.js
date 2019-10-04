import React from 'react';
import { Avatar, TextField } from '@material-ui/core';

const ErrorMsg = () => (
  <div className="err-msg">
    <span>Test header must contain at least two charcters</span>
  </div>
);

export default function AddTitle({ setTempHeader, handleNext, isErrorOpen }) {
  return (
    <div className="txt-center">
      <h2> Welcome! </h2>
      <h4> for begging create your quiz, </h4>
      <TextField
        onChange={e => setTempHeader(e.target.value)}
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder="add your quiz title here"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
      {isErrorOpen && <ErrorMsg />}
      <Avatar
        className="cursor-pointer v-mark"
        src={require('../next.svg')}
        alt="next"
        onClick={handleNext}
      />
    </div>
  );
}
