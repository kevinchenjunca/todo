import { AUTH_ERROR, CLEAN_MSG} from '../actions/types';

export default function(state={}, action) {

  switch(action.type) {
    case AUTH_ERROR:{
      return { ...state,  error: action.payload };     
    }
    case CLEAN_MSG:
      {
        delete state.error;
        return state;
      }
  };
  return state;

}