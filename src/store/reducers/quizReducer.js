

export const addQuizReducer = ( state = null , action) => {

	switch (action.type) {
		case 'ADD_QUIZ': 
		  return state
		default :
		  return state

	}
}

export const loadFBReducer = ( state = null, action) => {
	switch (action.type) {
		case 'FB_LOADED' :
		  state = action.data
		  return state
		default :
		  return state
	}
}

export const currentQuizReducer = ( state = null, action) => {
	switch (action.type) {
		case 'ID_ADDED' :
		  state = action.id
		  return state
		default :
		  return state
	}
}