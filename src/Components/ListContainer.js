import List from "./List";
import {useSelector} from "react-redux";
import styled from "styled-components";
import uuid from "react-uuid";

const ListContainer = () => {
  const todos = useSelector(state => (state.todos.todos))
  return (
    <ListBox>
      <div>
        <h2>Working.. 🔥</h2>
        <ListBoxList>
          <ol>
            {todos.map((todo)=> (
              !todo.isDone && <List key={uuid()} {...todo}/>
            ))}
          </ol>
        </ListBoxList>
      </div>
      <div>
        <h2>Done..! 🎉</h2>
        <ListBoxList>
          <ol>
            {todos.map((todo)=> (
              todo.isDone && <List key={uuid()} {...todo}/>
            ))}
          </ol>
        </ListBoxList>
      </div>
    </ListBox>
  )
}

const ListBox = styled.section ``
const ListBoxList = styled.div`
  min-height: 70px;
`

export default ListContainer