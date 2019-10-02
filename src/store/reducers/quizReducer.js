// export const addQuizReducer = ( state = null , action) => {

// 	switch (action.type) {
// 		case 'ADD_QUIZ':
// 		  return state
// 		default :
// 		  return state

// 	}
// }

export const loadFBReducer = (state = null, action) => {
  switch (action.type) {
    case 'FB_LOADED':
      state = action.data;
      return state;
    case 'FB_LOADED_ERR':
      state = action.err;
      return state;
    default:
      return state;
  }
};

export const currentQuizReducer = (state = null, action) => {
  switch (action.type) {
    case 'ID_ADDED':
      state = action.id;
      return state;
    case 'ID_ADDED_ERR':
      console.log('has been error');
      state = action.err;
      return state;
    default:
      return state;
  }
};
