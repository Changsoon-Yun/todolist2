import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createTodo} from "../redux/modules/todos";
import styled from "styled-components";

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
        id: Number(new Date()),
        title,
        body,
        isDone: false,
        date: new Date().toLocaleDateString(),
      }))
    setTitle("")
    setBody("")
  }

  return (
    <InputSection>
      <div>
        <InputWrapper>
          <label>제목</label>
          <input
            ref={titleRef}
            value={title}
            onChange={(e) => (
              setTitle(e.target.value)
            )}
            type="text"/>
        </InputWrapper>
        <InputWrapper>
          <label>내용</label>
          <textarea
            ref={bodyRef}
            value={body}
            onChange={(e) => (
              setBody(e.target.value)
            )}/>
        </InputWrapper>
      </div>
      <button onClick={onSubmitHandler}>추가하기</button>
    </InputSection>
  )
}

const InputSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #e2e2e2;

  & > button {
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    padding: 5px;
    height: 80px;
    margin-left: 10px;
    margin-bottom: 10px;
    align-self: end;

    &:active {
      background-color: black;
      color: white;
    }
  }
`

const InputWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  & input {
    width: 300px;
    height: 30px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    margin-left: 10px;
    padding: 0 10px;
  }

  & textarea {
    width: 300px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    margin-left: 10px;
    padding: 10px;
    resize: vertical;
  }
`

export default InputContainer