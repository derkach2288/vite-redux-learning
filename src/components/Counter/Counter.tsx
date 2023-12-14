import { useState } from "react"
import Button from "components/Button"

import { CounterWrapper, Count } from "./styles"

function Counter() {
  const [count, setCount] = useState<number>(0)

  const onPlus = () => {
    setCount((prevValue) => prevValue + 1)
  }

  const onMinus = () => {
    setCount((prevValue) => prevValue - 1)
  }

  return (
    <CounterWrapper>
      <Button name="-" onClick={onMinus} />
      <Count>{count}</Count>
      <Button name="+" onClick={onPlus} />
    </CounterWrapper>
  )
}

export default Counter
