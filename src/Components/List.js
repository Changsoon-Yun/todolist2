import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleTodo} from "../redux/modules/todos";

const List = ({id,title, body, isDone, date}) => {
  const dispatch = useDispatch()
  const onToggleHandler = () => {
    dispatch(
      toggleTodo({
        id,
      })
    )
  }
  const onDeleteHandler = ()=> {
    dispatch(
      deleteTodo({
        id
      })
    )
  }
  return (
    <>
      <li>
        <div className="listContent">
          <h3>{title} <span className={'listDate'}>{date}</span></h3>
          <p>{body}</p>
        </div>
        <div className="listBtn">
          <button className={"btn-detail"}>상세보기</button>
          <button onClick={onDeleteHandler} className={"btn-delete"}>삭제하기</button>
          <button className={"btn-complete"}
          onClick={onToggleHandler}>{isDone?"취소하기":"완료하기"}</button>
        </div>
      </li>
    </>
  )

}

export default List