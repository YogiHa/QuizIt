import React, {useState} from 'react';

let i = 1;

const ErrorMsg = () => {
	return(
		<span className="err-msg">
		 you must fill all the fields in the form, question, 4 answers and set which one is correct
		 </span>)
}
export default function AddQuestion({testHeader, content, setContent}){
	const [ question, setQuestion ] = useState(null);
	const [ ans1, setAns1 ] = useState(null);
	const [ ans2, setAns2 ] = useState(null);
	const [ ans3, setAns3 ] = useState(null);
	const [ ans4, setAns4 ] = useState(null);
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [isErrorOpen, setIsErrorOpen] = useState(false);

    
    const handleRadio = event => {
    	setCorrectAnswer(event.target.value)
    }

    const handleAddingQuestion = () => {
      setIsErrorOpen(false);
    	if (!correctAnswer || !ans1 || !ans2 || !ans3 || !ans4 || !question) {
    		setIsErrorOpen(true)
      } else {
             setContent( [ ... content ,
              { question: question, answers: [ans1,ans2,ans3,ans4], correct: correctAnswer[3] }
             ]);
             let frm = document.getElementsByName('contact-form')[0];
             frm.reset();
             setQuestion(null);  setAns1(null);  setAns2(null); setAns3(null); setAns4(null); setCorrectAnswer(null);
             i++
     }
    }
    
	return (
		<div className={`my-center ${ testHeader ? null : "line-marigin"}`}>
			<form name="contact-form">
			<section>
			<div>
			<label>{`question ${i}`}</label>
			</div><br/>
				<input type="text" placeholder="question" onChange={e=>{e.preventDefault(); setQuestion(e.target.value)}} />
			</section>
			<section>
			<div className="flex line-marigin">
			  <div className="first-in-row">
				<input type="text" placeholder="ans1" onChange={e=>{e.preventDefault(); setAns1(e.target.value)}} />
			    <input type="radio" value="ans1" checked={correctAnswer === 'ans1'} onChange={handleRadio} />
			  </div>
			  <div>
				<input  type="text" placeholder="ans2" onChange={e=>{e.preventDefault(); setAns2(e.target.value)}} />
			    <input type="radio" value="ans2" checked={correctAnswer === 'ans2'} onChange={handleRadio} />
			  </div>
			 </div>
			<div className="flex line-marigin">
			  <div className="first-in-row">
				<input type="text" placeholder="ans3" onChange={e=>{e.preventDefault(); setAns3(e.target.value)}} />
			    <input type="radio" value="ans3" checked={correctAnswer === 'ans3'} onChange={handleRadio} />
			  </div>
			  <div>
				<input type="text" placeholder="ans4" onChange={e=>{e.preventDefault(); setAns4(e.target.value)}} />
			    <input type="radio" value="ans4" checked={correctAnswer === 'ans4'} onChange={handleRadio} />
			  </div>
			</div>
			{ isErrorOpen && <div> <ErrorMsg /><br/> </div> }
			</section>
			<button className="add-question-button" onClick={e => {e.preventDefault(); handleAddingQuestion()}} > Add Question </button>
			</form>
		</div>
		)
}