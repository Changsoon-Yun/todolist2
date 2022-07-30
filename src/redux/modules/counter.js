// Action Value
const ADD_NUMBER = "ADD_NUMBER"
const MINUS_NUMBER = "MINUS_NUMBER"
// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  }
}

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload
  }
}
// Initial State
const initialState = {
  number:0,
}

//reducer basic shape
const counter = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case ADD_NUMBER:
      return {
        // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// export default reducer
export default counter