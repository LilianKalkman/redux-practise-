const initialState = {
  counter: 0
}
const reducer = (state = initialState, action) => {
  if(action.type === 'INCREMENT'){
    return {
      ...state,
      counter: state.counter + 1
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
