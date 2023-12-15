import { useState } from "react"
import Button from "components/Button"

import { CounterWrapper, Count } from "./styles"

function Counter() {
  const [count, setCount] = useState<number>(0)

  const onPlus = () => {
    setCount((prevValue) => prevValue + 1)
    // setCount((prevValue) => parseFloat((prevValue + 1).toFixed(2)))
  }

  const onMinus = () => {
    setCount((prevValue) => prevValue - 1)
  }

  const onMultiply = () => {
    setCount((prevValue) => prevValue * 2)
  }

  const onDivide = () => {
    // setCount((prevValue) => Math.round((prevValue / 2) * 100) / 100 )
    setCount((prevValue) => parseFloat((prevValue / 2).toFixed(2)))
  }

  return (
    <CounterWrapper>
      <Button name="divide" onClick={onDivide} />
      <Button name="-" onClick={onMinus} />
      <Count>{count}</Count>
      <Button name="+" onClick={onPlus} />
      <Button name="multiply" onClick={onMultiply} />
    </CounterWrapper>
  )
}

export default Counter
