import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createTodo} from "../redux/modules/todos";

const InputContainer = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const titleRef = useRef()
  const bodyRef = useRef()
  const dispatch = useDispatch()

  const onSubmitHandler = () => {
    if (title.length < 1) {
      titleRef.current.focus()
      return
    }
    if (body.length < 1) {
      bodyRef.current.focus()
      return
    }
    dispatch(
      createTodo({
        id:Number(new Date()),
        title,
        body,
        isDone: false,
        date:new Date().toLocaleString(),
      }))
    setTitle("")
    setBody("")

  }

  return (
    <section className="inputBox">
      <div className="inputWrapper2">
        <div className={"inputWrapper"}>
          <label>제목</label>
          <input
            ref={titleRef}
            value={title}
            onChange={(e) => (
              setTitle(e.target.value)
            )}
            type="text"/>
        </div>
        <div className={"inputWrapper"}>
          <label>내용</label>
          <textarea
            ref={bodyRef}
            value={body}
            onChange={(e) => (
              setBody(e.target.value)
            )}/>
        </div>
      </div>
      <button onClick={onSubmitHandler}>추가하기</button>
    </section>
  )
}

export default InputContainer