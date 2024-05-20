export const initialState = {
    email: '',
    password: '',
    responseMessage: '',
    isLoading: false,
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      case 'SET_RESPONSE_MESSAGE':
        return { ...state, responseMessage: action.payload };
      case 'SET_LOADING':
        return { ...state, isLoading: action.payload };
      default:
        return state;
    }
  }
  