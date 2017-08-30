import axios from 'axios';
import { browserHistory} from 'react-router';
import { AUTH_USER, AUTH_ERROR,CLEAN_MSG,TODO_LIST, TODO_ADD } from './types';

const ROOT_URL  = "https://jsonplaceholder.typicode.com";

export function loginUser(username) {
  return function(dispatch) {
      axios.get(`${ROOT_URL}/users`)
        .then(response => {      
          response.data.forEach(user=>{
             if(user.username==username) {
                dispatch({type: AUTH_USER, payload:{name: user.name, id: user.id}});   
                browserHistory.push('/to_dos');           
             }
          });
          dispatch(Error("Username does not exist!"));
        })
        .catch(response =>{            
          dispatch(Error("Login Failed!"))
        });
  }
}

export function retrieveTodos(userId) {
  return function(dispatch) {
      axios.get(`${ROOT_URL}/todos?userId=${userId}`)
        .then(response=> {
          dispatch({
            type   : TODO_LIST,
            payload: response.data.map(todo=>{
                      return {id: todo.id, title: todo.title, completed: todo.completed}
                    })
            })
        })
  }
}

export function addTodos(todo) {
	return {
		type: TODO_ADD,
		payload:todo
	}
}

export function Error(error) {
  return {
    type: "AUTH_ERROR",
    payload: error
  }
}



export function cleanMessage() {
  return {
    type: CLEAN_MSG
  }
}





