import React from 'react';
import Button from '@material-ui/core/Button';

export default function UnAuthDashboard({ setIsFormModalOpen }) {
  return (
    <div>
      <Button
        onClick={e => {
          e.preventDefault();
          setIsFormModalOpen('signin');
        }}
        color="inherit"
      >
        Login
      </Button>
      <Button
        onClick={e => {
          e.preventDefault();
          setIsFormModalOpen('register');
        }}
        color="inherit"
      >
        Register
      </Button>
    </div>
  );
}
