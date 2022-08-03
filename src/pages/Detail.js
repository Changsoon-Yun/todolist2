import React, {useEffect, useState} from "react";
import MyHeader from "../Components/MyHeader";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import styled from "styled-components";

const Detail = () => {
  const {id} =useParams()
  const navigate = useNavigate()
  const todos = useSelector(state => (state.todos.todos))
  const [data, setData] = useState()
  useEffect(()=> {//공부하셈
    if(todos.length >= 1) {
      const targetTodo = todos.find((todo)=> parseInt(todo.id) === parseInt(id))
      if(targetTodo) {
        setData(targetTodo)
      }else {
        alert('없는 페이지 입니다.')
        navigate("/", {replace:true})
      }
    }
  },[id, todos])
  if(!data) {
    return (
      <DetailWrapper>
        로딩중입니다
      </DetailWrapper>
    )
    } else {
    return (
      <DetailWrapper>
        <MyHeader left={<p onClick={() => navigate(-1)}>돌아가기</p>}
                  center={"My Todo List Detail"}
                  right={`ID: ${data.id}`}/>
        <Content>
          <Date>{data.date}</Date>
          <Title>{data.title}</Title>
          <Body>{data.body}</Body>
        </Content>
      </DetailWrapper>
    )
  }
}

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Content = styled.div`
  flex: 1;
  padding: 20px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Date = styled.p`
  font-size: 12px;
  color: #6c6c6c;
  font-weight: normal;
`

const Title = styled.h3`
  font-size: 25px;
`

const Body = styled.p`
  margin: 20px 0;
`
export default Detail