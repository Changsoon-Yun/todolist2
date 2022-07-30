//Action Value
const CREATE_TODO = "CREATE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO"
const DELETE_TODO = "DELETE_TODO"

// Action Creator
export const createTodo = (payload) => {
  return {type: CREATE_TODO, payload};
};

export const toggleTodo = (payload) => {
  return {type: TOGGLE_TODO, payload}
}

export const deleteTodo = (payload) => {
  return {type: DELETE_TODO, payload}
}

//Initial State
const initialState = {
  todos: [{
    id: 1659081265025,
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    date:  "2022-07-30",
    isDone: false
  },
    {
      id: 1659081265026,
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      date: "2022-07-30",
      isDone: true
    }
  ]
}


// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      console.log(state.todos)
      return {
        ...state, todos: [action.payload, ...state.todos]
      }
    case "DELETE_TODO":
      const new_todo_list = state.todos.filter((todo)=> {
        return action.payload.id !== todo.id
      })
      return {todos: new_todo_list}

    case "TOGGLE_TODO":
      const new_todo_list2 = state.todos.map((todo)=> {
        return todo.id === action.payload.id ? {...todo, isDone: !todo.isDone}: todo
      })
      console.log(state.todos)
      return {todos: new_todo_list2}
    default:
      return state;
  }
};



export default todos