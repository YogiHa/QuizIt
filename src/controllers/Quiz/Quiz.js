import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../../components/Modal/Modal';
import BeginTestModal from './BeginTestModal';
import QuizPage from './QuizPage'


export default function Quiz(props) {
    let data = null;
    data = useSelector(state=> state);

    const [ isReady, setIsReady] = useState(false);
    
    // useEffect(() => {console.log(data)} , [data]);
    return( 
    	<div>
           {isReady ?
             <Route path={`${props.match.path}/:${data.currentQuiz}`} component={QuizPage} /> 
           : <Modal> <BeginTestModal match={props.match} setIsReady={setIsReady} data={data}/> </Modal> }
        </div>
        )

}