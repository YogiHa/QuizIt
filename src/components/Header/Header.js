import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AuthDashboard from './dashboards/AuthDashboard';
import UnAuthDashboard from './dashboards/UnAuthDashboard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header({ isUserLogedIn, setIsFormModalOpen }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#2E3B55' }} position="sticky">
        <Toolbar>
          <Typography variant="h6" align="left" className={classes.title}>
            Quiz It
          </Typography>
          {isUserLogedIn ? (
            <AuthDashboard />
          ) : (
            <UnAuthDashboard setIsFormModalOpen={setIsFormModalOpen} />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
