import MyHeader from "../Components/MyHeader";
import List from "../Components/List";
import {useSelector} from "react-redux";
import InputContainer from "../Components/InputContainer";
import {useRef} from "react";

const Home = () => {
  const todos = useSelector(state => (state.todos.todos))
  return (
    <div className={"home"}>
      <MyHeader center={"My Todo List"} right={'React'}/>
      <InputContainer />
      <section className="listBox">
        <div className="listWrapper">
          <h2>Working.. 🔥</h2>
          <div className="list">
            <ol>
              {todos.map((todo)=> (
                todo.isDone===false ? <List key={todo.id} {...todo} />
                  :null
              ))}
            </ol>
          </div>
        </div>
        <div className="listWrapper">
          <h2>Done..! 🎉</h2>
          <div className="list">
            <ol>
              {todos.map((todo)=> (
                todo.isDone===true ? <List key={todo.id} {...todo} />
                  :null
              ))}
            </ol>
          </div>
        </div>
      </section>

    </div>
  )
}
export default Home