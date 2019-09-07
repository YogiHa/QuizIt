const initialState = {
  authError: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_WITH_CREDENTIALS':
      return {
        ...state,
        authError: null
      };
    case 'LOGIN_WITH_CREDENTIALS_ERR':
      return {
        ...state,
        authError: action.err
      };

    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;

    case 'REGISTER_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null
      };

    case 'REGISTER_ERROR':
      console.log(action.err.message);
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};
