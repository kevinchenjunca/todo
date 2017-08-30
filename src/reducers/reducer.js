import { AUTH_USER, TODO_LIST, TODO_ADD  } from '../actions/types';

export default function(state={}, action) {

  switch(action.type) {
    case AUTH_USER:
      return { ...state, auth: {name: action.payload.name, id: action.payload.id}, authenticated: true};
    case TODO_LIST:
       {
          let todo = action.payload.map(todo=>{
                if (!todo.completed) {
                  return {key: todo.id, title: todo.title};
                }
              }).filter(function(todo){
                if (todo) {
                  return true;
                } else {
                  return false;
                }
              })
          let completed = action.payload.map(todo=>{
                if (todo.completed) {
                  return {key: todo.id, title: todo.title};
                }
              }).filter(function(todo){
                if (todo) {
                  return true;
                } else {
                  return false;
                }
              })
          
          return { ...state, todo: todo, completed: completed}
       }
    case TODO_ADD:
       {
          return { ...state,  todo: action.payload};
       } 
  };
  return state;

}
