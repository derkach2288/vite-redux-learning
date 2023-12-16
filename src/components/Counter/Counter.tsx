// import { useState } from "react"

import {useDispatch, useSelector} from "react-redux"
import {actions} from "store/redux/counter/counterSlice"
import {counterState} from "store/redux/counter/selectors"

import Button from "components/Button"

import { CounterWrapper, Count } from "./styles"

function Counter() {
  // Способ работы через UseState:
  // const [count, setCount] = useState<number>(0)
  // const onPlus = () => {
  //   setCount((prevValue: number) => prevValue + 1)
  //   // setCount((prevValue: number) => parseFloat((prevValue + 1).toFixed(2)))
  // }

  // const onMinus = () => {
  //   setCount((prevValue: number) => prevValue - 1)
  // }

  // const onMultiply = () => {
  //   setCount((prevValue: number) => prevValue * 2)
  // }

  // const onDivide = () => {
  //   // setCount((prevValue: number) => Math.round((prevValue / 2) * 100) / 100 )
  //   // setCount((prevValue: number) => parseFloat((prevValue / 2).toFixed(2)))
  //   setCount((prevValue: number) => prevValue / 2)
  // }

  // Создаем функцию dispatch - эта функция вызывает action, который скажет стору
  // какой редюсер вызвать
  const dispatch = useDispatch();
  const counter = useSelector(counterState);
  console.log(counter);

  // диспачим экшин под именем add
  const onPlus = () => {
    dispatch(actions.add())
  }

  const onMinus = () => {
    dispatch(actions.minus())
  }

  const onMultuply = () => {
    dispatch(actions.multiply(3))
  }

  const onDivide = () => {
    dispatch(actions.divide())
  }



  return (
    <CounterWrapper>
      <Button name="divide" onClick={onDivide} />
      <Button name="minus" onClick={onMinus} />
      <Count>{Number(counter.count.toFixed(2))}</Count>
      <Button name="plus" onClick={onPlus} />
      <Button name="multiply" onClick={onMultuply} />

      {/* <Button name="divide" onClick={onDivide} />
      <Button name="minus" onClick={onMinus} />
      <Count>{Number(count.toFixed(2))}</Count>
      <Button name="plus" onClick={onPlus} />
      <Button name="multiply" onClick={onMultiply} /> */}
    </CounterWrapper>
  )
}

export default Counter
