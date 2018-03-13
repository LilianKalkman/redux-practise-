const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SHOW_RESULT' :
    return {
      ...state,
      results: state.results.concat({id: Date.now(), value: action.result})
    }
    case 'DELETE_RESULT' :
    const newArr = state.results.filter(el => el.id !== action.id)
    return {
      ...state,
      results: newArr
    }
  }
  return state;
}

export default resultReducer;
