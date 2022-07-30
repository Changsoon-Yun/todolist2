import './App.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNumber, minusNumber} from "./redux/modules/counter";

function App() {
  const dispatch = useDispatch()
  const [number,setNumber] = useState(0)
  const globalNumber = useSelector((state)=>state.counter.number)

  const onChangeHandler = (e) => {
    const {value} = e.target
    setNumber(+value)
  }

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number))
  }
  const onClickMinisNumberHandler = () => {
    dispatch(minusNumber(number))
  }
  return (
    <div className="App">
      <div>{globalNumber}</div>
      <input name={"inputs"} type="number" onChange={(e)=>onChangeHandler(e)}/>
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinisNumberHandler}>빼기</button>
    </div>
  );
}

export default App;
