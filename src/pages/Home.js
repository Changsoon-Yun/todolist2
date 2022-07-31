import MyHeader from "../Components/MyHeader";
import List from "../Components/List";
import {useSelector} from "react-redux";
import InputContainer from "../Components/InputContainer";
import styled from "styled-components";
import ListContainer from "../Components/ListContainer";

const Home = () => {

  return (
    <>
      <MyHeader center={"My Todo List"} right={'React'}/>
      <InputContainer />
      <ListContainer />
    </>
  )
}
export default Home