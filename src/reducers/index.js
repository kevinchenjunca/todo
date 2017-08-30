import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';
import taskReducer from './reducer';
import errorReducer from './error_reducer';


const rootReducer = combineReducers({
  form,
  auth:  errorReducer,
  tasks: taskReducer
});

export default rootReducer;
