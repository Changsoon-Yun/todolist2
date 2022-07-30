import React, {useEffect, useState} from "react";
import MyHeader from "../Components/MyHeader";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Detail = () => {
  const {id} =useParams()
  const navigate = useNavigate()
  const todos = useSelector(state => (state.todos.todos))
  const [data, setData] = useState()
  useEffect(()=> {
    if(todos.length >= 1) {
      const targetTodo = todos.find((todo)=> parseInt(todo.id) === parseInt(id))
      console.log(targetTodo)
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
      <div className="Detail">
        로딩중입니다
      </div>
    )
    } else {
    return (
      <div className={"Detail"}>
        <MyHeader left={<p onClick={() => navigate(-1)}>돌아가기</p>}
                  center={"My Todo List Detail"}
                  right={`ID: ${data.id}`}/>
        <div className="content">
          <p className={'listDate'}>{data.date}</p>
          <h3>{data.title}</h3>
          <p className={"contentText"}>{data.body}</p>
        </div>
      </div>
    )
  }
  console.log(data.date)

}
export default Detail