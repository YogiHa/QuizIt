import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

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

export default function Header({ setToHome }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#2E3B55' }} position="sticky">
        <Toolbar>
          <Typography variant="h6" align="left" className={classes.title}>
            Quiz It
          </Typography>
          <Button
            onClick={e => {
              e.preventDefault();
              setToHome(true);
            }}
            color="inherit"
          >
            Back to main
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
