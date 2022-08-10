const defaultState = {
  users:[]
}

export const Reducer = (state = defaultState, action) => {
  switch (action.type){
    case "ADD_USER":
      return {...state, users:[...state.users,action.payload]}
    
    case "REMOVE_USER":
      return {...state, users:state.users.filter(e=>e.name !== action.payload)}

    case "LOAD_USERS":
      return {...state, users:[...state.users, ...action.payload]}

    default:
       return state
  }
}

export const addUser = (payload) => ({type:"ADD_USER", payload})
export const removeUser = (payload) => ({type:"REMOVE_USER", payload})
export const loadUsers = (payload) => ({type:"LOAD_USERS", payload})