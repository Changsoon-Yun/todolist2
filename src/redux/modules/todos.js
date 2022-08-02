//Action Value
import {useRef} from "react";

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
  uid:3,
  todos: [{
    id: 1,
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    date:  "2022-07-30",
    isDone: false
  },
    {
      id: 2,
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
      return {
        uid:state.uid+1,
        todos: [action.payload, ...state.todos],
      }
    case "DELETE_TODO":
      const new_todo_list = state.todos.filter((todo)=> {
        return action.payload.id !== todo.id
      })
      return {todos: new_todo_list,uid:state.uid}

    case "TOGGLE_TODO":
      const new_todo_list2 = state.todos.map((todo)=> {
        return todo.id === action.payload.id ? {...todo, isDone: !todo.isDone}: todo
      })
      console.log(state.todos)
      return {todos: new_todo_list2,uid:state.uid}
    default:
      return state;
  }
};



export default todos