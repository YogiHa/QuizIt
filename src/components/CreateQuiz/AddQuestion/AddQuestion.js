import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Radio,
  Paper,
  Button,
  Grid,
  Typography,
  TextField
} from '@material-ui/core/';

let i = 1;

const ErrorMsg = () => {
  return (
    <span className="err-msg">
      you must fill all the fields in the form, question, 4 answers and set
      which one is correct
    </span>
  );
};

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

export default function AddQuestion({
  newTest,
  setNewTest,
  testHeader,
  content,
  setContent
}) {
  const classes = useStyles();
  const [question, setQuestion] = useState(null);
  const [ans1, setAns1] = useState(null);
  const [ans2, setAns2] = useState(null);
  const [ans3, setAns3] = useState(null);
  const [ans4, setAns4] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  if (newTest) {
    i = 1;
    setNewTest(null);
  }
  const handleRadio = event => {
    setCorrectAnswer(event.target.value);
  };

  const handleAddingQuestion = () => {
    setIsErrorOpen(false);
    if (!correctAnswer || !ans1 || !ans2 || !ans3 || !ans4 || !question) {
      setIsErrorOpen(true);
    } else {
      setContent([
        ...content,
        {
          question: question,
          answers: [ans1, ans2, ans3, ans4],
          correct: `answer${correctAnswer}`
        }
      ]);
      let frm = document.getElementsByName('contact-form')[0];
      frm.reset();
      setQuestion(null);
      setAns1(null);
      setAns2(null);
      setAns3(null);
      setAns4(null);
      setCorrectAnswer(null);
      i++;
    }
  };

  return (
    <div className={`my ${testHeader ? null : 'line-marigin'}`}>
      <form name="contact-form" noValidate>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              {`question ${i}`}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="question"
                  name="question"
                  label="Question"
                  fullWidth
                  autoComplete="question"
                  onChange={e => {
                    setQuestion(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="ans1"
                  name="ans1"
                  label="ans1"
                  fullWidth
                  autoComplete="ans1"
                  onChange={e => {
                    setAns1(e.target.value);
                  }}
                />
                <Radio
                  checked={correctAnswer === '1'}
                  onChange={handleRadio}
                  value="1"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="ans2"
                  name="ans2"
                  label="ans2"
                  fullWidth
                  autoComplete="ans2"
                  onChange={e => {
                    setAns2(e.target.value);
                  }}
                />
                <Radio
                  checked={correctAnswer === '2'}
                  onChange={handleRadio}
                  value="2"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="ans3"
                  name="ans3"
                  label="ans3"
                  fullWidth
                  autoComplete="ans3"
                  onChange={e => {
                    setAns3(e.target.value);
                  }}
                />
                <Radio
                  checked={correctAnswer === '3'}
                  onChange={handleRadio}
                  value="3"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="ans4"
                  name="4"
                  label="ans4"
                  fullWidth
                  autoComplete="ans4"
                  onChange={e => {
                    setAns4(e.target.value);
                  }}
                />
                <Radio
                  checked={correctAnswer === '4'}
                  onChange={handleRadio}
                  value="4"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={e => {
                e.preventDefault();
                handleAddingQuestion();
              }}
            >
              add-question
            </Button>
            <br />

            {isErrorOpen && <ErrorMsg />}
          </Paper>
        </main>
      </form>
    </div>
  );
}
