import React from "react";
import MyHeader from "../Components/MyHeader";
import {useNavigate} from "react-router-dom";

const Detail = ()=> {
  const navigate = useNavigate()
  return (
    <div className={"Detail"}>
      <MyHeader
        left={<p onClick={()=> navigate(-1)}>돌아가기</p>}
        center={"My Todo List Detail"}
        right={"ID: 1"} />
      <div className="content">
        <p className={'listDate'}>2022-07-31</p>
        <h3>리액트</h3>
        <p className={"contentText"}>리액트를 배워봅시다</p>
      </div>
    </div>
  )
}
export default Detail