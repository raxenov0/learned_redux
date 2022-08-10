import { loadUsers } from "../store/customerReducer"

export function fetchRequest(){
    return function(dispatch){
      fetch('https://jsonplaceholder.typicode.com/users')
                  .then(response => response.json())
                  .then(json => dispatch(loadUsers(json)))
    }
  }