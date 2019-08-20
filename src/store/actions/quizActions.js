export const createQuiz = quiz => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('quizzes').add({
			quiz,
			created: new Date()
		}).then(() => {
				dispatch (
		        {type: 'ADD_QUIZ', quiz} )
		}).catch(err => {
			dispatch({ type: 'ADD_QUIZ_ERR', err})
		})
	}
}

export const loadFB = data => {
	return (dispatch, getState) => {
		try { dispatch ({
			type: 'FB_LOADED', data
		})
	} catch(err) { dispatch({ type: 'FB_LOADED_ERR', err})
      }
  }
}

export const currentQuiz = id => {
	return (dispatch, getState) => {
		try {
			dispatch({
				type: 'ID_ADDED', id
			})
		} catch(err) { dispatch({try: 'ID_ADDED_ERR', err})}
	}
}