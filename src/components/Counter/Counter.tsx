import Button from "components/Button"

import { CounterWrapper, Count } from "./styles"

function Counter() {
  
  return (
    <CounterWrapper>
      <Button name="-" onClick={() => {}} />
      <Count>0</Count>
      <Button name="+" onClick={() => {}} />
    </CounterWrapper>
  )
}

export default Counter
