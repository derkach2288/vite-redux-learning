import { useState } from "react"
import Button from "components/Button"

import { CounterWrapper, Count } from "./styles"

function Counter() {
  const [count, setCount] = useState<number>(0)

  const onPlus = () => {
    setCount((prevValue: number) => prevValue + 1)
    // setCount((prevValue: number) => parseFloat((prevValue + 1).toFixed(2)))
  }

  const onMinus = () => {
    setCount((prevValue: number) => prevValue - 1)
  }

  const onMultiply = () => {
    setCount((prevValue: number) => prevValue * 2)
  }

  const onDivide = () => {
    // setCount((prevValue: number) => Math.round((prevValue / 2) * 100) / 100 )
    // setCount((prevValue: number) => parseFloat((prevValue / 2).toFixed(2)))
    setCount((prevValue: number) => prevValue / 2)
  }

  return (
    <CounterWrapper>
      <Button name="divide" onClick={onDivide} />
      <Button name="minus" onClick={onMinus} />
      <Count>{Number(count.toFixed(2))}</Count>
      <Button name="plus" onClick={onPlus} />
      <Button name="multiply" onClick={onMultiply} />
    </CounterWrapper>
  )
}

export default Counter
