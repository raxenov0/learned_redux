const defaultState = {
    cash:5
}


export const CashReducer = (state = defaultState, action) => {
    switch (action.type){
      case "ADD_CASH":
        return {...state, cash : state.cash + action.payload };
      
      case "GET_CASH":
        return {...state, cash : state.cash - action.payload }
  
      default: 
        return state
    }
  }

export const addCash = (payload) => ({type:"ADD_CASH", payload})
export const getCash = (payload) => ({type:"GET_CASH", payload})