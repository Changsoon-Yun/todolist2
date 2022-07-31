import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleTodo} from "../redux/modules/todos";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const List = ({id, title, body, isDone, date}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onToggleHandler = () => {
    dispatch(
      toggleTodo({
        id,
      })
    )
  }
  const onDeleteHandler = () => {
    dispatch(
      deleteTodo({
        id
      })
    )
  }
  const goDetail = () => {
    navigate(`/detail/${id}`)
  }
  return (
    <>
      <ListContainer>
        <ListContent onClick={goDetail}>
          <Title>{title} <ListDate>{date}</ListDate></Title>
          <Body>{body}</Body>
        </ListContent>
        <ListBtnBox>
          <ListBtn onClick={goDetail} color={"purple"}>상세보기</ListBtn>
          <ListBtn onClick={onDeleteHandler} color={"red"}>삭제하기</ListBtn>
          <ListBtn
            onClick={onToggleHandler} color={"green"}>{isDone ? "취소하기" : "완료하기"}</ListBtn>
        </ListBtnBox>
      </ListContainer>
    </>
  )

}

const ListContainer = styled.li`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  position: relative;
`

const Title = styled.h3`
  padding-bottom: 10px;
`

const Body = styled.p``

const ListDate = styled.span`
  font-size: 12px;
  color: #6c6c6c;
  font-weight: normal;
`

const ListContent = styled.div`
  padding: 20px;
  flex: 1;
  cursor: pointer;
`

const ListBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`

const ListBtn = styled.button`
  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  margin: 5px;
  color: ${props =>
          props.color === "purple" ? "purple"
                  : props.color === "red" ? "red"
                          : props.color === "green" ? "green" : null};

  &:hover {
    background-color: ${props =>
            props.color === "purple" ? "purple"
                    : props.color === "red" ? "red"
                            : props.color === "green" ? "green" : null};
    color: white;
  }
`

export default List