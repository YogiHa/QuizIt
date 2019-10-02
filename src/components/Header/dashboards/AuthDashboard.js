import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function AuthDashboard({ toggle }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signOut());
  };

  return (
    <div>
      <div>
        <NavLink exact to={process.env.PUBLIC_URL + '/createquiz'}>
          <Button color="inherit">Create New Quiz</Button>
        </NavLink>
        <Button onClick={handleClick} color="inherit">
          Sign Out
        </Button>
      </div>
    </div>
  );
}
