const initialState = {
  counter: 0,
  results: []
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREMENT' :
    return {
      ...state,
      counter: state.counter + 1
    }
    case 'DECREMENT' :
    return {
      ...state,
      counter: state.counter - 1
    }
    case 'ADD' :
    return {
      ...state,
      counter: state.counter + action.value
    }
    case 'SUBTRACT' :
    return {
      ...state,
      counter: state.counter - action.value
    }

    case 'SHOW_RESULT' :
    return {
      ...state,
      results: state.results.concat({id: Date.now(), value: state.counter})
    }
    case 'DELETE_RESULT' :
    return {
      ...state,
      results: state.results.splice(action.id, 1)
    }
  }
  return state;
}
// reducer is a function with two arguments; state and action
// the reducer/function updates the state for a given action(type)

export default reducer;

// dus reducer is eigenlijk je geupdate state,
// die je dan stuurt naar je store; je store heeft zo altijd
// de nodige application state die nodig is voor het renderen van je app
