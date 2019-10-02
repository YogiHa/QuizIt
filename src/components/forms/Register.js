import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/authActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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

function Register({ setIsFormModalOpen }) {
  const uid = useSelector(state => state.firebase.auth.uid);
  const MsgError = useSelector(state => state.auth.authError);
  const dispatch = useDispatch();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isHide, setIsHide] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (MsgError) {
      setIsLoading(false);
      setIsHide(false);
    }
  }, [MsgError]);

  const onEmailChange = event => {
    setRegisterEmail(event.target.value);
  };

  const onFirstNameChange = event => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = event => {
    setLastName(event.target.value);
  };
  const onPasswordChange = event => {
    setRegisterPassword(event.target.value);
  };

  const onSubmitRegister = event => {
    event.preventDefault();
    setIsLoading(true);
    setIsHide(true);
    dispatch(
      register({
        email: registerEmail,
        password: registerPassword,
        firstName: firstName,
        lastName: lastName
      })
    );
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
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
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
                Register
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={onFirstNameChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      onChange={onLastNameChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={onEmailChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={onPasswordChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={onSubmitRegister}
                >
                  Register
                </Button>
              </form>
            </div>
            {isLoading && <Loading />}
            {!isHide && <div>{MsgError}</div>}
            <Button
              className={classes.xbutton}
              onClick={event => {
                event.preventDefault();
                setIsFormModalOpen('none');
              }}
            >
              X
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
