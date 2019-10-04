import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import {
  Button,
  Card,
  CardContent,
  CssBaseline,
  TextField,
  Link,
  Box,
  Typography,
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Forms.css';

const Loading = () => (
  <div>
    <img src={require('./loading.svg')} />
  </div>
);

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        QuizIt
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

function SignIn({ setIsFormModalOpen }) {
  const uid = useSelector(state => state.firebase.auth.uid);
  const MsgError = useSelector(state => state.auth.authError);
  const dispatch = useDispatch();
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [isHide, setIsHide] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (MsgError) {
      setIsLoading(false);
      setIsHide(false);
    }
  }, [MsgError]);

  const onEmailChange = event => {
    setSignInEmail(event.target.value);
  };

  const onPasswordChange = event => {
    setSignInPassword(event.target.value);
  };

  const onSubmitSignIn = event => {
    event.preventDefault();
    setIsLoading(true);
    setIsHide(true);
    dispatch(signIn({ email: signInEmail, password: signInPassword }));
  };

  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    card: {
      minWidth: 400
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    xbutton: {}
  }));

  const classes = useStyles();

  if (uid) {
    setIsFormModalOpen('none');
  }

  return (
    <div className="my-center">
      <Card className={classes.card} style={{ background: '#2E3B55' }}>
        <CardContent>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={onEmailChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={onPasswordChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={event => {
                    setIsHide(true);
                    onSubmitSignIn(event);
                  }}
                >
                  Sign In
                </Button>
              </form>
              {isLoading && <Loading />}
              {!isHide && <div>{MsgError.message}</div>}
            </div>
            <Button
              className={classes.xbutton}
              onClick={event => {
                event.preventDefault();
                setIsFormModalOpen('none');
              }}
            >
              X
            </Button>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
