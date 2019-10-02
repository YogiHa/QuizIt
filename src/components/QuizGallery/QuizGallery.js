import React from 'react';
import { useDispatch } from 'react-redux';
import { currentQuiz } from '../../store/actions/quizActions';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function QuizGaller({ header, logo, id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(currentQuiz(id));
  };

  const useStyles = makeStyles({
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  });

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={logo} title={header} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {header}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            ></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions onClick={handleClick}>
          <NavLink exact to={process.env.PUBLIC_URL + '/quiz'}>
            <Button size="small" color="primary">
              compete the clock
            </Button>
          </NavLink>
          <Button size="small" color="primary">
            challenge a friend
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
