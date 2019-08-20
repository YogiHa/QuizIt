import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { createQuiz } from '../../store/actions/quizActions';
import AddQuestion from './AddQuestion';
import Modal from '../Modal/Modal';
import FirstStep from './FirstStep'

export default function CreateQuiz({ setIsOpen }) {
	const dispatch = useDispatch();
	const [ newTest, setNewTest ] = useState(null);
	const [ testHeader, setTestHeader ] = useState(null);
  const [ testImage, setTestImage] = useState('https://firebasestorage.googleapis.com/v0/b/qazoot.appspot.com/o/FirstTestImage.png?alt=media&token=6529c6f9-0cd3-4d56-bee7-c91878100d12');
	const [ content, setContent ] = useState([]);
  const [ isFirstStepOpen, setIsFirstStepOpen] = useState(true);
    
    useEffect(()=>{
    	if (newTest){
    	dispatch(createQuiz(newTest))
      setIsOpen(false)
      }
    } , [newTest])

    const  handleSubmit = () => {
    	setNewTest({header: testHeader , content: content, logo: testImage});
    }

	return(
		<div>
          { isFirstStepOpen &&
                  <Modal>
                  <FirstStep testHeader={testHeader} setTestHeader={setTestHeader} setIsFirstStepOpen={setIsFirstStepOpen} testImage={testImage} setTestImage={setTestImage} />
                  </Modal>
              }
     <h1> { testHeader } </h1>
		 <AddQuestion testHeader={testHeader} content={content} setContent={setContent} /> <br/><br/>
     <input type="submit" onClick={handleSubmit} />
     	</div>
		)
}




