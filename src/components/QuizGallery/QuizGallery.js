import React from 'react';
import { useDispatch } from 'react-redux';
import { currentQuiz } from '../../store/actions/quizActions';
import { NavLink } from 'react-router-dom';

export default function QuizGaller({header, logo, id}) {

	const dispatch = useDispatch();
	
	const handleClick = () => {
        dispatch(currentQuiz(id))
	}

	return (
		<div onClick={handleClick}>
		<NavLink exact to={process.env.PUBLIC_URL + `/quiz/`} >
		<article className="mw5 center bg-purple br3 pa3 pa4-ns mv3 ba b--black-10">
         <div className="tc">
           <img src={logo} className="br-100 h4 w4 dib ba b--black-05 pa2" title={header} />
           <h1 className="f3 mb2">{header}</h1>
         </div>
       </article>
       </NavLink>
       </div>)
}